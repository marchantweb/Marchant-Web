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
            <h2 class="my-4" itemprop="description">Hey I'm Simon — a creative frontend engineer with 15+ years of crafting innovative web projects.</h2>
            <div itemprop="knowsAbout">
              <p>
                I build things with <a
                    href="https://vuejs.org/" target="_blank" class="mouse-sm">Vue</a> and it's ecosystem of tooling. Before specializing in the frontend, I was a full-stack developer putting together enterprise-scale websites. I enjoy challenging Chrome and Safari to a battle of wits <em>(or patience)</em> and architecting simple solutions to complex problems.
              </p>
              <p>
                I've worked with a wide range of teams, from startups to Fortune 500 companies; typically in a principal
                technical role. Usually I partner with agencies, design studios, or startups to provide sprints of focused dev work.
              </p>
              <p>
                On a personal note... I live in Orlando FL with my wife and daughter. I <em style="text-decoration: underline">want</em> to say that I'm a big fan of the outdoors and that I like long walks on the beach; but instead my passion is programming so I'm usually just at my desk 🧑‍💻
              </p>
            </div>
            <h3 class="mt-5 mb-3">Some teams I've worked with:</h3>
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
              I'm interested in collaborating with people who are building creative websites, interactive experiences,
              or bespoke interfaces — especially those with graphics so intense that my GPU catches fire 🔥
            </p>
            <p class="mb-5">
              While I always have some sort of ongoing work, I'm open to discussing new opportunities. If you
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
