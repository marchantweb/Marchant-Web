<template>
  <NuxtLink to="/">
    <img class="main-logo mouse-md" :src="'/icon-' + type + '.svg'" :width="size" :height="size"
         alt="A small icon with a circle that merges into a square and the text MW">
  </NuxtLink>
</template>

<script setup>

defineProps({
  size: {
    type: Number,
    default: 64
  },
  type: {
    type: String,
    default: 'white'
  }
});

</script>

<style scoped>

.main-logo {
  display: block;
}

</style>
