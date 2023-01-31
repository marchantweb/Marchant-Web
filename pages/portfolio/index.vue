<template>
  <section class="page">

    <NavMenu />

 <div class="container-fluid mt-8 pe-0">
  <div id="portfolio-feed" class="feed-section pe-6" role="feed" aria-busy="false" aria-label="Case Studies" v-if="portfolioData">
    <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem" v-for="(portfolioItem, index) in portfolioData"/>
  </div>
</div>

    <div id="bottom-bar" class="container-xxxl">
      <BottomBar />
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

const portfolioData = await usePortfolio();

onMounted(() => {
  useEventListener(document, 'wheel', (event) => {
    document.getElementById('portfolio-feed').scrollLeft += event.deltaY * 2;
  })
});

</script>

<style lang="scss" scoped>

.feed-section{
  scroll-behavior: smooth;
  position: relative;
  width: 100%;
  overflow: auto;
  margin-left: 0;
  margin-right: 0;
  display: grid;
  grid-gap: 30px;
  grid-auto-rows: 280px;
  grid-auto-columns: 280px;
  grid-auto-flow: column dense;
  grid-template-rows: 280px 280px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
