<template>
    <div class="container-xxxl">
      <div class="row mt-4 mb-4 align-items-end gx-8">
        <div class="col-5">
          <CodeTag class="mt-8">{{ currentPortfolioItem["type"] }}</CodeTag>
        </div>
        <div class="col-4">
          <ul class="tech-stack">
            <li v-for="stackItem in currentPortfolioItem['stack']">{{ stackItem["name"] }}</li>
          </ul>
        </div>
      </div>
      <div class="row gx-6">
        <div class="col-9">
          <LazyProjectCover :portfolioItem="currentPortfolioItem" :total="portfolioData.length" :offset="offset"/>
        </div>
        <div class="col">
          <h1 class="lead mt-5 mb-3">0{{ offset }}.</h1>
          <h1>{{ currentPortfolioItem.title }}</h1>
        </div>
      </div>
    </div>
</template>

<script setup>

/**
 * The index of the current portfolio item to display.
 * @type {Number}
 */
const offset = ref(1);

const portfolioData = await usePortfolio();

const currentPortfolioItem = computed(() => {
  return portfolioData.value[offset.value];
});

onMounted(() => {
  //
});

</script>


<style lang="scss" scoped>

h1 {
  color: white;
}

</style>
