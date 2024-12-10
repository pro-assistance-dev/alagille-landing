<template>
  <PSticky>
    <PFlex justify-content="space-between">
      <PString string="Консультации юриста" font-size="20px" justify-content="left" width="calc(100% - 100px)" margin="20px 10px" />
      <PFlex justify-content="right">
        <PButton skin="text" type="success" text="Добавить&nbspконсультацию" @click="toggleAddModal" />
      </PFlex>
    </PFlex>
  </PSticky>
  <table class="table">
    <thead>
      <tr>
        <th :style="{ textAlign: 'center', width: '40px' }">№</th>
        <th>Тема консультации</th>
        <th :style="{ textAlign: 'center', width: '100px' }">Дата консультации</th>
        <th :style="{ textAlign: 'center', width: '150px' }"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(consultation, i) in patient.consultationsLawyer" :key="consultation.id">
        <td :style="{ textAlign: 'center' }">{{ i + 1 }}</td>
        <td>{{ consultation.theme }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(consultation.themeDate) }}</td>
        <td>
          <PFlex justify-content="center">
            <PButton skin="text" type="success" text="Редактировать" width="120px" @click="toggleEditModal(consultation)" />
          </PFlex>
        </td>
      </tr>
    </tbody>
  </table>

  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <CreateConsultationLawyerForm :patient="patient" @create="showAddModal = false" />
  </PModal>
  <PModal v-if="showEditModal" :show="showEditModal" :closable="true" @close="toggleEditModal">
    <UpdateConsultationLawyerForm :consultation="selectedConsultation" :patient="patient" @update="closeEditWindow" />
  </PModal>
</template>

<script setup lang="ts">
import ConsultationLawyer from '@/classes/ConsultationLawyer';

const patient = PatientsStore.Item();
const selectedConsultation: Ref<ConsultationLawyer | undefined> = ref(undefined);
const showAddModal: Ref<boolean> = ref(false);
const showEditModal: Ref<boolean> = ref(false);

const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};

const toggleEditModal = (consultation: ConsultationLawyer): void => {
  selectedConsultation.value = consultation;
  showEditModal.value = !showEditModal.value;
};
const closeEditWindow = (): void => {
  selectedConsultation.value = undefined;
  showEditModal.value = !showEditModal.value;
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
