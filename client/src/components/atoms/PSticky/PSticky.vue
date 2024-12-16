<template>
  <div
    class="sticky-block"
    :style="{
      zIndex: 1 + zIndex,
      top: top,
      background: background,
      padding: padding,
      boxShadow: shadow ? '0 0 5px 2px rgba(0,0,0,0.3)' : 'none',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  shadow: { type: Boolean, default: false },
  zIndex: { type: Number, default: 0 },
  background: { type: String, default: 'inherit' },
  padding: { type: String, default: '0' },
  top: { type: String, default: '0' },
});
</script>

<style scoped>
.sticky-block {
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid;
  border-color: var(--border-color-default);
  --base-font: 'Inter Tight', Roboto, Helvetica, sans-serif;
  --font-size-default: var(--typography-font-size-l);
}
</style>
