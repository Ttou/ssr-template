import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    logLevel: 'error'
  }
})
