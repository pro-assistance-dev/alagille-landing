<template>
  <PTextarea v-model="patient.comment" label="Комментарий" placeholder="Комментарий" margin="20px" @blur="update" />
</template>

<script setup lang="ts">
const patient = PatientsStore.Item();

const update = async () => {
  await PatientsStore.Update();
};
</script>

<style lang="scss" scoped></style>
