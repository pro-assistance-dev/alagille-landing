<template>
  <PSticky margin="0 0 20px 0">
    <PFlex justify-content="space-between">
      <PString string="Заявки" font-size="20px" justify-content="left" width="calc(100% - 100px)" margin="20px 10px" />
      <PFlex justify-content="right">
        <PButton skin="text" type="success" text="Добавить&nbspзаявку" @click="toggleAddModal" />
      </PFlex>
    </PFlex>
  </PSticky>
  <table class="table">
    <thead>
      <tr>
        <th :style="{ textAlign: 'center', width: '40px' }">№</th>
        <th>Кол-во уп.</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата создания</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата подачи на ГУ</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Период</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Скан ФК</th>
        <th :style="{ textAlign: 'center', width: '100px' }"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(application, i) in patient.applications" :key="application.id">
        <td :style="{ textAlign: 'center' }">{{ i + 1 }}</td>
        <td>{{ application.quantity }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(application.createdAt) }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(application.date) }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">
          {{ DatesFormatter.Format(application.start) }}-{{ DatesFormatter.Format(application.end) }}
        </td>
        <td :style="{ textAlign: 'center' }"><IconStatus :status="application.fkScanId" /></td>
        <td>
          <PFlex justify-content="center">
            <PButton skin="text" type="success" text="Редактировать" width="120px" @click="toggleEditModal(application)" />
          </PFlex>
        </td>
      </tr>
    </tbody>
  </table>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <CreateApplicationForm :patient="patient" @create="showAddModal = false" />
  </PModal>
  <PModal v-if="showEditModal" :show="showEditModal" :closable="true" @close="toggleEditModal">
    <UpdateApplicationForm :application="selectedApplication" :patient="patient" @update="closeEditWindow" />
  </PModal>
</template>

<script setup lang="ts">
import Application from '@/classes/Application';
const patient = PatientsStore.Item();

const selectedApplication: Ref<Application | undefined> = ref(undefined);
const showAddModal: Ref<boolean> = ref(false);
const showEditModal: Ref<boolean> = ref(false);

const toggleAddModal = (application: Application): void => {
  showAddModal.value = !showAddModal.value;
  selectedApplication.value = application;
};

const toggleEditModal = (application: Application): void => {
  showEditModal.value = !showEditModal.value;
  selectedApplication.value = application;
};

const closeEditWindow = (): void => {
  showEditModal.value = !showEditModal.value;
  selectedApplication.value = undefined;
};
</script>

<style  scoped>
.table {
  width: calc(100% - 20px);
  margin: 10px;
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
