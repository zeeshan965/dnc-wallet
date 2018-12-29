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
.alertify-notifier.ajs-right{
  color:white !important;
}
</style>
<template>
  <div id="wrapper" class="enlarged">
    <div id="app">

      <transition name="slidefadesmall" mode="out-in" appear>
      <router-view></router-view>
      </transition>
    </div>

      </div>

</template>

<script>

  export default {
    name: 'app',
    data: function(){
      return {
        user: null
      }
    },
    methods:{
      isLoggedIn(){
        return localStorage.getItem("auth_user") ? JSON.parse(localStorage.getItem("auth_user")) : null;
      }
    },
    mounted(){
        this.user = this.isLoggedIn();
      //   alertify.set('notifier','position', 'top-right');
      //  alertify.success('Current position : ' + alertify.get('notifier','position'));

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