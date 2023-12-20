<template>
  <section v-once>
    <div v-for="block in blocks" :key="block.id">
      <NotionHeading :isArticle="isArticle" :block="block" v-if="block.type === 'heading_2'"/>
      <NotionImage :isArticle="isArticle" :block="block" v-if="block.type === 'image'"/>
      <NotionParagraph :isArticle="isArticle" :block="block" v-if="block.type === 'paragraph'"/>
      <NotionQuote :isArticle="isArticle" :block="block" v-if="block.type === 'quote'"/>
    </div>
  </section>
</template>

<script setup>

defineProps({
  blocks: {
    type: Array,
    required: true
  },
  isArticle: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>
