<template>
  <div class="location-indicator">
    <span class="location-indicator__light"/> Currently in {{ location }}
  </div>
</template>

<script setup>

// Acquire the location from the metadata API
const metadata = await $fetch('/api/metadata');
const location = metadata["location"];

</script>

<style lang="scss" scoped>

.location-indicator {
  color: #AFBFD6;
}

.location-indicator__light {
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
