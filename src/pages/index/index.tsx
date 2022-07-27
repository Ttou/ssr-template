import { NuxtLink } from '#components'

import { useColor, useCount } from './hooks'
import styles from './index.module.css'

export default defineComponent({
  setup() {
    const title = ref('- -')

    const { ...colorHook } = useColor()
    const { ...countHook } = useCount()

    async function init() {
      const data = await $fetch('/api/hello')

      title.value = data.title
    }

    init()

    return {
      title,
      ...colorHook,
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
        <button class={styles.btn} onClick={this.handleToggleMode}>
          主题
        </button>
        <NuxtLink class={styles.btn} to={{ name: 'other' }}>
          页面跳转
        </NuxtLink>
      </div>
    )
  }
})
