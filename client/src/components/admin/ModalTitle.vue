<template>
  <div
    :style="{
      borderBottom: divider ? '1px solid var(--modal-divider-color)' : 'none',
      padding: padding,
      width: width,
      margin: margin,
    }"
  >
    <PString :string="text" :font-size="fontSize" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: { type: String, required: false, default: '100%' },
  text: { type: String, required: false, default: 'Титл' },
  fontSize: { type: String, required: false, default: '28px' },
  padding: { type: String, required: false, default: '0 0 20px 0' },
  margin: { type: String, required: false, default: '0 0 40px 0' },
  divider: { type: Boolean, required: false, default: true },
});
</script>
<style  scoped></style>
