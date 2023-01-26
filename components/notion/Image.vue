<template>
  <img class="my-4" :src="block.image.file.url" style="width: 100%; border-radius: 5px;">
</template>

<script setup>

defineProps({
  block: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>

</style>
