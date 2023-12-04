<template>
  <div class="page">
    <Welcome :msg="title" />
    <div class="section">
      <h3>Store</h3>
      <p class="count">{{ count }}</p>
      <el-button type="primary" @click="handleCount">点击</el-button>
    </div>
    <div class="section">
      <h3>框架图标</h3>
      <el-space>
        <Icon icon="ant-design:wechat-outlined" />
        <Icon icon="ant-design:alipay-circle-outlined" />
      </el-space>
    </div>
    <div class="section">
      <h3>自定义图标</h3>
      <el-space>
        <Icon icon="@local:custom:chips" />
        <Icon icon="@local:custom:coffee" />
        <Icon icon="@local:custom:coke" />
        <Icon icon="@local:custom:hamburg" />
        <Icon icon="@local:custom:ice-cream" />
      </el-space>
    </div>
    <div class="section">
      <h3>其他</h3>
      <el-space>
        <el-button @click="handleToggleTheme">主题</el-button>
        <NuxtLink :to="{ name: 'other' }">
          <el-button>跳转</el-button>
        </NuxtLink>
      </el-space>
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

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100%;
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
