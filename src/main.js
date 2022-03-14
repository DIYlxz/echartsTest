import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  GridComponent,
} from "echarts/components";
import { MapChart, BarChart, PieChart, LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GridComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
]);
import chinaMap from "./assets/json/china.json";

echarts.registerMap("china", chinaMap);

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
