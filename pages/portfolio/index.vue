<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl mt-n4">
      <div class="row">
        <div class="col">
          <h1 class="lead small">Explore Projects;</h1>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-7 px-0">
      <div id="portfolio-feed" class="feed-section" role="feed" aria-busy="false" aria-label="Case Studies"
           v-if="portfolioData">

        <div class="feed-section__container-padding" />

        <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem" :index="index"
                      v-for="(portfolioItem, index) in portfolioData" :isFocused="index === selected"/>

        <div class="feed-section__extraElement" style="width: 960px; height: 10px; display: block; flex:none" />

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

const selected = ref(0);

onMounted(() => {

  useEventListener(document, 'wheel', (event) => {

    // Per-Scroll Increment
    let newSelected = selected.value;
    newSelected = event.deltaY > 0 ? (newSelected += 1) : (newSelected -= 1);
    newSelected = newSelected < 0 ? 0 : newSelected;
    newSelected = newSelected > portfolioData.value.length - 1 ? portfolioData.value.length - 1 : newSelected;

    // Go to the selected slide
    selected.value = newSelected;
    document.getElementById('portfolio-feed').scrollLeft = 960 * selected.value;

    //document.getElementById('portfolio-feed').scrollLeft += event.deltaY;
    //selected.value = Math.floor(document.getElementById('portfolio-feed').scrollLeft / 960);
  });

});

</script>

<style lang="scss" scoped>

h1{
  color: #F2F2F2;
  text-shadow: -1px -1px 0px rgb(54, 201, 227), 1px 1px 0px rgb(255, 0, 106), 0px 4px 10px rgb(0 0 0 / 50%);
}

.feed-section {
  position: relative;
  overflow: auto;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: row;
  gap: 0;
  flex-wrap: nowrap;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.page-enter-from{
  opacity: 0;
  filter: blur(10px);
  transform: translateX(10%);
}

</style>
