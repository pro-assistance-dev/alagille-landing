<template>
  <div class="research-info">
    <Line v-if="data" :data="data" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import {
  CategoryScale,
  Chart as ChartJS,
  // ChartTypeRegistry,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  // TooltipItem,
} from 'chart.js';
// import annotationPlugin from 'chartjs-plugin-annotation';
import { Line } from 'vue-chartjs';

import ChartData from '@/classes/ChartData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

defineProps({
  data: {
    type: ChartData,
    required: true,
  },
});
// defineEmits(['close']);
// const data: Ref<ChartData | undefined> = ref();
// const mounted = ref(false);
//
// onBeforeMount(async () => {
//   mounted.value = true;
// });

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 5,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        // label: (context: TooltipItem<keyof ChartTypeRegistry>) => context.formattedValue + ': ' + (context.dataset as ChartDataSet).results[context.dataIndex],
      },
    },
  },
};
</script>

<style scoped>
.research-info {
  /* background: #ffffff; */
  margin: -40px;
  padding: 0px 10px 20px 10px;
}

@media (max-width: 1690px) {
  .research-info {
    height: 65vh;
    top: 205px;
  }
}

@media (max-width: 1436px) {
  .research-info {
    top: 205px;
  }
}

@media (max-width: 1050px) {
  .research-info {
    top: 246px;
  }
}

@media (max-width: 992px) {
  .research-info {
    top: 205px;
    margin: 0 10px 0 0;
    width: calc(90% - 20px);
    height: 65vh;
    background: #ffffff;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 822px) {
  .research-info {
    top: 246px;
  }
}

@media screen and (max-width: 502px) {
  .research-info {
    height: 55vh;
    top: 328px;
  }
}

@media screen and (max-width: 342px) {
  .research-info {
    height: 35vh;
    top: 492px;
  }
}
</style>
