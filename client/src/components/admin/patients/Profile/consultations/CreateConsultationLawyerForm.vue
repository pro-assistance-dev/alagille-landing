<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <PInput v-model="item.theme" margin="0" label="Тема консультации" placeholder="Введите тему консультации" />
  <PInputDate v-model="item.themeDate" margin="20px 0 0 0" label="Дата консультации" placeholder="Введите дату консультации" />
  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="create" />
</template>

<script lang="ts" setup>
import Patient from '@/classes/Patient';
import ConsultationLawyer from '@/classes/ConsultationLawyer';
import ConsultationLawyerStore from '@/store/ConsultationLawyerStore';

const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  title: {
    type: String,
    default: 'Новая консультация',
  },
});

const item = ref(ConsultationLawyer.Create(props.patient.id));
const emit = defineEmits(['create']);

const create = async () => {
  await ConsultationLawyerStore.Create(item.value);
  props.patient.addConsultationLawyer(item.value);
  emit('create');
};
</script>
<style  scoped></style>
