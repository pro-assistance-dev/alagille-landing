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
    <use xlink:href="#add-button"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="add-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
      <path
        d="M12.6764 3.0202C10.5488 3.35244 8.85198 4.04349 7.34076 5.19967C3.10537 8.44229 1.78636 14.2365 4.19901 18.9875C4.7624 20.0838 5.36557 20.9211 6.21397 21.7782C7.8445 23.4062 9.8462 24.4428 12.2124 24.8813C13.1404 25.0541 14.983 25.0341 15.9574 24.8481C18.94 24.2634 21.4852 22.5955 23.129 20.1436C25.8664 16.0505 25.5748 10.6816 22.4198 6.89407C20.8357 4.99368 18.6882 3.71125 16.1893 3.17303C15.6591 3.05343 15.2548 3.0202 14.2009 3.00691C13.4718 2.99363 12.7891 3.00027 12.6764 3.0202ZM15.6259 4.4754C17.1637 4.7279 18.7213 5.42559 19.9541 6.40901C23.9575 9.61176 24.7927 15.2199 21.9028 19.4792C21.3593 20.2832 20.1994 21.4394 19.4106 21.9643C17.0775 23.5258 14.3335 24.0109 11.6424 23.3397C9.91911 22.9078 8.52057 22.1038 7.20157 20.7815C5.78314 19.3596 4.91485 17.725 4.51716 15.6983C4.35146 14.8877 4.35146 13.1468 4.51053 12.3095C5.1137 9.17986 7.02923 6.65486 9.82631 5.29934C10.9001 4.78105 12.1329 4.44882 13.3724 4.3425C13.8562 4.30263 14.9499 4.36908 15.6259 4.4754Z"
      ></path>
      <path
        d="M13.3402 11.4859V13.3796H13.0287C12.8497 13.3863 12.0742 13.3863 11.3054 13.3796H9.89355V14.0773V14.775H11.6169H13.3402V16.6688V18.5625H14.0362H14.7321V16.6688V14.775H16.4554H18.1854L18.1655 14.0906L18.1456 13.4128L16.7868 13.3996C16.0379 13.3929 15.269 13.3863 15.0834 13.3796H14.7321V11.4859V9.59213H14.0362H13.3402V11.4859Z"
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
