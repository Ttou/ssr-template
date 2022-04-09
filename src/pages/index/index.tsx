import { Button, Modal } from 'ant-design-vue/lib'

import { NuxtLayout } from '#components'
import { useDialog } from '~~/src/hooks'

import { useCount, useModal } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  setup() {
    const title = ref('-')

    const { count, ...countExports } = useCount()
    const { showModal, ...modalExports } = useModal()
    const { showConfirm } = useDialog()

    function handleShowConfirm() {
      showConfirm({
        content: '确认弹窗'
      })
    }

    return {
      title,
      count,
      ...countExports,
      showModal,
      ...modalExports,
      handleShowConfirm
    }
  },
  render() {
    return (
      <NuxtLayout name="custom">
        <div class={styles.page}>
          <p>{this.count}</p>
          <Button class={styles.btn} type="primary" onClick={this.handleCount}>
            计数
          </Button>
          <Button class={styles.btn} type="primary" onClick={this.handleOpen}>
            弹窗(普通)
          </Button>
          <Button
            class={styles.btn}
            type="primary"
            onClick={this.handleShowConfirm}
          >
            弹窗(API)
          </Button>
          <Modal v-model:visible={this.showModal} title="弹窗">
            <div>哈哈</div>
          </Modal>
        </div>
      </NuxtLayout>
    )
  }
})
