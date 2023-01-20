<template>
  <section class="page">

    <div class="container">
      <div class="row mt-8">
        <div class="col-7">
          <MWIcon :size="50" type="white"/>
          <CodeTag class="mt-5 mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mt-4 mb-3 lead"> {{ currentPortfolioItem['title'] }} </h1>
          <p class="text-light">
            So, we got this far.
          </p>
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

.lead {
  color: white;
  width: 740px;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
  letter-spacing: 1px;
  text-transform: uppercase;
}

</style>
