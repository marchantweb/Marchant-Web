<template>
  <NuxtLink to="/portfolio" class="scroll-hint mouse-md d-none d-xl-flex">
    <span>Scroll to Explore</span> <i class="fa-light fa-computer-mouse-scrollwheel fa-2x"></i>
  </NuxtLink>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.scroll-hint {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  width: 300px;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 50px;
    height: 1px;
    background-color: white;
    display: block;
    animation: loopingBorder 2s linear infinite;
    transform-origin: 0 center;
  }

  span {
    color: #F2F2F2;
    font-weight: 600;
    margin-right: 30px;
    pointer-events: none;
    opacity: 0;
    transform: translateY(20px);
    animation: animateContentIn 1s ease-in-out forwards;
    animation-delay: 1s;
  }

  i {
    color: #F2F2F2;
    pointer-events: none;
    opacity: 0;
    transform: translateY(20px);
    animation: animateContentIn 1s ease-in-out forwards;
    animation-delay: 1s;
  }
}

@keyframes animateContentIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes loopingBorder {
  0% {
    transform: translateX(0) scaleX(0);
    transform-origin: 0 center;
  }
  40% {
    transform: translateX(150px) scaleX(1);
    transform-origin: 50% center;
  }
  80% {
    width: 0;
    transform: translateX(300px) scaleX(0);
    transform-origin: 100% center;
  }
  100% {
    width: 0;
    transform: translateX(300px) scaleX(0);
    transform-origin: 100% center;
  }
}

</style>
