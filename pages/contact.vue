<template>
  <section class="page">

    <NuxtLink class="back-link mouse-md d-none d-lg-block" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back
    </NuxtLink>

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <p class="mb-4">Feel free to reach out. I'm always happy to chat to discuss ideas, feasibility, schedule,
            things like that. Or if you just have questions or want to say hi, that's cool too.</p>
          <h2 class="mb-6">👋 <a href="mailto:hello@marchantweb.com" target="blank" class="mouse-md"
                                style="color: #7A4FEE">hello@marchantweb.com</a></h2>
          <h3 class="mb-3">Discovery Session</h3>
          <p>Once you're serious about working with me, the first step is to schedule a one-hour meeting to see if we're
            a good fit, and to get on the same page about the work that you're looking for.</p>
          <p class="mb-5"><strong>Please note that I bill $225 for an initial one-hour session.</strong> This helps me
            to adequately prepare, block off the time, and ensure that the conversation is productive for both of us.
          </p>
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
