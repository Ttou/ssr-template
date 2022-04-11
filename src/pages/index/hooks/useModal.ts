export function useModal() {
  const showModal = ref(false)

  function handleOpen() {
    showModal.value = true
  }

  function handleOk() {
    showModal.value = false
  }

  return {
    showModal,
    handleOpen,
    handleOk
  }
}
