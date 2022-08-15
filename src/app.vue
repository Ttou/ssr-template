<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      title: 'SSR Template'
    })
  }
})
</script>
