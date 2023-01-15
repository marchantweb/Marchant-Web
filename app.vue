<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: 'Simon Le Marchant | Creative Front End Engineer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: 'Simon is a senior, creative front-end developer who works with the latest technologies, from Nuxt and Vue to WebGL and HTML5 Canvas. With over 10 years of experience in the creative front-end development field, he has a wealth of knowledge and expertise in the latest front-end technologies. He is passionate about creating innovative, user-friendly web experiences that stand out from the crowd. With his creativity and attention to detail, he will bring your project to life.'
    },
  ],
  link: [{rel: 'icon', type: 'image/svg', href: '/icon-notext.svg'}],
  script: [
    {
      src: "https://kit.fontawesome.com/172ddc2486.js",
    }
  ],
});
</script>

<style lang="scss">

/* JetBrains Mono */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* N27 */
@font-face {
  font-family: 'N27';
  src: url('assets/fonts/n27-bold-webfont.eot'),
  url('assets/fonts/n27-bold-webfont.woff2') format('woff2'),
  url('assets/fonts/n27-bold-webfont.woff') format('woff'),
  url('assets/fonts/n27-bold-webfont.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

/* Application SCSS */
@import "assets/scss/app.scss";

</style>
