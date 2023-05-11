<template>
  <div class="chartBox">
    <EChart
      :chartData="echartData.fruit"
      :isAxisChart="false"
      style="height: 260px"
    />
    <div>
      <h1>indextwo</h1>
    </div>
  </div>
</template>

<script>
// 引入echarts组件
import EChart from "./echarts/index.vue";
export default {
  name: "Use-Echarts",
  components: {
    EChart,
  },
  data() {
    return {
      echartData: {
        fruit: {
          series: [],
        },
      },
    };
  },
  mounted() {
    this.echartData.fruit.series = [
      {
        data: [
          {
            name: "香蕉",
            value: 100,
          },
          {
            name: "苹果",
            value: 100,
          },
          {
            name: "芒果",
            value: 100,
          },
          {
            name: "黄桃",
            value: 100,
          },
          {
            name: "葡萄",
            value: 100,
          },
          {
            name: "柚子",
            value: 100,
          },
        ],
        type: "pie",
      },
    ];
  },
};
</script>

<style></style>
