<template>
  <div class="page">
    <el-card style="width: 500px;">
      <template #header>
        <span>需鉴权页</span>
      </template>
      <el-button type="primary" @click="handleLogout">退出登录</el-button>
    </el-card>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const mainStore = useMainStore()

    function handleLogout() {
      mainStore.handleLogout().then(() => {
        navigateTo('/login', { replace: true })
      })
    }

    return {
      handleLogout
    }
  }
})
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
