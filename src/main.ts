import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store, { Store } from "./store";

Vue.config.productionTip = false;

// 直接创建 Vue 实例
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$$store = app.$store;

// 声明 Vue 实例中的 $$store 属性
declare module "vue/types/vue" {
  interface Vue {
    $$store: Store;
  }
}
