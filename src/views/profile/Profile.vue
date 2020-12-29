<template>
  <div class="profile">
    <prof-navbar style="background-color: #fff"></prof-navbar>
    <proftitle />
    <pro-icons />
    <pro-tab-list />
    <pro-server></pro-server>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
import ProfNavbar from "./components/Navbar";
import Proftitle from "./components/Title";
import ProIcons from "./components/ProIcons";
import ProServer from "./components/Server";
import ProTabList from "./components/ProTabList.vue";
import { request } from "../../network/request";

export default {
  name: "Profile",
  components: {
    ProfNavbar,
    MainTabbar,
    Proftitle,
    ProIcons,
    ProServer,
    ProTabList,
  },
  data() {
    return {
      // travels: [],
      recommend: [],
      mytravel: {},
      recompeo: [],
      myfans: [],
    };
  },
  methods: {
    getData() {
      request({ url: "/api/pinterest.json" }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          // this.travels = data.travels;
          this.recommend = data.recommend;
          this.mytravel = data.mytravel;
          this.recompeo = data.recompeo;
          this.myfans = data.myfans;
          // this.$store.commit("getTravels", this.travels);
          this.$store.commit("getRecommend", this.recommend);
          this.$store.commit("getMytravel", this.mytravel);
          this.$store.commit("getRecompeo", this.recompeo);
          this.$store.commit("getMyfans", this.myfans);
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 0;
  padding-bottom: 178%;
  background-color: var(--color-bg-gay);
}
</style>