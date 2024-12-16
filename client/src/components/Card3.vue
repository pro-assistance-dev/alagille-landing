<template>
  <div
    class="list-container"
    :style="{
      background: background,
      margin: margin,
    }"
  >
    <PString
      v-if="title.length > 0"
      :string="title"
      font-size="18px"
      color="#E42623"
      justify-content="left"
      margin="10px 20px"
      font-weight="regular"
    />

    <div class="text">
      <slot />
    </div>
    <div class="list-icon"><IconCardArrowDown /></div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: 'Text' },
  margin: { type: String, default: '20px auto 0 auto' },
  background: { type: String, default: '#ffffff' },
  width: { type: String, default: '100%' },
  height: { type: String, default: 'auto' },
});
</script>
<style scoped>
.list-container {
  min-width: 370px;
  position: relative;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #0099b8;
  box-sizing: border-box;
  padding: 10px 80px 40px 40px;
  min-height: 75px;
}
.text {
  width: 100%;
  font-size: 18px;
  color: #0099b8;
  margin: 10px 20px;
  font-weight: regular;
}

.list-icon {
  position: absolute;
  bottom: 10px;
  right: 14px;
  color: #0099b8;
}
</style>
