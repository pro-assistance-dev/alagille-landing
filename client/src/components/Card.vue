<template>
  <div
    class="card"
    :style="{
      background: background,
      margin: margin,
    }"
  >
    <div class="card-img-bg" :style="{ backgroundImage: 'url(' + imgPath + ')', borderColor: background }" />
    <PString :string="text" font-size="18px" color="#ffffff" justify-content="left" margin="30px 20px" font-weight="regular" />
    <div class="card-icon"><IconCardArrowDown /></div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  url: { type: String, default: '' },
  text: { type: String, default: 'Text' },
  margin: { type: String, default: '0 auto' },
  background: { type: String, default: '#0099B8' },
});

const imgPath = computed(() => {
  const path = new URL('@', import.meta.url);
  return `${path}/${props.url}`;
});
</script>
<style scoped>
.card {
  position: relative;
  width: 370px;
  height: 412px;
  border-radius: 60px;
  overflow: hidden;
}

.card-img-bg {
  position: relative;
  width: 370px;
  height: 236px;
  margin: 0 auto;
  border-radius: 60px;
  border: 1px solid;
  box-sizing: border-box;
  background-size: cover;
}
.card-icon {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #ffffff;
}
</style>
