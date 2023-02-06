<template>
  <section class="page">

    <div class="container">
      <div class="row mt-8">
        <div class="col-7">
          <MWIcon :size="50" type="white" />
          <CodeTag class="mt-5 mb-3">404</CodeTag>
          <h1 class="mt-6 mb-3 lead">Page Not Found</h1>
          <p class="text-light">
            Sorry, looks you've navigated to a broken link. Whoops.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.lead {
  color: #F2F2F2;
  width: 740px;
  text-shadow: 0 22px 30px rgba(0, 0, 0, 0.4), 2px 2px 1px rgba(206, 89, 55, 0);
  letter-spacing: 1px;
  text-transform: uppercase;
}

</style>
