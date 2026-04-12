import { resolve } from 'path';

export default defineNuxtConfig({
   modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper', '@pinia/nuxt', 'radix-vue/nuxt', '@nuxtjs/sitemap'],
   alias: {
      '@shared': resolve(__dirname, 'app/components/shared'),
      '@widgets': resolve(__dirname, 'app/components/widgets'),
      '@config': resolve(__dirname, 'app/config'),
      '@stores': resolve(__dirname, 'app/stores'),
      '@mock': resolve(__dirname, 'server/mock'),
   },
   runtimeConfig: {
      public: {
         apiPrefix: '/api',
         siteUrl: 'http://localhost:3000',
         siteName: 'Nuxt 4 Template',
         siteDescription: 'Облегченный стартовый шаблон Nuxt 4 с архитектурой shared/widgets/pages.',
         imagePrefix: '',
      },
   },
   app: {
      head: {
         htmlAttrs: { lang: 'ru' },
         viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
   },
   routeRules: {
      '/robots.txt': { prerender: true },
   },
   sitemap: {
      siteUrl: 'http://localhost:3000',
   },
   compatibilityDate: '2024-11-01',
   devtools: { enabled: false },
});

