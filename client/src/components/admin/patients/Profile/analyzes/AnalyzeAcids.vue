<template>
  <PSticky>
    <PFlex justify-content="space-between">
      <PString string="Желчные кислоты" font-size="20px" justify-content="left" width="calc(100% - 100px)" margin="20px 10px" />
      <PFlex justify-content="right">
        <PButton skin="text" type="primary" text="Построить&nbspграфик" @click="showChart = true" />
        <PButton skin="text" type="success" text="Добавить&nbspанализ" @click="toggleAddModal" />
        <!-- <PButton skin="text" type="primary"><IconGraph size="26px" /></PButton>-->
      </PFlex>
    </PFlex>
  </PSticky>
  <table class="table">
    <thead>
      <tr>
        <th :style="{ textAlign: 'center', width: '40px' }">№</th>
        <th>Результат анализа</th>
        <th :style="{ textAlign: 'center', width: '100px' }">Дата анализа</th>
        <th :style="{ textAlign: 'center', width: '150px' }"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(analyze, i) in patient.analyzesAcids" :key="analyze.id">
        <td :style="{ textAlign: 'center' }">{{ i + 1 }}</td>
        <td>{{ analyze.result }}</td>
        <td :style="{ textAlign: 'center', width: '100px' }">{{ DatesFormatter.Format(analyze.resultDate) }}</td>
        <td>
          <PFlex justify-content="center">
            <PButton skin="text" type="success" text="Редактировать" width="120px" @click="toggleEditModal(analyze)" />
          </PFlex>
        </td>
      </tr>
    </tbody>
  </table>

  <PModal v-if="showChart" :show="showChart" :closable="true" width="900px" @close="showChart = false">
    <PatientAnalyzesChart :data="patient.getChartDataAnalyzesAcids()" title="График анализов" />
  </PModal>

  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal">
    <CreateAnalyseAcidsForm title="Добавить анализ" :patient="patient" @create="showAddModal = false" />
  </PModal>
  <PModal v-if="showEditModal" :show="showEditModal" :closable="true" @close="toggleEditModal">
    <UpdateAnalyseAcidsForm :analyze="selectedAnalyze" title="Редактировать анализ" :patient="patient" @update="closeEditWindow" />
  </PModal>
</template>

<script setup lang="ts">
import AnalyzeAcids from '@/classes/AnalyzeAcids';

const patient = PatientsStore.Item();
const selectedAnalyze: Ref<AnalyzeAcids | undefined> = ref(undefined);
const showAddModal: Ref<boolean> = ref(false);
const showEditModal: Ref<boolean> = ref(false);
const showChart: Ref<boolean> = ref(false);

const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};

const toggleEditModal = (analyze: AnalyzeAcids): void => {
  showEditModal.value = !showEditModal.value;
  selectedAnalyze.value = analyze;
};
const closeEditWindow = (): void => {
  showEditModal.value = !showEditModal.value;
  selectedAnalyze.value = undefined;
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
