// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        name: 'Marchant Web',
        url: 'https://marchantweb.com',
        description: 'Hey I\'m Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects.',
        defaultLocale: 'en',
    },
    sitemap: {
        sources: [
            'https://api.marchantweb.com/sitemap',
        ]
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            meta: [{name: 'viewport', content: 'width=device-width, initial-scale=1'}],
        }
    },
    modules: ['@nuxtseo/module'],
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
