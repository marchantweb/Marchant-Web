<template>
  <section class="page">

    <div class="container">
      <div class="row mt-6">
        <div class="col-6 about-scroller">
          <MWIcon :size="50" type="dark"/>
          <CodeTag class="mt-5 mb-3">about</CodeTag>
          <h1>Simon Le Marchant</h1>
          <StatusIndicator class="mb-4"/>
          <h2 class="mb-4">Creative front end engineer with 10+ years building bespoke sites, interactive experiences
            and custom web software.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit omnis quae velit. Ab at consequatur culpa
            dignissimos, dolorem dolorum excepturi iure maiores nam nesciunt possimus praesentium quas sint sit,
            veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta, doloremque
            eos eveniet, explicabo iste iure laudantium maxime neque odit, provident repudiandae rerum tempore
            temporibus ut vitae. In, reprehenderit.
          </p>
          <p class="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque consequuntur cupiditate
            doloremque eum exercitationem fugiat illo ipsam libero minima necessitatibus nesciunt nostrum omnis optio
            sed, ut veritatis voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis
            quibusdam quis tempora. Aperiam architecto atque dolorem eos expedita fugiat iste, laboriosam, laudantium
            magni, odio quos reiciendis? Aut, eveniet, reiciendis.
          </p>
          <h2 class="mb-3">Clients &amp; Partners</h2>
          <p class="mb-8">
            Over the past 10+ years I've had the opportunity to work alongside some of the most talented people in the
            industry for some incredible clients.
          </p>
          <h2 class="mb-3">My Stack</h2>
          <p class="mb-5">
            Most of my time is spent working with <a href="https://vuejs.org/" target="_blank" class="mouse-md">Vue</a>,
            <a href="https://nuxt.com/" target="_blank" class="mouse-md">Nuxt</a>, and <a href="https://electronJS.org/"
                                                                                          target="_blank"
                                                                                          class="mouse-md">Electron</a>,
            but I also have experience with a wide range
            of other technologies and frameworks. I'm always trying new things, and keeping up-to-date with the latest
            releases and best practices.
          </p>
          <h2 class="mb-3">Awards &amp; Recognition</h2>
          <p>
            In February 2023 my work on this website won both an Honorable Mention and later "Site of the Day" from
            Awwwards, which recognizes the talent and effort of the best web designers, developers and agencies in the
            world.
          </p>
          <p>
            In terms of freelancing, I was in the top 3% of all full-stack developers on <a
              href="https://www.upwork.com/freelancers/marchantweb" target="_blank" class="mouse-md">UpWork</a> as a
            top-rated professional, and touched multitudes of different projects with a near perfect 5-star rating.
          </p>
          <p class="mb-5">I've also supported teams on other projects that have won awards at various levels from different organizations, and have
            been considered a <em>"Star Partner"</em> with various clients in the past.</p>
          <h2 class="mb-3">My Background</h2>
          <p>
            Before I focused on front-end work I spent a number of years working as a full-stack developer, so I have a
            solid proficiency across the back-end. I've built many custom WordPress themes, plugins and websites - along
            with some personal SaaS platforms for MySQL data management on AWS.
          </p>
          <p>While I didn't consider myself a designer at any point in time, I fell into UX design as a necessity for
            projects that needed it, and ended up consulting and providing both UX design and development services
            for some large contracts, including government and corporate work.</p>
          <p>
            In my early years before spending most of my time in code, I ran <a
              href="https://www.youtube.com/watch?v=i4sVMSV0OhA" target="_blank"
              class="mouse-md">Small Island Productions</a>. We produced branding,
            motion design, video content and campaigns for corporate clients. I've bought a lot of that experience in
            After Effects to my front-end work in animations/interaction design, as well as my understanding of best
            practices for SEO and marketing funnels. I also did wedding videography... but never again.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.about-scroller {
  overflow-y: scroll;
  max-height: 85vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: ns-resize;

  *:not(a) {
    cursor: ns-resize;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
