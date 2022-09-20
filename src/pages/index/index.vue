<template>
  <div :class="$style.page">
    <h2>{{ title }}</h2>
    <p :class="$style.count">{{ count }}</p>
    <ASpace :class="$style.btnsWrap" direction="vertical">
      <AButton @click="handleCount">计数</AButton>
      <AButton @click="handleToggleTheme">主题</AButton>
      <NuxtLink :to="{ name: 'other' }">
        <AButton>跳转</AButton>
      </NuxtLink>
    </ASpace>
    <div>
      <h3>图标</h3>
      <Icon icon="ant-design:alert-twotone" />
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

    const { ...countHook } = useCount()
    const { ...themeHook } = useTheme()

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

.btnsWrap {
  margin-top: 20px;
}
</style>
