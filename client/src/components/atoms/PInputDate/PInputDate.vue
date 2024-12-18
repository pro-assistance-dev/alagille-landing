<template>
  <div
    class="style-container"
    :style="{
      width: width,
      position: 'relative',
    }"
  >
    <PInput
      v-model="date"
      mask="##.##.####"
      :placeholder="placeholder"
      :margin="margin"
      :label="label"
      @blur="changeHandler"
      @keydown.enter.prevent="undefined"
    />
  </div>
</template>

<script lang="ts" setup>
// import DatesFormatter from '@/services/DatesFormatter';

defineProps({
  placeholder: {
    type: String,
    default: 'Укажите дату',
  },
  width: { type: String as PropType<string>, required: false, default: 'auto' },
  margin: { type: String as PropType<string>, required: false, default: '' },
  label: { type: String, default: '', required: false },
});

const emits = defineEmits(['update:modelValue', 'change', 'beforeChange']);

const model = defineModel<Date>({ default: new Date() });
const modelValueString = DatesFormatter.Format(model.value);
const date: Ref<string> = ref(modelValueString);

const changeHandler = (value: string) => {
  if (!valid(value)) {
    return;
  }

  const dateObj = DatesFormatter.FromRuStr(value);
  model.value = dateObj;
  emits('beforeChange', dateObj);
  emits('change', dateObj);
};

const valid = (value: string): boolean => {
  if (value.length != 10) {
    date.value = modelValueString;
    PHelp.Notification.Danger('Неверный формат даты');
    return false;
  }

  if (Number(date.value.slice(0, 2)) > 31) {
    date.value = modelValueString;
    PHelp.Notification.Danger('Неверный день месяца');
    return false;
  }

  if (Number(date.value.slice(3, 5)) > 12) {
    date.value = modelValueString;
    PHelp.Notification.Danger('Неверный месяц');
    return false;
  }

  if (Number(date.value.slice(6, 10)) > 2100) {
    date.value = modelValueString;
    PHelp.Notification.Danger('Неверный год');
    return false;
  }
  return true;
};
</script>
