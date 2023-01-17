<template>

  <main>

    <!-- WebGL Background -->
    <client-only>
      <LazyHero/>
    </client-only>

    <!-- Page Content -->
    <slot/>

    <!-- Dynamic Cursor Element -->
    <client-only>
      <LazyCursor/>
    </client-only>

  </main>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
