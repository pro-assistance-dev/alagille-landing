<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="application.quantity" margin="0" label="Количество упаковок" placeholder="Введите значение" />
    <PInputDate v-model="application.createdAt" margin="0" label="Дата создания" placeholder="Введите дату создания" />
    <PInputDate v-model="application.date" margin="0" label="Дата подачи на ГУ" placeholder="Дата подачи на ГУ" />
    <PInputDate v-model="application.start" margin="0" label="Начало периода" placeholder="Начало периода" />
    <PInputDate v-model="application.end" margin="0" label="Конец периода" placeholder="Конец периода" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <UploaderFile :file-info="application.fkScan" placeholder="Скан ФК" margin="10px 0 0 0" @upload="addFile" @remove="removeFile">
      <IconDoc />
    </UploaderFile>
  </GridContainer>

  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="create" />
</template>

<script lang="ts" setup>
import Application from '@/classes/Application';
import Patient from '@/classes/Patient';
import ApplicationStore from '@/store/ApplicationStore';

const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  application: {
    type: Application,
    required: true,
  },
  title: {
    type: String,
    default: 'Редактировать заявку',
  },
});

const emit = defineEmits(['update']);

const create = async () => {
  await ApplicationStore.Update(props.application);
  emit('update');
};

const addFile = async () => {
  await FileInfosStore.Create(props.application.fkScan);
  props.application.fkScanId = props.application.fkScan.id;
  await ApplicationStore.Update(props.application);
};

const removeFile = async () => {
  await FileInfosStore.Remove(props.application.fkScan.id);
  props.application.fkScan = new FileInfo();
  props.application.fkScanId = undefined;
  await ApplicationStore.Update(props.application);
};
</script>
<style  scoped></style>
