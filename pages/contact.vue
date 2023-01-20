<template>
  <section class="page">

    <div class="container">
      <div class="row mt-6 justify-content-start">
        <div class="col-6 offset-5">
          <MWIcon :size="50" type="dark"/>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Chat</h1>
          <h2 class="mb-4">Feel free to pick a date/time below to schedule a discovery session, or email me anytime at
            <a href="#" target="blank" class="mouse-md">hello@marchantweb.com</a>.</h2>
          <p>
            <strong>Please note that I do charge $225 for this initial session.</strong> This helps to cover my
            preparation time and ensures that the conversation is productive for both of us. There's no obligation to
            hire me after this call, that's your choice.
          </p>
          <div id="calendar-container"/>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

onMounted(() => {
  // TODO: Replace with a design that opens the form in an external window. Layout of this element will be impractical.
  /* Calendly.initInlineWidget({
     url: 'https://calendly.com/marchantweb/discovery?hide_gdpr_banner=1&primary_color=6900ff',
     parentElement: document.getElementById('calendar-container'),
     prefill: {},
     utm: {}
   });*/
})

</script>

<style lang="scss" scoped>

#calendar-container {
  height: 700px;
  width: 100%;
}

</style>
