import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
} from "echarts/components";
// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from "echarts/features";
// Import the Canvas renderer
// Note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";

// Register the required components
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export function embed(target, option) {
  let chart = echarts.init(target);
  chart.setOption(option);

  // fix colors + styling
  chart.setOption({
    darkMode: true,
    title: {
      textStyle: {
        color: "#f0f0f0",
      },
    },
    legend: {
      inactiveColor: "#aaa",
      textStyle: {
        color: "#f0f0f0",
      }
    },
    textStyle: {
      color: "#f0f0f0",
      fontFamily: "B612",
    },
  });

  window.addEventListener("resize", () => {
    if (chart) {
      chart.resize();
    }
  });
}
