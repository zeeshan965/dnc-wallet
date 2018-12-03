<template>
    <div>
        <topbar></topbar>
        <sidebar></sidebar>
        <main-content></main-content>
        <popup-modals></popup-modals>
    </div>
</template>
<script>
    import Topbar from './Topbar.vue'
    import Sidebar from './Sidebar.vue'
    import Footer from './Footer.vue'
    import MainContent from './MainContent.vue'
    import PopUpModals from './popup-modals/PopupModals.vue'
    import NewWallet from './popup-modals/NewWallet.vue'
    import DncModal from './popup-modals/DncModal.vue'
    import EtheriumModal from './popup-modals/EtheriumModal.vue'
    import BitcoinModal from './popup-modals/BitcoinModal.vue'

    export default {
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