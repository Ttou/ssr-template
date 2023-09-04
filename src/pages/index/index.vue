<template>
  <div class="page">
    <Welcome :msg="title" />
    <div class="section">
      <h3>Store</h3>
      <p class="count">{{ count }}</p>
      <ElButton type="primary" @click="handleCount">点击</ElButton>
    </div>
    <div class="section">
      <h3>框架图标</h3>
      <ElSpace>
        <Icon icon="ant-design:wechat-outlined" />
        <Icon icon="ant-design:alipay-circle-outlined" />
      </ElSpace>
    </div>
    <div class="section">
      <h3>自定义图标</h3>
      <ElSpace>
        <Icon icon="@local:custom:chips" />
        <Icon icon="@local:custom:coffee" />
        <Icon icon="@local:custom:coke" />
        <Icon icon="@local:custom:hamburg" />
        <Icon icon="@local:custom:ice-cream" />
      </ElSpace>
    </div>
    <div class="section">
      <h3>其他</h3>
      <ElSpace>
        <ElButton @click="handleToggleTheme">主题</ElButton>
        <NuxtLink :to="{ name: 'other' }">
          <ElButton>跳转</ElButton>
        </NuxtLink>
      </ElSpace>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'

import { useCount, useInit, useTheme } from './hooks'

export default defineComponent({
  components: {
    Icon
  },
  setup() {
    const initHook = useInit()
    const countHook = useCount()
    const themeHook = useTheme()

    return {
      ...initHook,
      ...themeHook,
      ...countHook
    }
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;

  .section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 20px;

    h3 {
      margin-bottom: 20px;
    }

    .count {
      margin-bottom: 10px;
      font-size: 18px;
    }
  }
}
</style>
