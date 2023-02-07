<template>
  <div class="col-12">
    <h2 class="mt-5 mb-4">
      <span v-for="item in block['heading_2']['rich_text']">{{ item.text.content }}</span>
    </h2>
  </div>
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
