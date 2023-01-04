<template>
  <div class="cursor" :style="{ transform: 'translate(' + (x - 10) + 'px, ' + (y - 10) + 'px)' }"></div>
</template>

<script setup>

import {useMouse} from "@vueuse/core";

const {x, y} = useMouse();

</script>

<style lang="scss" scoped>

.cursor {
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 10;
  background-color: white;
  border-radius: 100%;
  top: 0;
  left: 0;
  backdrop-filter: grayscale(1);
  mix-blend-mode: difference;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

</style>
