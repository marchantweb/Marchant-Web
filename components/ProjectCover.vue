<template>
  <section ref="container" :class="elementClasses">

    <!-- Video -->
    <NuxtLink :to="'/portfolio/' + portfolioItem['slug']">
      <div class="portfolio-cover__video-container">
        <video :style="elementStyle" class="portfolio-cover__video mouse-md" loop="true" muted autoplay>
          <source
              :src="portfolioItem['video']"
              type="video/mp4">
        </video>
      </div>
    </NuxtLink>

  </section>
</template>

<script setup>

import {useElementSize, useMouse, useWindowSize} from "@vueuse/core";

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
const {x, y} = useMouse();
const parallaxOffset = 10;

/**
 * Determine the inline styles to apply to the element
 */
const elementStyle = computed(() => {
  return {
    'transform': `translate(${(((1 / width.value) * x.value) * parallaxOffset * -1)}px, ${(((1 / height.value) * y.value) * parallaxOffset * -1)}px)`,
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

.portfolio-cover__video-container {
  width: 100%;
  aspect-ratio: 16/9;
  box-shadow: #120e26 0 20px 50px -10px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.portfolio-cover__video {
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
}

.page-enter-from,
.page-leave-to {
  .portfolio-cover__video {
    transform: scale(0.7);
  }
}

</style>
