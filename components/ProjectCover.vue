<template>
  <article role="article" :class="containerClasses" tabindex="0"
           :aria-label="currentPortfolioItem['title']"
           :aria-description="currentPortfolioItem['lead']">

    <!-- Video -->
    <NuxtLink :to="'/portfolio/' + currentPortfolioItem['slug']" @click="isActive = false">
      <div class="project-cover__video-container">
        <video ref="video" :style="mediaStyle" class="project-cover__video mouse-md" loop="true" muted
               :autoplay="true" playsinline :poster="currentPortfolioItem['cover']">
          <source :src="currentPortfolioItem['videoWebm']" type="video/webm">
          <source :src="currentPortfolioItem['videoMP4']" type="video/mp4">
        </video>
      </div>
      <img class="project-cover__featured-image mouse-md" :src="currentPortfolioItem['featuredImage']"/>
    </NuxtLink>

    <!-- Title & Stack -->
    <div class="title-bar row">
      <div class="col-auto">
        <div class="d-block">
          <h3 class="project-cover__title mb-0">{{ currentPortfolioItem["title"] }}</h3>
          <span class="project-cover__type text-small mb-0 d-block">{{ currentPortfolioItem["type"] }}</span>
        </div>
      </div>
    </div>

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
const isActive = ref(false);

/**
 * Determine the inline styles to apply to the video/image element
 */
const mediaStyle = computed(() => {
  return {
    'transform': `translate(${(((1 / width.value) * x.value) * parallaxOffset * -1)}px, ${(((1 / height.value) * y.value) * parallaxOffset * -1)}px)`
  }
});

const containerClasses = computed(() => {
  return {
    'project-cover': true,
    'project-cover--active': isActive.value,
  }
});

const video = ref(null);
watch(() => props.isFocused, (isFocused) => {
  if (isFocused) {
    video.value.play();
  } else {
    video.value.pause();
  }
});

onMounted(() => {
  isActive.value = true;
});

</script>

<style lang="scss" scoped>

.project-cover {
  position: relative;
  height: 600px;
  flex: none;
  background: #111115;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0 5px 10px;
  transform: scale(0) rotateZ(10deg);
  transform-origin: center center;
  transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 1.6;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 80%);
    z-index: 5;
    border-radius: 0 0 8px 8px;
    pointer-events: none;
  }

  @media screen and (max-width: 1200px) {
    height: 60svh;
    aspect-ratio: 0.8;
  }
}

.title-bar {
  position: absolute;
  bottom: 20px;
  left: 40px;
  pointer-events: none;
  z-index: 6;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.project-cover__title, .project-cover__type {
  color: #F2F2F2;
}

.project-cover__video-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.project-cover__video {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
  background-color: #25223d;
}

.project-cover--active {
  transform: scale(1);

  .title-bar {
    opacity: 1;
    transition-delay: 1.2s;
  }
}

.project-cover__featured-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 8px;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}

</style>
