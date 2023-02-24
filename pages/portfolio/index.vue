<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl pt-4 pt-lg-6">
      <div class="row justify-content-between">
        <div class="col-auto d-flex flex-row align-items-center">

          <!-- Back to Home -->
          <NuxtLink class="back-link mouse-md" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Home
          </NuxtLink>

          <PortfolioScrubber class="ms-6 d-none d-xxl-flex" :portfolioData="portfolioData" :selected="selected"
                             @updateSelected="updateSelected"/>

        </div>
        <div class="col-auto position-relative">
          <!-- Pagination Controls -->
          <div class="pagination pe-5 pe-xl-6 d-none d-lg-flex" v-if="portfolioData">
            <i class="fa-sharp fa-regular fa-arrow-left-long fa-3x pagination--prev mouse-md"
               @click.prevent="paginatePrev" :class="{'disabled': selected === 0}"></i>
            <i class="fa-sharp fa-regular fa-arrow-right-long fa-3x pagination--next mouse-md"
               @click.prevent="paginateNext" :class="{'disabled': selected === portfolioData.length - 1}"></i>
          </div>
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

        <div class="feed-section__extraElement"/>

        <div class="feed-section__container-padding"/>


      </div>
    </div>


    <div id="bottom-bar" class="container-xxxl">
      <BottomBar/>
    </div>

    <PortfolioScrubber class="portfolio-links--mobile d-flex d-lg-none" :portfolioData="portfolioData"
                       :selected="selected" @updateSelected="updateSelected"/>

  </section>
</template>

<script setup>

import {useEventListener, useWindowSize} from "@vueuse/core";
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

const {width, height} = useWindowSize();
const portfolioItemWidth = computed(() => {
  if (width.value > 1680) {
    return 1040;
  }
  if (width.value > 1400) {
    return 960;
  }
  if (width.value > 1200) {
    return 800;
  }
  if (width.value > 992) {
    return 700;
  }
  return width.value - 60;
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
    x: portfolioItemWidth.value * selected.value * -1,
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
  let selectedIndex = Math.floor(Math.abs((this.endX) / portfolioItemWidth.value));
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

/**
 * Handle wheel events as portfolio scrolling, but push back against touchpads
 * @param event
 */
const wheelHandler = (event) => {
  const isTouchPad = event["wheelDeltaY"] ? event["wheelDeltaY"] === -3 * event.deltaY : event.deltaMode === 0;
  if (!isTouchPad) {
    let newSelected = selected.value;
    if (event.deltaY > 0) {
      newSelected += 1
    } else {
      newSelected -= 1
    }
    updateSelected(newSelected);
  }
}

const paginateNext = () => {
  let newSelected = selected.value + 1;
  updateSelected(newSelected);
}

const paginatePrev = () => {
  let newSelected = selected.value - 1;
  updateSelected(newSelected);
}

onMounted(() => {

  gsap.registerPlugin(Draggable, InertiaPlugin);

  // Wheel Events
  useEventListener(document, 'wheel', wheelHandler);

  // Keyboard Events
  useEventListener(document, 'keyup', (event) => {
    let newSelected = selected.value;
    if (event.key === 'ArrowRight') {
      newSelected += 1
      updateSelected(newSelected);
      return;
    }
    if (event.key === 'ArrowLeft') {
      newSelected -= 1
      updateSelected(newSelected);
      return;
    }
    if (event.key === 'Enter') {
      return navigateTo('/portfolio/' + portfolioData.value[selected.value]["slug"]);
    }
  });

  setupDraggable();

});
onActivated(() => {
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
      offsets.push((i * portfolioItemWidth.value) * -1);
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
        maxX: portfolioItemWidth.value * (portfolioData.value.length - 1) * -1
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

*{
  user-select: none;
  -webkit-user-select: none;
}

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

.feed-section__extraElement {
  width: 1040px;
  height: 10px;
  display: block;
  flex: none;

  @media screen and (max-width: 1680px) {
    width: 960px;
  }

  @media screen and (max-width: 1400px) {
    width: 800px;
  }

  @media screen and (max-width: 1200px) {
    width: 700px;
  }

}

.pagination {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  top: 180px;
  right: 0;
  z-index: 50;
  gap: 60px;

  i {
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;

    &.disabled {
      opacity: 0.2;
      pointer-events: none;
    }

    &.pagination--prev {

      &:hover {
        transform: translateX(-5px);
      }
    }

    &.pagination--next {

      &:hover {
        transform: translateX(5px);
      }
    }
  }
}

</style>
