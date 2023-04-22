import eslint from 'vite-plugin-eslint2'
import stylelint from 'vite-plugin-stylelint'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/assets/css/main.css', '@/assets/css/theme.css'],
  modules: [
    ['@element-plus/nuxt', { importStyle: 'css' }],
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    'nuxt-lodash'
  ],
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    plugins: [
      eslint({
        lintInWorker: true
      }),
      stylelint({
        lintInWorker: true
      })
    ],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      chunkSizeWarningLimit: 2048
    }
  }
})
