<template>
  <section class="portfolio-cover">

    <!-- Video -->
    <NuxtLink :to="'/portfolio/' + currentPortfolioItem['slug']">
      <div class="portfolio-cover__video-container">
        <video :style="elementStyle" class="portfolio-cover__video mouse-md" loop="true" muted autoplay :src="currentPortfolioItem['video']">
          <source
              :src="currentPortfolioItem['video']"
              type="video/mp4">
        </video>
      </div>
    </NuxtLink>

  </section>
</template>

<script setup>

import {useMouse, useWindowSize} from "@vueuse/core";

const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  }
});

const currentPortfolioItem = toRef(props, 'portfolioItem');

const container = ref(null);
const {width, height} = useWindowSize();
const {x, y} = useMouse();
const parallaxOffset = 30;

/**
 * Determine the inline styles to apply to the element
 */
const elementStyle = computed(() => {
  return {
    'transform': `translate(${(((1 / width.value) * x.value) * parallaxOffset * -1)}px, ${(((1 / height.value) * y.value) * parallaxOffset * -1)}px)`,
  }
});

</script>

<style lang="scss" scoped>

.portfolio-cover{
  position: relative;
  width: 100%;
  height: 100%;

  &:nth-child(3n+1) {
    grid-row-end: span 2;
    grid-column-end: span 4;
  }

  &:nth-child(5n+2) {
    grid-row-end: span 2;
    grid-column-end: span 1;
  }

  &:nth-child(5n+1) {
    grid-row-end: span 1;
    grid-column-end: span 2;
  }

  &:first-child {
    grid-row-end: span 2;
    grid-column-end: span 4;
  }
}

.portfolio-cover__video-container {
  width: 100%;
  height: 100%;
  box-shadow: #120e26 0 20px 50px -10px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.portfolio-cover__video {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
}

</style>
