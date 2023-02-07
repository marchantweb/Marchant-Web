<template>
  <div class="col-12 my-5">
    <img v-once v-if="'file' in block.image" class="my-4 mouse-sm" :src="block.image.file.url">
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

img{
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(0,0,0,0.2) 0 60px 15px -40px, rgba(0,0,0,0.06) 0 4px 6px -2px;
}

</style>
