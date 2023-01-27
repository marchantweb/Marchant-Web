<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <!-- Hero-->
      <div class="row gx-6">
        <div class="col-4">
          <CodeTag class="mt-7 mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-3 project__name"> {{ currentPortfolioItem['title'] }} </h1>
        </div>
        <div class="col mt-7">
          <video class="mouse-md" loop="true" muted autoplay>
            <source
                :src="currentPortfolioItem['video']"
                type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-6 gx-8">
        <div class="col-4">
          <section class="ps-6" style="position: sticky; top: 60px">
            <h3 class="mb-4">Case Study</h3>
            <dl>

              <dt v-if="currentPortfolioItem['client']">Client</dt>
              <dd v-if="currentPortfolioItem['client']"> {{ currentPortfolioItem['client']}} </dd>

              <dt v-if="currentPortfolioItem['partner']">Partner</dt>
              <dd v-if="currentPortfolioItem['partner']"> {{ currentPortfolioItem['partner']}} </dd>

              <dt v-if="currentPortfolioItem['role']">Role</dt>
              <dd v-if="currentPortfolioItem['role']"> {{ currentPortfolioItem['role']}} </dd>

              <dt v-if="currentPortfolioItem['completed']">Completed</dt>
              <dd v-if="currentPortfolioItem['completed']"> {{ currentPortfolioItem['completed']}} </dd>

            </dl>
            <h3 class="mt-5 mb-4">Get in Touch</h3>
          </section>
        </div>
        <div class="col-6 mb-7">
          <h1 class="mb-4">{{ currentPortfolioItem['lead'] }}</h1>
          <NotionContent :blocks="currentPortfolioItem['pageContent']"/>
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

useHead({
  title: 'Case Study: ' + currentPortfolioItem.value['title'] + ', ' + currentPortfolioItem.value['type'] + ' | ' + 'Marchant Web',
  meta: [
    { name: 'description', content: currentPortfolioItem.value['lead'] }
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

</script>

<style lang="scss" scoped>

h1.project__name {
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
