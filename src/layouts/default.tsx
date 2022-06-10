import styles from './default.module.css'

export default defineComponent({
  name: 'DefaultLayout',
  render() {
    return <div class={styles.layout}>{this.$slots.default?.()}</div>
  }
})
