<template>
  <article role="article" :class="elementClasses" tabindex="0" :aria-label="currentPortfolioItem['title']"
           :aria-description="currentPortfolioItem['lead']">

    <!-- Title & Stack -->
    <div class="title-bar row justify-content-between align-items-end mb-4 flex-nowrap">
      <div class="col-auto">
        <h2 class="lead pb-1 pe-3 d-inline-block" style="color: #F2F2F2">{{ displayIndex }}.</h2>
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
        <video :style="elementStyle" class="project-cover__video mouse-md" loop="true" muted autoplay
               :src="currentPortfolioItem['video']">
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
  },
  isFocused: {
    type: Boolean,
    required: false,
    default: false
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

const elementClasses = computed(() => {
  return {
    'project-cover': true,
    'project-cover--focused': props.isFocused
  }
})

</script>

<style lang="scss" scoped>

.project-cover {
  position: relative;
  width: 960px;
  aspect-ratio: 2;
  flex: none;
  transform: scale(0.7);
  transform-origin: bottom center;
  transition: scale 0.6s cubic-bezier(0.6, 0, 0.2, 1);
}

.project-cover__type {
  color: #AFBFD6;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.tech-stack{
  opacity: 0;
  transition: opacity 0.6s ease;
}

.project-cover__title {
  color: #F2F2F2;
}

.project-cover__video-container {
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 40px 10px -20px;
  border-radius: 8px;
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

.project-cover--focused {
  transform: scale(1);

  .project-cover__type {
    opacity: 1;
  }

  .tech-stack{
    opacity: 1;
  }
}

</style>
