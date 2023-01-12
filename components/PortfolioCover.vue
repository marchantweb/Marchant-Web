<template>
  <section ref="container" :class="elementClasses" :style="elementStyle">

    <!-- Title & Stack -->
    <div class="row justify-content-between align-items-end mb-4">
      <div class="col">
        <span class="portfolio-cover__type text-small mb-2 d-block">{{ portfolioItem["type"] }}</span>
        <h1 class="portfolio-cover__title">{{ portfolioItem["title"] }}</h1>
      </div>
      <div class="col-4">
        <ul class="tech-stack">
          <li v-for="stackItem in portfolioItem['stack']">{{ stackItem["name"] }}</li>
        </ul>
      </div>
    </div>

    <!-- Video -->
    <video class="portfolio-cover__video" loop="true" muted>
      <source
          :src="portfolioItem['video']"
          type="video/mp4">
    </video>

  </section>
</template>

<script setup>

import {useElementSize, useWindowSize} from "@vueuse/core";

const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

const container = ref(null);
const {width, height} = useElementSize(container);
const screen = useWindowSize();

const percentage = computed(() => {
  return (1 / props.total) * props.index;
});

/**
 * Determines the shape function to draw the cover, assuming we're within a portfolio slider.
 * @type {ComputedRef<{x, y: number}>}
 */
const position = computed(() => {
  return {
    x: Math.round((percentage.value * screen.width.value) - (width.value / 2)),
    y: Math.round(screen.height.value - height.value - 60)
  };
});

const elementStyle = computed(() => {
  return {
    position: 'absolute',
    transition: 'none',
    top: 0,
    left: 0,
    'transform': "translate(" + position.value.x + "px, " + position.value.y + "px)",
  }
});

const elementClasses = computed(() => {
  return {
    'portfolio-cover': true,
    'portfolio-cover--active': (percentage.value > 0.4 && percentage.value < 0.6)
  }
});

</script>

<style lang="scss" scoped>

.portfolio-cover {
  position: absolute;
  height: calc(30vh);
  aspect-ratio: 16 / 9;
  transition: height 0.5s ease-in-out;

  &.portfolio-cover--active{
    height: calc(100vh - 220px);
  }
}

.portfolio-cover__type {
  color: #AFBFD6;
}

.portfolio-cover__title {
  color: white;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
}

.portfolio-cover__video {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  box-shadow: #2c205b 0 20px 20px -10px;
  border-radius: 5px;
  object-position: top center;
  transition: transform 1s ease;
}

.page-enter-from,
.page-leave-to {
  .portfolio-cover__video {
    transform: scale(0.7);
  }
}

</style>
