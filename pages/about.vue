<template>
  <section class="page">

    <NuxtLink class="back-link mouse-md" to="/">Back<i class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>

    <div class="container-xxxl">
      <div class="row mt-6">
        <main class="d-flex flex-column">
          <div class="col-5 mb-4">
            <CodeTag class="mt-5 mb-3">about</CodeTag>
            <h1 class="mb-3">Simon Le Marchant</h1>
            <StatusIndicator type="dark"/>
            <h2 class="my-4">Senior front end engineer with 10+ years building creative websites, interactive experiences
              and custom web software.</h2>
            <p>
              Hey I’m Simon, a creative front end engineer based in Orlando, Florida. I'm passionate about creating
              incredible user experiences with web technology. I specialize in programming with <a
                href="https://vuejs.org/" target="_blank" class="mouse-sm">Vue</a>,
              <a href="https://nuxt.com/" target="_blank" class="mouse-sm">Nuxt</a>, and <a href="https://electronJS.org/"
                                                                                            target="_blank"
                                                                                            class="mouse-sm">Electron</a>,
              although I have an extensive full-stack development background.
            </p>
            <p>
              I love writing code but I'm also experienced in UX consulting, with a keen eye for detail and an
              understanding of user interactions and best practices. I’ve worked on many projects where I start early in
              the discovery process, guide and design the UX from the ground up, and then get to work building it.
            </p>
            <h3 class="mt-5 mb-4">Clients &amp; Partners</h3>
            <p class="mb-4">
              Over the past 10+ years I've had the opportunity to work alongside some of the most talented people in the
              industry for some incredible clients, such as:
            </p>
          </div>
          <div class="col-6">
            <div class="client-logo__container">
              <img src="~/assets/images/clients/google.svg" alt="Google logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/dolby.svg" alt="Dolby logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/abm.svg" alt="ABM logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/steward.svg" alt="Steward logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/mit.svg" alt="MIT logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/alaska.svg" alt="Alaska Airlines logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/stanley.svg" alt="Stanley Black and Decker logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/checkbook.svg" alt="Consumers' Checkbook logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/georgia.svg" alt="University of Georgia logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/mcasd.svg" alt="MCASD logo" class="client-logo mouse-md">
            </div>
          </div>
          <div class="col-5 mb-7">
            <h3 class="mt-6 mb-4">Awards &amp; Recognition</h3>
            <p>
              I was in the top 3% of all full-stack developers on UpWork as a top-rated professional, and touched
              multitudes of different projects with a near perfect 5-star rating.
            </p>
            <p>
              I've also supported teams on other projects that have won awards at various levels from different
              organizations, and have been considered a <em>"Star Partner"</em> with one particular client for completely
              overhauling their online business, driving $3M+ in revenue.
            </p>
            <h3 class="mt-5 mb-4">Freelancing &amp; Consulting</h3>
            <p>
              I provide consulting and work-for-hire for agencies looking to build next-level creative projects. I can take on projects solo, act as a technical lead, or supplement your existing team by smashing on a keyboard.
            </p>
            <p>Consulting and programming work is billed at $225/hr. For larger projects I offer two-week
              sprints at a discount. I’m always happy to provide an estimate for any project following an
              initial discovery call.</p>
            <h3 class="mt-5 mb-4">
              Get in Touch
            </h3>
            <p class="mb-5">
              Thanks for reading a little bit about me. I’m always happy to chat and provide any helpful advice that I can. You can schedule a discovery call to see if we’re a good fit, or just email at <a href="mailto:hello@marchantweb.com" class="mouse-sm">hello@marchantweb.com</a>.
            </p>
            <ActionButton to="https://calendly.com/marchantweb/discovery" target="_blank">
              <i class="fa-sharp fa-solid fa-phone-arrow-up-right"></i>
              Schedule a call
            </ActionButton>
          </div>
        </main>

      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'Hey, I\'m Simon | Marchant Web',
  meta: [
    {
      name: 'description',
      content: 'Senior front end engineer with 10+ years building creative websites, interactive experiences and custom web software.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

</script>

<style lang="scss" scoped>

.page-enter-active {
  transition: all 2s cubic-bezier(0.6, 0, 0, 1);
}

.page-leave-active {
  transition: all 1.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-10%) translateZ(0);
  transform-origin: left center;
}

.client-logo__container {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &:hover{
    .client-logo:not(:hover) {
      opacity: 0.2;
    }
  }
}

.client-logo {
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.back-link{
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;
}

</style>
