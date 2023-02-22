<template>
  <div class="row mb-5 align-items-end d-none d-lg-flex">
    <div class="col-auto d-flex align-items-center">
      <MWIcon/>
      <h1 class="bottom-navigation__title ms-4">Simon Le Marchant<br>Creative Front End Engineer</h1>
    </div>
    <div class="col-5 col-xl-4 ms-5 mb-3 me-auto">
      <ul class="tech-stack">
        <li>UX</li>
        <li>Vue</li>
        <li>Nuxt</li>
        <li>Electron</li>
        <li>WebGL</li>
      </ul>
    </div>
    <div class="col-auto mb-3 d-flex align-items-center">
      <NuxtLink to="https://github.com/marchantweb/Marchant-Web" target="_blank" class="me-6 text-decoration-none" aria-label="View this site on GitHub"><i
          class="fa-brands fa-github fa-xl github-icon mouse-sm d-none d-xl-inline text-decoration-none" title="View this site on GitHub"></i></NuxtLink>
      <StatusIndicator class="d-none d-xl-block"/>
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
