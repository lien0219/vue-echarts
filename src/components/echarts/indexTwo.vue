<template>
  <div :id="id" :style="style"></div>
</template>

<script>
export default {
  name: "Index-Two",
  data() {
    return {
      chart: "",
    };
  },
  props: {
    id: {
      type: String,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    option: {
      type: Object,
      default() {
        return {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          legend: {
            data: ["销量"],
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line",
            },
          ],
        };
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  watch: {
    option: {
      handler(newVal) {
        if (this.chart) {
          this.chart.setOption(newVal);
        } else {
          this.init();
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option);
      window.addEventListener("resize", this.chart.resize);
    },
  },
};
</script>

<style></style>
