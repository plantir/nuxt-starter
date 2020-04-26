import webpack from 'webpack'
import colors from 'vuetify/es5/util/colors'
require('dotenv').config({})
import { version } from './package.json'
import fa from './locales/fa'
import en from './locales/en'
import 'vrwebdesign-nuxt/modules/nuxt-i18n'
export default {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0' // default: localhost
  },
  router: {
    middleware: 'nuxti18n'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['vrwebdesign-nuxt/assets/style/main.scss', '~/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  styleResources: {
    scss: [
      './assets/styles/styles.scss',
      'vrwebdesign-nuxt/assets/style/tools/_responsive.scss'
    ]
  },
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: https://github.com/nuxt-community/auth-module
    '@nuxtjs/auth',

    // Doc: https://github.com/vrwebdesign/vrwebdesign-nuxt
    'vrwebdesign-nuxt/modules/nuxt-client-init',
    'vrwebdesign-nuxt/modules/nuxt-global',
    'vrwebdesign-nuxt/modules/nuxt-badge',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-dialog',
    'vrwebdesign-nuxt/modules/nuxt-toast',
    'vrwebdesign-nuxt/modules/nuxt-axios',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-scroll-bar',
    'vrwebdesign-nuxt/modules/nuxt-i18n',
    'vrwebdesign-nuxt/modules/nuxt-date-picker',
    'vrwebdesign-nuxt/modules/nuxt-enums',
    'vrwebdesign-nuxt/modules/nuxt-navbar',
    'vrwebdesign-nuxt/modules/nuxt-form-generator',
    'vrwebdesign-nuxt/modules/nuxt-data-grid'
  ],
  /*
   ** AUth module configuration
   ** See https://auth.nuxtjs.org/api/auth.html
   */
  auth: {
    redirect: {
      login: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: { url: 'auth/logout', method: 'post' },
          user: false
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api/'
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL || 'http://localhost:3333',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    rtl: true,
    treeShake: true,
    customVariables: ['~/assets/styles/setting/_variables.scss'],
    defaultAssets: {
      icons: 'md',
      font: undefined
    },
    lang: {
      locales: { fa: require('vuetify/src/locale/fa').default },
      current: 'fa'
    },
    theme: {
      dark: false,
      default: false,
      disable: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: colors.cyan.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.blue.base,
          warning: colors.orange.darken1,
          error: colors.deepOrange.accent2,
          success: colors.green.base
        }
      }
    }
  },
  i18n: {
    seo: false,
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'fa', iso: 'fa-IR' }
    ],
    baseUrl: 'http://localhsot:3000',
    defaultLocale: 'fa',
    vueI18n: {
      messages: {
        fa,
        en
      }
    }
  },
  watch: ['services', 'enums'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    watch: ['services', 'enums'],
    // extractCSS: true,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version
      })
    ],
    extend(config, ctx) {
      // config.resolve.alias['vue-class-component'] =
      //   '@/modules/vue-class-component'
    }
  }
}
