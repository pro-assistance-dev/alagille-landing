// eslint-disable-next-line simple-import-sort/imports
import { createApp } from 'vue';

import { vMaska } from 'maska/vue';

import 'sprof/style.css';
import '@/assets/index.css';

import App from '@/App.vue';
import router from '@/router/index';
import Setup from './setup';

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

Setup(app, router);

router.isReady().then(() => {
  app.mount('#app');
});
