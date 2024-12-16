<template>
  <div class="text-field" :style="{ margin: margin, padding: padding }">
    <label v-if="label" class="text-field__label" :for="label">
      {{ label }}
    </label>
    <div
      class="field"
      :style="{
        borderColor: borderColor,
      }"
    >
      <div class="left-field">
        <slot />
      </div>
      <textarea
        v-bind="$attrs"
        v-model="model"
        v-maska="mask"
        class="text-field__input"
        :style="{ color: color }"
        @blur="$emit('blur', model)"
        @input="$emit('input', model)"
      />
      <div class="right-field">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska/vue';
defineEmits(['blur', 'input']);
const model = defineModel<string>();

defineProps({
  label: { type: String, default: '', required: false },
  margin: { type: String, required: false, default: '0' },
  padding: { type: String, default: '0', required: false },
  mask: { type: String, required: false, default: undefined },
  borderColor: { type: String, default: 'var(--input-border-color)', required: false },
  color: { type: String, default: 'var(--input-font-color)', required: false },
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.field {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--input-background);
  border-radius: var(--input-field-borderRadius-default);
  border: 1px solid;
  padding: var(--input-padding-default);
  margin: var(--input-margin-default);
  overflow: hidden;
}

.right-field {
  display: flex;
  justify-content: right;
  align-items: center;
  width: auto;
}

.left-field {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
}

.text-field {
  width: var(--input-width-default);
}

.text-field__label {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-family: var(--base-font);
  color: var(--input-label-color);
  font-size: var(--button-font-size-default);
  margin: var(--input-labal-margin);
}

.text-field__input {
  width: 100%;
  font-size: var(--button-font-size-default);
  font-family: var(--base-font);
  background: var(--input-background);
  margin: 0;
  height: auto;
  border: none;
}

.text-field__input::placeholder {
  font-family: var(--base-font);
  font-size: var(--button-font-size-default);
  color: var(--input-placeholder-color);
}

.text-field__input:focus {
  color: var(--input-focus-color);
  outline: 0;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: var(--input-readonly-background);
  opacity: 1;
}
</style>
