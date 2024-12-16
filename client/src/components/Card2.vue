<template>
  <div
    class="list-item"
    :style="{
      background: background,
      margin: margin,
    }"
  >
    <div class="list-container">
      <PString
        v-if="title.length > 0"
        :string="title"
        font-size="18px"
        color="#E42623"
        justify-content="left"
        margin="10px 20px"
        font-weight="regular"
      />
      <PString
        v-if="text.length > 0"
        :string="text"
        font-size="18px"
        color="#0099b8"
        justify-content="left"
        margin="10px 20px"
        font-weight="regular"
      />
      <div class="list-icon"><IconCardArrowRight /></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: 'Text' },
  margin: { type: String, default: '20px auto 0 auto' },
  background: { type: String, default: '#ffffff' },
});
</script>
<style scoped>
.list-item {
  position: relative;
  min-width: 620px;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}
.list-container {
  width: calc(100% - 15px);
  border-radius: 30px;
  border: 1px solid #0099b8;
  box-sizing: border-box;
  padding: 10px 0 10px 40px;
}

.list-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  color: #ffffff;
  background: #0099b8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
