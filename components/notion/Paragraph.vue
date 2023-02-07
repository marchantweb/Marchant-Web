<template>
  <div class="col-9">
    <p>
      <span v-for="item in block['paragraph']['rich_text']">{{ item.text.content }}</span>
    </p>
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

p span{
  font-size: 1.1rem;
}

</style>
