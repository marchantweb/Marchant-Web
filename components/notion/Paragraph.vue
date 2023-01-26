<template>
  <p>
    <span v-for="item in block['paragraph']['rich_text']">{{ item.text.content }}</span>
  </p>
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
