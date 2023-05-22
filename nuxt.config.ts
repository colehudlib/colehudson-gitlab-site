// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  modules: ['@nuxt/content'],
  app: {
    head: {
      title: 'Cole Hudson',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Cole Hudson\'s website' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' },
        { src: 'scripts.js'}
      ],
      link: [
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  }

})
