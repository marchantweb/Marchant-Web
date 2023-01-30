<template>
  <section class="page">

    <NavMenu/>

    <!-- Home - Bottom Bar -->
    <div id="bottom-bar" class="container-xxxl">
      <div class="row mb-3 mb-xs-4 mb-sm-6 mb-md-7 mb-lg-8 justify-content-between align-items-end">
        <div class="col-12 col-md-10 col-xl-8 col-xxl-6">
          <i class="fa-sharp fa-solid fa-code-commit lead-icon mb-5"></i>
          <h1 class="lead mouse-lg" v-once>
            <div class="heading-char" aria-hidden="true" :style="{'animation-delay': (0.005 * index) + 's'}" v-for="(char, index) in headingChars">{{ char }}</div>
          </h1>
        </div>
        <div class="col-auto">
          <ScrollHint/>
        </div>
      </div>
      <div class="row mb-5 align-items-end d-none d-lg-flex">
        <div class="col-auto d-flex align-items-center">
          <MWIcon/>
          <h1 class="bottom-navigation__title ms-4">Simon Le Marchant<br>Creative Front End Engineer</h1>
        </div>
        <div class="col-4 col-xl-3 ms-5 mb-3 me-auto">
          <ul class="tech-stack">
            <li>UX</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Electron</li>
          </ul>
        </div>
        <div class="col-auto mb-3 d-flex align-items-center">
          <NuxtLink to="https://github.com/marchantweb" target="_blank" class="me-5"><i class="fa-brands fa-github fa-xl github-icon mouse-sm"></i></NuxtLink>
          <StatusIndicator/>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

onMounted(() => {
  useEventListener(document, 'wheel', (event) => {
    if (event.deltaY > 0) {
      return navigateTo('/portfolio');
    }
  })
});

const heading = "I'M A FRONT-END ENGINEER WHO WORKS WITH AGENCIES TO DELIVER NEXT-LEVEL CREATIVE PROJECTS;"
const headingChars = heading.split('');

</script>

<style lang="scss" scoped>

.lead {
  color: white;
  user-select: none;

  div{
    pointer-events: none;
  }
}

.lead-icon {
  color: white;
  font-size: 40px;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
}

#bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.bottom-navigation__title {
  display: block;
  color: white;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
}

.heading-char{
  display: inline;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  animation: headingCharReveal 3s cubic-bezier(0.6, 0, 0, 1) forwards;
}

@keyframes headingCharReveal {
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 110% 0, 110% 100%, 0 100%);
  }
}

.github-icon{
  color: #7795c2;

  &:hover{
    color: white;
  }
}

</style>
