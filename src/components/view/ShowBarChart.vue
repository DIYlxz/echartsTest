<template>
  <div id="barChart">
    <div class="left_chart">
      <div id="bar"></div>
      <div id="line"></div>
      <div id="pie"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShowBarChart",
  methods: {
    //柱状统计图
    showBar() {
      var myChart = this.$echarts.init(document.getElementById("bar"));
      myChart.setOption({
        title: {
          text: "程序员-语言",
          textAlign: "left",
          x: "center",
          y: "7px",
          textStyle: {
            color: "#fff",
            fontWeight: "lighter",
            fontfamily: "FangSong",
            fontSize: 16,
          },
        },
        //grid用于调节坐标系位置
        grid: {
          x: 50,
          y: 40,
          x2: 30,
          y2: 35,
        },
        tooltip: {},
        //x轴
        xAxis: {
          data: ["java", "C", "C++", "html", "C#", "Python"],
          axisLabel: {
            interval: 0,
            // formatter: function (value) {
            //   return value.split("").join("\n");
            // },
            color: "#74905d",
          },
        },
        //y轴
        yAxis: {
          axisLabel: {
            color: "#74905d",
          },
        },
        //系列
        series: [
          {
            name: "语言",
            type: "bar",
            data: [
              850,
              791,
              636,
              756,
              520,
              691,
            ],
            color: ["red"],
            itemStyle: {
              color: "#74905d",
            },
          },
        ],
      });
    },
    //折线统计图
    showLineOne() {
      var myChart = this.$echarts.init(document.querySelector("#line"));
      myChart.setOption({
        title: {
          text: "折线图-人员变化",
          textAlign: "left",
          x: "center",
          y: "7px",
          textStyle: {
            color: "#fff",
            fontWeight: "lighter",
            fontfamily: "FangSong",
            fontSize: 16,
          },
        },
        //工具用来显示图表数据
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "35",
          data: [
            {
              name: "离职人员",
            },
            {
              name: "入职人员",
            },
          ],
          textStyle: {
            color: "#74905d",
          },
        },
        grid: {
          x: 50,
          y: 70,
          x2: 30,
          y2: 35,
        },
        xAxis: {
          type: "category",
          data: ["1月", "3月", "5月", "7月", "9月", "11月"],
          axisLabel: {
            color: "#74905d",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#74905d",
          },
        },
        series: [
          {
            name: "离职人员",
            data: [150, 230, 224, 218, 135, 147],
            type: "line",
            smooth: true,
          },
          {
            name: "入职人员",
            data: [187, 265, 276, 298, 355, 198],
            type: "line",
            smooth: true,
          },
        ],
      });
    },
    //扇形统计图
    showPieOne() {
      var myChart = this.$echarts.init(document.querySelector("#pie"));
      myChart.setOption({
        title: {
          text: "程序员-年龄分布图",
          textAlign: "left",
          x: "center",
          y: "7px",
          textStyle: {
            color: "#fff",
            fontWeight: "lighter",
            fontfamily: "FangSong",
            fontSize: 16,
          },
        },
        legend: {
          top: "bottom"
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "公司访问",
            type: "pie",
            radius: "50%",
            //南丁格尔图
            roseType: "angle",
            //饼图设置位置
            center: ["50%", "45%"],
            data: [
              { value: 544, name: "22~24" },
              { value: 735, name: "24~26" },
              { value: 584, name: "26~28" },
              { value: 523, name: "28~30" },
              { value: 654, name: "30以上" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.showBar();
    this.showLineOne();
    this.showPieOne();
  },
};
</script>

<style lang="less" scoped>
#barChart {
  width: 20%;
  margin-left: 1rem;
  .left_chart {
    width: 100%;
    #bar {
      margin-top: 0.5rem;
      width: 100%;
      height: 200px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #bar::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #bar::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 0.1rem solid rgb(26, 119, 182);
      border-right: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #line {
      margin-top: 0.5rem;
      width: 100%;
      height: 200px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #line::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #line::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 0.1rem solid rgb(26, 119, 182);
      border-right: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #pie {
      margin-top: 0.5rem;
      width: 100%;
      height: 250px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #pie::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #pie::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 0.1rem solid rgb(26, 119, 182);
      border-right: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
  }
}
</style>
