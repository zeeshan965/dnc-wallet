<style>
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
<template>
  <div id="wrapper" class="enlarged">
    <div id="app">
      <topbar></topbar>
      <sidebar></sidebar>
      <main-content></main-content>
      <popup-modals></popup-modals>
    </div>
  </div>
</template>

<script>
  import Topbar from './components/Topbar.vue'
  import Sidebar from './components/Sidebar.vue'
  import Footer from './components/Footer.vue'
  import MainContent from './components/MainContent.vue'
  import PopUpModals from './components/popup-modals/PopupModals.vue'
  import NewWallet from './components/popup-modals/NewWallet.vue'
  import DncModal from './components/popup-modals/DncModal.vue'
  import EtheriumModal from './components/popup-modals/EtheriumModal.vue'
  import BitcoinModal from './components/popup-modals/BitcoinModal.vue'

  export default {
    name: 'app',
    components: {
      Topbar,
      Sidebar,
      Footer,
      MainContent,
      PopUpModals,
      NewWallet,
      DncModal,
      EtheriumModal,
      BitcoinModal
    },
    mounted: function(){
      $(".modal").modal('hide');
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
