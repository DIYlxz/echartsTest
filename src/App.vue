<template>
  <head-nav></head-nav>
  <div id="contentChart">
    <show-bar-chart></show-bar-chart>
    <center-chart></center-chart>
    <right-chart></right-chart>
  </div>
</template>

<script>
import "./assets/js/style.js";
import ShowBarChart from "./components/view/ShowBarChart.vue"
import HeadNav from "./components/view/HeadNav.vue"
import RightChart from "./components/view/RightChart.vue"
import CenterChart from "./components/view/CenterChart.vue"

export default {
  name: "App",
  methods: {
  },
  mounted() {
  },
  components: {
    ShowBarChart,
    HeadNav,
    RightChart,
    CenterChart,
  }
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body {
  background: darkblue;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  #contentChart {
    display: flex;
    justify-content: space-between;
  }
}
</style>
