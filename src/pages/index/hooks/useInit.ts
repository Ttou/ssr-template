export function useInit() {
  const state = reactive({
    title: '- -'
  })

  async function init() {
    const data = await $fetch('/api/hello')

    state.title = data
  }

  init()

  return {
    ...toRefs(state)
  }
}
