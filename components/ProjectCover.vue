<template>
  <article role="article" :class="elementClasses" tabindex="0" :aria-label="currentPortfolioItem['title']"
           :aria-description="currentPortfolioItem['lead']">

    <!-- Title & Stack -->
    <div class="title-bar row justify-content-between align-items-end mb-3 flex-nowrap">
      <div class="col-auto">
        <h2 class="lead pb-1 pe-3 d-inline-block mb-0 ps-4 ps-0" style="color: #F2F2F2">{{ displayIndex }}.</h2>
        <div class="d-inline-block">
          <span class="project-cover__type text-small mb-0 d-block">{{ currentPortfolioItem["type"] }}</span>
          <h2 class="project-cover__title mb-0">{{ currentPortfolioItem["title"] }}</h2>
        </div>
      </div>
      <div class="col-auto justify-content-end d-none d-xl-flex">
        <CodeLine v-if="props.isFocused" :number="'//'"><span class="code--white"
                                                              v-for="(stackItem, stackIndex) in currentPortfolioItem['stack']">{{
            stackItem.name
          }} <span
              class="px-1" v-if="stackIndex < currentPortfolioItem['stack'].length - 1"> | </span></span></CodeLine>
      </div>
    </div>

    <!-- Video -->
    <NuxtLink :to="'/portfolio/' + currentPortfolioItem['slug']">
      <div class="project-cover__video-container">
        <i class="fa-sharp fa-regular fa-arrow-up-right fa-3x open-arrow"></i>
        <video ref="video" :style="elementStyle" class="project-cover__video mouse-md" loop="true" muted
               :autoplay="isFocused ? true : null" playsinline :poster="currentPortfolioItem['cover']">
          <source :src="currentPortfolioItem['videoWebm']" type="video/webm">
          <source :src="currentPortfolioItem['videoMP4']" type="video/mp4">
        </video>
      </div>
    </NuxtLink>

    <!-- Lead Text (Mobile)  -->
    <h3 class="project-cover__lead d-block d-lg-none mt-4">
      {{ currentPortfolioItem['lead'] }}
    </h3>

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
});

const video = ref(null);
watch(() => props.isFocused, (isFocused) => {
  if (isFocused) {
    video.value.play();
  } else {
    video.value.pause();
  }
});

</script>

<style lang="scss" scoped>

.project-cover {
  position: relative;
  width: 1040px;
  aspect-ratio: 2;
  flex: none;
  transform: scale(0.6);
  transform-origin: bottom center;
  transition: scale 0.6s cubic-bezier(0.6, 0, 0.2, 1);

  @media screen and (max-width: 1680px) {
    width: 960px;
  }

  @media screen and (max-width: 1400px) {
    width: 800px;
  }

  @media screen and (max-width: 1200px) {
    width: 700px;
  }

  @media screen and (max-width: 992px) {
    width: calc(100vw - 60px);
    transform: scale(0.8);
  }
}

.project-cover__type {
  color: #AFBFD6;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.tech-stack {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.project-cover__title {
  color: #F2F2F2;
}

.project-cover__video-container {
  width: 100%;
  height: calc(100vh - 380px);
  box-shadow: rgba(0, 0, 0, 0.3) 0 40px 10px -20px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 992px) {
    height: calc(100vh - 440px);
  }
}

.project-cover__video {
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  object-fit: cover;
  object-position: center center;
  transform-origin: center center;
}

.project-cover--focused {
  transition: transform 0.4s cubic-bezier(0.6, 0, 0.2, 1);
  transform: scale(1);

  .project-cover__type, .project-cover__lead {
    opacity: 1;
    transition-delay: 0.2s;
  }

  .tech-stack {
    opacity: 1;
  }

  &:hover {

    .open-arrow {
      opacity: 1;
    }
  }
}

.project-cover__lead {
  color: #F2F2F2;
  font-size: 1.0rem;
  max-width: 500px;
  opacity: 0;
  transition: opacity 1s ease;
  font-weight: 500;
  font-family: "Inter", sans-serif;
}

.open-arrow {
  color: #F2F2F2;
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  z-index: 2;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  transition: opacity 0.1s ease;
  pointer-events: none;

  @media screen and (max-width: 992px) {
    opacity: 1;
  }
}

</style>
