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
<<<<<<< HEAD
      <transition name="slidefadesmall" mode="out-in" appear>
      <router-view></router-view>
      </transition>
    </div>
=======
      <router-view></router-view>
 0   </div>
>>>>>>> 6862fcf2c2bb321637b296c7491371c01f591fd0
  </div>
</template>

<script>
<<<<<<< HEAD
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

    }
=======
  export default{
      name: 'app'
>>>>>>> 6862fcf2c2bb321637b296c7491371c01f591fd0
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