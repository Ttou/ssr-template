<template>
  <div :class="$style.page">
    <h2>{{ title }}</h2>
    <p :class="$style.count">{{ count }}</p>
    <ElSpace :class="$style.btnsWrap" direction="vertical">
      <ElButton @click="handleCount">计数</ElButton>
      <ElButton @click="handleToggleMode">主题</ElButton>
      <NuxtLink :to="{ name: 'other' }">
        <ElButton>跳转</ElButton>
      </NuxtLink>
    </ElSpace>
  </div>
</template>

<script lang="ts">
import { useColor, useCount } from './hooks'

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
