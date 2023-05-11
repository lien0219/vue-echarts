<template>
  <div id="app">
    <useEcharts />
    <useTwoVue />
  </div>
</template>

<script>
import useEcharts from "./components/useEcharts.vue";
import useTwoVue from "./components/useTwo.vue";
export default {
  name: "App",
  components: {
    useEcharts,
    useTwoVue,
  },
};
</script>

<style></style>
