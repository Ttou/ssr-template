import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)

  /**
   * 加法
   */
  function increment() {
    count.value++
  }

  return {
    count,
    increment
  }
})
