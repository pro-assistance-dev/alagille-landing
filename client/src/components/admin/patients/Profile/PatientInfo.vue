<template>
  <InfoBlock>
    <template #foto>
      <div class="foto">
        <div class="f"></div>
      </div>
    </template>
    <template #header-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput v-model="patient.human.surname" placeholder="Фамилия" margin="0" @blur="updateHuman" />
        <PInput v-model="patient.human.name" placeholder="Имя" margin="0" @blur="updateHuman" />
        <PInput v-model="patient.human.patronymic" placeholder="Отчество" margin="0" @blur="updateHuman" />
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="10px 0 0 0"
      >
        <PInputDate v-model="patient.human.dateBirth" margin="0" @change="updateHuman" />
        <PSelect placeholder="Выберите пол" width="100%">
          <option>Мужской</option>
          <option>Женский</option>
        </PSelect>
      </GridContainer>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #header-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput
          v-model="patient.passportNum"
          label="Паспорт/Свидетельство о рождении"
          placeholder="Номер"
          margin="10px 0 0 0"
          @blur="updatePatient"
        />
        <PInput v-model="patient.region" label="Регион" placeholder="" margin="10px 0 0 0" @blur="updatePatient" />
        <PInput v-model="patient.status" label="Статус" placeholder="" margin="10px 0 0 0" @blur="updatePatient" />
      </GridContainer>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #header-info>
      <PString string="Обязательные документы" font-size="26px" justify-content="left" margin="0 0 20px 0" />
    </template>
    <template #footer-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(390px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <UploaderFile :file-info="patient.agreeScan" placeholder="Согласие" margin="0" @upload="addFile" @remove="removeFile">
          <IconDoc
        /></UploaderFile>
      </GridContainer>
    </template>
  </InfoBlock>
</template>

<script lang="ts" setup>
const patient = PatientsStore.Item();

const updateHuman = async () => {
  await HumansStore.Update(patient.human);
};

const updatePatient = async () => {
  await PatientsStore.Update();
};
const addFile = async () => {
  await FileInfosStore.Create(patient.agreeScan);
  patient.agreeScanId = patient.agreeScan.id;
  await PatientsStore.Update();
};

const removeFile = async () => {
  await FileInfosStore.Remove(patient.agreeScan.id);
  patient.agreeScan = new FileInfo();
  patient.agreeScanId = undefined;
  await PatientsStore.Update();
};
</script>

<style  scoped>
.foto {
  min-width: 186px;
  max-width: 186px;
  min-height: 186px;
  max-height: 186px;
}

.f {
  min-width: 150px;
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  background: #5e6ce7;
  border-radius: 10px;
}
</style>
