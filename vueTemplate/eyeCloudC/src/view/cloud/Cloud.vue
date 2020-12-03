<template>
  <div class="cloud-root">
    <!-- <Header></Header> -->
    <top></top>
    <free></free>
    <boom></boom>
    <center></center>
    <!-- <foo></foo> -->
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "./header";
import top from "./Top.vue"
import free from './Free.vue'
import boom from './Boom.vue'
import center  from "./Centre.vue";
import foo from './foo'
export default {
  name: 'Cloud',
  components: {
    Header,
    top,
    free,
    boom,
    center,
    foo,
  }
}
</script>
<style scoped>
  .banner_bottom {
    display: none;
  }
  .cloud-root{
    background-color: #f4f5f9;
  }
  html { overflow-x: hidden; overflow-y: auto; }
</style>
