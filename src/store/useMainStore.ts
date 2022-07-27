export function useMainStore() {
  return defineStore('main', {
    state: () => ({
      count: 0
    }),
    actions: {
      add() {
        this.count++
      }
    }
  })()
}
