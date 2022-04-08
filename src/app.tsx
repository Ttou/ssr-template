import './app.css'

import { ConfigProvider } from 'ant-design-vue/lib'

import { useConfig } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      title: 'SSR Template'
    })

    const config = useConfig()

    return {
      config
    }
  },
  render() {
    return (
      <div id="app">
        <ConfigProvider {...this.config}>
          {/* @ts-ignore */}
          <NuxtPage />
        </ConfigProvider>
      </div>
    )
  }
})
