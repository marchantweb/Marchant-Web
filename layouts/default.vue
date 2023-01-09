<template>
  <main>

    <client-only>

      <!-- Dynamic Cursor Element -->
      <Cursor/>

      <!-- WebGL Background -->
      <Hero/>

    </client-only>

    <!-- Page Content -->
    <slot/>

  </main>
</template>
