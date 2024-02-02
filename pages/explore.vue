<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Observer);

const portfolioData = await usePortfolio(true);

// TODO: Review on mobile and perhaps make the cards a little smaller - need to handle resize event.

/**
 * The proxy element that Draggable will use to track the drag action
 */
let proxy = null;

/**
 * The animation to be controlled by Draggable
 */
let animation = null;

/**
 * The Observer instance that will be used to track mouse wheel events
 */
let wheelObserver = null;

/**
 * Flag to indicate whether the user is interacting with the slider
 */
let isInteracting = false;

/**
 * The ID of the animation frame that will be used to update the position of the slider
 */
let animationFrameId;

onMounted(async () => {

  // Let's calculate some starting values
  const cardsContainer = document.querySelector('.cards');
  const cards = gsap.utils.toArray('.card');
  let wrapWidth = document.querySelector('.cards').offsetWidth;
  wrapWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);
  let widestCardWidth = Math.max(...cards.map(card => card.offsetWidth));
  let position = 0;

  // Set the initial position of each card in the slider
  cards.forEach((card, i) => {
    gsap.set(card, {x: position, left: -widestCardWidth});
    position += card.offsetWidth + 5; // Add 5px for spacing between cards
    wrapWidth += 5; // Add 5px for spacing between cards
  });

  // Creating a draggable proxy element
  proxy = document.createElement("div");

  // GSAP animation controlled by Draggable
  animation = gsap.to(cards, {
    x: "+=" + wrapWidth,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % wrapWidth),
    }
  });

  // Initialize Draggable
  Draggable.create(proxy, {
    type: "x",
    trigger: cardsContainer,
    inertia: true,
    onPress: () => {
      isInteracting = true;
      cancelAnimationFrame(animationFrameId);
    },
    onRelease: () => {
      isInteracting = false;
      animationFrameId = requestAnimationFrame(updatePosition);
    },
    onThrowComplete: updateAnimation,
    onDrag: updateAnimation,
    onThrowUpdate: updateAnimation,
  });

  // Utility function to wrap items around the slider infinitely
  const wrapProgress = gsap.utils.wrap(0, 1)
  const props = gsap.getProperty(proxy);

  // Function to update GSAP animation progress based on drag action
  function updateAnimation() {
    animation.progress(wrapProgress((props("x") + widestCardWidth) / wrapWidth));
  }

  // Now let's also make it work with mouse wheel
  wheelObserver = Observer.create({
    type: "wheel",
    onWheel: (self) => {
      gsap.to(proxy, {
        x: "+=" + (self.deltaY < 0 ? 1200 : -1200),
        onUpdate: () => updateAnimation(),
        ease: "power1.out",
        duration: 0.5
      });
    },
    onWheelStart: () => {
      isInteracting = true;
      cancelAnimationFrame(animationFrameId);
    },
    onWheelEnd: () => {
      isInteracting = false;
      animationFrameId = requestAnimationFrame(updatePosition);
    },
    preventDefault: true,
  });

  // Lastly, let's get an ambient scrolling motion going on when the user is not interacting with the slider
  const updatePosition = () => {
    if (!isInteracting) { // Only update position if user is not interacting
      const currentX = parseFloat(gsap.getProperty(proxy, "x")) || 0;
      const newX = currentX - (40 / 60);

      gsap.set(proxy, {x: newX % wrapWidth});
      updateAnimation();
    }
    animationFrameId = requestAnimationFrame(updatePosition);
  };
  animationFrameId = requestAnimationFrame(updatePosition);

});

// Commit mass murder
onUnmounted(() => {
  wheelObserver.kill();
  animation.kill();
  Draggable.get(proxy).kill();
  cancelAnimationFrame(animationFrameId);
});

</script>

<template>
  <section class="page" style="overflow: hidden">

    <template v-if="portfolioData">
      <section id="explore-slider">
        <ul class="cards">
          <li class="card" v-for="(portfolioItem, index) in portfolioData">
            <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem"
                          :index="index"/>
          </li>
        </ul>
      </section>
    </template>

  </section>
</template>

<style scoped lang="scss">

.page-leave-active {
  transition: all 0.6s;
}

.page-enter-active {
  transition: none;
}

#explore-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: slider-rotation 12s ease-in-out infinite alternate;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    animation: none;
  }
}

.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  gap: 8px;
}

.card {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
}

@keyframes slider-rotation {
  0% {
    transform: rotate3d(0, 0, 1, -3deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 3deg);
  }
}

</style>
