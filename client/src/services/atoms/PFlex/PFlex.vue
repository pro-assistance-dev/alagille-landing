<template>
  <div
    class="flex-line"
    :style="{
      margin: margin,
      padding: padding,
      width: width,
      minWidth: minWidth,
      maxWidth: maxWidth,
      height: height,
      justifyContent: justifyContent,
      background: background,
      alignItems: alignItems,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

defineProps({
  margin: { type: String, default: '', required: false },
  padding: { type: String, default: '', required: false },
  width: { type: String, default: '', required: false },
  minWidth: { type: String, default: '', required: false },
  maxWidth: { type: String, default: '', required: false },
  height: { type: String, default: '', required: false },
  justifyContent: { type: String, default: '', required: false },
  background: { type: String, default: '', required: false },
  alignItems: { type: String, default: '', required: false },
});
</script>

<style scoped>
.flex-line {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background: inherit;
  color: inherit;
}
</style>
