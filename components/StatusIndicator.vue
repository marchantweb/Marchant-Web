<template>
  <div :class="indicatorClasses">
    <span class="status-indicator__light" aria-hidden="true"/> {{ status }}
  </div>
</template>

<script setup>

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'light'
  }
});

const type = toRef(props, 'type');

const indicatorClasses = computed(() => {
  return {
    'status-indicator': true,
    [`status-indicator--${type.value}`]: true
  }
});

// Acquire the status from the metadata API
const metadata = await useMetadata();
const status = metadata.value["status"];

</script>

<style lang="scss" scoped>

.status-indicator {
  color: #AFBFD6;
  cursor: default;
  font-size: 0.9rem;

  &.status-indicator--dark{
    color: #6e829c;
  }
}

.status-indicator__light {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #1BBE8D;
  margin-right: 8px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1BBE8D;
    opacity: 0.5;
    animation: ping 2s cubic-bezier(0, 0, .3, 1) infinite;
  }

}

@keyframes ping {
  80%, to {
    opacity: 0;
    transform: scale(3);
  }
}

</style>
