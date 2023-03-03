<template>
  <div class="col-12 col-lg-11 col-xl-9 col-xxl-8">
    <p data-aos="fade-up">
      <span v-for="item in block['paragraph']['rich_text']" :class="textClasses(item)"
            :style="textStyles(item)">
        <span v-if="item.text.link">
          <a :href="item.text.link.url" target="_blank" rel="noopener noreferrer" class="mouse-md">
            {{ item.text.content }}
          </a>
        </span>
        <span v-else>
          {{ item.text.content }}
        </span>
      </span>
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

    &.text--code{
      background-color: #ececf0;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: "JetBrains Mono", monospace;
      font-size: 14px;
      font-weight: bold !important;
    }
  }
}

</style>
