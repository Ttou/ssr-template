import styles from './custom.module.css'

export default defineComponent({
  render() {
    return (
      <div class={styles.custom}>
        <h2>自定义布局</h2>
        {this.$slots.default?.()}
      </div>
    )
  }
})
