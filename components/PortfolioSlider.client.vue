<template>
    <LazyPortfolioCover v-for="(portfolioItem, index) in visiblePortfolioItems" :portfolioItem="portfolioItem" :index="index" :total="portfolioData.length" :offset="offset"/>
</template>

<script setup>

const portfolioData = await $fetch('/api/portfolio');

const visiblePortfolioItems = computed(() => {
  return portfolioData.slice(0,4);
});

const offset = ref(0);

</script>


<style lang="scss" scoped>

</style>
