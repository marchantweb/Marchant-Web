<template>
  <div class="col-12">
    <h1 class="mt-5 mb-5" v-if="'heading_1' in block">
      <span v-for="item in block['heading_1']['rich_text']">{{ item.text.content }}</span>
    </h1>
    <h2 class="mt-5 mb-4" v-if="'heading_2' in block">
      <span v-for="item in block['heading_2']['rich_text']">{{ item.text.content }}</span>
    </h2>
    <h3 class="mt-4 mb-2" v-if="'heading_3' in block">
      <span v-for="item in block['heading_3']['rich_text']">{{ item.text.content }}</span>
    </h3>
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
