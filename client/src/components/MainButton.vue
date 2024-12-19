<template>
  <button
    class="main-button"
    width="120px"
    :style="{
      margin: margin,
      padding: padding,
    }"
  >
    {{ text }}
  </button>
</template>
<script lang="ts" setup>
const props = defineProps({
  text: { type: String, default: 'button' },
  margin: { type: String, default: '0 20px' },
  padding: { type: String, default: '6px 20px 5px 20px' },
});
</script>
<style scoped>
.main-button {
  background: #ffffff;
  color: #0099b8;
  width: auto;
  height: auto;
  border: 1px solid #ffffff;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  font-family: var(--base-font);
}

.main-button:hover {
  background: #e9f1f4;
  border-color: #e9f1f4;
}
</style>
