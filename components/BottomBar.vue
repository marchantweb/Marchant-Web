<template>
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
      <DevOnly>
        <i class="fa-sharp fa-solid fa-volume-slash fa-lg mouse-sm audio-icon me-4"></i>
      </DevOnly>
      <NuxtLink to="https://github.com/marchantweb/Marchant-Web" target="_blank" class="me-6"><i
          class="fa-brands fa-github fa-xl github-icon mouse-sm"></i></NuxtLink>
      <StatusIndicator/>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

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

.github-icon, .audio-icon {
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  &:hover {
    color: white;
  }
}

</style>
