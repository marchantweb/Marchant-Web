<template>
  <div class="status-indicator">
    <span class="status-indicator__light"/> {{ status }}
  </div>
</template>

<script setup>

// Acquire the status from the metadata API
const metadata = await $fetch('https://api.marchantweb.com/metadata');
const status = metadata["status"];

</script>

<style lang="scss" scoped>

.status-indicator {
  color: #AFBFD6;
  cursor: default;
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
