<template>
  <div class="grid-block" :class="customClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: {
    type: String as PropType<string>,
    required: false,
    default: '',
  },
  width: {
    type: String as PropType<string>,
    required: false,
    default: '100%',
  },
  background: {
    type: String as PropType<string>,
    required: false,
    default: 'inherit',
  },
  gridGap: {
    type: String as PropType<string>,
    required: false,
    default: '10px',
  },
  gridTemplateColumns: {
    type: String as PropType<string>,
    required: false,
    default: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  gridTemplateRows: {
    type: String as PropType<string>,
    required: false,
    default: 'repeat(0 0px)',
  },
  margin: {
    type: String as PropType<string>,
    required: false,
    default: '10px 0 0 0',
  },
  // Custom class styles have prio
  customClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style scoped>
.grid-block {
  box-sizing: border-box;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  max-width: v-bind(maxWidth);
  width: v-bind(width);
  background: v-bind(background);
  grid-gap: v-bind(gridGap);
  grid-template-columns: v-bind(gridTemplateColumns);
  grid-template-rows: v-bind(gridTemplateRows);
  margin: v-bind(margin);
}
</style>
