// eslint-disable-next-line simple-import-sort/imports
import { createApp } from 'vue';

import { vMaska } from 'maska/vue';

import 'sprof/style.css';
import '@/assets/index.css';

import App from '@/App.vue';
import router from '@/router/index';

const app = createApp(App);
app.use(router);

app.directive('maska', vMaska);
app.directive('click-outside', {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent, { passive: true });
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

const baseUrl = import.meta.env.VITE_APP_BASE_URL ?? '';
const apiVersion = import.meta.env.VITE_APP_API_V1 ?? '';
const apiHost = import.meta.env.VITE_APP_API_HOST ?? '';

HttpClient.Setup(baseUrl, apiVersion, apiHost);

const staticUrl = import.meta.env.VITE_APP_STATIC_URL;
Static.Setup(staticUrl);

import { servicesComponents } from 'sprof';
servicesComponents.install(app);

Router.SetRouter(router);

router.isReady().then(() => {
  app.mount('#app');
});
