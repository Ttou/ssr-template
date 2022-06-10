import { NuxtLayout } from '#components'

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      title: 'SSR Template'
    })
  },
  render() {
    return (
      <NuxtLayout>
        {/* @ts-ignore */}
        <NuxtPage />
      </NuxtLayout>
    )
  }
})
