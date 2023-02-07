<template>
  <div :class="codeLineClasses">
    <div class="code-line__number">
      {{ number }}
    </div>
    <div class="code-line__code">
      <slot/>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  number: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    default: false
  }
});

const isVisible = toRef(props, 'visible');

const codeLineClasses = computed(() => {
  return {
    'code-line': true,
    'code-line--visible': isVisible.value
  }
});

</script>

<style lang="scss" scoped>

.code-line {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  width: fit-content;
  border-radius: 3px;
  overflow: hidden;
  opacity: 0;

  .code-line__number {
    display: block;
    width: fit-content;
    padding: 6px 10px;
    background-color: #6675E4;
    color: rgba(255,255,255,0.5);
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
  }

  .code-line__code {
    display: block;
    padding: 6px 20px;
    background-color: #1E1F22;
    color: white;
    width: fit-content;
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;

    :deep(span){
      font-family: 'JetBrains Mono', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
    }

    :deep(.code--white){
      color: #FFFFFF;
    }

    :deep(.code--purple){
      color: #b774e1;
    }

    :deep(span.code--yellow){
      color: #FFC66D;
    }

    :deep(span.code--green){
      color: #A7C25F;
    }

    :deep(span.code--orange){
      color: #DF802F;
    }
  }

  &.code-line--visible {
    opacity: 1;
  }
}

</style>
