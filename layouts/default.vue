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
    'main--zoomed-out': route.path === '/about'
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
  transition: all 1.5s cubic-bezier(0.7, 0, 0, 1);
  border-radius: 0;
  box-shadow: none;

  &.main--zoomed-out{
    transform: scale(0.8) perspective(400px) rotateX(2deg);
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(50 50 93 / 20%) 0 100px 20px -75px, #742bff 0px 13px 156px -16px;
    transition: transform 1.5s cubic-bezier(0.85, 0, 0.15, 1);
  }
}

</style>
