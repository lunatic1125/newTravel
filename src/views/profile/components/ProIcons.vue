<template>
  <div class="proicons">
    <div class="icon-item">
      <span class="iconfont">&#xe61c;</span>
      <p>主页</p>
    </div>
    <div class="icon-item">
      <span class="iconfont">&#xe61b;</span>
      <p>订单</p>
    </div>
    <div class="icon-item">
      <span class="iconfont">&#xe61a;</span>
      <p>收藏</p>
    </div>
    <div class="icon-item">
      <span class="iconfont">&#xe61c;</span>
      <p>历史</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProIcons",
};
</script>

<style scoped>
.proicons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  margin-bottom: 10px;
}
.icon-item {
  flex: 30%;
  margin: 10px;
  font-size: 15px;
  text-align: center;
}

.iconfont {
  font-size: 28px;
}
</style>