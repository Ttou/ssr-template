export const useMainStore = defineStore('main', () => {
  const state = reactive({
    count: 0
  })

  /**
   * 加法
   */
  function increment() {
    state.count++
  }

  return {
    ...toRefs(state),
    increment
  }
})
