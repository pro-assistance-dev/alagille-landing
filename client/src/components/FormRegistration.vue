<template>
  <PString string="Регистрация в программе" font-size="22px" />
  <PInput v-model="patient.email" label="Email пациента/ законного представителя*" />
  <!-- <GridContainer max-width="1000px" grid-template-columns="repeat(auto-fit, minmax(320px, 1fr))" grid-gap="20px">
    <PInput v-model="patient.email" label="Пароль*" />
    <PInput v-model="patient.email" label="Повторите пароль*" />
  </GridContainer> -->
  <GridContainer max-width="1000px" grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))" grid-gap="20px">
    <PInput v-model="patient.surname" label="Фамилия" />
    <PInput v-model="patient.name" label="Имя" />
    <PInput v-model="patient.patronymic" label="Отчество" />
  </GridContainer>
  <GridContainer max-width="1000px" grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))" grid-gap="20px">
    <PSelect v-model="patient.isMale" label="Пол*">
      <option value="true">Мужчина</option>
      <option value="false">Женщина</option>
    </PSelect>
    <PInputDate v-model="patient.dateBirth" label="Дата рождения" />
    <PInput v-model="patient.phone" mask="+#(###)###-##-##" label="Телефон*" />
  </GridContainer>
  <!-- <PInput v-model="patient.fioRepresentative" label="ФИО законного представителя" /> -->
  <!-- <PInput v-model="patient.howDoYouKnow" label="Откуда Вы узнали о программе" /> -->
  <!-- <PCheckBox v-model="patient.isRussion" label="Гражданство пациента - РФ" /> -->
  <!-- <PInput v-model="patient.region" label="Регион проживания пациента" /> -->
  <!-- <PInput v-model="patient.city" label="Город проживания пациента" /> -->
  <!-- <PInput v-model="patient.diagnosis" label="Диагноз" /> -->
  <!-- <PInput v-model="patient.drug" label="Назначенный препарат" /> -->

  <UploaderFile :file-info="patient.illHistory" label="История болезни" />
  <UploaderFile :file-info="patient.accept" label="Информированное согласие" />

  <PFlex max-width="1280px" margin="0 auto" justify-content="center">
    <RegButton text="Отправить" @click="create" />
  </PFlex>
</template>
<script lang="ts" setup>
import Patient from '@/classes/Patient';

const emit = defineEmits(['create']);
const patient: Patient = Patient.Create();

const create = async () => {
  await PatientsStore.Create();
  emit('create');
};
</script>
<style scoped></style>
