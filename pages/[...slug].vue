<template>
  <section class="page">

    <div class="container">
      <div class="row mt-9 justify-content-center">
        <div class="col-7">
          <MWIcon :size="50" type="white" />
          <h1 class="mt-6 mb-3 lead-text">404 > Page Not Found</h1>
          <p class="text-light">
            Sorry, looks you've navigated to a broken link. Whoops.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.lead-text {
  color: white;
  font-size: 40px;
  line-height: 48px;
  width: 740px;
  font-family: "N27", sans-serif;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
  letter-spacing: 1px;
  text-transform: uppercase;
}

</style>
