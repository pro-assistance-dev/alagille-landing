<template>
  <div v-if="show" class="blur" @click="close" />
  <div
    v-if="show"
    class="modal-w"
    :style="{
      maxWidth: width,
      width: width,
      margin: margin,
      padding: padding,
      top: top,
    }"
  >
    <div v-if="closable" class="icon-box" @click="close">
      <IconClose size="20px" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  showCloseDialog: { type: Boolean, required: false, default: false },
  closable: { type: Boolean, required: false, default: false },
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '760px',
  },
  margin: {
    type: String,
    default: 'auto',
  },
  top: {
    type: String,
    default: '20vh',
  },
  padding: {
    type: String,
    default: 'var(--modal-window-padding)',
  },
  showClose: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['save', 'close']);

const escapeHandler = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  document.body.addEventListener('keydown', escapeHandler);
});
onBeforeUnmount(() => {
  document.body.removeEventListener('keydown', escapeHandler);
});

const close = () => {
  if (!props.closable) {
    return;
  }
  emit('close');
};
</script>

<style lang="scss" scoped>
.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.3;
  z-index: 1000;
}

.icon-box {
  position: absolute;
  top: 10px;
  color: var(--font-color);
  right: 10px;
  &:hover {
    color: var(--font-color-focus);
    cursor: pointer;
  }
}

.modal-w {
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
  border-radius: 5px;
  overflow: hidden;
  max-height: 90vh;
  min-height: 40px;
  background: var(--modal-window-background-color);
  color: var(--base-font-color);
}
</style>
