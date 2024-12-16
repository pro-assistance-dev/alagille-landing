<template>
  <div class="string" :style="styleObject" :class="customClass" @click="$emit('click')">
    <span v-if="isHtml" v-html="string" />
    <span v-else>{{ string }}</span>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['click']);

const props = defineProps({
  string: { type: String, required: false, default: '' },
  color: { type: String, required: false, default: 'var(--font-color)' },
  fontSize: { type: String, required: false, default: 'var(--font-size-default)' },
  fontWeight: { type: String, required: false, default: '' },
  background: { type: String, required: false, default: '' },
  padding: { type: String, required: false, default: '' },
  width: { type: String, required: false, default: '' },
  minWidth: { type: String, required: false, default: '' },
  margin: { type: String, required: false, default: '' },
  customClass: { type: String, required: false, default: '' },
  justifyContent: { type: String, required: false, default: 'center' },
  isHtml: { type: Boolean, required: false, default: false },
});

const styleObject = {
  color: props.color,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  background: props.background,
  padding: props.padding,
  width: props.width,
  maxWidth: props.width,
  minWidth: props.minWidth,
  margin: props.margin,
  justifyContent: props.justifyContent,
};
</script>

<style scoped>
.string {
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  align-items: center;
  background: inherit;
  font-family: var(--base-font);
  font-size: var(--font-size-default, 16px);
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}
</style>
