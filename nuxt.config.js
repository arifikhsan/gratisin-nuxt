require('dotenv').config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5A67D8' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/apollo',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.REST_URL,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  webfontloader: {
    google: {
      families: [
        'Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
      ],
    },
  },
  server: {
    port: 8000,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL,
      },
    },
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'access_token' },
          logout: { url: 'logout', method: 'delete' },
          user: { url: 'user', method: 'get', propertyName: 'user' },
        },
        // tokenRequired: true,
        tokenType: 'Bearer',
        // globalToken: true,
        // autoFetchUser: true
      },
    },
  },
}
