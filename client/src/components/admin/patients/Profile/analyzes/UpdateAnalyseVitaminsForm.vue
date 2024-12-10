<template>
  <PString :string="title" font-size="20px" margin="20px auto" />
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="analyze.d25oh" margin="0" label="Витамин Д(25ОН)" placeholder="Введите значение" />
    <PInput v-model="analyze.a" margin="0" label="Витамин А" placeholder="Введите значение" />
  </GridContainer>
  <GridContainer
    grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
    background="#ffffff"
    max-width="100%"
    grid-gap="10px"
    margin="0 auto"
  >
    <PInput v-model="analyze.e" margin="0" label="Витамин Е" placeholder="Введите значение" />
    <PInput v-model="analyze.k1" margin="0" label="Витамин К1" placeholder="Введите значение" />
  </GridContainer>

  <PInputDate v-model="analyze.resultDate" margin="20px 0 0 0" label="Дата анализа" placeholder="Введите дату анализа" />
  <PButton skin="base" type="primary" text="Сохранить" margin="40px auto 0 auto" justify-content="center" @click="update" />
</template>

<script lang="ts" setup>
import AnalyzeVitamins from '@/classes/AnalyzeVitamins';
import Patient from '@/classes/Patient';

const props = defineProps({
  patient: {
    type: Patient,
    required: true,
  },
  analyze: {
    type: AnalyzeVitamins,
    required: true,
  },
  title: {
    type: String,
    default: 'Новый анализ',
  },
});

const emit = defineEmits(['update']);

const update = async () => {
  await AnalyzesVitaminsStore.Update(props.analyze);
  emit('update');
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

.analyze.flex {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.line-itemleft {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 10px;
  padding: 0;
}

.line-itemright {
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

  .analyze.flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .analyze.flex:last-child {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 560px) {
  .line-itemleft {
    margin: 10px 0;
  }

  .line-itemright {
    margin: 10px 0;
    justify-content: space-between;
  }

  .analyze.flex:first-child {
    display: block;
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
