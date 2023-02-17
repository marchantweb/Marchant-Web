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
  title: 'Simon Le Marchant | Creative Front End Engineer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Simon is a senior, creative front-end developer who works with the latest technologies, from Nuxt and Vue to WebGL and HTML5 Canvas. With over 10 years of experience in the creative front-end development field, he has a wealth of knowledge and expertise in the latest front-end technologies. He is passionate about creating innovative, user-friendly web experiences that stand out from the crowd. With his creativity and attention to detail, he will bring your project to life.'
    },
  ],
  link: [
    {rel: 'icon', type: 'image/svg', href: '/icon-notext.svg'},
    {rel: 'preconnect', href: 'https://api.marchantweb.com'},
  ],
  script: [
    {
      src: "https://kit.fontawesome.com/172ddc2486.js", async: true, defer: true
    }
  ],
});
</script>

<style lang="scss">

/* Application SCSS */
@import "assets/scss/app.scss";

</style>
