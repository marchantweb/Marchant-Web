<template>
  <section class="page">

    <NavMenu />

 <div class="container-fluid mt-8 pe-0">
  <div class="feed-section pe-6" v-if="portfolioData">
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
    <ProjectCover :portfolioItem="portfolioData[2]"/>
    <ProjectCover :portfolioItem="portfolioData[0]"/>
    <ProjectCover :portfolioItem="portfolioData[1]"/>
  </div>
</div>

  </section>
</template>

<script setup>

const portfolioData = await usePortfolio();

</script>

<style lang="scss" scoped>

.feed-section{
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
    //display: none;
  }
}

</style>
