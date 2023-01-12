<template>
  <LazyPortfolioCover v-for="(portfolioItem, index) in portfolioData" :portfolioItem="portfolioItem"
                      :position="elementPosition(index)"/>
</template>

<script setup>

import {useWindowSize} from "@vueuse/core";

const portfolioData = await $fetch('/api/portfolio');

const {width, height} = useWindowSize();

function elementPosition(index) {
  return {
    x: 500 * index,
    y: height.value
  }
}

</script>


<style lang="scss" scoped>

</style>
