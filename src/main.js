import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./core/services/store";
import axios from "axios";
import Ls from "@/core/services/jwt.service.js";
//import ApiService from "./core/services/api.service";
//import MockService from "./core/mock/mock.service";
//import { VERIFY_AUTH } from "./core/services/store/auth.module";
//import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

import "vuetify/dist/vuetify.min.css";
import ckeditor from "@ckeditor/ckeditor5-vue";
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueScrollTo  from 'vue-scrollto';

Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "./core/plugins/vue-i18n";
import vuetify from "./core/plugins/vuetify";
import "./core/plugins/portal-vue";
import "./core/plugins/bootstrap-vue";
import "./core/plugins/perfect-scrollbar";
import "./core/plugins/highlight-js";
import "./core/plugins/inline-svg";
import "./core/plugins/apexcharts";
import "./core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";

window.axios = axios;
window.axios.defaults.baseURL = 'https://ipp.test/api/';
// window.axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest'
// }
window.axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const AUTH_TOKEN = Ls.getToken();
    if (AUTH_TOKEN) {
      config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// API service init
//ApiService.init();

// Remove this to disable mock API
//MockService.init();

// router.beforeEach((to, from, next) => {
//   // Ensure we checked auth before each page load.
//   Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

//   // reset config to initial state
//   store.dispatch(RESET_LAYOUT_CONFIG);

//   // Scroll page to top on every route change
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 100);
// });

Vue.use(ckeditor);
Vue.use(VueYouTubeEmbed);
Vue.use(VueScrollTo);

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
