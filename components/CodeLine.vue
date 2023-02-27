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
  }
});

const codeLineClasses = computed(() => {
  return {
    'code-line': true
  }
});

</script>

<style lang="scss" scoped>

.code-line {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;

  .code-line__number {
    display: block;
    width: fit-content;
    padding: 6px 10px;
    background-color: #5e4fd9;
    color: rgba(255,255,255,0.5);
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    transform: scale(0);
    border-radius: 5px;
    animation: scaleNumberUp 0.8s cubic-bezier(0.6, 0, 0, 1) forwards;
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
    transform: scaleX(0);
    animation: scaleCodeLineX 0.8s cubic-bezier(0.4, 0, 0, 1) forwards;
    animation-delay: 0.8s;
    transform-origin: left center;
    box-shadow: rgba(50, 50, 93, 0.25) 0 11px 5px -6px;

    :deep(span){
      font-family: 'JetBrains Mono', sans-serif;
      font-weight: 400;
      font-size: 0.9rem;
      opacity: 0;
      transform: translateX(-2px);
      display: inline-block;
      animation: fadeIn 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
      position: relative;

      &:after{
        content:"";
        width: 5px;
        height: 100%;
        background-color: #CDCDCD;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        mix-blend-mode: difference;
        opacity: 0;
        visibility: hidden;
        animation: cursorIn 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
      }

      // Animation delays for code drawing
      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: #{1 + ($i * 0.2)}s;

          &:after{
            animation-delay: #{1 + ($i * 0.2)}s;
          }

        }
      }
    }

    :deep(.code--white){
      color: #FFFFFF;
    }

    :deep(.code--purple){
      color: #af97f6;

      &:after{
        background-color: #af97f6;
      }
    }

    :deep(span.code--yellow){
      color: #ffd66d;

      &:after{
        background-color: #ffd66d;
      }
    }

    :deep(span.code--green){
      color: #8fda74;

      &:after{
        background-color: #8fda74;
      }
    }

    :deep(span.code--orange){
      color: #DF802F;

      &:after{
        background-color: #DF802F;
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }
  20%{
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes cursorIn{
  0%{
    opacity: 0;
    visibility: hidden;
    left: 0;
  }
  1%{
    opacity: 1;
    visibility: visible;
  }
  99%{
    opacity: 1;
    visibility: visible;
  }
  100%{
    opacity: 0;
    visibility: hidden;
    left: 100%;
  }
}

@keyframes scaleCodeLineX {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

@keyframes scaleNumberUp {
  0% {
    transform: scale(0);
    border-radius: 5px;
  }
  95%{
    border-radius: 5px;
  }
  100% {
    transform: scale(1);
    border-radius: 5px 0 0 5px;
  }
}

</style>
