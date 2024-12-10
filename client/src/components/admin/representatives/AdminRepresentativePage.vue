<template>
  <PTabs :tabs="tabs" @select="selectTab">
    <AdminAnketInfo v-if="selectedTabId === 0" />
    <PRightSlider v-if="selectedTabId === 1" :open="true" width-opened="500px" background="var(--primary-background-base)">
      <FieldEdit />
      <template #content>
        <AdminFormSections :form="anket.form" />
      </template>
    </PRightSlider>
  </PTabs>
</template>

<script setup lang="ts">
const anket = AnketsStore.Item();

const tabs = [
  {
    id: 0,
    name: 'Анкета',
  },
  {
    id: 1,
    name: 'Вопросы',
  },
];
const selectedTabId = ref(0);

const load = async () => {
  await AnketsStore.Get();
  FormsStore.Set(anket.form);
  PHelp.AdminUI.Head.Set(anket.name, []);
};

const selectTab = (tab: ITab) => {
  if (tab.id) {
    selectedTabId.value = +tab.id;
  }
};

Hooks.onBeforeMount(load);
</script>

<style  scoped></style>
