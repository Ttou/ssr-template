import styles from './custom.module.css'

export default defineComponent({
  name: 'CustomLayout',
  render() {
    return <div class={styles.layout}>{this.$slots.default?.()}</div>
  }
})
