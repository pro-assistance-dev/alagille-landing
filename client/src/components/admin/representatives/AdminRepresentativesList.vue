<template>
  <AdminListWrapper v-if="mounted" :store="RepresentativesStore">
    <table class="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Нозология</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="representative in representatives" :key="representative.id">
          <td :style="{ textAlign: 'center' }">{{ representative.order }}</td>
          <td>{{ representative.name }}</td>
          <td>{{ representative.nosology }}</td>
          <td>
            <PFlex>
              <PButton skin="text" type="primary" text="Назначить" width="90px" @click="assignRepresentative(representative)" />
              <PButton
                skin="text"
                type="success"
                text="Редактировать"
                width="120px"
                @click="Router.ToAdmin('representatives/' + representative.id)"
              />
            </PFlex>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminListWrapper>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <FormCreateRepresentative @create="toggleAddModal" />
  </PModal>
</template>

<script lang="ts" setup>
// import Representative from '@/classes/Representative';

const showAddModal: Ref<boolean> = ref(false);
const count: Ref<number> = RepresentativesStore.Count();

const mounted = ref(false);

const loadRepresentativees = async () => {
  await RepresentativesStore.FTSP();
  mounted.value = true;
};

const load = async () => {
  await Promise.all([loadRepresentativees()]);
};

const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};

onBeforeMount(() => {
  PHelp.AdminUI.Head.Set('Список представтелей', [Button.Primary('Создать представителя', toggleAddModal)]);
});
Hooks.onBeforeMount(load);
</script>

<style  scoped>
.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #e3e7fb;
  border-collapse: collapse;
  font-size: 14px;
}
.table th {
  font-weight: bold;
  padding: 25px 7px;
  background: #5f6a99;
  border: 1px solid #e3e7fb;
  color: #fff;
  position: sticky;
  top: 0;
}
.table td {
  border: 1px solid #e3e7fb;
  padding: 15px 7px;
  color: #5f6a99;
}

.table tbody tr:nth-child(odd) {
  background: #fff;
  cursor: pointer;
}

.table tbody tr:nth-child(even) {
  background: #f8f9fb;
  cursor: pointer;
}

.table tbody tr:hover {
  background: #f4f6fd;
}
</style>
