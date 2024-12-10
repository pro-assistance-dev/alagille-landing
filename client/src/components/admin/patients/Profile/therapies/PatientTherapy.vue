<template>
  <PSticky margin="0 0 20px 0">
    <PFlex justify-content="space-between">
      <PString string="Терапия" font-size="20px" justify-content="left" width="calc(100% - 100px)" margin="20px 10px" />
      <PFlex justify-content="right">
        <PButton skin="text" type="success" text="Добавить&nbspтерапию" @click="toggleAddModal" />
      </PFlex>
    </PFlex>
  </PSticky>
  <table class="table">
    <thead>
      <tr>
        <th :style="{ textAlign: 'center', width: '40px' }">№</th>
        <th>Препарат</th>
        <th>Дозировка</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата назначения</th>
        <th :style="{ textAlign: 'center', width: '150px' }">Дата отмены</th>
        <th :style="{ textAlign: 'center', width: '150px' }"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(therapy, i) in patient.therapies" :key="therapy.id">
        <td :style="{ textAlign: 'center' }">{{ i + 1 }}</td>
        <td>{{ therapy.preparation }}</td>
        <td>{{ therapy.dosage }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(therapy.appointmentDate) }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(therapy.cancellationDate) }}</td>
        <td>
          <PFlex justify-content="center">
            <PButton skin="text" type="success" text="Редактировать" width="120px" @click="toggleEditModal(therapy)" />
          </PFlex>
        </td>
      </tr>
    </tbody>
  </table>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <CreateTherapyForm title="Добавить терапию" :patient="patient" @create="showAddModal = false" />
  </PModal>
  <PModal v-if="showEditModal" :show="showEditModal" :closable="true" @close="toggleEditModal">
    <UpdateTherapyForm :therapy="selectedTherapy" title="Редактировать терапию" :patient="patient" @update="closeEditWindow" />
  </PModal>
</template>

<script setup lang="ts">
import Therapy from '@/classes/Therapy';
const patient = PatientsStore.Item();

const selectedTherapy: Ref<Therapy | undefined> = ref(undefined);
const showAddModal: Ref<boolean> = ref(false);
const showEditModal: Ref<boolean> = ref(false);

const toggleAddModal = (therapy: Therapy): void => {
  showAddModal.value = !showAddModal.value;
  selectedTherapy.value = therapy;
};

const toggleEditModal = (therapy: Therapy): void => {
  showEditModal.value = !showEditModal.value;
  selectedTherapy.value = therapy;
};

const closeEditWindow = (): void => {
  showEditModal.value = !showEditModal.value;
  selectedTherapy.value = undefined;
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
