<template>
  <PNotification />
  <PDialog />
  <PLoader v-if="PHelp.Loading.IsVisible()" />
  <Suspense>
    <component :is="components[$route.meta.layout] || 'MainLayout'" v-if="mounted">
      <router-view />
    </component>
  </Suspense>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import AdminLayout from '@/views/adminLayout/AdminLayout.vue';

const components = {
  AdminLayout: AdminLayout,
};

const route = useRoute();
const mounted: Ref<boolean> = ref(false);

watch(route, () => {
  changeDocumentTitle();
});

// const theme = ref('light');
// const toggleTheme = () => {
//   const selectedTheme = theme.value === 'light' ? 'dark' : 'light';
//   document.getElementsByTagName('html')[0].dataset.theme = selectedTheme;
//   theme.value = selectedTheme;
// };

// const platform = ref('web-desktop');
// document.getElementsByTagName('html')[0].dataset.platform = platform.value;

const changeDocumentTitle = () => {
  const defaultTitle = 'Патронаж';
  document.title = route.meta.title ? `${route.meta.title} | Патронаж` : defaultTitle;
};

onBeforeMount(async (): Promise<void> => {
  changeDocumentTitle();
  const t = localStorage.getItem('colorTheme');
  if (t) {
    document.getElementsByTagName('html')[0].dataset.theme = t;
  }

  mounted.value = true;
});
</script>
