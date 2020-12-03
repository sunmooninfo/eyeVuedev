<template>
  <div id="app">
    <nav-bar class="app-nav"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "./views/public/NavBar";
  export default {
    name:'app',
    components:{
      NavBar
    },

  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  a{
    color: black;
  }
  #app{
    /*background: RGB(58,79,194);*/
  }
  /*百度商桥*/
  .nb-nodeboard-contain{
    background: RGB(12,88,167)!important;
  }
  #newBridge .nb-nodeboard-left-bottom{
    left: auto !important;
    bottom: 1px !important;
    top: auto !important;
    right: 1px !important;
  }
  .shangqiao{
    display: inline-block;
    width: 300px;
    height: 100px;
    background: #0179da;
  }
</style>
