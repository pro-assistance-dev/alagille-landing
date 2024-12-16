<template>
  <button
    v-bind="$attrs"
    :style="{
      margin: margin,
      padding: padding,
      maxWidth: width,
      minWidth: width,
      minHeight: height,
      maxHeight: height,
      fontSize: fontSize,
    }"
    :class="classes"
    @click.prevent="click"
  >
    <slot />
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import Strings from '@/services/Strings';
import { Sizes } from '@/types/Sizes';
import { Statuses } from '@/types/Statuses';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  text: { type: String, default: '', required: false },
  margin: { type: String, default: '', required: false },
  padding: { type: String, default: '', required: false },
  width: { type: String, default: '', required: false },
  height: { type: String, default: '', required: false },
  skin: { type: String, default: 'base', required: false },
  size: { type: String as PropType<Sizes>, default: Sizes.M, required: false },
  type: { type: String as PropType<Statuses>, default: Statuses.Primary, required: false },
  fontSize: { type: String, default: '', required: false },
  // disabled: { type: Boolean, default: false, required: false },
});

const emit = defineEmits(['click']);
const click = () => {
  emit('click');
};

const key = 'p-button';
const skinClass = computed(() => Strings.JoinSnake(key, props.skin));
const typeClass = computed(() => Strings.JoinSnake(skinClass.value, props.type));
const sizeClass = computed(() => Strings.JoinSnake(skinClass.value, props.size));
const classes = computed(() => [skinClass.value, typeClass.value, sizeClass.value]);
</script>

<style scoped>
@import '@/components/atoms/PButton/skins/p-button_base.css';
@import '@/components/atoms/PButton/skins/p-button_text.css';
@import '@/components/atoms/PButton/skins/p-button_pag.css';
@import '@/components/atoms/PButton/skins/p-button_text_ano.css';
</style>
