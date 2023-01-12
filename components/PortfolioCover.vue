<template>
  <section class="portfolio-cover" ref="container" :style="elementStyle">

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
    <video class="portfolio-cover__video" loop="true" autoplay="autoplay" muted>
      <source
          :src="portfolioItem['video']"
          type="video/mp4">
    </video>

  </section>
</template>

<script setup>

import {useElementSize} from "@vueuse/core";

const props = defineProps({
  portfolioItem: {
    type: Object,
    required: true
  },
  position: {
    type: Object,
    default: {
      x: 0,
      y: 0
    }
  }
});

const container = ref(null);
const {width, height} = useElementSize(container);

const elementStyle = computed(() => {
  return {
    position: 'absolute',
    transition: 'none',
    top: 0,
    left: 0,
    'transform': "translate(" + props.position.x + "px, " + (props.position.y - height.value - 60) + "px)",
  }
});

</script>

<style lang="scss" scoped>

.portfolio-cover {
  position: absolute;
  height: calc(100vh - 220px);
  aspect-ratio: 16 / 9;
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
