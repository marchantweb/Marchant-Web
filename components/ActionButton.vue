<template>
  <NuxtLink :to="props.to" class="action-button mouse-md" :target="props.external ? props.external : null">
    <slot/>
  </NuxtLink>
</template>

<script setup>

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  external: {
    type: String,
    default: null
  }
})

</script>

<style lang="scss" scoped>

.action-button{
  background-color: #7A4FEE;
  border: none;
  color: white;
  padding: 15px 45px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 11px 5px -6px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover{
    background-color: #1E1F22;
    transform: translateY(-5px);
    box-shadow: rgba(50, 50, 93, 0.15) 0 14px 10px 0;
  }

  :deep(i){
    pointer-events: none;
    margin-right: 10px;
    display: inline-block;
  }
}

</style>
