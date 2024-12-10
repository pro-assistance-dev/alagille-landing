<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="adverseEvent.eventDescription" margin="0" label="Краткое описание" placeholder="Кратко опишите явление" />
    <PInputDate v-model="adverseEvent.createdAt" margin="20px 0 0 0" label="Дата создания" placeholder="Введите дату создания" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PSelect
      v-model="adverseEvent.reportedCompany"
      margin="0"
      :clearable="false"
      label="Сообщено в компанию"
      placeholder="Выберите, сообщено ли в компанию"
      @change="update"
    >
      <option :value="true" label="Да" />
      <option :value="false" label="Нет" />
    </PSelect>
    <PInputDate v-model="adverseEvent.reportedDate" margin="20px 0 0 0" label="Дата сообщения" placeholder="Введите дату сообщения" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="adverseEvent.reportedPerson" margin="0" label="Кому сообщили" placeholder="Введите, кому сообщили" />
    <PSelect
      v-model="adverseEvent.reportedPath"
      margin="0"
      label="Как сообщили"
      placeholder="Выберите метод связи"
      width="100%"
      :clearable="false"
      @change="update"
    >
      <option value="phone" label="телефон" />
      <option value="email" label="email" />
    </PSelect>
  </GridContainer>

  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="create" />
</template>

<script lang="ts" setup>
import Patient from '@/classes/Patient';
import AdverseEvent from '@/classes/AdverseEvent';
import AdverseEventStore from '@/store/AdverseEventStore';
const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  adverseEvent: {
    type: AdverseEvent,
    required: true,
  },
  title: {
    type: String,
    default: 'Редактировать явление',
  },
});

const emit = defineEmits(['update']);

const create = async () => {
  await AdverseEventStore.Update(props.adverseEvent);
  emit('update');
};

const update = async () => {
  await AdverseEventStore.Update(props.adverseEvent);
};
</script>
<style  scoped></style>
