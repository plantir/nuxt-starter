import webpack from 'webpack'
import colors from 'vuetify/es5/util/colors'
require('dotenv').config({})
import { version } from './package.json'
export default {
  mode: 'spa',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0' // default: localhost
  },
  router: {
    // middleware: 'nuxti18n'
    // middleware: ['auth']
  },
  pwa: {
    name: 'حقیقت را از ما بخوانید',
    short_name: 'sipam'
  },
  // loading:false,
  // loading: '~/components/loading.vue',
  robots: [
    {
      UserAgent: '*',
      Disallow: () => '/auth'
    },
    {
      Sitemap: process.env.BASE_URL + '/sitemap.xml'
    }
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/login']
  },
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
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
  // loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'vrwebdesign-nuxt/assets/style/main.scss',
    '~/assets/styles/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  styleResources: {
    scss: [
      './assets/styles/styles.scss',
      'vrwebdesign-nuxt/assets/style/tools/_responsive.scss'
    ]
  },
  plugins: [
    '@/plugins/vue-awesome-swiper.js',
    '@/plugins/nuxtClientInit.js',
    '@/plugins/svgIconLoader.js',
    '@/plugins/interceptor.js',
    '@/plugins/filepond.js',
    '@/plugins/clickOutside.ts',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/svg-module#readme
    // '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/recaptcha-module#readme
    // '@nuxtjs/recaptcha',
    // Doc: https://github.com/nuxt-community/sentry-module
    // '@nuxtjs/sentry',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: https://github.com/nuxt-community/auth-module
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/universal-storage-module
    '@nuxtjs/universal-storage',
    // Doc: https://github.com/vrwebdesign/vrwebdesign-nuxt
    // 'vrwebdesign-nuxt/modules/nuxt-client-init',
    'vrwebdesign-nuxt/modules/nuxt-global',
    'vrwebdesign-nuxt/modules/nuxt-badge',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-dialog',
    'vrwebdesign-nuxt/modules/nuxt-toast',
    'vrwebdesign-nuxt/modules/nuxt-axios',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-scroll-bar',
    'vrwebdesign-nuxt/modules/nuxt-validate',
    'vrwebdesign-nuxt/modules/nuxt-date-picker',
    'vrwebdesign-nuxt/modules/nuxt-enums',
    'vrwebdesign-nuxt/modules/nuxt-navbar'
    // 'vrwebdesign-nuxt/modules/nuxt-form-generator',
    // 'vrwebdesign-nuxt/modules/nuxt-data-grid',
    // 'vrwebdesign-nuxt/modules/nuxt-file-upload'
  ],
  sentry: {},
  googleAnalytics: {
    id: process.env.GOOGLE_ANALITICS
  },
  gtm: {
    id: process.env.GTM
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3)
    siteKey: process.env.RECAPTCHA_SITEKEY, // Site key for requests
    version: 3 // Version
  },
  /*
   ** AUth module configuration
   ** See https://auth.nuxtjs.org/api/auth.html
   */
  auth: {
    scopeKey: 'permissions',
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: '/'
    },
    strategies: {
      local: {
        user: {
          property: 'auth_user'
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'auth/info', method: 'get' }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    localStorage: {
      prefix: 'site_auth.'
    },
    cookie: {
      prefix: 'site_auth.'
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
      options: {
        // themeCache: {
        //   get: key => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value)
        // },
        customProperties: true
      },
      themes: {
        light: {
          background: '#fff',
          primary: '#058472',
          accent: '#919CA5',
          secondary: '#13A3D1',
          info: colors.blue.base,
          warning: colors.orange.darken1,
          error: '#EF476F',
          success: '#00CBB3'
        },
        dark: {
          primary: '#00cbb3',
          accent: '#919CA5',
          secondary: '#13A3D1',
          info: colors.blue.base,
          warning: colors.orange.darken1,
          error: '#EF476F',
          success: '#00CBB3'
        }
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
    transpile: ['vrwebdesign-nuxt/modules/nuxt-dialog'],
    watch: ['services', 'enums'],
    // extractCSS: true,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version
      }),
    ],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      const svgRules = config.module.rules.filter(rule => {
        return rule.test.test('.svg')
      })
      for (const rule of svgRules) {
        rule.test = /\.(png|jpe?g|gif|webp)$/
      }
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader'
        }
      ]
      if (config.name !== 'server') {
        const jsxRule = config.module.rules.find(r => r.test.test('.jsx'))
        const babelLoader = jsxRule.use[jsxRule.use.length - 1]
        vueSvgLoader.unshift(babelLoader)
      }
      config.module.rules.push({
        test: /\.svg$/i,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      })
      //   '@/modules/vue-class-component'
    }
  }
}
