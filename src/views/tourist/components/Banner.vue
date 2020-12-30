<template>
  <div class="tourist-banner">
    <h2 class="tourtitle">10/25星级游记</h2>
    <van-swipe @change="onChange">
      <van-swipe-item
        v-for="(item, index) in this.$store.state.travels"
        :key="index"
      >
        <img class="timg" :src="item.imgUrl" />
        <div class="imgtl">
          <h4>{{ item.title }}</h4>
          <p>
            我是<span class="fw">{{ item.name }}</span
            >我在<span class="fw">{{ item.city }}</span>
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>

    <ul class="tour-item clearfix">
      <li
        class="item-img"
        v-for="(item, index) in this.$store.state.travels"
        :key="index"
        :ref="'l' + index"
        @click="imgCut(index, $event)"
      >
        <img :src="item.imgUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TouristBanner",
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      if (index + 1) {
        this.current = index;
        for (let item in this.$refs) {
          this.$refs[item][0].className = "item-img";
        }
        this.$refs["l" + index][0].className = "item-img activeB";
      } else {
        index = 0;
        console.log(index);
        console.log(this.$refs.l0[0]);
      }
    },
    imgCut(index, e) {},
  },
  mounted() {
    this.onChange();
  },
};
</script>

<style scoped>
.tourist-banner >>> .van-swipe__indicators {
  display: none !important;
}
.tourist-banner {
  width: 100%;
  margin-bottom: 2rem;
  padding: 0 0.94rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
}
.tourtitle {
  font-size: 1.56rem;
  font-weight: 600;
  line-height: 4.38rem;
}
.tour-img {
  height: 260px;
  width: 100%;
  text-align: center;
  line-height: 24px;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 1px #e8ecf9;
}
.timg {
  width: 100%;
  height: 11.88rem;
  overflow: hidden;
}
.imgtl {
  font-size: 14px;
  text-align: center;
  padding: 1rem;
  background-color: #fff;
}
.imgtl h4 {
  font-size: 18px;
  font-weight: 600;
}
.tour-item {
  padding: 0.5rem 0;
}
.item-img {
  width: 3.13rem;
  height: 3.13rem;
  margin-right: 0.5rem;
  float: left;
  overflow: hidden;
  border-radius: 0.25rem;
  border: 3px solid transparent;
}

.item-img img {
  height: 100%;
}
.activeB {
  border: 3px solid #fff;
}
</style>