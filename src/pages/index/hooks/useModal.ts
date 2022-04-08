export function useModal() {
  const showModal = ref(false)

  function handleOpen() {
    showModal.value = true
  }

  return {
    showModal,
    handleOpen
  }
}
