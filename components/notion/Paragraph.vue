<template>
  <div class="col-12 col-lg-11 col-xl-9 col-xxl-8">
    <p data-aos="fade-up">
      <span v-for="item in block['paragraph']['rich_text']" :style="textStyles(item)">{{ item.text.content }}</span>
    </p>
  </div>
</template>

<script setup>

defineProps({
  block: {
    type: Object,
    required: true
  }
});

const textStyles = (item) =>{
  const annotations = item.annotations;
  return {
    color: annotations.color ? annotations.color : 'inherit',
    fontWeight: annotations.bold ? 'bold' : 'normal',
    fontStyle: annotations.italic ? 'italic' : 'normal'
  }
}

</script>

<style lang="scss" scoped>

p{
  text-align: justify;

  @media screen and (max-width: 992px) {
    text-align: left;
  }

  span{
    font-size: 1.1rem;
  }
}

</style>
