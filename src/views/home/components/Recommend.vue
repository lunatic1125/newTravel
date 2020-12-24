<template>
  <div class="recommend">
    <div class="recommend-title">
      <span>推荐</span>
    </div>
    <list :prolist="recomlist"></list>
  </div>
</template>

<script>
import List from "components/common/list/List.vue";
export default {
  name: "Recommend",
  components: {
    List,
  },
  props: {
    recomlist: Array,
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  padding: 0 0.94rem;
}
.recommend-title {
  height: 3rem;
  line-height: 3rem;
}
.recommend-title:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.recommend span {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
.active {
  color: var(--color-tink);
}
</style>