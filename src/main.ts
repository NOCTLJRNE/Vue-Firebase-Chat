import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(VueRouter);
const routes = [{ path: "/", component: Home }];
const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
