<template>
  <div class="tournav">
    <router-link to="/home" tag="div" class="item-left iconfont">
      <span>&#xe622;</span>
    </router-link>
    <div class="item-center">
      <input ref="tag" type="text" placeholder="搜索游记" v-model="tagSinfo" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TouristNavbar",
  data() {
    return {
      tagSinfo: "",
    };
  },
};
</script>

<style scoped>
.tournav {
  display: flex;
  position: sticky;
  top: 0;
  height: 2.75rem;
  padding: 0 0.31rem;
  background-color: #fff;
}
.item-center {
  padding-right: 15px;
}
input {
  width: 100%;
  color: #666;
  height: 1.88rem;
  border-radius: 0.94rem;
  text-align: center;
  background-color: #f5f6fa;
}

.item-left {
  width: 2.75rem;
  /* icon大小44px */
  font-size: 1.38rem;
  line-height: 2.75rem;
}

.item-left span {
  padding: 0.38rem;
}
.item-center {
  flex: 1;
  /* 导航栏文字36-38px */
  margin: 0;
  font-size: 1.06rem;
  text-align: center;
  line-height: 2.75rem;
}
</style>