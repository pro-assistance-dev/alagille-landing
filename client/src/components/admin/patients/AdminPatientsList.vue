<template>
  <AdminListWrapper v-if="mounted" :store="PatientsStore">
    <table class="table">
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Дата рождения</th>
          <th>ФИО представителя</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, i) in patients" :key="patient.id">
          <td :style="{ textAlign: 'center' }">{{ patient.human.getFullName() }}</td>
          <td>{{ DatesFormatter.Format(patient.human.dateBirth) }}</td>
          <td>{{ patient.representative.human.getFullName() }}</td>
          <td>{{ patient.status }}</td>
          <td>
            <PFlex>
              <PButton skin="text" type="success" text="Редактировать" width="120px" @click="Router.ToAdmin('patients/' + patient.id)" />
            </PFlex>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminListWrapper>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <FormCreatePatient @create="toggleAddModal" />
  </PModal>
</template>

<script lang="ts" setup>
const showAddModal: Ref<boolean> = ref(false);
const patients = PatientsStore.Items();

const mounted = ref(false);

const loadPatientes = async () => {
  await PatientsStore.FTSP();
  mounted.value = true;
};

const load = async () => {
  await Promise.all([loadPatientes()]);
};

const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};

onBeforeMount(() => {
  PHelp.AdminUI.Head.Set('Список пациентов', [Button.Primary('Создать пациента', toggleAddModal)]);
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
