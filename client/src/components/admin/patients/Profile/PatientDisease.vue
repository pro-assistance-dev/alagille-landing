<template>
  <InfoBlock>
    <template #header-info>
      <PCheckBox v-model="patient.disease" placeholder="Задайте статус" width="100%" label="Синдром Алажиля" @change="update" />
      <PTextarea v-model="patient.diseaseInfo" label="Информация" margin="0" @blur="update" />
    </template>
  </InfoBlock>
</template>

<script lang="ts" setup>
const patient = PatientsStore.Item();

const update = async () => {
  await PatientsStore.Update();
};
</script>

<style  scoped></style>
