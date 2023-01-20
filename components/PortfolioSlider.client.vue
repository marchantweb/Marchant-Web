<template>
  <LazyPortfolioCover v-for="(portfolioItem, index) in visiblePortfolioItems" :portfolioItem="portfolioItem"
                      :index="index" :total="portfolioData.length" :offset="offset"/>
</template>

<script setup>

import {gsap} from "gsap";

const portfolioData = await $fetch('https://api.marchantweb.com/portfolio');

const currentPortfolioItem = computed(() => {
  return portfolioData;
  //return portfolioData.slice(0, 4);
});

const offset = ref(0);

onMounted(() => {
  gsap.to(offset, {
    duration: 60,
    value: 1,
    ease: 'linear',
    repeat: -1,
    yoyo: true
  });
});

</script>


<style lang="scss" scoped>

</style>
