<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
//
})

</script>

<template>
  <section class="page">

    <div class="container-fluid pt-4" style="z-index: 2; position: relative;">
      <div class="row">
        <div class="col">

          <!-- Back to Home -->
          <NuxtLink class="back-link mouse-md" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Home
          </NuxtLink>

        </div>
      </div>
    </div>

    <NavMenu/>

    <section id="explore-slider">
      <ul class="cards">
        <li class="mouse-md">0</li>
        <li class="mouse-md">1</li>
        <li class="mouse-md">2</li>
        <li class="mouse-md">3</li>
        <li class="mouse-md">4</li>
        <li class="mouse-md">5</li>
        <li class="mouse-md">6</li>
        <li class="mouse-md">7</li>
        <li class="mouse-md">8</li>
        <li class="mouse-md">9</li>
        <li class="mouse-md">10</li>
      </ul>
    </section>

    <div id="bottom-bar" class="container-fluid">
      <BottomBar/>
    </div>

  </section>
</template>

<style scoped lang="scss">

.cards {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 0;
  gap: 8px;
}

.cards li {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 800px;
  height: 600px;
  background-color: rgb(234, 238, 239);
  color: #1e1e1e;
  border-radius: 8px;
  flex-basis: 800px;
  flex-shrink: 0;
  box-shadow: rgba(0, 0, 0, 0.09) 0 2px 1px, rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px, rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;
  cursor: pointer;

  &:nth-child(3n + 1) {
    width: 350px;
    flex-basis: 350px;
    background-image: url("https://api.marchantweb.com/videos/the-engine.jpg");
  }
}

</style>
