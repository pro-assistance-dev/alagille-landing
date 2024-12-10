<template>
  <PInput v-model="anket.name" @blur="update" label="Название анкеты" placeholder="Задайте название анкеты" margin="20px" />
  <PSelect
    v-model="anket.nosology"
    label="Нозология"
    placeholder="Выберите нозологию"
    width="auto"
    margin="20px"
    clearable="false"
    @change="update"
  >
    <option v-for="(t, i) in nosologies" :key="i" :value="t" :label="t" />
  </PSelect>
</template>

<script setup lang="ts">
const anket = AnketsStore.Item();

const nosologies = ['Миодитрофия Дюшенна', 'Нейробластома', 'Нейротрофический кератит'];
const update = async () => {
  await AnketsStore.Update();
};
</script>

<style  scoped></style>
