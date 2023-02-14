<template>
  <div class="col-12 my-4 my-lg-5">
    <figure>
    <img v-once v-if="'file' in block['image']" class="my-4 mouse-sm" :src="'https://api.marchantweb.com/images/' + encodeURI(block['id'])" alt="Visual aid for the case study.">
      <figcaption v-if="'caption' in block['image'] && block['image']['caption'].length > 0">{{block['image']['caption'][0]['plain_text']}}</figcaption>
    </figure>
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

figcaption{
  opacity: 0.5;
  font-size: 14px;
}

</style>
