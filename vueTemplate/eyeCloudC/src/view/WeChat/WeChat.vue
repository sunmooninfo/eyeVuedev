<template>
  <div class="">
    <!-- <headers></headers> -->
    <top></top>
    <centre></centre>
    <!-- <foo></foo> -->
  </div>
</template>

<script>
    import headers from "../home/header";
    import top from "./top.vue"
    import  centre from './Centre.vue'
    import foo from "../cloud/foo.vue"
    export default {
        name: "WeChat",
        components:{
          headers,
          top,
          centre,
          foo,
        }
    }
</script>

<style>
  html { overflow-x: hidden; overflow-y: auto; }

</style>
