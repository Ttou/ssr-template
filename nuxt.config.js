import { defineNuxtConfig } from 'nuxt'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  build: {
    transpile:
      lifecycle === 'build'
        ? [
            'element-plus',
            '@element-plus/icons-vue',
            '@floating-ui/core',
            '@floating-ui/dom',
            '@popperjs/core',
            'lodash-unified'
          ]
        : []
  },
  css: ['element-plus/dist/index.css', '@/assets/css/main.css'],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    '@vueuse/nuxt'
  ],
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    plugins: [
      Components({
        dts: '../types/components.d.ts',
        resolvers: [
          ElementPlusResolver({
            importStyle: false,
            ssr: true
          })
        ]
      })
    ],
    logLevel: 'error'
  }
})
