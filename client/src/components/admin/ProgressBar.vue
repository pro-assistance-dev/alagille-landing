<template>
  <div
    :style="{
      border: border ? '1px solid var(--modal-divider-color)' : 'none',
      padding: padding,
      width: width,
      margin: margin,
      borderRadius: borderRadius,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      background: '#fff',
      overflow: 'hidden',
    }"
  >
    <PString v-if="progress <= 100" :string="text" width="auto" margin="0 3px 0 0" />
    <PString v-if="progress > 100" string="Ошибка! Прогресс больше 100%!" />
    <PFlex v-if="progress <= 100" justify-content="left" width="100%">
      <div
        class="progress-bar"
        :style="{
          background: progress === 100 ? colorFull : color,
          width: `${progress}%`,
          height: height,
        }"
      ></div>
      <PString :string="progress + '%'" width="30px" margin="0 0 0 3px" />
    </PFlex>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: { type: String, required: false, default: '' },
  height: { type: String, required: false, default: '16px' },
  text: { type: String, required: false, default: 'Заполнено: ' },
  progress: { type: Number, required: true, default: 0 },
  fontSize: { type: String, required: false, default: '28px' },
  padding: { type: String, required: false, default: '2px' },
  margin: { type: String, required: false, default: '10px' },
  borderRadius: { type: String, required: false, default: 'var(--input-field-borderRadius-default)' },
  border: { type: Boolean, required: false, default: true },
  color: { type: String, required: false, default: 'var(--progress-bar-color)' },
  colorFull: { type: String, required: false, default: 'var(--progress-bar-full-color)' },
});
</script>
<style  scoped></style>
