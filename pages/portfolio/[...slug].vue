<template>
  <section class="page">

    <div class="container">

      <!-- Hero-->
      <div class="row mt-5 gx-6">
        <div class="col-4">
          <MWIcon :size="50" type="white"/>
          <CodeTag class="mt-8 mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-3"> {{ currentPortfolioItem['title'] }} </h1>
        </div>
        <div class="col mt-5">
          <video class="mouse-md" loop="true" muted autoplay>
            <source
                :src="currentPortfolioItem['video']"
                type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-8 gx-8">
        <div class="col-4">

        </div>
        <div class="col-6 mb-7">
          <h2 class="mb-4">{{ currentPortfolioItem['lead'] }}</h2>
          <NotionContent :blocks="currentPortfolioItem['pageContent']" />
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>

const route = useRoute();
const portfolioData = await usePortfolio();

const currentPortfolioItem = computed(() => {
  return portfolioData.value[portfolioData.value.findIndex(project => project["slug"] === route.params["slug"][0])];
});

</script>

<style lang="scss" scoped>

page {
  overflow-x: auto;
}

h1 {
  color: white;
}

video {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  box-shadow: rgb(0 0 0 / 27%) 0 63px 15px -46px, rgb(0 0 0 / 4%) 0 10px 10px -5px;
  border-radius: 3px;
}

p {
  width: 700px;
  max-width: 100%;
}

</style>
