<template>

  <main>

    <!-- Navigation -->
    <Transition name="navigation">
      <NavMenu v-if="showNavigation"/>
    </Transition>

    <!-- Page Content -->
    <slot/>


    <!-- Bottom Bar -->
    <Transition name="bottom-bar">
      <div id="bottom-bar" class="container-fluid" v-if="showBottomBar">
        <BottomBar/>
      </div>
    </Transition>

    <!--  Preloader -->
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

const route = useRoute()

const showBottomBar = computed(() => {
  return route.path === '/' || route.path === '/explore'
})

const showNavigation = computed(() => {
  return route.path !== '/about' && route.path !== '/contact'
})

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
  transition: all 1.5s cubic-bezier(0.4, 0, 0, 1);
  transform: translateX(0) translateZ(0);
  backface-visibility: hidden;
}

.preloader--loaded {
  .preloader__overlay {
    pointer-events: none;
    transform: translateX(-100%) translateZ(0);
  }
}

.bottom-bar-enter-active, .bottom-bar-leave-active {
  transition: all 1s;
}

.bottom-bar-enter-from, .bottom-bar-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

.navigation-enter-active, .navigation-leave-active {
  transition: all 1s;
}

.bottom-bar-enter-active, .navigation-enter-active {
  transition-delay: 1.5s;
}

.navigation-enter-from, .navigation-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}

</style>
