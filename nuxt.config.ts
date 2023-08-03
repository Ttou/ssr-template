import eslint from 'vite-plugin-eslint2'
import stylelint from 'vite-plugin-stylelint'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }]
    }
  },
  css: ['@/assets/css/main.css', '@/assets/css/theme.css'],
  modules: [
    ['@element-plus/nuxt', { importStyle: 'css' }],
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    'nuxt-lodash',
    'vue-types-nuxt'
  ],
  vueTypes: {
    shim: true
  },
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
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (/[\\/]node_modules[\\/]/.test(id)) {
              return 'chunk-libs'
            }
          }
        }
      }
    }
  }
})
