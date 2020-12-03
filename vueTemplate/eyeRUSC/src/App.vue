<template>
  <div id="app">
    <Banner></Banner>
    <!-- <Header></Header> -->
    <router-view class="middle_content"/>
    <div class="footer_home">
      <Footer></Footer>

    </div>
    <template>
        <el-backtop></el-backtop>
    </template>
  </div>
</template>

<script>
import Banner from "@/components/banner"
import Footer from "@/components/footer"
// import Footer from "./view/home/footer"
// import Header from './view/home/header'
export default {
  name: 'App',
  components: {
    Footer,
    // Header,
    Banner
  }
}
</script>

<style >
  *{
    margin:0;
    padding: 0;
  }
  .login-form-input .el-input__inner {
    width: 200px;
    background-color: #383e4d;
    border: none;
  }

  html { overflow-x: hidden; overflow-y: auto;}
  .footer_home {
   /* position: fixed; */
    width: 100%;
    bottom: 0;
  }
  .middle_content {
    min-height: 850px;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  .last_content {
    margin-bottom: 50px;
  }
</style>


