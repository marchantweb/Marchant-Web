<template>
  <section ref="container" :class="elementClasses" :style="elementStyle">

    <!-- Video -->
    <video class="portfolio-cover__video mouse-lg" loop="true" muted autoplay>
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
  total: {
    type: Number,
    required: true
  },
  offset: {
    type: Number,
    required: true,
    default: 0
  }
});

const container = ref(null);
const {width, height} = useElementSize(container);
const screen = useWindowSize();

/**
 * Determines the shape function to draw the cover, assuming we're within a portfolio slider.
 * @type {ComputedRef<{x, y: number}>}
 */
const position = computed(() => {

  return {
    x: Math.round(0),
    y: Math.round(screen.height.value - height.value - 60)
  };
});

/**
 * Determine the inline styles to apply to the element
 * @type {ComputedRef<{transform: string, top: number, left: number, position: string, transition: string}>}
 */
const elementStyle = computed(() => {
  return {
    //position: 'absolute',
    //top: 0,
    //left: 0,
    //'transform': "translate(" + (position.value.x) + "px, " + position.value.y + "px)",
  }
});

/**
 * Determine the CSS classes to apply to the element
 * @type {ComputedRef<{"portfolio-cover": boolean, "portfolio-cover--active"}>}
 */
const elementClasses = computed(() => {
  return {
    'portfolio-cover': true
  }
});

</script>

<style lang="scss" scoped>

.portfolio-cover {
  //position: absolute;
  width: 100%;
  transition: width 0.5s cubic-bezier(0.85, 0, 0.15, 1);

  .title-bar {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .tech-stack {
    flex-wrap: nowrap;
  }

  &.portfolio-cover--active {
    //
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
  box-shadow: #120e26 0 20px 50px -10px;
  border-radius: 5px;
  object-position: top center;
  transition: transform 1s ease;
  cursor: pointer;
}

.page-enter-from,
.page-leave-to {
  .portfolio-cover__video {
    transform: scale(0.7);
  }
}

</style>
