<template>
  <PTabs v-if="mounted" :tabs="tabs" background="#F5FAFF" @select="handleSelect">
    <component :is="component" />
  </PTabs>
</template>

<script setup lang="ts">
import PatientInfo from '@/components/admin/patients/Profile/PatientInfo.vue';
const choise = ref(1);

// const user = UsersStore.Item();

const tabs = [
  {
    id: 1,
    name: 'Информация',
  },
];

const components = {
  1: PatientInfo,
};

const component = computed(() => {
  if (choise.value === 1) {
    return components['1'];
  }
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

<style scoped></style>
