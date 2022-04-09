import { type ModalFuncProps, Modal } from 'ant-design-vue/lib'

export function useDialog() {
  function showConfirm(options?: ModalFuncProps) {
    Modal.confirm({
      title: '提示',
      ...options
    })
  }

  return {
    showConfirm
  }
}
