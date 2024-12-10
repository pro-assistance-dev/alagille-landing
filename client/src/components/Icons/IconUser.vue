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
    <use xlink:href="#user"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.6524 19.405C20.2044 19.29 20.5344 18.712 20.2594 18.218C19.6534 17.131 18.6994 16.175 17.4794 15.447C15.9074 14.509 13.9804 14 12.0004 14C10.0194 14 8.09339 14.508 6.52139 15.447C5.30139 16.175 4.34739 17.131 3.74139 18.218C3.46639 18.712 3.79639 19.29 4.34839 19.405C9.39518 20.4568 14.6046 20.4568 19.6514 19.405"
        fill="currentColor"
      ></path>
      <path
        d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
        fill="currentColor"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  size: { type: String as PropType<string>, default: '' },
  margin: { type: String as PropType<string>, default: '0 15px 3px 0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style  scoped>
.hidden {
  display: none;
}
</style>
