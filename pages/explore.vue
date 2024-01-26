<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

onMounted(() => {
  const cards = gsap.utils.toArray('.card');
  const wrapWidth = document.querySelector('.cards').offsetWidth;

  console.log(wrapWidth);

  Draggable.create('.cards', {
    type: 'x',
    inertia: true,
    edgeResistance: 0.65,
    bounds: document.querySelector('.page'),
    modifiers: {
      x: function (x) {
        // Use a modulo operation to create the wrap effect
        let newX = parseFloat(x) % wrapWidth;
        if (newX < 0) {
          newX += wrapWidth; // Adjust to keep within positive range
        }
        return newX + "px";
      }
    },
    onDrag: function () {
      // Optional: Implement logic during drag, such as updating indicators or the current visible card
    }
  });
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
        <li class="card mouse-md">0</li>
        <li class="card mouse-md">1</li>
        <li class="card mouse-md">2</li>
        <li class="card mouse-md">3</li>
        <li class="card mouse-md">4</li>
        <li class="card mouse-md">5</li>
        <li class="card mouse-md">6</li>
        <li class="card mouse-md">7</li>
        <li class="card mouse-md">8</li>
        <li class="card mouse-md">9</li>
      </ul>
    </section>

    <div id="bottom-bar" class="container-fluid">
      <BottomBar/>
    </div>

  </section>
</template>

<style scoped lang="scss">

#explore-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate3d(0, 0, 1, 5deg);
}

.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  padding: 0 100px;
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
  background-size: cover;
  background-position: center;
  color: #1e1e1e;
  border-radius: 8px;
  flex-basis: 800px;
  flex-shrink: 0;
  box-shadow: rgba(0, 0, 0, 0.09) 0 2px 1px, rgba(0, 0, 0, 0.09) 0 4px 2px, rgba(0, 0, 0, 0.09) 0 8px 4px, rgba(0, 0, 0, 0.09) 0 16px 8px, rgba(0, 0, 0, 0.09) 0 32px 16px;
  cursor: pointer;

  /*&:nth-child(4n + 1) {
    width: 350px;
    flex-basis: 350px;
    background-image: url("https://marchantweb.com/cdn-cgi/image/width=1974,quality=100,format=auto/https://api.marchantweb.com/images/f53c08bd-6a71-48d5-bc45-4db4832d38c8");
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%)
  }

  &:nth-child(4n + 3) {
    width: 350px;
    flex-basis: 350px;
    background-image: url("https://marchantweb.com/cdn-cgi/image/width=1974,quality=100,format=auto/https://api.marchantweb.com/images/f29717eb-c82b-45b2-92f3-40fb9e22d02e");
  }*/
}

</style>
