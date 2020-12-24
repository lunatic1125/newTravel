<template>
  <div class="productInfo">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <router-link
        tag="div"
        class="list"
        v-for="item in prolist"
        :key="item.id"
        :to="'/prolist/' + item.id"
      >
        <!-- 主题图片 -->
        <i class="iconfont like">&#xe61a;</i>
        <div class="list-img">
          <i class="img-label">{{ item.tag }}</i>
          <img :src="item.imgUrl" alt="" />
        </div>
        <!-- 文字信息 -->
        <div class="list-item">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <span class="tagTyle">查看详情</span>
          <div class="price">{{ item.price }}</div>
        </div>
      </router-link>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    prolist: Array,
  },
  data() {
    return {
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 5; i++) {
        //   this.prolist.push(this.prolist.length + 1);
        // }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.prolist.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style>
.list {
  position: relative;
  height: 100px;
  /* margin: 0.63rem 0; */
  margin-bottom: 0.63rem;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0.06rem 0.25rem rgba(0, 0, 0, 0.08);
  background-color: #fff;
}

.list .like {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.13rem;
  padding: 0.25rem;
}
/* list-img */
.list-img {
  float: left;
  width: 140px;
  height: 100px;
  overflow: hidden;
}
.list-img img {
  width: 100%;
}
.img-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 54px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 0.69rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
/* list-item */
.list-item {
  float: left;
  width: 12.44rem;
  padding: 0 0.5rem;
}
.list-item h4 {
  width: 10rem;
  line-height: 1.88rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
.list-item p {
  width: 11.88rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-text-p);
  /* 多行文字溢出省略显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>