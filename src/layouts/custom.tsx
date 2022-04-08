export default defineComponent({
  name: 'LayoutCustom',
  render() {
    return <div>{this.$slots.default?.()}</div>
  }
})
