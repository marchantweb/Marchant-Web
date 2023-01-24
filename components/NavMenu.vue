<template>
  <div class="container mt-6">
    <div class="row justify-content-end">
      <div class="col-auto">
        <section class="nav-container nav-container--open">
          <a href="#" class="nav-icon mouse-md">
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
            <div class="nav-icon__line"></div>
          </a>
          <nav class="nav-links">
            <NuxtLink to="/about">
              <button>About</button>
            </NuxtLink>
            <NuxtLink to="/portfolio">
              <button>Portfolio</button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button>Contact</button>
            </NuxtLink>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.nav-container {
  position: relative;

  .nav-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 30px;
    cursor: pointer;
  }

  .nav-icon__line {
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
    pointer-events: none;
  }

  .nav-links {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 0.5s ease-in-out;
    position: absolute;
    top: -10px;
    right: 90px;
    display: flex;
    flex-direction: row;
    gap: 30px;

    button{
      background: none;
      border: none;
      padding: 10px 30px;
      margin: 0;
      color: white;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
    }
  }

  &.nav-container--open{
    .nav-links{
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

}

</style>
