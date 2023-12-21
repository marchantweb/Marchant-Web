<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <MWIcon :size="50" :type="'notext'" />
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-9 pb-3 justify-content-center">
        <main class="col-12 col-lg-6">
          <div class="col">
            <h1 class="mb-3 mb-lg-4 article__title mouse-md"> {{ currentArticleItem['title'] }} </h1>
            <h2 class="article__lead mb-5"> {{ currentArticleItem['lead'] }} </h2>
            <div class="d-flex flex-row align-items-center mb-4">
              <img src="~assets/images/headshot.jpg" alt="Simon Le Marchant" class="article__headshot me-4 mouse-sm">
              <div>
                <label class="article__author" itemprop="name">Simon Le Marchant · <a href="https://twitter.com/marchantweb" target="blank" class="article__followlink mouse-sm">Follow on 𝕏</a></label>
                <span class="article__readtime">{{ readTime}} · MMM 'YY</span>
              </div>
            </div>
            <hr class="mb-6">
          </div>
          <NotionContent class="article__content" :isArticle="true" :blocks="currentArticleItem['pageContent']"/>
          <p class="mt-7 mt-xxl-8 mt-xxxl-9 text-small text-end copyright d-none d-lg-block">Copyright © {{new Date().getFullYear()}} Marchant Web, LLC. All rights reserved.</p>
        </main>
      </div>

    </div>

  </section>
</template>

<script setup>

const route = useRoute();
const articleData = await useArticles();

const currentArticleItem = computed(() => {
  return articleData.value[articleData.value.findIndex(article => article["slug"] === route.params["slug"][0])];
});

const readTime = computed(() => {
  let totalTextLength = 0;
  currentArticleItem.value['pageContent'].forEach((block) => {
    if ((block.type === 'paragraph' || block.type === 'code') && block[block.type]["rich_text"].length) {
      block[block.type]["rich_text"].forEach((textBlock) => {
        totalTextLength += textBlock["plain_text"].trim().split(/\s+/).length;
      });
    }
  });
  const readTimeMinutes = Math.ceil(totalTextLength / 100);
  return `${readTimeMinutes} min read`;
});

useHead({
  title: currentArticleItem.value['title'] + ' | ' + 'Marchant Web',
  meta: [
    { hid: 'description', name: 'description', content:  currentArticleItem.value['title'] },
    { hid: 'og:title', property: 'og:title', content: currentArticleItem.value['title'] },
    { hid: 'og:url', property: 'og:url', content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'og:description', property: 'og:description', content: currentArticleItem.value['title'] },
    { hid: 'og:image', property: 'og:image', content: currentArticleItem.value['cover']},

    // twitter card
    { hid: "twitter:title", name: "twitter:title", content: currentArticleItem.value['title'] },
    { hid: "twitter:url", name: "twitter:url", content: 'https://marchantweb.com' + route.fullPath },
    { hid: 'twitter:description', name: 'twitter:description', content: currentArticleItem.value['title'] },
    { hid: "twitter:image", name: "twitter:image", content: currentArticleItem.value['cover']},
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

.article__lead{
  color: #6e829c;
  font-weight: 500;
}

.article__readtime{
  color: #6e829c;
  font-weight: 400;
  display: block;
  font-size: 14px;
}

.article__followlink{
  color: #7A4FEE;
}

.article__author{
  font-weight: 600;
  margin-bottom: 0;
}

.article__headshot{
  width: 65px;
  border-radius: 50%;
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
