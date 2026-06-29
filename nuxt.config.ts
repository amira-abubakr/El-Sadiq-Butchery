import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  app: {
    head: {
      title: 'جزارة الصديق - أجود أنواع اللحوم البلدي',
      meta: [
        { name: 'description', content: 'نقدم أجود أنواع اللحوم الطازجة والبلدي بأعلى معايير الجودة' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Outfit:wght@100..900&display=swap' }
      ]
    }
  },

postcss: {
  plugins: {
    '@tailwindcss/postcss': {},
  },
},
  nitro: {
    routeRules: {
      '/sanctum/**': { proxy: 'https://elsdeq-db.vercel.app/sanctum/**',    cors: true, },
      '/v1/**': { proxy: 'https://elsdeq-db.vercel.app/v1/**',    cors: true, }
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL 
    }
  }
})