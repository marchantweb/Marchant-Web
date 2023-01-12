<template>
  <main>

    <client-only>

      <!-- Dynamic Cursor Element -->
      <LazyCursor/>

      <!-- WebGL Background -->
      <LazyHero/>

    </client-only>

    <!-- Page Content -->
    <slot/>

  </main>
</template>
