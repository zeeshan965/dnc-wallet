import Vue from 'vue'
import Router from 'vue-router'
import MyWallet from './components/MyWallet.vue'
// import profile from './components/Profile.vue'
import Contracts from './components/Contracts.vue'
import Main from './components/Main.vue'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'mywallet',
          component: MyWallet
        },
        {
          path: '/contracts',
          name: 'contracts',
          component: Contracts
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
