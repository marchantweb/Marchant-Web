<template>
  <section class="page">

    <div class="container">
      <div class="row mt-7 justify-content-end">
        <div class="col-7">
          <MWIcon :size="50" type="dark" />
          <h1 class="mt-3">Let's Chat</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur, esse nesciunt nihil
            officiis placeat. Ad aliquam atque dignissimos, eaque ipsam, molestias omnis, quam quas quisquam suscipit
            ullam velit voluptate.
          </p>
          <div id="calendar-container" />
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
