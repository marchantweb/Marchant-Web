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
      <div class="row gx-6 mt-7">
        <div class="col-4">
          <CodeTag class="mb-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-3 project__name"> {{ currentPortfolioItem['title'] }} </h1>
        </div>
        <div class="col">
          <video class="mouse-md" loop="true" muted autoplay>
            <source
                :src="currentPortfolioItem['video']"
                type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-7 gx-8 pb-9">
        <div class="col-4">
          <section class="ps-6" style="position: sticky; top: 60px">
            <h3 class="mb-5">Details</h3>
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
            <NuxtLink to="/contact"><h3 class="mt-5 mb-4">Get in Touch</h3></NuxtLink>
          </section>
        </div>
        <div class="col-8">
          <div class="col-10">
            <CodeLine :visible="true" :number="'//'" class="mb-4"><span class="code--yellow">npm</span> <span class="code--green">run</span> <span class="code--white">case study</span></CodeLine>
            <h1 class="mb-5">{{ currentPortfolioItem['lead'] }}</h1>
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
