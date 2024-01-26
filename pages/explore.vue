<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

onMounted(async () => {
  await nextTick(); // Ensure all DOM elements are rendered

  const cardsContainer = document.querySelector('.cards');
  const cards = gsap.utils.toArray('.card');
  let wrapWidth = document.querySelector('.cards').offsetWidth;

  // Dynamically calculate wrapWidth based on the actual widths of cards
  wrapWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0);

  // Find the width of the widest card
  let widestCardWidth = Math.max(...cards.map(card => card.offsetWidth));

  let position = 0; // Tracking the cumulative position (x offset) of each card
  cards.forEach((card, i) => {
    gsap.set(card, { x: position, left: -widestCardWidth });
    position += card.offsetWidth + 10; // Increment position for the next card, plus 10px for spacing between cards
    wrapWidth += 10; // Add 10px for spacing between cards
  });

  // Creating a draggable proxy element
  const proxy = document.createElement("div");

  // GSAP animation controlled by Draggable
  const animation = gsap.to(cards, {
    x: "+=" + wrapWidth,
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % wrapWidth),
    }
  });

  Draggable.create(proxy, {
    type: "x",
    trigger: cardsContainer,
    inertia: true,
    onThrowComplete: updateAnimation,
    onDrag: updateAnimation,
    onThrowUpdate: updateAnimation,
  });

  const wrapProgress = gsap.utils.wrap(0, 1)
  const props = gsap.getProperty(proxy);

  // Function to update GSAP animation progress based on drag action
  function updateAnimation() {
    animation.progress(wrapProgress((props("x") + widestCardWidth) / wrapWidth));
  }

  updateAnimation();
});

</script>

<template>
  <section class="page">

    <div class="container-fluid pt-4" style="z-index: 2; position: relative;">
      <div class="row">
        <div class="col">

          <!-- Back to Home -->
          <NuxtLink class="back-link mouse-md" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Home
          </NuxtLink>

        </div>
      </div>
    </div>

    <NavMenu/>

    <section id="explore-slider">
      <ul class="cards">
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/800')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/801')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/802')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/803')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/804')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/805')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/806')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/807')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/808')" />
        <li class="card mouse-md" style="background-image:url('https://placekitten.com/809')" />
      </ul>
    </section>

    <div id="bottom-bar" class="container-fluid">
      <BottomBar/>
    </div>

  </section>
</template>

<style scoped lang="scss">

#explore-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate3d(0, 0, 1, 5deg);
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 800px;
  height: 600px;
  background-color: rgb(234, 238, 239);
  background-size: cover;
  background-position: center;
  color: black;
  font-size: 100px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.09) 0 2px 1px, rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px, rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;
  cursor: pointer;
  position: absolute;
  left: 0;

  &:nth-child(4n + 1) {
    width: 350px;
    flex-basis: 350px;
  }

  &:nth-child(4n + 3) {
    width: 350px;
    flex-basis: 350px;
  }
}

</style>
