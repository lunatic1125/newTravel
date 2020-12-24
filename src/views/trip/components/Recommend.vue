<template>
  <div class="trip-recommend">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- <div class="trip-t">
      <span>按主题</span>
      <span>按价格</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TripRecommend",
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
};
</script>

<style scoped>
.trip-recommend >>> .van-tabs__line {
  background-color: var(--color-tink) !important;
}
.trip-recommend {
  width: 100%;
  padding: 0 0.94rem;
}
.trip-t {
  height: 3rem;
  line-height: 3rem;
}
.trip-t:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.trip-t span {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
</style>