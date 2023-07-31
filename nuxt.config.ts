// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      pageTransition: {name: 'page', mode: 'out-in'},
      head: {
          meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      }
  },

  css: ["@/assets/scss/app.scss"],

  vite: {
      server: {
          hmr: {
              port: 5050
          }
      }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
});