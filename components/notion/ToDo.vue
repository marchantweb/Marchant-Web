<template>
  <div :class="isArticle ? 'col' : 'col-12 col-lg-11 col-xl-9 col-xxl-8'">
    <p data-aos="fade-up" class="mb-1">
      <span class="pe-3" v-if="block['to_do']['checked'] === false">☐</span>
      <span class="pe-3" v-if="block['to_do']['checked'] === true">🗹</span>
      <span v-for="item in block['to_do']['rich_text']" :class="textClasses(item)"
            :style="textStyles(item)">
          {{ item.text.content }}
      </span>
    </p>
  </div>
</template>

<script setup>

defineProps({
  block: {
    type: Object,
    required: true
  },
  isArticle: {
    type: Boolean,
    default: false
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

const textClasses = (item) => {
  const annotations = item.annotations;
  return {
    'text--code': annotations.code
  }
}

</script>

<style lang="scss" scoped>

p {
  text-align: justify;

  @media screen and (max-width: 992px) {
    text-align: left;
  }

  span {
    font-size: 1.1rem;

    &.text--code {
      background-color: #ececf0;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: "JetBrains Mono", monospace;
      font-size: 14px;
    }
  }
}

.article__content p span {
  font-size: 1.1rem;
  line-height: 1.7;
}

</style>
