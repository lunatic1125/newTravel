<template>
  <!-- 评论 -->
  <div class="review">
    <!-- nav -->
    <div class="tournav">
      <div class="item-left iconfont" @click="hiddenRev">
        <span>&#xe622;</span>
      </div>
      <div class="item-center">
        <div class="imgtl">游记评论</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PinReview",
  methods: {
    hiddenRev() {
      this.$emit("closeRev");
    },
  },
};
</script>

<style scoped>
.tournav {
  display: flex;
  width: 100%;
  height: 2.75rem;
  padding: 0 0.31rem;
  background-color: #fff;
}

.item-left {
  width: 2.75rem;
  font-size: 1.38rem;
  line-height: 2.75rem;
}

.item-left span {
  padding: 0.38rem;
}

.item-center {
  flex: 1;
  margin: 0;
  font-size: 1.06rem;
  text-align: center;
  line-height: 44px;
  margin-right: 2.75rem;
}
</style>