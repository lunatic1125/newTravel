import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Trip = () => import('views/trip/Trip.vue')
const Travel = () => import('views/travel/Travel.vue')
// 旅行家
const Tourist = () => import('views/tourist/Tourist.vue')
const Pinlist = () => import('views/tourist/components/Pinlist.vue')

// const Tab1 = () => import('views/tourist/components/children/Tab1.vue')
// const Tab2 = () => import('views/tourist/components/children/Tab2.vue')

// 我的
const Profile = () => import('views/profile/Profile.vue')
const Write = () => import('views/profile/components/children/Write.vue')
const Attention = () => import('views/profile/components/children/Attention.vue')
const Fans = () => import('views/profile/components/children/Fans.vue')


const Register = () => import('components/content/Register.vue')
//搜索-城市-主题
const City = () => import('views/city/City.vue')
const Tag = () => import('views/tag/Tag.vue')

const Prolist = () => import('views/prolist/Prolist.vue')
Vue.use(Router)

// npm i vue-router@3.1.1 -S 同时加上以下代码，防止重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//----------------------end----------------------------------

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, },
  { path: '/trip', component: Trip },
  { path: '/travel', component: Travel },
  { path: '/tourist', component: Tourist },
  { path: '/tourist/pinlist', component: Pinlist },
  // 登陆注册
  { path: '/register', component: Register },
  {
    path: '/profile', component: Profile, redirect: '/profile/write',
    children: [
      { path: '/profile/write', component: Write },
      { path: '/profile/attention', component: Attention },
      { path: '/profile/fans', component: Fans }]
  },
  { path: '/city', component: City },
  { path: '/tag', component: Tag },
  { path: '/prolist/:id', component: Prolist }
]
export default new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
