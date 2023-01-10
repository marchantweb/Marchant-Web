<template>
  <div class="cursor"
       :style="{ transform: 'translate(' + (x - (size/2)) + 'px, ' + (y - (size/2)) + 'px)', width: size + 'px', height: size + 'px' }"></div>
</template>

<script setup>

import {useMouse} from "@vueuse/core";

const {x, y} = useMouse();

let size = ref(20);

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
