<template>
  <article role="article" class="project-cover" tabindex="0" :aria-label="currentPortfolioItem['title']" :aria-description="currentPortfolioItem['lead']">

    <!-- Title & Stack -->
    <div class="title-bar row justify-content-between align-items-end mb-4 flex-nowrap">
      <div class="col-auto">
        <h2 class="lead pb-1 pe-3 d-inline-block" style="color: white">{{ displayIndex }}.</h2>
        <div class="d-inline-block">
          <span class="project-cover__type text-small mb-0 d-block">{{ currentPortfolioItem["type"] }}</span>
          <h2 class="project-cover__title">{{ currentPortfolioItem["title"] }}</h2>
        </div>
      </div>
      <div class="col-6">
        <ul class="tech-stack">
          <li v-for="stackItem in currentPortfolioItem['stack']">{{ stackItem["name"] }}</li>
        </ul>
      </div>
    </div>

    <!-- Video -->
    <NuxtLink :to="'/portfolio/' + currentPortfolioItem['slug']">
      <div class="project-cover__video-container">
        <video :style="elementStyle" class="project-cover__video mouse-md" loop="true" muted autoplay :src="currentPortfolioItem['video']">
          <source
              :src="currentPortfolioItem['video']"
              type="video/mp4">
        </video>
      </div>
    </NuxtLink>

  </article>
</template>

<script setup>

import {useMouse, useWindowSize} from "@vueuse/core";

const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

const currentPortfolioItem = toRef(props, 'portfolioItem');

const displayIndex = computed(() => {
  return props.index.toString().padStart(2, '0');
});

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

.project-cover{
  position: relative;
  width: 960px;
  aspect-ratio: 2;
  flex: none;
}

.project-cover__type {
  color: #AFBFD6;
}

.project-cover__title {
  color: white;
}

.project-cover__video-container {
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.project-cover__video {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
}

</style>
