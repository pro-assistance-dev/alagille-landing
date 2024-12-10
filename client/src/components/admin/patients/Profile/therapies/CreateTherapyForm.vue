<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="item.preparation" margin="0" label="Препарат" placeholder="Введите значение" />
    <PInput v-model="item.dosage" margin="0" label="Дозировка" placeholder="Введите значение" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInputDate v-model="item.appointmentDate" margin="20px 0 0 0" label="Дата назначения" placeholder="Введите дату назначения" />
    <PInputDate v-model="item.cancellationDate" margin="20px 0 0 0" label="Дата отмены" placeholder="Введите дату отмены" />
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
  title: {
    type: String,
    default: 'Новая терапия',
  },
});

const emit = defineEmits(['create']);

const item = ref(Therapy.Create(props.patient.id));

const create = async () => {
  await TherapiesStore.Create(item.value);
  props.patient.addTherapy(item.value);
  emit('create');
};
</script>
<style scoped>
.button {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  font-size: 12px;

  &-filter {
    background: #ffffff;
  }

  &-download {
    background: #dff2f8;
  }
}

:deep(.button-register) {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #ffffff;
  font-size: 12px;
}

:deep(.name-item) {
  margin: 0;
  width: auto;
  border-color: #ffffff;
  padding: 0;
}

.grid {
  grid-gap: 10px;
  margin: 0;
}

.plus-button {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  color: #00bea5;
  background: #c1efeb;
}

.save-picker-button {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
}

.gender-button {
  width: 42px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 18px;
}

.save-button {
  width: 100%;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 14px;
}

:deep(.edit-button) {
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
  margin-right: 10px;
}

:deep(.files-buttons) {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
  font-size: 12px;

  &:hover {
    background: #dff2f8;
  }
}

.edv {
  font-size: 14px;
  padding: 0;
  margin: 0 5px 0 0;

  &-active {
    color: #b0a4c0;
  }
}

.anket-name {
  color: #006bb4;
  font-size: 17px;
  min-width: 150px;
  width: 100%;
  padding: 0;
}

.hidden {
  display: none;
}

.registers-tooltip {
  &:hover {
    cursor: pointer;
  }
}

.anket-link {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.tag-link:hover {
  background-color: darken(white, 10%);
  cursor: pointer;
}

.flex-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

:deep(.edit-icon) {
  width: 28px;
  height: 28px;
  color: #006bb4;
}

.item-flex {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.line-item-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 10px;
  padding: 0;
}

.line-item-right {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  min-width: 210px;
  padding: 0;
}

:deep(.icon-plus) {
  fill: #00b5a4;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.icon-filter {
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #006bb4;
  fill: none;
}

.icon-del {
  width: 10px;
  height: 10px;
  cursor: pointer;
}

:deep(.el-anket-item) {
  margin: 8px 0 0 0;
}

@media (max-width: 1915px) {
  .line-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  .item-flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .item-flex:last-child {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 560px) {
  .line-item-left {
    margin: 10px 0;
  }

  .line-item-right {
    margin: 10px 0;
    justify-content: space-between;
  }

  .item-flex:first-child {
    display: block;
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
