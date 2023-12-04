<template>
  <NuxtLayout name="custom">
    <div class="page">
      <h2>其它页面</h2>
      <p class="pos">鼠标位置: {{ x }}, {{ y }}</p>
      <el-button class="btn" @click="handleBack">返回</el-button>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const router = useRouter()

    const mouseHook = useMouse()

    function handleBack() {
      router.back()
    }

    return {
      ...mouseHook,
      handleBack
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

  .pos {
    margin-top: 20px;
    font-size: 18px;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
