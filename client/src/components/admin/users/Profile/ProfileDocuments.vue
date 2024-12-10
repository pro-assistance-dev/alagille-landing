<template>
  Документы
  <!-- <div class="bg">
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
          gridGap="10px"
          margin="0 auto"
        >
          <PInput v-model="user.surname" placeholder="Фамилия" margin="0" @blur="" />
          <PInput v-model="user.name" placeholder="Имя" margin="0" @blur="" />
          <PInput v-model="user.patronymic" placeholder="Отчество" margin="0" @blur="" />
        </GridContainer>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="10px 0 0 0"
        >
          <PInputDate v-model="user.dateBirth" margin="0" @blur="" />
          <PSelect placeholder="Выберите пол" width="100%">
            <option>Мужской</option>
            <option>Женский</option>
          </PSelect>
        </GridContainer>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="10px 0 0 0"
        >
          <PInput v-model="user.email" placeholder="Адрес эл.почты" margin="0" @blur="" />
          <PInput v-model="user.email2" placeholder="Дополнительный адрес эл.почты" margin="0" @blur="" />
        </GridContainer>
      </template>
      <template #footer-info>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="0 auto"
        >
          <PInput v-model="user.homePhone" placeholder="Рабочий телефон" margin="0" @blur="" />
          <PInput v-model="user.mobilePhone" placeholder="Мобильный телефон" margin="0" @blur="" />
        </GridContainer>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="0 auto"
        >
          <PInput v-model="user.inn" label="ИИН" margin="20px 0 0 0" @blur="" />
          <PInput v-model="user.snils" label="СНИЛС" margin="20px 0 0 0" @blur="" />
        </GridContainer>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #header-info>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="0 auto"
        >
          <PInput v-model="user.document" label="Документ, удостоверяющий личность" placeholder="Паспорт" margin="10px 0 0 0" @blur="" />
          <PInput v-model="user.passportNum" label="Номер" margin="10px 0 0 0" @blur="" />
          <PInput v-model="user.passportSeria" label="Серия" margin="10px 0 0 0" @blur="" />
        </GridContainer>
        <GridContainer
          grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
          background="#ffffff"
          max-width="100%"
          gridGap="10px"
          margin="0 auto"
        >
          <PInput v-model="user.passportDivision" label="Кем выдан" margin="20px 0 0 0" @blur="" />
          <PInput v-model="user.passportDivisionCode" label="Код подразделения" margin="20px 0 0 0" @blur="" />
          <PInput v-model="user.passportCitzenship" label="Гражданство" margin="20px 0 0 0" @blur="" />
        </GridContainer>
      </template>
    </InfoBlock>
  </div> -->
</template>

<script lang="ts" setup>
import User from '@/classes/User';

defineProps({
  user: { type: User, required: true },
});
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
.bg {
  box-sizing: border-box;
  // background: #f5faff;
}
</style>
