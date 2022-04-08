import { Button, Modal } from 'ant-design-vue/lib'

import { NuxtLayout } from '#components'

import { useCount, useModal } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  setup() {
    const title = ref('-')

    const { count, ...countExports } = useCount()
    const { showModal, ...modalExports } = useModal()

    return {
      title,
      count,
      ...countExports,
      showModal,
      ...modalExports
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
            弹窗
          </Button>
          <Modal v-model:visible={this.showModal} title="弹窗">
            <div>哈哈</div>
          </Modal>
        </div>
      </NuxtLayout>
    )
  }
})
