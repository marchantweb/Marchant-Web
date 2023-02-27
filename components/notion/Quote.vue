<template>
  <div class="col-12 col-lg-11 mt-6 mt-lg-9">
    <CodeLine :number="'//'" class="mb-5 mb-lg-4">
      <span class="code--yellow">npm</span>
      <span class="code--green">&nbsp;run</span>
      <span class="code--white">&nbsp;feedback</span>
    </CodeLine>
    <p data-aos="fade-up">
      <span class="quote-symbol">"</span>
      <span v-for="item in block['quote']['rich_text']" :style="textStyles(item)">{{ item.text.content }}</span>
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

const textStyles = (item) => {
  const annotations = item.annotations;
  return {
    color: annotations.color ? annotations.color : 'inherit',
    fontWeight: annotations.bold ? 'bold' : 'normal',
    fontStyle: annotations.italic ? 'italic' : 'normal',
    textDecoration: annotations.underline ? 'underline' : 'none'
  }
}

</script>

<style lang="scss" scoped>



p {
  span {
    font-size: 2.5rem;
    line-height: 1;
    font-family: "N27", sans-serif;
    text-transform: uppercase;

    &.quote-symbol{
      font-size: 8rem;
      display: block;

      @media screen and (max-width: 992px) {
        font-size: 5rem;
      }
    }

    @media screen and (max-width: 992px) {
      font-size: 1.8rem;
    }
  }
}

</style>
