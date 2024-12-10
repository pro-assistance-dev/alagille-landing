<template>
  <InfoBlock>
    <template #header-info>
      <PSelect v-model="user.role" placeholder="Задайте статус" width="100%" label="Стасус" @change="updateUser">
        <option>Администратор</option>
        <option>Менеджер</option>
        <option>Пользователь</option>
      </PSelect>
      <!-- <PInput v-model="user.login" label="Логин" placeholder="Задайте логин" margin="0" @blur="" /> -->
      <!-- <PInput v-model="user.password" label="Пароль" placeholder="Задайте пароль" margin="0" @blur="" /> -->
    </template>
  </InfoBlock>
</template>

<script lang="ts" setup>
const user = UsersStore.Item();

const updateUser = async () => {
  await UsersStore.Update();
};
</script>

<style  scoped></style>
