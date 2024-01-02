<template>
  <section class="page">

    <div class="container">
      <div class="row mt-8">
        <div class="col-auto">
          <MWIcon type="white" />
          <CodeLine :number="'404'" class="mt-5 mt-lg-7 mb-5">
            <span class="code--purple">error:</span>
            <span class="code--yellow">&nbsp;page</span>
            <span class="code--green">&nbsp;not</span>
            <span class="code--white">&nbsp;found</span>
          </CodeLine>
          <h1 class="mb-5 lead">OH SH***T;</h1>
          <p class="text-light mb-6">
            Looks you've navigated to a broken link.<br><em>Try not doing that again in the future.</em>
          </p>
          <ActionButton to="/" data-aos="fade-up">
            <i class="fa-sharp fa-solid fa-arrow-up-left"></i>
            Back
          </ActionButton>
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
