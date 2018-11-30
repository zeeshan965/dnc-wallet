import Vue from 'vue'
import Router from 'vue-router'
import MyWallet from './components/MyWallet.vue'
// import profile from './components/Profile.vue'
import Contracts from './components/Contracts.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyWallet
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: Contracts
    },
      // {
      //     path: '/profile',
      //     name: 'Profile',
      //     component:  profile
      // },
  ]
})
