<template>
  <div class="pinterest">
    <h2 class="pin-t">全部游记</h2>
    <router-link
      to="/tourist/pinlist"
      tag="div"
      class="pinlist"
      v-for="(item, index) in this.$store.state.travels"
      :key="index"
    >
      <img :src="item.imgUrl" />
      <div class="pinbotm">
        <div class="head-pho">
          <img :src="item.headpho" />
        </div>
        <h4>{{ item.title }}</h4>
        <p>{{ item.likes }}已收藏</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabTravels",
};
</script>

<style scoped>
/* --------------------- */
.pinterest {
  padding: 0 15px;
}
.pin-t {
  font-size: 1.13rem;
  line-height: 1.75rem;
  margin-bottom: 2.13rem;
}
.pinlist {
  float: left;
  width: 167px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
}
.pinlist:nth-of-type(odd) {
  margin-right: 10px;
}
.pinlist > img {
  width: 100%;
}
.pinbotm {
  position: relative;
  width: 167px;
  padding: 5px;
  text-align: center;
  background-color: #fff;
}
.head-pho {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  /* border: 2px solid #fff; */
}
.head-pho img {
  width: 100%;
  height: 100%;
}
.pinbotm h4 {
  padding-top: 15px;
  font-size: 13px;
  line-height: 30px;
}
.pinbotm p {
  padding-bottom: 10px;
  font-size: 12px;
  color: var(--color-text-s);
}
</style>