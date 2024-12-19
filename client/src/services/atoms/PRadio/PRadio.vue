<template>
  <div class="radio-line" :style="{ padding: padding, margin: margin, maxWidth: width }">
    <label class="radio-field__label" :for="id" :style="{ fontSize: fontSize }">
      <input :id="id" v-model="model" :name="name" :checked="checked" class="radio-field__input" type="radio" :value="value" />
      <div class="box" :style="{ width: size, height: size, borderRadius: borderRadius }" @click="change">
        <div v-if="model === value" class="radio-dot" :style="{ width: `calc(${size} - 50%)`, height: `calc(${size} - 50%)` }"></div>
      </div>
      <span @click="change">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<string>();
const emits = defineEmits(['change']);
const props = defineProps({
  label: { type: String, default: '' },
  name: { type: String, default: 'group' },
  fontSize: { type: String, default: '14px' },
  size: { type: String, default: '20px' },
  borderRadius: { type: String, default: '' },
  padding: { type: String, default: '' },
  margin: { type: String, default: '' },
  width: { type: String, default: 'auto' },
  value: { type: [String, Boolean], default: undefined },
});
const id = Strings.CreateGuid();
const checked = computed(() => {
  return model.value === props.value;
});
const change = () => {
  emits('change', props.value);
};
</script>

<style scoped>
.radio-line {
  display: flex;
  justify-content: left;
  align-items: center;
  display: flex;
  justify-content: left;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 0;
}

.box {
  position: relative;
  border: 1px solid;
  border-color: var(--checkbox-border-color);
  border-radius: 100px;
  box-sizing: border-box;
  margin-right: 10px;
}

.radio-dot {
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  background: var(--checkbox-border-color);
  border-radius: 100px;
}

.radio-field__label {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: var(--base-font);
  color: var(--checkbox-label-color);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: pointer;
}

.radio-field__label:hover {
  color: var(--checkbox-border-color-hovered);
}

.radio-field__label:hover > .box {
  border-color: var(--checkbox-border-color-hovered);
  color: var(--checkbox-border-color-hovered);
}

.radio-field__input {
  display: none;
}
</style>
