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
  <PInput v-model="patient.fioRepresentative" label="ФИО законного представителя" />
  <PInput v-model="patient.howDoYouKnow" label="Откуда Вы узнали о программе" />
  <PFlex max-width="1280px" margin="0 auto" justify-content="center">
    <RegButton text="Зарегистрироваться" />
  </PFlex>
</template>
<script lang="ts" setup>
import Patient from '@/classes/Patient';

const emit = defineEmits(['create']);
const patient: Patient = Patient.Create();

const create = async () => {
  // await HumansStore.Create(patient.human);
  // await RepresentativesStore.Create(patient.representative);
  // await HumansStore.Create(patient.representative.human);
  // await PatientsStore.Create(patient);
  // PatientsStore.AppendToAll([patient]);
  emit('create');
};
</script>
<style scoped></style>
