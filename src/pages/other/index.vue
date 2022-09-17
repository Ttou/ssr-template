<template>
  <NuxtLayout name="custom">
    <div :class="$style.page">
      <h2>其它页面</h2>
      <p :class="$style.pos">鼠标位置: {{ x }}, {{ y }}</p>
      <AButton :class="$style.btn" @click="handleBack">返回</AButton>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const router = useRouter()

    const { ...mouseHook } = useMouse()

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

<style module>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.pos {
  margin-top: 20px;
  font-size: 18px;
}

.btn {
  margin-top: 20px;
}
</style>
