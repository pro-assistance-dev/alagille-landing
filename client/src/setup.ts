import { servicesComponents } from 'sprof';
import { App } from 'vue';
import { Router as R } from 'vue-router';

export default function SetupProject(app: App, router: R) {
  HttpClient.Setup(import.meta.env.VITE_APP_BASE_URL, import.meta.env.VITE_APP_API_V1, import.meta.env.VITE_APP_API_HOST);
  Router.SetRouter(router);
  servicesComponents.install(app);
  Static.Setup(import.meta.env.VITE_APP_STATIC_URL);
}
