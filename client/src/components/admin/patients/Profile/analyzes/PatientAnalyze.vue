<template>
  <PRightSlider :open="true" background="var(--left-slider-background)" width-opened="230px" width-closed="20px">
    <PButton skin="text" type="primary" text="Желчные кислоты" margin="20px 0 0 8px" @click="choise = 1" />
    <PButton skin="text" type="primary" text="Жирорастворимые витамины" @click="choise = 2" />
    <template #content>
      <component :is="component" />
    </template>
  </PRightSlider>
</template>

<script lang="ts" setup>
import AnalyzeAcids from '@/components/admin/patients/Profile/analyzes/AnalyzeAcids.vue';
import AnalyzeVitamins from '@/components/admin/patients/Profile/analyzes/AnalyzeVitamins.vue';

const choise = ref(1);

const components = {
  1: AnalyzeAcids,
  2: AnalyzeVitamins,
};

const component = computed(() => {
  if (choise.value === 1) {
    return components['1'];
  }
  if (choise.value === 2) {
    return components['2'];
  }
  return 'no';
});
</script>

<style  scoped></style>
