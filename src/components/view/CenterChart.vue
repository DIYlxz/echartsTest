<template>
  <div id="centerChart">
    <div id="chinaMap"></div>
  </div>
</template>

<script>

export default {
  name: "CenterChart",
  mounted() {
    this.showChina();
  },
  methods: {
    showChina() {
      var myChart = this.$echarts.init(document.querySelector("#chinaMap"));
      myChart.setOption({
        title: {
          text: "程序员各省人数分布图",
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
          trigger: "item",
        },
        visualMap: [
          {
            //连续型
            type: "continuous",
            //设置可移动的最大最小值
            min: 1000,
            max: 10000,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"],
            },
          },
        ],
        series: {
          type: "map",
          name: "人数",
          //注册地图名称
          map: "china",
          //缩放
          roam: "scale",
          zoom: "1",
          data: [
            {
              name: "北京市",
              value: 8000,
            },
            {
              name: "重庆市",
              value: 5045,
            },
            {
              name: "云南省",
              value: 4000,
            },
          ],
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
#centerChart {
  width: 50%;
  margin-top: 0.5rem;
  #chinaMap {
    width: 100%;
    height: 664px;
    background: rgb(4, 50, 150);
  }
  #chinaMap::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
    border-top: 0.1rem solid rgb(26, 119, 182);
    border-left: 0.1rem solid rgb(26, 119, 182);
    display: block;
  }
  #chinaMap::after {
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
</style>
