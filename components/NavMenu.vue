<template>
  <div class="container-xxxl pt-6">
    <div class="row justify-content-end">
      <div class="col-auto">
        <section :class="navClasses">
          <div class="nav-icon">
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
          </div>
          <nav class="nav-links">
            <NuxtLink to="/">
              <button class="mouse-sm">Home</button>
            </NuxtLink>
            <NuxtLink to="/about">
              <button class="mouse-sm">About</button>
            </NuxtLink>
            <NuxtLink to="/portfolio">
              <button class="mouse-sm">Portfolio</button>
            </NuxtLink>
            <!--  <NuxtLink to="https://github.com/marchantweb" target="_blank">
              <button class="mouse-sm">GitHub</button>
            </NuxtLink>-->
            <NuxtLink to="/contact">
              <button class="mouse-sm">Contact</button>
            </NuxtLink>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useMouse} from "@vueuse/core";
import {useWindowSize} from "@vueuse/core";

const {x, y} = useMouse();
const {width} = useWindowSize();

const navClasses = computed(() => {
  return {
    'nav-container': true,
    'nav-container--open': y.value < 140 && x.value > (width.value / 2)
  }
});

</script>

<style lang="scss" scoped>

.nav-container {
  position: relative;

  .nav-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 30px;
  }

  .nav-icon__line {
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px, rgba(0, 0, 0, 0.1) 0 2px 2px;
    pointer-events: none;
    transition: transform 0.5s cubic-bezier(0.7, 0, 0, 1);
  }

  .nav-links {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    transition: clip-path 0.5s cubic-bezier(0.7, 0, 0, 1);
    position: absolute;
    top: -30px;
    right: 90px;
    display: flex;
    flex-direction: row;
    gap: 30px;

    button{
      background: none;
      border: none;
      padding: 30px;
      margin: 0;
      color: white;
      font-family: 'N27', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-shadow: -0.5px 0px 0px rgb(54, 201, 227), 0.5px 0px 0px rgb(255, 0, 106), 0px 2px 5px rgb(0 0 0 / 50%);
      font-size: 14px;
    }
  }

  &.nav-container--open{

    .nav-icon__line{

      &:nth-child(1){
        transform: rotate(45deg) translate(5px, 8px);
      }

      &:nth-child(2){
        transition: transform 0.7s cubic-bezier(0.7, 0, 0, 1);
        transform: translate(-50vw);
      }

      &:nth-child(3){
        transform: rotate(-45deg) translate(5px, -8px);
      }
    }

    .nav-links{
      transition: clip-path 0.7s cubic-bezier(0.7, 0, 0, 1);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

}

</style>
