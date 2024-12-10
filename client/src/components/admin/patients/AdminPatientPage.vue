<template>
  <PTabs v-if="mounted" :tabs="tabs" background="#F5FAFF" @select="handleSelect">
    <component :is="component" />
  </PTabs>
</template>

<script setup lang="ts">
import PatientComment from '@/components/admin/patients/PatientComment.vue';
import PatientAdverseEvent from '@/components/admin/patients/Profile/adverseEvents/PatientAdverseEvent.vue';
import PatientAnalyze from '@/components/admin/patients/Profile/analyzes/PatientAnalyze.vue';
import PatientApplication from '@/components/admin/patients/Profile/applications/PatientApplication.vue';
import PatientConsultations from '@/components/admin/patients/Profile/consultations/PatientConsultations.vue';
import PatientDisease from '@/components/admin/patients/Profile/PatientDisease.vue';
import PatientInfo from '@/components/admin/patients/Profile/PatientInfo.vue';
import PatientRepresentative from '@/components/admin/patients/Profile/PatientRepresentative.vue';
import PatientTherapy from '@/components/admin/patients/Profile/therapies/PatientTherapy.vue';
const choise = ref(1);

// const user = UsersStore.Item();

const tabs = [
  {
    id: 1,
    name: 'Паспортная часть',
  },
  {
    id: 2,
    name: 'Заболевание',
  },
  {
    id: 3,
    name: 'Законный представитель',
  },
  {
    id: 4,
    name: 'Анализы',
  },
  {
    id: 5,
    name: 'Терапия',
  },
  {
    id: 6,
    name: 'Консультации',
  },
  {
    id: 7,
    name: 'Заявки',
  },
  {
    id: 8,
    name: 'Нежелательные явления',
  },
  {
    id: 9,
    name: 'Комментарий',
  },
];

const components = {
  1: PatientInfo,
  2: PatientDisease,
  3: PatientRepresentative,
  4: PatientAnalyze,
  5: PatientTherapy,
  6: PatientConsultations,
  7: PatientApplication,
  8: PatientAdverseEvent,
  9: PatientComment,
};

const component = computed(() => {
  if (choise.value === 1) {
    return components['1'];
  }
  if (choise.value === 2) {
    return components['2'];
  }
  if (choise.value === 3) {
    return components['3'];
  }
  if (choise.value === 4) {
    return components['4'];
  }
  if (choise.value === 5) {
    return components['5'];
  }
  if (choise.value === 6) {
    return components['6'];
  }
  if (choise.value === 7) {
    return components['7'];
  }
  if (choise.value === 8) {
    return components['8'];
  }
  if (choise.value === 9) {
    return components['9'];
  }
  return 'no';
});

const emit = defineEmits(['select']);

const patient = PatientsStore.Item();
const mounted = ref(false);

const load = async () => {
  await PatientsStore.Get();
  PHelp.AdminUI.Head.Set(patient.human.getFullName(), []);
  mounted.value = true;
  return;
};

const handleSelect = async (item: ITab): Promise<void> => {
  emit('select', item);
  if (item.id) {
    choise.value = +item.id;
  }
};

Hooks.onBeforeMount(load);
// Hooks.onBeforeRouteLeave();
</script>

<style  scoped></style>
