import { Button, Modal } from 'ant-design-vue'

import { useDialog } from '@/hooks'
import { NuxtLink } from '#components'

import { useCount, useModal } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  setup() {
    const title = ref('SSR Template')

    const { showConfirm } = useDialog()
    const { ...countHook } = useCount()
    const { ...modalHook } = useModal()

    function handleShowConfirm() {
      showConfirm({
        content: '确认弹窗'
      })
    }

    return {
      title,
      handleShowConfirm,
      ...countHook,
      ...modalHook
    }
  },
  render() {
    return (
      <div class={styles.page}>
        <h2>{this.title}</h2>
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
        <NuxtLink
          class={['ant-btn', 'ant-btn-primary', styles.btn]}
          to={{ name: 'other' }}
        >
          页面跳转
        </NuxtLink>
        <Modal
          v-model:visible={this.showModal}
          title="弹窗"
          onOk={this.handleOk}
        >
          <div>哈哈</div>
        </Modal>
      </div>
    )
  }
})
