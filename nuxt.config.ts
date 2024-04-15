import type { Options as PostCSSNestedOptions } from 'postcss-nested'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }],
      title: 'SSR Template'
    }
  },
  css: ['@/assets/styles/element-vars.css', '@/assets/styles/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': { preserveEmpty: true } as PostCSSNestedOptions
    }
  },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    'vue-types-nuxt',
    [
      'unplugin-vue-components/nuxt',
      {
        dts: false,
        dirs: [],
        resolvers: [ElementPlusResolver({ importStyle: false })]
      }
    ]
  ],
  components: true,
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      reportCompressedSize: false
    }
  }
})
