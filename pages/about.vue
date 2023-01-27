<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-6">
        <div class="col-6 about-scroller">
          <CodeTag class="mt-5 mb-3">about</CodeTag>
          <h1>Simon Le Marchant</h1>
          <h2 class="mt-5 mb-4">Senior front end engineer with 10+ years building creative websites, interactive
            experiences
            and custom web software.</h2>
          <p>
            Hey I’m Simon, a creative front end engineer based in Orlando, Florida. I'm passionate about creating
            incredible user experiences with web technology. I specialize in programming with <a
              href="https://vuejs.org/" target="_blank" class="mouse-sm">Vue</a>,
            <a href="https://nuxt.com/" target="_blank" class="mouse-sm">Nuxt</a>, and <a href="https://electronJS.org/"
                                                                                          target="_blank"
                                                                                          class="mouse-sm">Electron</a>.
          </p>
          <p>
            I love writing code but I'm also experienced in UX consulting, with a keen eye for detail and an
            understanding of user interactions and best practices. I’ve worked on many projects where I start early in
            the discovery process, guide and design the UX from the ground up, and then get to work building it. I’m
            very opinionated about what makes for good design and UX flow, which is a blessing and a curse at times.
          </p>
          <p>
            In my day-to-day work, I strive to make sure that every project I take on is delivered to the highest degree
            of quality. There are so many facets to look at, but I’m constantly working to improve UX, performance,
            security, accessibility, and documentation towards industry best practices. Every detail matters.
          </p>
          <h2 class="mt-5 mb-4">Clients &amp; Partners</h2>
          <p class="mb-8">
            Over the past 10+ years I've had the opportunity to work alongside some of the most talented people in the
            industry for some incredible clients. To name-drop a few:
          </p>
          <h2 class="mt-5 mb-4">My Stack</h2>
          <p>
            As mentioned, most of my time is spent working with <a
              href="https://vuejs.org/" target="_blank" class="mouse-sm">Vue</a>,
            <a href="https://nuxt.com/" target="_blank" class="mouse-sm">Nuxt</a>, and <a href="https://electronJS.org/"
                                                                                          target="_blank"
                                                                                          class="mouse-sm">Electron</a>,
            but I also have experience with a wide range of other technologies and frameworks. I'm always trying new
            things, and keeping up-to-date with the latest releases and best practices.
          </p>
          <p>Here’s a non-exhaustive list of some technology I’ve worked with:</p>
          <ul style="column-count: 3">
            <li>GSAP</li>
            <li>ThreeJS</li>
            <li>Webpack</li>
            <li>Vite</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>Electron</li>
            <li>Wordpress</li>
            <li>Node / Express</li>
            <li>Contentful</li>
            <li>Heroku</li>
            <li>Git / GitHub</li>
            <li>Jira</li>
            <li>Asana</li>
            <li>Rest/GraphQL APIs</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>CSS/SCSS</li>
            <li>HTML5 Canvas</li>
            <li>WebGL</li>
            <li>AWS</li>
          </ul>
          <h2 class="mt-5 mb-4">Awards &amp; Recognition</h2>
          <p>
            My work has won an Honorable Mention from Awwwards, which recognizes the talent and effort of the best web
            designers, developers and agencies in the world.


          </p>
          <p>
            I was in the top 3% of all full-stack developers on UpWork as a top-rated professional, and touched
            multitudes of different projects with a near perfect 5-star rating.
          </p>
          <p>
            I've also supported teams on other projects that have won awards at various levels from different
            organizations, and have been considered a <em>"Star Partner"</em> with one particular client for completely
            overhauling their online business, driving $3M+ in revenue.
          </p>
          <h2 class="mt-5 mb-4">Freelancing &amp; Consulting</h2>
          <p>
            Instead of working directly with clients on one-off builds, I prefer to work with agencies who have a need
            to bring in talent for recurring work. I can either act as a consultant, bringing UX design and architecture
            experience to the table, or I can supplement your existing team as a technical lead/developer.
          </p>
          <h3 class="mt-4 mb-3">
            Rate
          </h3>
          <p>Consulting is billed at an hourly rate of $225/hr. I typically bill for programming work as a daily rate
            ($1,800). For agency projects following an agile methodology, you can book me for a two-week sprint at
            $14,400 (a 20% discount). For any project I’m happy to provide an estimate, provided a SOW or RFP and an
            initial discovery call. All of my work is considered work-for-hire, although I usually retain rights to
            display the work within the context of my portfolio; unless agreed to otherwise.</p>
          <h2 class="mt-5 mb-4">
            Get in Touch
          </h2>
          <p>
            Thanks for reading a little bit about me. I’m always happy to chat about new projects; even if I may not be
            able to take on the work immediately. You can schedule a discovery call with me to see if we’re a good fit
            by clicking here. If there’s anything I can do to help, please don’t hesitate to reach
            out.
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
