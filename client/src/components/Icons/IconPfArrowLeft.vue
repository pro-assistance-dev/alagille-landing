<template>
  <svg
    class="icon"
    :class="iconClass"
    :style="{
      margin: margin,
      width: size,
      height: size,
      fill: hoverColor ? (hovering ? hoverColor : color) : hovering ? color : color,
    }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <use xlink:href="#ph_arrow-left"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="ph_arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path
        d="M224 128.001C224 130.122 223.158 132.157 221.657 133.657C220.157 135.158 218.122 136.001 216 136.001H59.3104L117.66 194.341C118.404 195.084 118.993 195.966 119.396 196.937C119.798 197.909 120.005 198.949 120.005 200.001C120.005 201.052 119.798 202.093 119.396 203.064C118.993 204.035 118.404 204.917 117.66 205.661C116.917 206.404 116.035 206.993 115.064 207.396C114.092 207.798 113.052 208.005 112 208.005C110.949 208.005 109.908 207.798 108.937 207.396C107.966 206.993 107.084 206.404 106.34 205.661L34.3404 133.661C33.5966 132.918 33.0066 132.035 32.604 131.064C32.2014 130.093 31.9941 129.052 31.9941 128.001C31.9941 126.949 32.2014 125.908 32.604 124.937C33.0066 123.966 33.5966 123.084 34.3404 122.341L106.34 50.3405C107.842 48.8394 109.878 47.9961 112 47.9961C114.123 47.9961 116.159 48.8394 117.66 50.3405C119.162 51.8417 120.005 53.8776 120.005 56.0005C120.005 58.1235 119.162 60.1594 117.66 61.6605L59.3104 120.001H216C218.122 120.001 220.157 120.843 221.657 122.344C223.158 123.844 224 125.879 224 128.001Z"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
const hovering = ref(false);
defineProps({
  color: { type: String as PropType<string>, default: '' },
  hoverColor: { type: String as PropType<string>, default: '' },
  size: { type: String as PropType<string>, default: '' },
  margin: { type: String as PropType<string>, default: '0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style  scoped>
.hidden {
  display: none;
}
</style>
