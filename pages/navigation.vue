<template>
  <section class="page">

    <div class="container">
      <div class="row mt-8">
        <div class="col">
          <nav class="menu">
            <ul>
              <li>
                <NuxtLink to="/" class="mouse-md">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="mouse-md">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/portfolio" class="mouse-md">Portfolio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="mouse-md">Consulting</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="mouse-md">Contact</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.menu {
  ul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    counter-reset: nav-counter 0;

    li {
      list-style: none;
      margin: 15px 0;
      counter-increment: nav-counter 1;

      a {
        text-decoration: none;
        color: white;
        font-size: 42px;
        font-family: "N27", sans-serif;
        text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
        letter-spacing: 1px;
        text-transform: uppercase;

        &:before{
          content: "0" counter(nav-counter) ". ";
          font-size: 22px;
        }
      }
    }
  }
}

</style>
