<template>
  <div id="head">
    <h1>数据可视化</h1>
  </div>
</template>

<script>
export default {
  name: "HeadNav",
}
</script>

<style lang="less" scoped>
#head {
  height: 4rem;
  background: rgba(20, 30, 121, 0.9);
  color: #fff;
  line-height: 4rem;
  position: relative;
  box-shadow: 0 0.1rem rgb(20, 57, 87);
}
#head::before {
  content: "";
  position: absolute;
  top: 0;
  right: calc(100% - 32px);
  width: 2rem;
  height: 0.2rem;
  background: rgb(0, 76, 139);
  animation: bemove 6s ease-in-out infinite alternate;
}
#head::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 0.2rem;
  background: rgb(0, 76, 139);
  animation: afmove 6s ease-in-out infinite alternate;
}
@keyframes bemove {
  25% {
    width: 4rem;
  }
  50% {
    background: rgb(42, 119, 115);
    width: 5rem;
  }
  75% {
    width: 4rem;
  }
  100% {
    right: 0;
    width: 2rem;
    background: rgb(0, 76, 139);
  }
}
@keyframes afmove {
  25% {
    width: 4rem;
  }
  50% {
    background: rgb(42, 119, 115);
    width: 5rem;
  }
  75% {
    width: 4rem;
  }
  100% {
    right: calc(100% - 32px);
    width: 2rem;
    background: rgb(0, 76, 139);
  }
}
</style>
