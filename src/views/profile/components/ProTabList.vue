<template>
  <div class="protablist">
    <div class="sell-title">
      <span>我的主页</span>
    </div>
    <div class="prf-item">
      <router-link to="/profile/write" tag="div" class="activeColS">
        <h4>{{ this.$store.state.mytravel.length }}0</h4>
        <span>创作</span>
      </router-link>
      <router-link to="/profile/attention" tag="div">
        <h4>0</h4>
        <span>关注</span>
      </router-link>
      <router-link to="/profile/fans" tag="div">
        <h4>{{ this.$store.state.myfans.length }}</h4>
        <span>粉丝</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ProTabList",
};
</script>

<style scoped>
.protablist {
  margin-bottom: 15px;
  padding: 0 15px;
  background-color: #fff;
}
.sell-title {
  height: 3rem;
  line-height: 3rem;
  /* background-color: #666; */
}
.sell-title::before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.sell-title span {
  font-size: 0.94rem;
  margin-left: 0.5rem;
}
/* -------------------------- */
.prf-item {
  display: flex;
  padding: 15px 0;
  text-align: center;
}
.prf-item div {
  flex: 1;
}
.prf-item h4 {
  font-size: 24px;
  line-height: 25px;
}
.prf-item span {
  font-size: 12px;
}
</style>