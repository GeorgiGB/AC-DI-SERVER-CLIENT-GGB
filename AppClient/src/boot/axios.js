import { boot } from "quasar/wrappers";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});

import Vue from "vue";
import axios from "axios";
Vue.prototype.$axios = axios;
// ^ ^ ^ this will allow you to use this.$axios
// so you won't necessarily have to import axios in each vue file
const api = axios.create({
  baseURL: "https://localhost:8090/",
});
Vue.prototype.$api = api;
// ^ ^ ^ this will allow you to use this.$api
// so you can easily perform requests against your app's API
export { axios, api };
