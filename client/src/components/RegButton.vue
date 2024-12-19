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
  margin: { type: String, default: ' 40px 20px 0 20px' },
  padding: { type: String, default: '7px 20px 6px 20px' },
});
</script>
<style scoped>
.main-button {
  background: #0099b8;
  color: #ffffff;
  width: auto;
  height: auto;
  border: 1px solid #0099b8;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  font-family: var(--base-font);
}

.main-button:hover {
  background: #017389;
  border-color: #017389;
}
</style>
