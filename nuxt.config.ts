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
  css: [
    '@/assets/styles/element-vars.css',
    '@/assets/styles/element-reset.css',
    '@/assets/styles/theme.css',
    '@/assets/styles/main.css'
  ],
  postcss: {
    plugins: {
      'postcss-nested': { preserveEmpty: true } as PostCSSNestedOptions
    }
  },
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    [
      'unplugin-vue-components/nuxt',
      {
        dts: false,
        dirs: [],
        resolvers: [ElementPlusResolver({ importStyle: false })]
      }
    ],
    'vue-types-nuxt'
  ],
  colorMode: {
    preference: 'light',
    classSuffix: ''
  },
  imports: {
    dirs: ['apis', 'stores']
  },
  components: true,
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
