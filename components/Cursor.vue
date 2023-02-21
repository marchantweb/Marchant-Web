<template>
  <div :class="cursorClasses"
       :style="{ transform: 'translate(' + Math.round((outputX - (size/2))) + 'px, ' + Math.round((outputY - (size/2)) + 1) + 'px)', width: size + 'px', height: size + 'px' }"></div>
</template>

<script setup>

import {useMouse, watchOnce} from "@vueuse/core";
import {gsap} from "gsap";

const {x, y} = useMouse({
  type: 'client'
});

// Starting size/position of the cursor
let size = ref(22);
let outputX = ref(x.value);
let outputY = ref(y.value);

// Smoothly move the cursor to the mouse position
gsap.ticker.add(() => {
  outputX.value += (x.value - outputX.value) * 0.5;
  outputY.value += (y.value - outputY.value) * 0.5;
});

// Hide the cursor until the user moves their mouse
const isCursorVisible = ref(false);
const cursorClasses = computed(() => {
  return {
    'cursor d-none d-xl-block': true,
    'cursor--hidden': !isCursorVisible.value,
  }
});
watchOnce(x, () => {
  isCursorVisible.value = true;
})

/**
 * Respond to any DOM element with the class of ".mouse-lg" by increasing the size of the cursor
 */
onMounted(() => {
  document.body.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('mouse-lg')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.2, value: 200});
    }
  });
  document.body.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('mouse-lg')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.1, value: 22});
    }
  });
  document.body.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('mouse-md')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.2, value: 100});
    }
  });
  document.body.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('mouse-md')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.1, value: 22});
    }
  });
  document.body.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('mouse-sm')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.2, value: 60});
    }
  });
  document.body.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('mouse-sm')) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.1, value: 22});
    }
  });
});


</script>

<style lang="scss" scoped>

.cursor {
  position: fixed;
  z-index: 10000;
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  top: 0;
  left: 0;
  backdrop-filter: grayscale(1);
  mix-blend-mode: difference;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &.cursor--hidden{
    opacity: 0;
  }
}

</style>
