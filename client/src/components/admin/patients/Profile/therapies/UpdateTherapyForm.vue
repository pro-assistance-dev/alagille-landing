<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="therapy.preparation" margin="0" label="Препарат" placeholder="Введите значение" />
    <PInput v-model="therapy.dosage" margin="0" label="Дозировка" placeholder="Введите значение" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInputDate v-model="therapy.appointmentDate" margin="20px 0 0 0" label="Дата назначения" placeholder="Введите дату назначения" />
    <PInputDate v-model="therapy.cancellationDate" margin="20px 0 0 0" label="Дата отмены" placeholder="Введите дату отмены" />
  </GridContainer>

  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="create" />
</template>

<script lang="ts" setup>
import Patient from '@/classes/Patient';
import Therapy from '@/classes/Therapy';
const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  therapy: {
    type: Therapy,
    required: true,
  },
  title: {
    type: String,
    default: 'Новая терапия',
  },
});

const emit = defineEmits(['update']);

const create = async () => {
  await TherapiesStore.Update(props.therapy);
  emit('update');
};
</script>
<style  scoped></style>
