<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl pt-1">
      <div class="row">
        <div class="col">
          <h1 class="lead small">Explore Projects;</h1>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-7 pe-0">
      <div id="portfolio-feed" class="feed-section pe-6" role="feed" aria-busy="false" aria-label="Case Studies"
           v-if="portfolioData">

        <div class="feed-section__container-padding" />

        <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem" :index="index"
                      v-for="(portfolioItem, index) in portfolioData"/>

        <div class="feed-section__container-padding" />


      </div>
    </div>

    <div id="bottom-bar" class="container-xxxl">
      <BottomBar/>
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

const portfolioData = await usePortfolio();

onMounted(() => {
  useEventListener(document, 'wheel', (event) => {
    document.getElementById('portfolio-feed').scrollLeft += event.deltaY;
  })
});

</script>

<style lang="scss" scoped>

h1{
  color: white;
  text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
  10px 20px 5px rgba(0,0,0,0.05),
  -10px 20px 5px rgba(0,0,0,0.05);
}

.feed-section {
  position: relative;
  overflow: auto;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: nowrap;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
