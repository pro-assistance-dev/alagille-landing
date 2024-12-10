<template>
  <svg
    class="icon"
    :class="iconClass"
    :style="{
      margin: margin,
      width: size,
      height: size,
    }"
  >
    <use xlink:href="#graph"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="graph">
      <path
        d="M9.96 11.31C10.82 8.1 11.5 6 13 6C14.5 6 15.18 8.1 16.04 11.31C17 14.92 18.1 19 22 19V17C19.8 17 19 14.54 17.97 10.8C17.08 7.46 16.15 4 13 4C9.85 4 8.92 7.46 8.03 10.8C7.03 14.54 6.2 17 4 17V2H2V22H22V20H4V19C7.9 19 9 14.92 9.96 11.31Z"
        fill="currentColor"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  size: { type: String, default: '' },
  margin: { type: String, default: '0 10px 0 0' },
  iconClass: { type: String, required: false, default: '' },
});
</script>

<style  scoped>
.hidden {
  display: none;
}
</style>
