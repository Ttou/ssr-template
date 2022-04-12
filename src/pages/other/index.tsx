import { Button } from 'ant-design-vue'

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
          <h3>其它页面</h3>
          <Button onClick={this.handleBack}>返回</Button>
        </div>
      </NuxtLayout>
    )
  }
})
