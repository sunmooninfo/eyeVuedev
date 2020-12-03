<template>
  <div class="Home-root">
    <!-- <Banner></Banner> -->

    <!-- <Header></Header> -->
    <Floor1></Floor1>
    <Floor2></Floor2>
    <!-- <Footer></Footer> -->
    <template>
        <el-backtop></el-backtop>
    </template>
  </div>
</template>

<script>
import Banner from '@/components/banner'
// import Header from "./header"
import Footer from "./footer"
import Floor1 from "./floor-1"
import Floor2 from "./floor-2"
export default {
  name: 'Home',
  components: {
    // Header,
    Banner,
    Footer,
    Floor1,
    Floor2,
  }
}
</script>
<style scoped>
.Home-root{
  background: #f3f6f9;
}
</style>
