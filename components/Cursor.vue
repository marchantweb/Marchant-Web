<template>
  <div class="cursor"
       :style="{ transform: 'translate(' + (outputX - (size/2)) + 'px, ' + (outputY - (size/2)) + 'px)', width: size + 'px', height: size + 'px' }"></div>
</template>

<script setup>

import {useMouse} from "@vueuse/core";
import {gsap} from "gsap";

const {x, y} = useMouse();

let size = ref(20);

let outputX = ref(0);
let outputY = ref(0);

gsap.ticker.add(() => {
  const dt = 0.4 * gsap.ticker.deltaRatio();
  outputX.value += (x.value - outputX.value) * dt;
  outputY.value += (y.value - outputY.value) * dt;
});


</script>

<style lang="scss" scoped>

.cursor {
  position: absolute;
  z-index: 999;
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  top: 0;
  left: 0;
  backdrop-filter: grayscale(1);
  mix-blend-mode: difference;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  pointer-events: none;
}

</style>
