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
        <PInput v-model="user.human.surname" placeholder="Фамилия" margin="0" @blur="updateHuman" />
        <PInput v-model="user.human.name" placeholder="Имя" margin="0" @blur="updateHuman" />
        <PInput v-model="user.human.patronymic" placeholder="Отчество" margin="0" @blur="updateHuman" />
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="10px 0 0 0"
      >
        <PInputDate v-model="user.human.dateBirth" margin="0" @blur="updateHuman" />
        <PInput v-model="user.region" placeholder="Регион проживания" margin="0" @blur="updateUser" />
        <!-- <PSelect placeholder="Выберите пол" width="100%"> -->
        <!--   <option>Мужской</option> -->
        <!--   <option>Женский</option> -->
        <!-- </PSelect> -->
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(140px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="10px 0 0 0"
      >
        <!-- <PInput v-model="user.human.contact.emails[0]" placeholder="Адрес эл.почты" margin="0" @blur="" /> -->
        <!-- <PInput v-model="user.human.contact.emails[1]" placeholder="Дополнительный адрес эл.почты" margin="0" @blur="" /> -->
      </GridContainer>
    </template>
    <template #footer-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <!-- <PInput v-model="user.human.contact.phones[0]" placeholder="Рабочий телефон" margin="0" mask="+#(###)###-##-##" @blur="" /> -->
        <!-- <PInput v-model="user.human.contact.phones[1]" placeholder="Мобильный телефон" margin="0" mask="+#(###)###-##-##" @blur="" /> -->
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput v-model="user.inn" label="ИИН" margin="20px 0 0 0" mask="############" @blur="updateUser" />
        <PInput v-model="user.snils" label="СНИЛС" margin="20px 0 0 0" mask="###-###-### ##" @blur="updateUser" />
      </GridContainer>
    </template>
  </InfoBlock>
  <InfoBlock>
    <template #header-info>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput :disabled="true" label="Документ, удостоверяющий личность" placeholder="Паспорт" margin="10px 0 0 0" />
        <PInput v-model="user.passportNum" label="Номер" margin="10px 0 0 0" @blur="updateUser" />
        <PInput v-model="user.passportSeria" label="Серия" margin="10px 0 0 0" @blur="updateUser" />
      </GridContainer>
      <GridContainer
        grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))"
        background="#ffffff"
        max-width="100%"
        grid-gap="10px"
        margin="0 auto"
      >
        <PInput v-model="user.passportDivision" label="Кем выдан" margin="20px 0 0 0" @blur="updateUser" />
        <PInput v-model="user.passportDivisionCode" label="Код подразделения" margin="20px 0 0 0" @blur="updateUser" />
        <PInput v-model="user.passportCitzenship" label="Гражданство" margin="20px 0 0 0" @blur="updateUser" />
      </GridContainer>
    </template>
  </InfoBlock>
</template>

<script lang="ts" setup>
import User from '@/classes/User';

// defineProps({
//   user: { type: User, required: true },
// });
const user = UsersStore.Item();

const updateHuman = async () => {
  await HumansStore.Update(user.human);
};

const updateUser = async () => {
  await UsersStore.Update();
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
