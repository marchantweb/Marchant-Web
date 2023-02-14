<template>

  <main>

    <!-- Page Content -->
    <slot/>

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
  transition: all 2s cubic-bezier(0.4, 0, 0, 1);
  transform: translateX(0) translateZ(0);
  backface-visibility: hidden;
}

.preloader--loaded{
  .preloader__overlay{
    pointer-events: none;
    transform: translateX(-100%) translateZ(0);
  }
}

</style>
