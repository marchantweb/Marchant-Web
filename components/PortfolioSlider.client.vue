<template>
  <LazyPortfolioCover v-for="(portfolioItem, index) in portfolioData" :portfolioItem="portfolioItem" :index="index"
                      :total="portfolioData.length"/>
</template>

<script setup>

const portfolioData = await $fetch('/api/portfolio');

</script>


<style lang="scss" scoped>

</style>
