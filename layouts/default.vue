<template>

  <main>

    <!-- WebGL Background -->
    <client-only>
      <LazyHero/>
    </client-only>

    <!-- Page Content -->
    <slot/>

    <!-- Dynamic Cursor Element -->
    <client-only>
      <LazyCursor/>
    </client-only>

    <div class="preloader" :class="preloaderClasses">
      <div class="preloader__overlay"/>
    </div>

  </main>

</template>

<script setup>

let preloaded = ref(false);

const preloaderClasses = computed(() => {
  return {
    'preloader--loaded': preloaded.value
  }
})

onMounted(() => {
  nextTick(() => {
    preloaded.value = true;
  });
});

</script>

<style lang="scss" scoped>

.preloader__overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #050016;
  z-index: 9998;
  transition: all 2s cubic-bezier(0.6, 0, 0, 1);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.preloader--loaded{
  .preloader__overlay{
    pointer-events: none;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
}

</style>
