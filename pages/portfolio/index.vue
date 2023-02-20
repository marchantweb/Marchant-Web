<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl pt-4 pt-lg-6">
      <div class="row">
        <div class="col-auto d-flex flex-row align-items-center">
          <NuxtLink class="back-link mouse-md" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Home
          </NuxtLink>

          <ol class="portfolio-links ms-6 d-none d-xxl-flex" :style="{ '--selector-offset': (5 + (selected * 40)) + 'px' }">
            <li v-for="(portfolioItem, index) in portfolioData"
                :class="{ 'portfolio-links--active': index === selected }"><a href="#" @click.prevent="updateSelected(index)" class="mouse-sm">{{ index }}</a></li>
          </ol>

        </div>
      </div>
    </div>

    <div id="portfolio-feed-container" class="container-fluid mt-5 mt-lg-6 px-0" style="overflow: hidden;">
      <div id="portfolio-feed" class="feed-section" role="feed" aria-busy="false" aria-label="Case Studies"
           v-if="portfolioData">

        <div class="feed-section__container-padding"/>

        <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem"
                      :index="index"
                      v-for="(portfolioItem, index) in portfolioData" :isFocused="index === selected"/>

        <div class="feed-section__extraElement" style="width: 1040px; height: 10px; display: block; flex:none"/>

        <div class="feed-section__container-padding"/>


      </div>
    </div>

    <div id="bottom-bar" class="container-xxxl">
      <BottomBar/>
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";
import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";

const portfolioData = await usePortfolio(true);
const selected = ref(0);

const portfolioScrollPercentage = useState('portfolioScrollPercentage', () => 0);

useHead({
  title: 'Explore Projects | Marchant Web',
  meta: [
    {
      name: 'description',
      content: 'Senior front end engineer with 10+ years building creative websites, interactive experiences and custom web software.'
    }
  ]
});

/**
 * Update the selected project, called by wheel and key events
 * @param selectedIndex
 */
const updateSelected = (selectedIndex) => {
  selectedIndex = selectedIndex < 0 ? 0 : selectedIndex;
  selectedIndex = selectedIndex > portfolioData.value.length - 1 ? portfolioData.value.length - 1 : selectedIndex;
  selected.value = selectedIndex;
  gsap.killTweensOf("#portfolio-feed");
  gsap.to("#portfolio-feed", {
    x: 1040 * selected.value * -1,
    duration: 0.5,
    ease: "power3.out"
  });
  gsap.killTweensOf(portfolioScrollPercentage);
  gsap.to(portfolioScrollPercentage, {
    value: selected.value * (1 / portfolioData.value.length),
    duration: 0.5,
    ease: "power1.out"
  });
}

/**
 * Updates the selected project, called by drag and touch events
 * @param event
 */
const updateDragSelected = function (event) {
  let selectedIndex = Math.floor(Math.abs((this.endX) / 1040));
  selectedIndex = selectedIndex < 0 ? 0 : selectedIndex;
  selectedIndex = selectedIndex > portfolioData.value.length - 1 ? portfolioData.value.length - 1 : selectedIndex;
  selected.value = selectedIndex;
  gsap.killTweensOf(portfolioScrollPercentage);
  gsap.to(portfolioScrollPercentage, {
    value: selected.value * (1 / portfolioData.value.length),
    duration: 2,
    ease: "power1.out"
  });
}

let draggable = null;

onMounted(() => {

  selected.value = 0;
  gsap.registerPlugin(Draggable, InertiaPlugin);

  // Wheel Events
  useEventListener(document, 'wheel', (event) => {
    let newSelected = selected.value;
    if (event.deltaY > 0) {
      newSelected += 1
    } else {
      newSelected -= 1
    }
    updateSelected(newSelected);
  });

  // Keyboard Events
  useEventListener(document, 'keyup', (event) => {
    let newSelected = selected.value;
    if (event.key === 'ArrowRight') {
      newSelected += 1
    }
    if (event.key === 'ArrowLeft') {
      newSelected -= 1
    }
    updateSelected(newSelected);
  });

  setupDraggable();

});
onActivated(() => {
  selected.value = 0;
  setupDraggable();
  setupDraggable();
});
onUnmounted(() => {
  if (draggable) {
    draggable[0].kill();
  }
});

function setupDraggable() {
  if (draggable) {
    return;
  }
  nextTick(() => {
    const offsets = [];
    for (let i = 0; i < portfolioData.value.length; i++) {
      offsets.push((i * 1040) * -1);
    }
    const container = document.querySelector("#portfolio-feed");
    if (!container) {
      setTimeout(() => {
        setupDraggable();
      }, 100);
      return;
    }
    draggable = Draggable.create(container, {
      type: "x",
      edgeResistance: 1,
      snap: offsets,
      inertia: true,
      bounds: {
        minX: 0,
        maxX: 1040 * (portfolioData.value.length - 1) * -1
      },
      //onDrag: updateDragSelected,
      onDragEnd: updateDragSelected,
      //allowNativeTouchScrolling: false,
      zIndexBoost: false
    });
  });
}

</script>

<style lang="scss" scoped>

h1 {
  color: #F2F2F2;
  text-shadow: -1px -1px 0px rgb(54, 201, 227), 1px 1px 0px rgb(255, 0, 106), 0px 4px 10px rgb(0 0 0 / 50%);
  letter-spacing: 2px;
}

.feed-section {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  gap: 0;
  flex-wrap: nowrap;
  width: fit-content;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.page-enter-from {
  opacity: 0;
  filter: blur(10px);
  transform: translateX(10%);
}

ol.portfolio-links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 0;
  gap: 20px;
  position: relative;
  padding: 0;
  margin-top: 6px;

  li {
    font-family: "JetBrains Mono", monospace;
    width: 20px;
    font-size: 14px;
    text-align: center;

    a {
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      border-bottom: none;

      &:before {
        content: "0";
      }
    }

    &:nth-child(n+11) {
      a:before {
        content: "";
      }
    }

    &.portfolio-links--active {
      a {
        color: white;
        font-weight: 700;
      }
    }

  }

  &:after {
    content: '\f0d8';
    display: block;
    color: white;
    font-weight: 700;
    font-family: "Font Awesome 6 Sharp", sans-serif;
    position: absolute;
    font-size: 16px;
    left: 0;
    transform: translateX(var(--selector-offset, 5px));
    transition: transform 0.3s ease;
    top: 20px;
  }
}

</style>
