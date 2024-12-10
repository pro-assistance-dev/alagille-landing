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
    <use xlink:href="#job"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="job" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
      <path
        d="M8.41475 4.22131C7.4949 4.38304 6.70139 5.06535 6.36276 5.97005L6.24146 6.29351L6.2263 14.1275C6.21619 19.773 6.2263 22.0473 6.26674 22.2647C6.45879 23.2856 7.318 24.16 8.3541 24.3874C8.60681 24.443 9.67324 24.4531 14.1007 24.4481C19.2408 24.438 19.5491 24.4329 19.8119 24.3419C20.6054 24.0741 21.2321 23.5282 21.5253 22.8459C21.7881 22.2394 21.7881 22.2445 21.7729 17.069L21.7577 12.2574L21.6466 11.9794C21.5809 11.8278 21.4494 11.6004 21.3534 11.4791C21.2018 11.287 19.8119 9.86681 15.4653 5.44441C14.5101 4.47401 14.2675 4.30217 13.6964 4.19603C13.287 4.12022 8.86458 4.14044 8.41475 4.22131ZM13.6458 8.13828C13.6761 11.3325 13.6711 11.2618 13.9996 11.7773C14.2978 12.2372 14.7426 12.5354 15.2935 12.6314C15.4754 12.6618 16.5014 12.687 17.9166 12.687C19.1953 12.682 20.3476 12.687 20.4841 12.687H20.7216L20.7115 17.4228L20.6964 22.1636L20.5852 22.4011C20.4336 22.7347 20.0595 23.1138 19.7462 23.2553L19.4834 23.3766H13.9743H8.4653L8.21259 23.2502C7.86385 23.0834 7.51006 22.7094 7.36854 22.3556L7.2523 22.0625L7.23713 14.4358C7.22197 6.0307 7.20681 6.46535 7.53533 5.95994C7.7375 5.64153 8.1014 5.37365 8.49057 5.25235C8.56133 5.23214 9.744 5.21698 11.1187 5.22203L13.6205 5.23214L13.6458 8.13828ZM18.7859 10.3116L20.0646 11.6004L17.7599 11.6155C15.5816 11.6257 15.4451 11.6206 15.2379 11.5296C15.0913 11.4639 14.97 11.3578 14.874 11.2163L14.7325 10.9989L14.7173 8.5881L14.7021 6.17221L16.1072 7.59749C16.8805 8.38088 18.0834 9.60399 18.7859 10.3116Z"
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
  margin: { type: String as PropType<string>, default: '0 15px 0 0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style  scoped>
.hidden {
  display: none;
}
</style>
