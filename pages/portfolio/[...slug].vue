<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <MWIcon :size="50" />
        </div>
      </div>

      <!-- Hero-->
      <div class="row gx-6 mt-6">
        <div class="col-12 col-lg-4">
          <CodeTag class="mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-4 mb-lg-10 project__name"> {{ currentPortfolioItem['title'] }} </h1>
          <NuxtLink class="back-link mouse-md mb-5 mb-lg-0" to="/portfolio"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back to Explore Projects</NuxtLink>
        </div>
        <div class="col">
          <video class="mouse-md" loop="true" muted autoplay>
            <source
                :src="currentPortfolioItem['video']"
                type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-7 gx-6 gx-xl-8 pb-5 pb-lg-7">
        <div class="col-12 col-lg-4 order-2 order-lg-1 pt-6 pt-lg-0">
          <section class="ps-0 ps-lg-6" style="position: sticky; top: 60px">
            <h3 class="mb-5">Details</h3>
            <dl class="mb-5 d-block">

              <dt v-if="currentPortfolioItem['client']">Client</dt>
              <dd v-if="currentPortfolioItem['client']"> {{ currentPortfolioItem['client']}} </dd>

              <dt v-if="currentPortfolioItem['partner']">Partner</dt>
              <dd v-if="currentPortfolioItem['partner']"> {{ currentPortfolioItem['partner']}} </dd>

              <dt v-if="currentPortfolioItem['role']">Role</dt>
              <dd v-if="currentPortfolioItem['role']"> {{ currentPortfolioItem['role']}} </dd>

              <dt v-if="currentPortfolioItem['completed']">Completed</dt>
              <dd v-if="currentPortfolioItem['completed']"> {{ currentPortfolioItem['completed']}} </dd>

            </dl>
            <ActionButton to="/contact">
              <i class="fa-sharp fa-solid fa-message-captions"></i>
              Let's Chat
            </ActionButton>
          </section>
        </div>
        <div class="col-12 col-lg-8 order-1 order-lg-2">
          <div class="col-12 col-lg-11 col-xl-10">
            <CodeLine :visible="true" :number="'//'" class="mb-5 mb-lg-4"><span class="code--yellow">npm</span> <span class="code--green">run</span> <span class="code--white">case study</span></CodeLine>
            <h1 class="mb-4 mb-lg-5">{{ currentPortfolioItem['lead'] }}</h1>
          </div>
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
  color: #F2F2F2;
}

video {
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
  box-shadow: rgba(0,0,0,0.2) 0 60px 15px -40px, rgba(0,0,0,0.06) 0 4px 6px -2px;
  border-radius: 5px;
}

p {
  width: 700px;
  max-width: 100%;
}

</style>
