<template>
  <div :class="$style.layout">
    <slot />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomLayout'
})
</script>

<style module>
.layout {
  width: 100%;
  height: 100%;
}
</style>
