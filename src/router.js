import Vue from 'vue'
import Router from 'vue-router'
import MyWallet from './components/MyWallet.vue'
import profile from './components/Profile.vue'
import Authenticated from './components/Authenticated.vue'
import Contracts from './components/Contracts.vue'
import ImportAccounts from './components/importaccounts'
import checkTxStatus from './components/checkTxStatus'

//import Main from './components/Main.vue'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'
import Forgetpass from './components/Auth/Forgetpass.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Authenticated,
            children: [
                {
                    path: '/',
                    name: 'mywallet',
                    component: MyWallet
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: profile
                },
                {
                    path: '/contracts',
                    name: 'contracts',
                    component: Contracts
                },
                {
                    path: '/importaccounts',
                    name: 'importaccounts',
                    component: ImportAccounts
                },
                {
                    path: '/checkTxStatus',
                    name: 'checkTxStatus',
                    component: checkTxStatus
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
        },
        {
            path: '/forgetpass',
            name: 'Forgetpass',
            component: Forgetpass
        }
    ]
});

//import Login from "./components/Login.vue";
//Vue.use(Router);

// let router = new Router({
// mode: 'history',
// base: process.env.BASE_URL,
// routes: [
// {
// path: '/',
// name: 'home',
// component: Authenticated,
// children: [
// {
// path: '/',
// component: MyWallet,
// name: 'mywallet'
// },
// {
// path: '/profile',
// name: 'Profile',
// component: profile
// },
// {
// path: '/contracts',
// name: 'contracts',
// component: Contracts
// }
// ]
// },
// //login
// {
// path: '/login',
// name: 'Login',
// component: Login
// },

// ]
// })
//const openRoutes = [ 'Login' , 'contracts', 'home', 'Profile' ,'mywallet'];

// router.beforeEach((to, from, next) => {
// if (openRoutes.includes(to.name) ){
// next()
// }else if(window.tokem){
// next()
// }else
// {
// next('/')
// }
// })
//export default router;
