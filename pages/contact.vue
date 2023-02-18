<template>
  <section class="page">

    <NuxtLink class="back-link mouse-md" to="/"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back</NuxtLink>

    <div class="container-xxxl">
      <div class="row mt-6 justify-content-start">
        <div class="col-9 offset-3">
          <div class="px-9">
            <CodeTag class="mt-5 mb-3">contact</CodeTag>
            <h1 class="mb-4">Let's Chat</h1>
            <h2 class="mb-1">Feel free to pick a date/time below to schedule a discovery session, or email me anytime at
              <a href="mailto:hello@marchantweb.com" target="blank" class="mouse-md" style="color: #7A4FEE">hello@marchantweb.com</a>.</h2>
          </div>
          <div id="calendar-container" class="mb-6"/>
        </div>
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

useScriptTag(
    'https://assets.calendly.com/assets/external/widget.js',
    (el) => {
      if(document.querySelectorAll("iframe").length === 0 && document.getElementById('calendar-container')) {
        Calendly.initInlineWidget({
          url: 'https://calendly.com/marchantweb/discovery?hide_event_type_details=0&hide_gdpr_banner=1&text_color=212a36&primary_color=7a4fee',
          parentElement: document.getElementById('calendar-container'),
          prefill: {},
          utm: {}
        });
      }
    },
);

definePageMeta({
  pageTransition: {
    onAfterEnter: (el) => {
      if(document.querySelectorAll("iframe").length === 0 && document.getElementById('calendar-container')) {
        Calendly.initInlineWidget({
          url: 'https://calendly.com/marchantweb/discovery?hide_event_type_details=1&hide_gdpr_banner=1&text_color=212a36&primary_color=7a4fee',
          parentElement: document.getElementById('calendar-container'),
          prefill: {},
          utm: {}
        });
      }
    }
  }
});

</script>

<style lang="scss" scoped>

#calendar-container {
  height: 700px;
  width: 100%;
}

.back-link{
  color: #212A36;
  position: fixed;
  top: 40px;
  left: 60px;
}

</style>
