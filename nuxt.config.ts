// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        }
    },
    vite: {
        server: {
            hmr: {
                port: 5050
            }
        }
    }
});
