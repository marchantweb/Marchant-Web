<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column" itemscope itemtype="https://schema.org/Person">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">Back<i
                class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">about</CodeTag>
            <div class="d-flex flex-row align-items-center mb-5">
              <img src="~assets/images/headshot.jpg" alt="Hey I'm Simon" class="headshot me-4 me-lg-5">
            </div>
            <h2 class="my-4" itemprop="description">Hey I'm Simon — a front-end engineer with 15+ years in
              leading and crafting innovative web projects.</h2>
            <div itemprop="knowsAbout">
              <p>
                I enjoy building with <a
                    href="https://vuejs.org/" target="_blank" class="mouse-sm">Vue</a>, <a href="https://nuxt.com/" target="_blank" class="mouse-sm">Nuxt</a>, and <a
                  href="https://electronJS.org/" target="_blank" class="mouse-sm">Electron</a>, but also have a
                comprehensive full-stack background going all the way back to when Macromedia Flash
                and ActionScript was a thing. My core principle is to be helpful. That's it, keeps things simple.
              </p>
              <p>
                I've worked with a wide range of teams, from startups to Fortune 500 companies; typically in a leading
                technical role but also as a helping hand. Usually I partner with agencies and
                startups to provide sprint-based blocks of focused dev time.
              </p>
              <p>
                Beyond code proficiency, I bring a holistic understanding of UX design principles on top of marketing
                and product development insight. I don't just code, I bring my own ideas to the table. From initial concept to final quality checks, I enjoy being part of the
                process and delivering top-notch work.
              </p>
            </div>
            <h3 class="mt-5 mb-3">Some companies I've worked with:</h3>
          </div>
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxxl-6">
            <div class="client-logo__container">
              <img src="~/assets/images/clients/google.svg" alt="Google logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/dolby.svg" alt="Dolby logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/abm.svg" alt="ABM logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/steward.svg" alt="Steward logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/mit.svg" alt="MIT logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/alaska.svg" alt="Alaska Airlines logo" class="client-logo mouse-md">
              <img src="~/assets/images/clients/stanley.svg" alt="Stanley Black and Decker logo"
                   class="client-logo mouse-md">
              <img src="~/assets/images/clients/panera.svg" alt="Panera Bread logo"
                   class="client-logo mouse-md">
              <img src="~/assets/images/clients/georgia.svg" alt="University of Georgia logo"
                   class="client-logo mouse-md">
              <img src="~/assets/images/clients/mcasd.svg" alt="MCASD logo" class="client-logo mouse-md">
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <h3 class="mt-5 mb-4">Availability</h3>
            <p>
              I'm interested in collaborating with teams that are building creative websites, interactive experiences,
              or bespoke interfaces — especially those with unique twists. Give me a reason to challenge the browser to a battle of wits <em>(or patience)</em>.
            </p>
            <p class="mb-5">
              While my schedule includes ongoing projects, I'm always interested in discussing new opportunities. If you
              have a project in mind, don't hesitate to reach out.
            </p>
            <ActionButton to="https://calendly.com/marchantweb/discovery" target="_blank" class="mb-6">
              <i class="fa-sharp fa-light fa-paper-plane"></i>
              Let's chat
            </ActionButton>
          </div>
        </main>

      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'Hey I\'m Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects. | Marchant Web',
  meta: [
    {
      name: 'description',
      content: 'Hey I\'m Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects.'
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

  &:hover {
    .client-logo:not(:hover) {
      opacity: 0.5;
    }
  }
}

.client-logo {
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.headshot {
  width: 80px;
  border-radius: 50%;

  @media screen and (max-width: 992px) {
    width: 70px;
  }
}

</style>
