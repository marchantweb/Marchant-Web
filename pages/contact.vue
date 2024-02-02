<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <NuxtLink class="back-link mouse-md mt-4 mt-lg-0" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back
          </NuxtLink>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <p class="mb-4">In 2024 — alongside my ongoing projects I'm keen to explore additional opportunities that spark creativity and challenge. If you have a project in mind, feel free to schedule a time to chat.</p>
          <ActionButton to="https://calendly.com/marchantweb/discovery" target="_blank" class="mb-6">
            <i class="fa-sharp fa-light fa-paper-plane"></i>
            Let's chat
          </ActionButton>
          <hr class="mb-6">
          <h3 class="mb-3">Alternate contact options</h3>
          <p class="mb-4">You can find me posting occasionally on <a href="https://twitter.com/marchantweb" target="blank" class="article__followlink mouse-sm">Twitter / 𝕏 (@marchantweb)</a> or email me at <a href="mailto:hello@marchantweb.com" target="blank" class="mouse-md" style="color: #7A4FEE">hello@marchantweb.com</a>.</p>
        </div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'Let\'s Chat - Schedule a Discovery Session | Marchant Web',
  meta: [
    {
      name: 'description',
      content: 'Schedule a one-hour initial discovery session for your project, or reach out via email.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

</script>

<style lang="scss" scoped>

.page-enter-active {
  transition: all 1.4s ease;
  transition-delay: 1.7s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  left: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.container-xxxl {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    min-height: unset;
  }
}

</style>
