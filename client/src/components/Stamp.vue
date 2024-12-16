<template>
  <div
    class="stamp"
    :style="{
      background: background,
      margin: margin,
      width: width,
      height: height,
      backgroundImage: 'url(' + imgPath + ')',
      borderColor: background,
      borderRadius: borderRadius,
      borderTopRightRadius: borderTopRightRadius,
      boxShadow: shadow ? `5px 5px 5px rgba(0, 0, 0, 0.3)` : 'none',
      backgroundSize: `${width}, ${height}`,
    }"
  >
    <div
      class="stamp-icon"
      :style="{
        color: color,
        margin: '0 0 10px 10px',
      }"
    >
      <slot />
    </div>
    <PString
      :string="text"
      font-size="16px"
      :color="color"
      justify-content="left"
      margin="0 auto"
      font-weight="regular"
      width="auto"
      background="initial"
    />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  url: { type: String, default: '' },
  text: { type: String, default: 'Text' },
  margin: { type: String, default: '0 auto' },
  background: { type: String, default: '#0099B8' },
  width: { type: String, default: '250px' },
  height: { type: String, default: '190px' },
  color: { type: String, default: '#ffffff' },
  borderRadius: { type: String, default: '40px' },
  borderTopRightRadius: { type: String, default: '40px' },
  shadow: { type: Boolean, default: true },
});

const imgPath = computed(() => {
  const path = new URL('@', import.meta.url);
  return `${path}/${props.url}`;
});
</script>
<style scoped>
.stamp {
  position: relative;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid;
  background-size: cover;
}
</style>
