<template>
  <div class="pinlist">
    <!-- nav -->
    <div class="tournav">
      <router-link tag="div" to="/tourist" class="item-left iconfont">
        <span>&#xe622;</span>
      </router-link>
      <div class="item-center">
        <div class="head-pho">
          <img src="~assets/image/updata/touristbanner1.png" />
        </div>
        <div class="imgtl">
          <h4>名字</h4>
          <p>20156.8</p>
        </div>
        <button class="focus">+关注</button>
      </div>
      <div class="item-right iconfont"><span>&#xe618;</span></div>
    </div>
    <!-- banner -->
    <div class="banner">
      <img src="~assets/image/updata/touristbanner1.png" />
    </div>
    <!-- content -->
    <div class="content">
      <h4 class="title">
        定格浪漫圣诞季，怀念冬日最美童话(维京邮轮莱恩河11日小记)
      </h4>
      <div class="subject">
        <swiper class="contlist" :options="swiperOption">
          <swiper-slide class="item">
            <div class="item-d">
              <h4>出发时间</h4>
              <p>2020/11/28</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div class="item-d">
              <h4>人物</h4>
              <p>家庭出游</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div class="item-d">
              <h4>人均费用</h4>
              <p>4000</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div class="item-d">
              <h4>出行天数</h4>
              <p>5</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="location">云南</div>
      </div>
      <div class="text">
        <p>
          如果说8月的多瑙河是一块苍翠欲滴的翡翠，所在之处灵气逼人；那么12月的莱茵河就是一颗温润晶莹的珍珠，优雅含蓄耐人寻味。去年底第二次选择了维京游轮，定格在12月底的白色圣诞季，感受到了与夏日
          东欧多瑙河截然不同的旅程体验，唯一不变的是回“家”，回到维京游轮这个温暖的大“家”。
        </p>
        <p>
          时隔将近一年了，又快到每年最冷却也是最温馨浪漫的冬日，翻出了这些依然历历在目的照片，鲜活的回忆瞬间涌上心头。2020年是特别的一年，没想到1月回国后，至今也没能再次跨出国门，闲来无聊时再次忆起这次难忘的
          欧洲 之行，忍不住想要分享给大家这个在我心中最浪漫最童话的圣诞季。
        </p>
        <img src="~assets/image/updata/touristbanner1.png" />
        <p>
          这次莱茵河11日行程途径 四国 ，从童话世界般的 荷兰 到古色古香的 德国
          ，从浪漫艺术的 法国 到有着人间天堂美誉的 瑞士
          ，涵盖了父母一直最想要去的几大 欧洲
          国家，包含了绝美的精华景点。每天在船上吃着美食品着美酒，伴着醉人的日出日落欣赏莱茵河的沿途美景，舒适惬意又无比暖心。
        </p>
        <img src="~assets/image/updata/touristbanner1.png" />
        <p>网红建筑打卡照—— 荷兰 阿姆斯特丹 运河</p>
        <img src="~assets/image/updata/touristbanner1.png" />
        <p>世界文化遗产—— 荷兰 小孩堤防风车群</p>
        <h4>雨过天晴，登船日</h4>
        <p>
          登船日好开心哦，来到 阿姆斯特丹
          的第四天终于见到了蓝天白云大太阳。维京游轮就靠泊在中央火车站那儿，地理位置也太方便了，而且，命中注定与“尼约德”号有缘，维京好几条船，各个不同的航线，我们一家子竟然遇到两年前的同一艘船，缘份真的妙不可言。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "PinList",
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-container {
  margin: 0 !important;
}
.tournav {
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  height: 2.75rem;
  padding: 0 0.31rem;
  background-color: #fff;
}

.item-left,
.item-right {
  width: 2.75rem;
  font-size: 1.38rem;
  line-height: 2.75rem;
}
.item-right {
  text-align: right;
}
.item-right span,
.item-left span {
  padding: 0.38rem;
}

.item-center {
  position: relative;
  flex: 1;
  margin: 0;
  font-size: 1.06rem;
}
/* -----------头像--------------- */
.head-pho {
  margin-top: 2px;
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
.imgtl {
  position: absolute;
  top: 9px;
  left: 50px;
}
.imgtl h4 {
  font-size: 13px;
  line-height: 18px;
}
.imgtl p {
  font-size: 12px;
  color: var(--color-text-s);
}
.focus {
  position: absolute;
  top: 9px;
  right: 9px;
  font-size: 11px;
  color: #fff;
  padding: 0.38rem 0.63rem;
  border-radius: 0.75rem;
  background-color: var(--color-tink);
}
/* ------------banner------------- */
.banner {
  width: 100%;
  height: 12.5rem;
  background-color: #eee;
  overflow: hidden;
}
.banner img {
  width: 100%;
}
/* ----------content--------------- */
.title {
  padding: 1.5rem 0;
  font-size: 1.38rem;
  line-height: 1.88rem;
  font-weight: 600;
}
/* -----------subject---------------- */
.content {
  padding: 0 0.94rem;
}
.subject {
  display: flex;
  justify-content: space-between;
  height: 36px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}
.location {
  width: 6.25rem;
  text-align: center;
  font-size: 1.38rem;
  line-height: 2.25rem;
  box-shadow: -1px 0 3px rgba(0, 0, 0, 0.1);
}
.contlist {
  flex: 1;
}
.item {
  position: relative;
  margin-right: 0 !important;
  margin-right: 1.25rem;
  font-size: 14px;
}
.item::before {
  position: absolute;
  top: 2px;
  left: 0;
  content: "";
  width: 0.19rem;
  height: 0.63rem;
  border-radius: 0.09rem;
  background-color: var(--color-tink);
}
.item div {
  margin-left: 0.5rem;
}
.item p {
  font-weight: 600;
}
/* -----------正文---------- */
.text {
  line-height: 1.69rem;
}
.text h4 {
  font-size: 1.38rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.text p {
  margin-bottom: 1rem;
}
.text img {
  width: 100%;
  margin-bottom: 1rem;
}
</style>