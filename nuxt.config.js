export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: 'static',
  srcDir: "src",
  buildDir: "functions/.nuxt",

  head: {
    title: 'Finalstep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ],
    
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-js-modal.js',
    '~/plugins/firebaseConfig.js',
    '~/plugins/vue-awesome-swiper.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  logo: '~/components/lottie/logo.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['bootstrap-vue/nuxt'],
    // ['nuxt-bootstrap-slider',]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
