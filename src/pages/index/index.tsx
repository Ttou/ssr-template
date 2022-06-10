import { NuxtLink } from '#components'

import { useCount } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  setup() {
    const title = ref('SSR Template')

    const { ...countHook } = useCount()

    return {
      title,
      ...countHook
    }
  },
  render() {
    return (
      <div class={styles.page}>
        <h2>{this.title}</h2>
        <p class={styles.count}>{this.count}</p>
        <button class={styles.btn} onClick={this.handleCount}>
          计数
        </button>
        <NuxtLink class={styles.btn} to={{ name: 'other' }}>
          页面跳转
        </NuxtLink>
      </div>
    )
  }
})
