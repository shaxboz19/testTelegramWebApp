export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'calendly2',
    htmlAttrs: {
      lang: 'en'
    },
    script: [{
      src: 'https://telegram.org/js/telegram-web-app.js'
    }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/icons/fontawesome/css/all.css',
    '~/assets/raleway-prezi/stylesheet.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '@/plugins/vue-calendar', ssr: false },
    {
      src: '@/plugins/error.js',
      mode: 'client'
    },
    { src: './plugins/telegram.js', mode: 'client' },
    { src: '~/plugins/api.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BOT_URL

  },

  moment: {
    locales: ['ru']
  },
  i18n: {
    langDir: '~/locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Russian' }
    ],
    lazy: true,
    defaultLocale: 'en',
    // strategy: 'prefix_except_default',
    strategy: 'no_prefix',
    vueI18nLoader: true,
    detectBrowserLanguage: false,
    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true
    }
  },
  toast: {
    position: 'top-center',
    duration: 3000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
