<template>
  <PRightSlider :open="true" background="var(--left-slider-background)" width-opened="230px" width-closed="20px">
    <PButton skin="text" type="primary" text="Консультации юриста" margin="20px 0 0 8px" @click="choise = 1" />
    <PButton skin="text" type="primary" text="Консультации психолога" @click="choise = 2" />
    <template #content>
      <component :is="component" />
    </template>
  </PRightSlider>
</template>

<script lang="ts" setup>
import ConsultationLawyer from '@/components/admin/patients/Profile/consultations/ConsultationLawyer.vue';
import ConsultationPsyhologist from '@/components/admin/patients/Profile/consultations/ConsultationPsychologist.vue';

const choise = ref(1);

const components = {
  1: ConsultationLawyer,
  2: ConsultationPsyhologist,
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
