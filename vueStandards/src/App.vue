<template>
  <div id="app">
    <p-navigation-bar />
    <router-view />
    <!-- <el-backtop /> -->
  </div>
</template>

<script>
  import PNavigationBar from "@/components/navigationBar/PNavigationBar"
  export default {
    name: `App`,
    components: { PNavigationBar },
    data () {
      return {}
    },
    mounted () {

    },
    methods: {},
  }
 </script>

<style lang="less">
body {
  margin: 0;
  overflow: hidden;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
