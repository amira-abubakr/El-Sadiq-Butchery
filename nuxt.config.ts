export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

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
})