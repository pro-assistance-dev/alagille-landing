<template>
  <PSticky margin="0 0 20px 0">
    <PFlex justify-content="space-between">
      <PString string="Нежелательные явления" font-size="20px" justify-content="left" width="calc(100% - 100px)" margin="20px 10px" />
      <PFlex justify-content="right">
        <PButton skin="text" type="success" text="Добавить&nbspявление" @click="toggleAddModal" />
      </PFlex>
    </PFlex>
  </PSticky>
  <table class="table">
    <thead>
      <tr>
        <th :style="{ textAlign: 'center', width: '40px' }">№</th>
        <th>Описание</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата создания</th>
        <th>Сообщено в компанию</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата сообщения</th>
        <th>Кому сообщили</th>
        <th>Как связались</th>
        <th :style="{ textAlign: 'center', width: '150px' }"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(adverseEvent, i) in patient.adverseEvents" :key="adverseEvent.id">
        <td :style="{ textAlign: 'center' }">{{ i + 1 }}</td>
        <td>{{ adverseEvent.eventDescription }}</td>
        <td :style="{ textAlign: 'center', width: '150px' }">{{ DatesFormatter.Format(adverseEvent.createdAt) }}</td>
        <td :style="{ textAlign: 'center' }"><IconStatus :status="adverseEvent.reportedCompany" /></td>
        <td :style="{ textAlign: 'center', width: '150px' }">{{ DatesFormatter.Format(adverseEvent.reportedDate) }}</td>
        <td>{{ adverseEvent.reportedPerson }}</td>
        <td>{{ adverseEvent.reportedPath }}</td>
        <td>
          <PFlex justify-content="center">
            <PButton skin="text" type="success" text="Редактировать" width="120px" @click="toggleEditModal(adverseEvent)" />
          </PFlex>
        </td>
      </tr>
    </tbody>
  </table>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <CreateAdverseEventForm :patient="patient" @create="showAddModal = false" />
  </PModal>
  <PModal v-if="showEditModal" :show="showEditModal" :closable="true" @close="toggleEditModal">
    <UpdateAdverseEventForm :adverseEvent="selectedAdverseEvent" :patient="patient" @update="closeEditWindow" />
  </PModal>
</template>

<script setup lang="ts">
import AdverseEvent from '@/classes/AdverseEvent';
const patient = PatientsStore.Item();

const selectedAdverseEvent: Ref<AdverseEvent | undefined> = ref(undefined);
const showAddModal: Ref<boolean> = ref(false);
const showEditModal: Ref<boolean> = ref(false);

const toggleAddModal = (adverseEvent: AdverseEvent): void => {
  showAddModal.value = !showAddModal.value;
  selectedAdverseEvent.value = adverseEvent;
};

const toggleEditModal = (adverseEvent: AdverseEvent): void => {
  showEditModal.value = !showEditModal.value;
  selectedAdverseEvent.value = adverseEvent;
};

const closeEditWindow = (): void => {
  showEditModal.value = !showEditModal.value;
  selectedAdverseEvent.value = undefined;
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
