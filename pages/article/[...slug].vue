<template>
  <section class="page">

    <NavMenu/>

    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <MWIcon :size="50" :type="'notext'"/>
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-9 pb-3 justify-content-center">
        <main class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-6">
          <div class="col">
            <h1 class="mb-3 mb-lg-4 article__title mouse-md"> {{ currentArticleItem['title'] }} </h1>
            <h2 class="article__lead mb-5"> {{ currentArticleItem['lead'] }} </h2>
            <div class="d-flex flex-row align-items-center mb-4">
              <img src="~assets/images/headshot.jpg" alt="Simon Le Marchant" class="article__headshot me-4 mouse-sm">
              <div>
                <label class="article__author" itemprop="name">Simon Le Marchant · <a
                    href="https://twitter.com/marchantweb" target="blank" class="article__followlink mouse-sm">Follow on
                  𝕏</a></label>
                <span class="article__readtime">{{ readTime }} · {{ formattedDate }} </span>
              </div>
            </div>
            <hr class="mb-6">
          </div>
          <NotionContent class="article__content" :isArticle="true" :blocks="currentArticleItem['pageContent']"/>
          <p class="mt-7 mt-xxl-8 mt-xxxl-9 text-small text-end copyright d-none d-lg-block">Copyright ©
            {{ new Date().getFullYear() }} Marchant Web, LLC. All rights reserved.</p>
        </main>
      </div>

    </div>

  </section>
</template>

<script setup>
import sugar from 'sugar';

sugar.extend();

const route = useRoute();
const articleData = await useArticles();

const currentArticleItem = computed(() => {
  return articleData.value[articleData.value.findIndex(article => article["slug"] === route.params["slug"][0])];
});

/**
 * Calculates the read time of the current article
 * @type {ComputedRef<string>}
 */
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

/**
 * Find the cover image of the article, or use the default.
 * @type {ComputedRef<string>}
 */
const coverImage = computed(() => {
  let coverImage = 'https://marchantweb.com/cover.jpg';
  for (let block of currentArticleItem.value['pageContent']) {
    if (block.type === 'image') {
      coverImage = block['image']['file']['url'];
      break;
    }
  }
  return coverImage;
});

/**
 * Shows the article's date, formatted based on how long ago it was published.
 * Within 10 days is relative, 30 days is medium, and anything older is just the year (if the same year).
 * Can also return an empty string if the date is too old, to avoid it appearing stale.
 * @type {ComputedRef<string|string>}
 */
const formattedDate = computed(() => {
  const date = new Date(currentArticleItem.value['createdAt']);
  if (date.isAfter(Date.create("10 days ago"))) {
    return date.relative();
  } else if (date.isAfter(Date.create("30 days ago"))) {
    return date.medium();
  } else if (date.getFullYear() === new Date().getFullYear()) {
    return date.format('{yyyy}');
  } else {
    return '';
  }
});


useHead({
  title: currentArticleItem.value['title'],
  meta: [
    {hid: 'description', name: 'description', content: currentArticleItem.value['lead']},
    {hid: 'og:title', property: 'og:title', content: currentArticleItem.value['title']},
    {hid: 'og:url', property: 'og:url', content: 'https://marchantweb.com' + route.fullPath},
    {hid: 'og:description', property: 'og:description', content: currentArticleItem.value['lead']},
    {hid: 'og:image', property: 'og:image', content: coverImage.value},

    // twitter card
    {hid: "twitter:title", name: "twitter:title", content: currentArticleItem.value['title']},
    {hid: "twitter:url", name: "twitter:url", content: 'https://marchantweb.com' + route.fullPath},
    {hid: 'twitter:description', name: 'twitter:description', content: currentArticleItem.value['lead']},
    {hid: "twitter:image", name: "twitter:image", content: coverImage.value},
  ],
  link: [
    {hid: "canonical", rel: "canonical", href: 'https://marchantweb.com' + route.fullPath},
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

useSchemaOrg([
  {
    '@type': 'Article',
    'headline': currentArticleItem.value['title'],
    'description': currentArticleItem.value['lead'],
    'image': coverImage.value,
    'author': {
      'name': 'Simon Le Marchant',
      'url': 'https://marchantweb.com'
    },
  }
])

const { gtag } = useGtag()
gtag('event', 'page_view', {
  page_title: 'Article: ' + currentArticleItem.value['title']
})

</script>

<style lang="scss" scoped>

.article__lead {
  color: #6e829c;
  font-weight: 500;
}

.article__readtime {
  color: #6e829c;
  font-weight: 400;
  display: block;
  font-size: 14px;
}

.article__followlink {
  color: #7A4FEE;
}

.article__author {
  font-weight: 600;
  margin-bottom: 0;
}

.article__headshot {
  width: 65px;
  border-radius: 50%;
}

.copyright {
  opacity: 0.5;
  font-size: 12px;
  border-top: 1px solid #CCC;
  max-width: 500px;
  padding-top: 20px;
  padding-left: 40px;
  float: right;
}

</style>
