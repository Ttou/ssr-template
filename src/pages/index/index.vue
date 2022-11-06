<template>
  <div :class="$style.page">
    <h2>{{ title }}</h2>
    <div :class="$style.section">
      <h3>Store</h3>
      <p :class="$style.count">{{ count }}</p>
      <AButton type="primary" @click="handleCount">点击</AButton>
    </div>
    <div :class="$style.section">
      <h3>框架图标</h3>
      <ASpace>
        <Icon icon="ant-design:wechat-outlined" />
        <Icon icon="ant-design:alipay-circle-outlined" />
      </ASpace>
    </div>
    <div :class="$style.section">
      <h3>自定义图标</h3>
      <ASpace>
        <Icon icon="custom:chips" />
        <Icon icon="custom:coffee" />
        <Icon icon="custom:coke" />
        <Icon icon="custom:hamburg" />
        <Icon icon="custom:ice-cream" />
      </ASpace>
    </div>
    <div :class="$style.section">
      <h3>其他</h3>
      <ASpace>
        <AButton @click="handleToggleTheme">主题</AButton>
        <NuxtLink :to="{ name: 'other' }">
          <AButton>跳转</AButton>
        </NuxtLink>
      </ASpace>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'

import { useCount, useTheme } from './hooks'

export default defineComponent({
  components: {
    Icon
  },
  setup() {
    const title = ref('- -')

    const countHook = useCount()
    const themeHook = useTheme()

    async function init() {
      const data = await $fetch('/api/hello')

      title.value = data.title
    }

    init()

    return {
      title,
      ...themeHook,
      ...countHook
    }
  }
})
</script>

<style module>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.count {
  margin-top: 20px;
  font-size: 18px;
}

.section {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 20px;
}
</style>
