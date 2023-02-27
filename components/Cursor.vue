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
let startingSize = 22;
let size = ref(22);
let outputX = ref(x.value);
let outputY = ref(y.value);

// Smoothly move the cursor to the mouse position
gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - 0.3, gsap.ticker.deltaRatio());
  outputX.value += (x.value - outputX.value) * dt;
  outputY.value += (y.value - outputY.value) * dt;
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
 * Respond to any DOM element with the class of ".mouse-*" by increasing the size of the cursor
 * @param className - The name of the CSS class that we're looking for to make the change
 * @param cursorSize - The size of the cursor when the element is hovered
 */
const setupMouseEffect = (className, cursorSize) => {
  document.body.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains(className)) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.2, value: cursorSize});
    }
  });
  document.body.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains(className)) {
      gsap.killTweensOf(size);
      gsap.to(size, {duration: 0.1, value: startingSize});
    }
  });
};

onMounted(() => {
  setupMouseEffect('mouse-lg', 200);
  setupMouseEffect('mouse-md', 100);
  setupMouseEffect('mouse-sm', 60);
});

// Reset the cursor size when the route changes
const route = useRoute();
watch(route, () => {
  gsap.killTweensOf(size);
  gsap.to(size, {duration: 0.1, value: startingSize});
}, {
  flush: 'post',
  deep: true
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
  mix-blend-mode: difference;
  backdrop-filter: grayscale(1);
  -webkit-backdrop-filter: grayscale(1);
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &.cursor--hidden {
    opacity: 0;
  }
}

</style>
