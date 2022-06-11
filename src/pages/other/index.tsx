import { NuxtLayout } from '#components'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    const router = useRouter()

    const { ...mouseHook } = useMouse()

    function handleBack() {
      router.back()
    }

    return {
      ...mouseHook,
      handleBack
    }
  },
  render() {
    return (
      <NuxtLayout name="custom">
        <div class={styles.page}>
          <h2>其它页面</h2>
          <p class={styles.pos}>
            鼠标位置: {this.x}, {this.y}
          </p>
          <button class={styles.btn} onClick={this.handleBack}>
            返回
          </button>
        </div>
      </NuxtLayout>
    )
  }
})
