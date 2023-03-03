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
      <div class="row gx-6 mt-5 mt-lg-6">
        <div class="col-12 col-lg-4">
          <CodeTag class="mb-2 mb-lg-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <h1 class="mb-3 mb-lg-10 project__name"> {{ currentPortfolioItem['title'] }} </h1>
          <NuxtLink class="back-link mouse-md mb-5 mb-lg-0" to="/portfolio"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back to Explore Projects</NuxtLink>
        </div>
        <div class="col">
          <video class="mouse-md" loop="true" muted autoplay playsinline :poster="currentPortfolioItem['cover']" data-aos="zoom-in-down">
            <source :src="currentPortfolioItem['videoWebm']" type="video/webm">
            <source :src="currentPortfolioItem['videoMP4']" type="video/mp4">
          </video>
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-7 gx-6 gx-xl-8 pb-3">
        <div class="col-12 col-lg-4 order-2 order-lg-1 pt-6 pt-lg-0">
          <aside class="ps-0 ps-lg-6 mb-5 mb-lg-0" style="position: sticky; top: 60px">
            <h3 class="mb-5" data-aos="fade-up">Details</h3>
            <dl class="mb-5 d-block" data-aos="fade-up">

              <dt v-if="currentPortfolioItem['client']">Client</dt>
              <dd v-if="currentPortfolioItem['client']"> {{ currentPortfolioItem['client']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['partner']">Partner</dt>
              <dd v-if="currentPortfolioItem['partner']"> {{ currentPortfolioItem['partner']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['role']">Role</dt>
              <dd v-if="currentPortfolioItem['role']"> {{ currentPortfolioItem['role']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['completed']">Completed</dt>
              <dd v-if="currentPortfolioItem['completed']"> {{ currentPortfolioItem['completed']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['awards']">Recognition</dt>
              <dd v-if="currentPortfolioItem['awards']" v-html="currentPortfolioItem['awards'].replace(/\n/g, '<br />')"></dd>

            </dl>
            <ActionButton to="https://calendly.com/marchantweb/discovery" target="_blank" data-aos="fade-up">
              <i class="fa-sharp fa-regular fa-calendar-range fa-lg"></i>
              Book some time
            </ActionButton>
          </aside>
        </div>
        <main class="col-12 col-lg-8 order-1 order-lg-2">
          <div class="col-12 col-lg-11 col-xl-10">
            <CodeLine :number="'//'" class="mb-5 mb-lg-4">
              <span class="code--yellow">npm</span>
              <span class="code--green">&nbsp;run</span>
              <span class="code--white">&nbsp;case_study</span>
            </CodeLine>
            <h1 class="mb-4 mb-lg-5" data-aos="fade-up">{{ currentPortfolioItem['lead'] }}</h1>
          </div>
          <NotionContent :blocks="currentPortfolioItem['pageContent']"/>
          <p class="mt-7 mt-xxl-8 mt-xxxl-9 text-small text-end copyright d-none d-lg-block">Copyright © {{new Date().getFullYear()}} Marchant Web, LLC. All rights reserved.</p>
        </main>
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
    { hid: 'description', name: 'description', content:  currentPortfolioItem.value['lead'] },
    { hid: 'og:title', property: 'og:title', content: currentPortfolioItem.value['title'] },
    { hid: 'og:url', property: 'og:url', content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'og:description', property: 'og:description', content: currentPortfolioItem.value['lead'] },
    { hid: 'og:image', property: 'og:image', content: currentPortfolioItem.value['cover']},

    // twitter card
    { hid: "twitter:title", name: "twitter:title", content: currentPortfolioItem.value['title'] },
    { hid: "twitter:url", name: "twitter:url", content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'twitter:description', name: 'twitter:description', content: currentPortfolioItem.value['lead'] },
    { hid: "twitter:image", name: "twitter:image", content: currentPortfolioItem.value['cover']},
  ],
  link: [
    { hid: "canonical", rel: "canonical", href: 'https://marchantweb.com' + route.fullPath },
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

  @media screen and (max-width: 992px) {
    box-shadow: rgba(0,0,0,0.3) 0 10px 8px -10px, rgba(0,0,0,0.06) 0 4px 6px -2px;
  }
}

p:not(.copyright) {
  width: 700px;
  max-width: 100%;
}

.copyright{
  opacity: 0.5;
  font-size: 12px;
  border-top: 1px solid #CCC;
  max-width: 500px;
  padding-top: 20px;
  padding-left: 40px;
  float: right;
}

</style>
