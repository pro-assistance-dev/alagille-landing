<template>
  <PTabs :tabs="tabs" background="#F5FAFF" @select="handleSelect">
    <component :is="component" />
    <!-- <ProfileInfoPage :form="anketUser" /> -->
  </PTabs>
  <!-- <FormPageSections :form="anketUser.anket.form" :form-fill="anketUser.formFill" /> -->
</template>

<script setup lang="ts">
import ProfileAccess from '@/components/admin/users/Profile/ProfileAccess.vue';
import ProfileDocuments from '@/components/admin/users/Profile/ProfileDocuments.vue';
import ProfileInfo from '@/components/admin/users/Profile/ProfileInfo.vue';
import ProfilePayment from '@/components/admin/users/Profile/ProfilePayment.vue';
const choise = ref(1);

// const user = UsersStore.Item();

const tabs = [
  {
    id: 1,
    name: 'Общие данные',
  },
  {
    id: 2,
    name: 'Доступ',
  },
  {
    id: 3,
    name: 'Документы',
  },
  {
    id: 4,
    name: 'Оплата',
  },
];

const components = {
  1: ProfileInfo,
  2: ProfileAccess,
  3: ProfileDocuments,
  4: ProfilePayment,
};

const component = computed(() => {
  if (choise.value === 1) {
    return components['1'];
  }
  if (choise.value === 2) {
    return components['2'];
  }
  if (choise.value === 3) {
    return components['3'];
  }
  if (choise.value === 4) {
    return components['4'];
  }
  return 'no';
});

const emit = defineEmits(['select']);

const user = UsersStore.Item();
const load = async () => {
  // await AnketsStore.Get(Router.GetStringParam('anketId'));
  await UsersStore.Get();
  PHelp.AdminUI.Head.Set(user.human.getFullName(), []);
  return;
};

const handleSelect = async (item: ITab): Promise<void> => {
  emit('select', item);
  if (item.id) {
    choise.value = +item.id;
  }
};

Hooks.onBeforeMount(load);
// Hooks.onBeforeRouteLeave();
</script>

<style  scoped></style>
