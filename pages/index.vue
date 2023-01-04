<template>
  <main>

    <!-- Dynamic Cursor Element -->
    <Cursor/>

    <!-- WebGL Background -->
    <Hero/>

    <div id="bottom-navigation" class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-3 d-flex align-items-center">
          <img class="main-logo" src="/icon-white.svg" width="64" height="64"
               alt="A small icon for the Marchant Web logo, with a circle that merges into a square and the text: MW.">
          <h1 class="bottom-navigation__title ms-4">Simon Le Marchant<br>Creative Front End Engineer</h1>
        </div>
        <div class="col-3">
          <ul class="tech-stack">
            <li>UX</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Electron</li>
            <li>WebGL</li>
          </ul>
        </div>
      </div>
    </div>


  </main>
</template>

<style lang="scss" scoped>

#bottom-navigation {
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
  line-height: 24px;
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

  li {
    color: #AFBFD6;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    letter-spacing: 0.2px;
  }
}

</style>
