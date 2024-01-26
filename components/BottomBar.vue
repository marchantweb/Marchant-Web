<template>
  <div class="row mb-3 align-items-end d-none d-lg-flex justify-content-between">
    <div class="col-auto d-flex align-items-center" itemscope itemtype="https://schema.org/Person">
      <MWIcon :size="45" class="pb-2" type="notext"/>
      <h1 class="bottom-navigation__title ms-4"><span itemprop="name">Simon Le Marchant</span><br><span itemprop="jobTitle">Vue / Nuxt / Creative UX</span></h1>
    </div>
    <div class="col-auto mb-3 d-flex align-items-center">
      <NuxtLink to="https://twitter.com/marchantweb" target="_blank" class="me-4 text-decoration-none" aria-label="Find me on Twitter"><i class="fa-brands fa-x-twitter fa-xl twitter-icon mouse-sm d-none d-xl-inline text-decoration-none" title="Find me on Twitter"></i></NuxtLink>
      <NuxtLink to="https://github.com/marchantweb/Marchant-Web" target="_blank" class="me-4 text-decoration-none" aria-label="View this site on GitHub"><i class="fa-brands fa-github fa-xl github-icon mouse-sm d-none d-xl-inline text-decoration-none" title="View this site on GitHub"></i></NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/marchantweb/" target="_blank" class="me-5 text-decoration-none" aria-label="Find me on LinkedIn"><i class="fa-brands fa-linkedin fa-xl linkedin-icon mouse-sm d-none d-xl-inline text-decoration-none" title="Find me on LinkedIn"></i></NuxtLink>
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
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.2px;
  margin-bottom: 12px;

  span{
    color: white;

    &:last-child{
      color: #929eb6;
      font-weight: 500;
    }
  }
}

.github-icon, .audio-icon, .twitter-icon, .linkedin-icon {
  color: rgba(224, 222, 255, 0.8);
  mix-blend-mode: color-dodge;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
}

</style>
