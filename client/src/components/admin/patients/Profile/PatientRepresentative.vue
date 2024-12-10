<template>
  <InfoBlock>
    <template #header-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput v-model="patient.representative.human.surname" placeholder="Фамилия" margin="0" @blur="updateHuman" />
        <PInput v-model="patient.representative.human.name" placeholder="Имя" margin="0" @blur="updateHuman" />
        <PInput v-model="patient.representative.human.patronymic" placeholder="Отчество" margin="0" @blur="updateHuman" />
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="10px 0 0 0"
      >
        <PInputDate v-model="patient.representative.human.dateBirth" margin="0" @blur="updateHuman" />
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
          v-model="patient.representative.passportNum"
          label="Паспорт/Свидетельство о рождении"
          placeholder="Номер"
          margin="10px 0 0 0"
          @blur="update"
        />
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(30%, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput v-model="patient.representative.phone" label="Телефон" placeholder="Номер" margin="10px 0 0 0" @blur="update" />
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
        <UploaderFile
          :file-info="patient.representative.agreeScan"
          placeholder="Согласие"
          margin="0"
          @upload="addFile"
          @remove="removeFile"
        >
          <IconDoc
        /></UploaderFile>
      </GridContainer>
    </template>
  </InfoBlock>
</template>

<script lang="ts" setup>
const patient = PatientsStore.Item();

const updateHuman = async () => {
  await HumansStore.Update(patient.representative.human);
};

const update = async () => {
  await RepresentativesStore.Update(patient.representative);
};
const addFile = async () => {
  await FileInfosStore.Create(patient.representative.agreeScan);
  patient.representative.agreeScanId = patient.representative.agreeScan.id;
  await RepresentativesStore.Update(patient.representative);
};

const removeFile = async () => {
  await FileInfosStore.Remove(patient.representative.agreeScan.id);
  patient.representative.agreeScan = new FileInfo();
  patient.representative.agreeScanId = undefined;
  await RepresentativesStore.Update(patient.representative);
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
