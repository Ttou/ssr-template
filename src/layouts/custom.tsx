export default defineComponent({
  name: 'LayoutCustom',
  render() {
    return (
      <div>
        <h2>自定义布局</h2>
        {this.$slots.default?.()}
      </div>
    )
  }
})
