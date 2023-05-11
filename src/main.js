import Vue from "vue";
import App from "./App.vue";
import ECharts from "echarts";

Vue.prototype.$echarts = ECharts;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
