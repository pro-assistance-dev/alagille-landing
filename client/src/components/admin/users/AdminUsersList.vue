<template>
  <AdminListWrapper v-if="mounted" :store="UsersStore">
    <PString :string="'Количество анкет: ' + count" justify-content="left" />
    <div v-for="(user, i) in users" :key="user.id">
      <CollapseItem :is-collaps="false" padding="0 8px">
        <template #inside-title>
          <div class="flex-block" @click.prevent="() => undefined">
            <div class="item-flex">
              <div class="line-item-left">
                <DraggableNumber :number="i + 1" />
                <!-- <PString :string="i + 1" width="42px" margin="0" /> -->
                <PString :string="user.human.getFullName()" margin="0 0 0 5px" justify-content="left" width="100%" />
                <PButton skin="text" text="Редактировать" width="120px" @click="Router.ToAdmin('users/' + user.id)" />
                <PButton skin="text" type="primary" text="Назначить" width="90px" @click="assignUser(user.id)" />
              </div>
            </div>
            <!-- <div class="item-flex">
              <GridContainer max-width="1920px" custom-class="grid"> </GridContainer>
            </div> -->
          </div>
        </template>
      </CollapseItem>
    </div>
  </AdminListWrapper>
  <PModal v-if="showAddModal" :show="showAddModal">
    <CreateUserForm @create="toggleAddModal" />
  </PModal>
</template>

<script lang="ts" setup>
const showAddModal: Ref<boolean> = ref(false);
const users = UsersStore.Items();
const count: Ref<number> = UsersStore.Count();

const mounted = ref(false);

const loadUseres = async () => {
  // FTSP.Get().t.model = 'user';
  await UsersStore.FTSP();
  mounted.value = true;
};

const load = async () => {
  await Promise.all([loadUseres()]);
};

const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};

onBeforeMount(() => {
  PHelp.AdminUI.Head.Set('Список пользователей', [Button.Primary('Добавить', toggleAddModal)]);
});
Hooks.onBeforeMount(load);
</script>

<style  scoped>
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

.user-name {
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

.user-link {
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
  // margin: 0 10px 0 0;
}

// .item-flex:last-child {
//   margin: 10px 0;
// }

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

:deep(.el-user-item) {
  margin: 8px 0 0 0;
}

@media (max-width: 1915px) {
  // .flex-block {
  //   width: 100%;
  //   display: block;
  //   justify-content: space-between;
  //   align-items: center;
  // }

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
    // margin-top: 10px;
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
