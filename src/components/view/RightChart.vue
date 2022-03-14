<template>
  <div id="rightChart">
    <div id="box">
      <div id="bar_right"></div>
      <div id="line_right"></div>
      <div id="pie_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightChart",
  methods: {
    //柱状统计图
    showBar() {
      var myChart = this.$echarts.init(document.getElementById("bar_right"));
      myChart.setOption({
        title: {
          text: "公司-就业人数",
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
          x: 65,
          y: 40,
          x2: 40,
          y2: 25,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "rgba(105, 101, 101, 0.5)",
            },
          },
        },
        //x轴
        xAxis: {
          //取消x轴线的显示
          show: false,
          axisLabel: {
            //不显示x轴标签
            show: false,
          },
        },
        //y轴
        yAxis: [
          {
            data: ["腾讯", "阿里巴巴", "美团", "字节跳动", "饿了么"],
            axisLabel: {
              interval: 0,
              // formatter: function (value) {
              //   return value.split("").join("\n");
              // },
              color: "#74905d",
            },
            axisLine: {
              //不显示y轴线条
              show: false,
            },
            axisTick: {
              //不显示y轴刻度
              show: false,
            },
          },
          {
            //将data反着表示
            inverse: false,
            data: [9500, 7910, 6360, 7560, 5200],
            //不显示y轴线条
            axisLine: {
              show: false,
            },
            // 不显示刻度
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize: 12,
            },
          },
        ],
        //系列
        series: [
          {
            name: "人数",
            type: "bar",
            data: [9500, 7910, 6360, 7560, 5200],
            barWidth: 14,
            barCategoryGap: 50,
            itemStyle: {
              color({ dataIndex }) {
                const colorItem = [
                  "#840228",
                  "#bed742",
                  "#494e8f",
                  "#f391a9",
                  "#293047",
                ];
                return colorItem[dataIndex];
              },
              //设置柱状圆角
              borderRadius: 20,
            },
            label: {
              //normal被删除,直接配置在标签下
              show: true,
              formatter({ data }) {
                return data / 100 + "%";
              },
              position: "",
            },
            yAxisIndex: 0, //层级关系
          },
          {
            name: "临界值",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 20,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              borderRadius: 15,
            },
            data: [10000, 10000, 10000, 10000, 10000],
            yAxisIndex: 1, //层级关系
            //该层级不响应
            silent: true,
            //关闭显示
            tooltip: {
              show: false,
            },
          },
        ],
      });
    },
    showLine(){
      var myChart = this.$echarts.init(document.querySelector("#line_right"));
      myChart.setOption({
        title: {
          text: "代码-行数图",
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            //十字准星指示器
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          },
        },
        grid: {
          x: 65,
          y: 90,
          x2: 40,
          y2: 30,
        },
        xAxis: [{
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六"],
        }],
        yAxis: [
          {
            type: "value",
          }
        ],
        legend: {
          top: "35",
          textStyle: {
            color: "#74905d",
          },
          data: ["java", "C", "C++", "html", "C#", "Python"],
        },
        series: [
          {
            name: "java",
            type: "line",
            stack: "总量",
            areaStyle: {},
            //折现的高亮状态
            emphasis: {
              //聚焦当前所在的图形
              focus: "series"
            },
            data: [7245, 7855, 8245, 8456, 7354, 5546],
          },
          {
            name: "C",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [6245, 7525, 7455, 8456, 7615, 4546],
          },
          {
            name: "C++",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [7545, 4568, 7851, 6245, 7452, 5234],
          },
          {
            name: "html",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [5545, 6552, 7542, 6521, 7564, 3246],
          },
          {
            name: "C#",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [7654, 8354, 6455, 6542, 6786, 5464],
          },
          {
            name: "Python",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [4452, 3453, 6756, 7525, 4556, 6723],
          },
        ],
      });
    },
    showpie() {
      var myChart = this.$echarts.init(document.querySelector("#pie_right"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#74905d",
          }
        },
        series: [
          {
            name: "公司评价",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "60%"],
            avoidLabeOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "16",
                fontWeight: "bold",
              }
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 5646,
                name: "需求发布快",
              },
              {
                value: 7845,
                name: "位置较好",
              },
              {
                value: 9262,
                name: "餐饮较好",
              },
              {
                value: 8512,
                name: "工作时间长"
              },
              {
                value: 6512,
                name: "福利多"
              },
            ],
          }
        ],
      });
    }
  },
  mounted() {
    this.showBar();
    this.showLine();
    this.showpie();
  },
};
</script>

<style lang="less" scoped>
#rightChart {
  width: 20%;
  margin-right: 1rem;
  #box {
    width: 100%;
    #bar_right {
      margin-top: 0.5rem;
      width: 100%;
      height: 200px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #bar_right::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #bar_right::after {
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
    #line_right {
      margin-top: 0.5rem;
      width: 100%;
      height: 200px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #line_right::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #line_right::after {
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
    #pie_right {
      margin-top: 0.5rem;
      width: 100%;
      height: 250px;
      background: rgb(4, 50, 150);
      position: relative;
    }
    #pie_right::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-top: 0.1rem solid rgb(26, 119, 182);
      border-left: 0.1rem solid rgb(26, 119, 182);
      display: block;
    }
    #pie_right::after {
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
