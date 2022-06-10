import { NuxtLayout } from '#components'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    const router = useRouter()

    function handleBack() {
      router.back()
    }

    return {
      handleBack
    }
  },
  render() {
    return (
      <NuxtLayout name="custom">
        <div class={styles.page}>
          <h2>其它页面</h2>
          <button class={styles.btn} onClick={this.handleBack}>
            返回
          </button>
        </div>
      </NuxtLayout>
    )
  }
})
