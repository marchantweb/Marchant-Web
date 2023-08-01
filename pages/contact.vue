<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <NuxtLink class="back-link mouse-md mt-4 mt-lg-0" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back
          </NuxtLink>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <p class="mb-4">Feel free to reach out. I'm always happy to chat to discuss ideas, feasibility, schedule,
            things like that. Or if you just have questions or want to say hi, that's cool too.</p>
          <h2 class="mb-7"><a href="mailto:hello@marchantweb.com" target="blank" class="mouse-md"
                                style="color: #7A4FEE">hello@marchantweb.com</a></h2>
          <h3 class="mb-3">Discovery Session</h3>
          <p class="mb-4">If you want to dive more into your project specifics, you can schedule a 30-minute meeting to see if we're
            a good fit.</p>
          <ActionButton to="https://calendly.com/marchantweb/discovery" target="_blank">
            <i class="fa-sharp fa-regular fa-calendar-range fa-lg"></i>
            Book a Discovery Session
          </ActionButton>
        </div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>
    </div>

  </section>
</template>

<script setup>

import {useScriptTag} from '@vueuse/core'

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
  transition: all 1.5s cubic-bezier(0.4, 0, 0, 1);
  transition-delay: 0.5s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(10%) translateZ(0);
  transform-origin: right center;
}

#calendar-container {
  height: 700px;
  width: 100%;
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
