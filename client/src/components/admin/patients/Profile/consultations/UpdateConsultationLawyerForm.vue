<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <PInput v-model="consultation.theme" margin="0" label="Тема консультации" placeholder="Введите тему консультации" />
  <PInputDate v-model="consultation.themeDate" margin="20px 0 0 0" label="Дата консультации" placeholder="Введите дату консультации" />
  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="create" />
</template>

<script lang="ts" setup>
import ConsultationLawyer from '@/classes/ConsultationLawyer';
import Patient from '@/classes/Patient';
import ConsultationLawyerStore from '@/store/ConsultationLawyerStore';

const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  consultation: {
    type: ConsultationLawyer,
    required: true,
  },
  title: {
    type: String,
    default: 'Редактировать консультацию',
  },
});

const emit = defineEmits(['update']);

const create = async () => {
  await ConsultationLawyerStore.Update(props.consultation);
  emit('update');
};
</script>
<style  scoped></style>
