<template>
  <div class="col-12">
    <div class="mt-5 mb-5" v-if="'code' in block">
      <div v-if="htmlCode" v-html="htmlCode"></div>
    </div>
  </div>
</template>

<script setup>
import {codeToHtml} from 'shikiji'

const props = defineProps({
  block: {
    type: Object,
    required: true
  }
});

let htmlCode = ref('');

const codeContent = props.block['code']['rich_text'][0]['text']['content'];
htmlCode.value = await codeToHtml(codeContent, {lang: props.block['code']['rich_text'][0]['text']['content'].includes('<template>') ? 'vue': 'javascript', theme: 'material-theme'});

</script>

<style lang="scss">
.shiki {
  border-radius: 5px;
  padding: 20px 30px;
  width: 100%;

  .article__content{
    @media screen and (min-width: 992px) {
      margin-left: -120px;
      margin-right: -120px;
      width: calc(100% + 240px);
    }
  }

  span {
    font-family: "JetBrains Mono", monospace;
    font-size: 1em;
  }
}
</style>
