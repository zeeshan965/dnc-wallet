import Vue from 'vue'
import App from './App.vue'
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import MainContent from './components/MainContent.vue'
import PopupModals from './components/popup-modals/PopupModals.vue'
import NewWallet from './components/popup-modals/NewWallet.vue'
import DncModal from './components/popup-modals/DncModal.vue'
import router from './router'
Vue.component('topbar', Topbar)
Vue.component('sidebar', Sidebar)
Vue.component('project-footer', Footer)
Vue.component('main-content', MainContent)
Vue.component('popup-modals', PopupModals)
Vue.component('new-wallet-modal', NewWallet)
Vue.component('dnc-modal', DncModal)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
