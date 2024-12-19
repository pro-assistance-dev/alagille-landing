<template>
  <div class="text-field" :style="{ margin: margin, padding: padding, width: width }">
    <label v-if="label" class="text-field__label" :for="label">
      {{ label }}
    </label>
    <div class="field">
      <div class="left-field">
        <slot name="left" />
      </div>
      <div class="sl" @mouseover="showClearIcon = true" @mouseleave="showClearIcon = false">
        <div v-if="clearable" v-show="showClearIcon" class="clear" @click="clear">
          <IconClose margin="0" />
        </div>
        <div class="arrow">
          <IconSelectArrow margin="2px 2px 0 0" />
        </div>
        <select v-bind="$attrs" v-model="model" class="text-field__input" @change="select">
          <option selected hidden>{{ placeholder }}</option>
          <slot />
        </select>
      </div>
      <div class="right-field">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import IconClose from '@/components/Icons/IconClose.vue';

const model: Ref<unknown> = defineModel<unknown>();
const ph: Ref<boolean> = ref(true);
const emits = defineEmits(['change', 'clear']);
defineOptions({ inheritAttrs: false });

const showClearIcon = ref(false);

defineProps({
  label: { type: String, default: '', required: false },
  placeholder: { type: String, default: '', required: false },
  value: { type: String, default: '', required: false },
  readonly: { type: Boolean, default: false, required: false },
  disabled: { type: Boolean, default: false, required: false },
  margin: { type: String, required: false, default: '' },
  padding: { type: String, required: false, default: '' },
  clearable: { type: Boolean, required: false, default: true },
  width: { type: String, required: false, default: '' },
});

const select = () => {
  ph.value = false;
  emits('change', model.value);
};
const clear = () => {
  emits('clear', undefined);
  emits('change', undefined);
  ph.value = true;
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

option {
  padding: 0;
}

.field {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--input-background);
  border-radius: 100px;
  border: 1px solid;
  border-radius: var(--input-field-borderRadius-default);
  border-color: var(--input-border-color);
  padding: var(--input-padding-default);
  margin: var(--input-margin-default);
  overflow: hidden;
}

.sl {
  width: 100%;
  position: relative;
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
  box-sizing: border-box;
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
  color: var(--input-font-color);
  margin: 0;
  padding: 9px 40px 6px 0px;
  border: none;
  cursor: pointer;
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

.clear {
  position: absolute;
  top: calc(50%);
  transform: translateY(-50%);
  right: 0px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--input-background);
  color: var(--input-font-color);
  transition: 0;
  cursor: pointer;
}

.arrow {
  position: absolute;
  top: calc(50%);
  transform: translateY(-50%);
  right: 0px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--input-background);
  color: var(--input-font-color);
  transition: 0;
  cursor: pointer;
}

select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
