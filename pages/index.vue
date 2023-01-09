<template>
  <section class="home">

    <!-- Home - Navigation -->
    <section class="container pt-6">
      <div class="row">
        <div class="col">
          <button class="me-3">About</button>
          <button class="me-3">Portfolio</button>
          <button>Contact</button>
        </div>
      </div>
    </section>

    <!-- Home - Bottom Bar -->
    <div id="bottom-bar" class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-auto d-flex align-items-center">
          <img class="main-logo" src="/icon-white.svg" width="64" height="64"
               alt="A small icon for the Marchant Web logo, with a circle that merges into a square and the text: MW.">
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
          <LocationIndicator/>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

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

.main-logo {;
  width: 64px;
}

.tech-stack {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  list-style-type: none;
  justify-content: space-between;
  margin-bottom: 0;

  li {
    color: #AFBFD6;
  }
}

</style>
