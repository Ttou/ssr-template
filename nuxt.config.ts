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
      'postcss-nested': { preserveEmpty: true }
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
  devtools: { enabled: true },
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      reportCompressedSize: false
    }
  }
})
