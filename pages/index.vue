<template>
  <section class="page">

    <!-- Home - Navigation -->
    <section class="container pt-6">
      <div class="row">
        <div class="col">
          <NuxtLink to="/about">
            <button class="me-3">About</button>
          </NuxtLink>
          <NuxtLink to="/portfolio">
            <button class="me-3">Portfolio</button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="me-3">Contact</button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Home - Bottom Bar -->
    <div id="bottom-bar" class="container">
      <div class="row mb-3 mb-xs-4 mb-sm-6 mb-md-7 mb-lg-8">
        <div class="col-12 col-md-10 col-xl-8 col-xxl-6">
          <i class="fa-sharp fa-solid fa-code-commit lead-icon mb-5"></i>
          <CodeTag class="mb-4 mb-lg-5">Hello World</CodeTag>
          <h1 class="lead mouse-lg">I'M A FRONT-END ENGINEER WHO WORKS WITH AGENCIES TO DELIVER NEXT-LEVEL CREATIVE PROJECTS;</h1>
        </div>
      </div>
      <div class="row mb-5 align-items-end d-none d-lg-flex">
        <div class="col-auto d-flex align-items-center">
          <MWIcon/>
          <h1 class="bottom-navigation__title ms-4">Simon Le Marchant<br>Creative Front End Engineer</h1>
        </div>
        <div class="col-4 col-xl-3 ms-5 mb-3 me-auto">
          <ul class="tech-stack">
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Electron</li>
            <li>WebGL</li>
          </ul>
        </div>
        <div class="col-auto mb-3">
          <StatusIndicator/>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

import {useEventListener} from "@vueuse/core";

onMounted(() => {
  /*window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      return navigateTo('/portfolio');
    }
  });*/
  useEventListener(document, 'wheel', (event) => {
    if (event.deltaY > 0) {
      return navigateTo('/portfolio');
    }
  })
});

</script>

<style lang="scss" scoped>

.lead {
  color: white;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
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

</style>
