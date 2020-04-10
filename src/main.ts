import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import VueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(VueRouter);
Vue.use(VueCompositionApi);

const routes = [{ path: "/", component: Home }];
const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
