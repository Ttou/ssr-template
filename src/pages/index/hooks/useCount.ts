import { useMainStore } from '~~/src/store'

export function useCount() {
  const mainStore = useMainStore()

  const count = computed(() => mainStore.count)

  function handleCount() {
    mainStore.count++
  }

  return {
    count,
    handleCount
  }
}
