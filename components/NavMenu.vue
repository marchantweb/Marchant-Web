<template>
        <div :class="navClasses">
          <div class="nav-icon">
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
          </div>
          <nav class="nav-links">
            <NuxtLink to="/" class="mouse-md">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="mouse-md">
              About
            </NuxtLink>
            <NuxtLink to="/portfolio" class="mouse-md">
              Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="mouse-md">
              Contact
            </NuxtLink>
          </nav>
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
    'nav-container--open': y.value < 180 && x.value > Math.min((width.value / 2), width.value - 800)
  }
});

</script>

<style lang="scss" scoped>

.nav-container {
  position: absolute;
  top: 60px;
  right: calc((100vw - (1600px - 60px)) / 2);

  @media screen and (max-width: 1680px) {
    right: 30px;
  }

  @media screen and (max-width: 992px) {
    display: none;
    position: relative;
  }

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

    @media screen and (max-width: 1400px) {
      gap: 20px;
    }

    a{
      background: none;
      border: none;
      padding: 30px;
      margin: 0;
      color: white;
      font-family: 'N27', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
      text-shadow: 0 2px 5px rgb(0 0 0 / 20%);
      font-size: 14px;
      text-decoration: none;
      position: relative;
    }
  }

  &.nav-container--open{

    .nav-icon__line{

      &:nth-child(1){
        transform: rotate(45deg) translate(5px, 8px);
      }

      &:nth-child(2){
        transition: transform 0.7s cubic-bezier(0.7, 0, 0, 1);
        transform: translate(min(-45vw, -700px));
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
