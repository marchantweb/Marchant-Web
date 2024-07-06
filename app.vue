<template>

  <!-- WebGL Background -->
  <client-only>
    <LazyHero/>
  </client-only>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <!-- Dynamic Cursor Element -->
  <client-only>
    <LazyCursor/>
  </client-only>


</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Home — Simon Le Marchant',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en-US',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en-US',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Hey I\'m Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects.'
    },
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: '#7a4fee'
    },
    {
      hid: 'robots',
      name: 'robots',
      content: 'index, follow'
    },
    {
      hid: 'googlebot',
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'https://marchantweb.com'
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'Simon Le Marchant | Independent Interactive Developer'
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://marchantweb.com/cover.jpg'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      content: 'Simon Le Marchant | Independent Interactive Developer'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Hey I\'m Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects.'
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'Simon Le Marchant | Independent Interactive Developer'
    },
    {
      hid: 'og:locale',
      name: 'og:locale',
      content: 'en_US'
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@marchantweb'
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@marchantweb'
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://marchantweb.com'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Simon Le Marchant | Independent Interactive Developer'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Hey I’m Simon, an independent interactive developer based in Orlando, Florida.'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://marchantweb.com/cover.jpg'
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: 'Simon Le Marchant | Independent Interactive Developer'
    }
  ],
  link: [
    {rel: 'icon', type: 'image/svg', href: '/icon-notext.svg'},
    {rel: 'preconnect', href: 'https://api.marchantweb.com'},
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
    },
    {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'},
  ],
  script: [
    {
      src: "https://kit.fontawesome.com/172ddc2486.js", async: true, defer: true
    }
  ],
});
</script>
