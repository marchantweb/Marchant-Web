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
          <button>Contact</button>
        </div>
      </div>
    </section>

    <!-- Home - Bottom Bar -->
    <div id="bottom-bar" class="container">
      <div class="row mb-8">
        <div class="col">
          <i class="fa-sharp fa-solid fa-code-commit lead-icon mb-5"></i>
          <h1 class="lead-text mouse-lg">I'M A CREATIVE DEVELOPER WHO COLLABORATES WITH NEXT-LEVEL AGENCIES ON DYNAMIC
            PROJECTS;</h1>
        </div>
      </div>
      <div class="row mb-5 align-items-end">
        <div class="col-auto d-flex align-items-center">
          <MWIcon/>
          <h1 class="bottom-navigation__title ms-4">Simon Le Marchant<br>Creative Front End Engineer</h1>
        </div>
        <div class="col-3 ms-5 mb-3 me-auto">
          <ul class="tech-stack">
            <li>UX</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Electron</li>
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

onMounted(() => {
  window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      return navigateTo('/about');
    }
  })
});

</script>

<style lang="scss" scoped>

.lead-text {
  color: white;
  font-size: 60px;
  line-height: 48px;
  width: 740px;
  font-family: "N27", sans-serif;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
  letter-spacing: 1px;
  text-transform: uppercase;
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
