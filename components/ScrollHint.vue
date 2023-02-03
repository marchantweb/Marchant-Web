<template>
  <div class="scroll-hint mouse-md">
    <span>Scroll to Explore Projects</span> <i class="fa-light fa-computer-mouse-scrollwheel fa-2x fa-fade" style="--fa-animation-duration: 3s;"></i>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.scroll-hint {

  border-bottom: 2px solid #7795c2;
  padding-bottom: 20px;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  span {
    color: white;
    font-weight: 600;
    margin-right: 30px;
    pointer-events: none;
  }

  i {
    color: white;
    pointer-events: none;
  }
}

</style>
