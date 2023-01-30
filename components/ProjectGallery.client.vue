<template>
  <div class="container-xxxl">
    <div class="row mt-8 mb-4 align-items-end gx-8">
      <div class="col-5">
        <CodeTag>{{ currentPortfolioItem["type"] }}</CodeTag>
      </div>
      <div class="col-4">
        <ul class="tech-stack">
          <li v-for="stackItem in currentPortfolioItem['stack']">{{ stackItem["name"] }}</li>
        </ul>
      </div>
    </div>
    <div class="row gx-6">
      <div class="col-9">
        <LazyProjectCover :portfolioItem="currentPortfolioItem"/>
      </div>
      <div class="col">
        <h1 class="lead mt-4 mb-3">0{{ offset }}.</h1>
        <h1>{{ currentPortfolioItem.title }}</h1>
        <div class="next-projects">
          <LazyProjectCover :portfolioItem="nextPortfolioItem"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

/**
 * The index of the current portfolio item to display.
 * @type {Number}
 */
const offset = ref(0);

const portfolioData = await usePortfolio();

const currentPortfolioItem = computed(() => {
  return portfolioData.value[offset.value];
});

const nextPortfolioItem = computed(() => {
  let nextIndex = offset.value + 1;
  if (nextIndex >= portfolioData.value.length) {
    nextIndex = 0;
  }
  return portfolioData.value[nextIndex];
});

import {useEventListener} from "@vueuse/core";

onMounted(() => {
  useEventListener(document, 'wheel', (event) => {
    if (event.deltaY > 0) {
      if(offset.value < portfolioData.value.length - 1) {
        offset.value++;
      } else {
        offset.value = 0;
      }
    }
  })
});

</script>


<style lang="scss" scoped>

h1 {
  color: white;
}

</style>
