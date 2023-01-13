<template>
  <main :class="mainClasses">

    <client-only>

      <!-- WebGL Background -->
      <LazyHero/>

    </client-only>

    <!-- Page Content -->
    <slot/>

  </main>

  <client-only>

    <!-- Dynamic Cursor Element -->
    <LazyCursor/>

  </client-only>

</template>

<script setup>

const route = useRoute();

/**
 * Determine the CSS classes to apply to the element
 * @type {ComputedRef<{"portfolio-cover": boolean, "portfolio-cover--active"}>}
 */
const mainClasses = computed(() => {
  return {
    'main--with-navigation': route.path === '/'
  }
});

</script>

<style lang="scss" scoped>

main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 1.5s cubic-bezier(0.85, 0, 0.15, 1);

  &.main--with-navigation{
    transform: scale(0.65) perspective(800px) rotateX(3deg) translateZ(0) translateY(-8vh);
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(50 50 93 / 20%) 0px 100px 20px -75px, #742bff 0px 13px 156px -16px;
    transition: transform 1.5s cubic-bezier(0.85, 0, 0.15, 1);
    cursor: pointer;
  }
}

</style>
