<template>
<div class="ProfeClass">
  <el-row>
    <el-col :xl="24">
<!--ps-->
      <el-row type="flex" justify="center">
        <el-col :span="20">

          <el-row type="flex" justify="space-between" class="ps-box">
            <el-col :span="10">
              <p><span class="ps-left-tit">视觉传达设计/</span> <span class="ps-right-tit">学习PS常用技巧和平面设计</span></p>
              <p class="ps-content">学习PHOTOSHOP软件基础及LOGO、海报等各类平面设计方法和技巧，让学员达到熟练使用PS，能够独立完成平面设计作品的水平.</p>
              <div class="ps-subtit-box">学习成果</div>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">PS软件基础操作</p>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">DM单页、名片、海报主视觉设计</p>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">折页、易拉宝设计</p>
              <span class="ps-btn" @click="serice">立即咨询</span>
            </el-col>

            <el-col :span="14" class="px-right">
              <img src="../assets/class/class01.png" >
            </el-col>

          </el-row>

        </el-col>
      </el-row>
<!--Ai-->
      <el-row class="Ai-box">
        <el-col :xl="24">
          <p><span class="ps-left-tit">矢量图绘制/</span> <span class="ps-right-tit">学习AI软件基础</span></p>
          <p class="ps-content-space">学习ILLUSTRATOR软件基础及各类插画和LOGO提案设计方法和技巧，让学员达到熟练<br>使用AI，能够独立完成平面设计作品的水平。</p>
          <div class="Ai-content">
            <div class="Ai-subtit">学习成果</div>
            <p class="ps-left-item"><img src="../assets/class/class-duihao.png">AI软件基础操作</p>
            <p class="ps-left-item"><img src="../assets/class/class-duihao.png">插画和LOGO提案设计方法和技巧</p>
            <p class="ps-left-item"><img src="../assets/class/class-duihao.png">独立完成平面设计作品</p>
            <span class="ps-btn" @click="serice">立即咨询</span>
          </div>

        </el-col>
      </el-row>
<!--Fs-->
      <el-row>
        <el-col :xl="24" class="Fs">
        </el-col>
      </el-row>
<!--Web-->
      <el-row type="flex" justify="center">
        <el-col :span="20">

          <el-row type="flex" justify="space-between" class="ps-box Web">
            <el-col :span="12">
              <p><span class="ps-left-tit">WEB UI设计与前端/</span> <span class="ps-right-tit">学习网页设计及前端程序设计</span></p>
              <p class="ps-content">通过网站设计规范、网站逻辑框架、企业主站与电商页面，以及HTML、CSS前端知识的学习，让学员熟练掌握网页设计流程和方法。</p>
              <div class="ps-subtit-box">学习成果</div>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">网站设计规范、思维导图及逻辑框架</p>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">企业主站、电商分类页及详情页设计</p>
              <p class="ps-left-item"><img src="../assets/class/class-duihao.png">WEB前端程序设计（HTML框架搭建、CSS样式制作</p>
              <span class="ps-btn" @click="serice">立即咨询</span>
            </el-col>

            <el-col :span="14" class="px-right">
              <img src="../assets/class/class03.png" >
            </el-col>

          </el-row>

        </el-col>
      </el-row>

<!--app-->
      <el-row>
        <el-col :xl="24" class="app">
          <p><span class="ps-left-tit">视觉传达设计/</span> <span class="ps-right-tit">移动端界面设计方法规范和技巧</span></p>
          <p class="ps-content-space">学习 了解APP设计规范，学习原型图、效果图设计与切图方法，让学员能够设计出更符合企业用户的需要APP界面。 </p>
          <div class="app-subtit">学习成果 <br><p class="app-subtit-border"></p></div>
          <span class="app-item"><img src="../assets/class/class-duihao.png">APP设计规范、思维导图、原型设计</span>
          <span class="app-item"><img src="../assets/class/class-duihao.png">高保真效果图设计及制作</span>
          <span class="app-item"><img src="../assets/class/class-duihao.png">切图输出、APP交互设计规范及要点</span><br>
          <span class="ps-btn" @click="serice">立即咨询</span>
        </el-col>
      </el-row>

    </el-col>
  </el-row>




<!--  footer-->
  <Footer></Footer>
</div>
</template>

<script>
  import Footer from "./public/Footer";
  import {kefu} from '../assets/js/kefu'
  export default {
    name: "ProfeClass",
    components:{
      Footer
    },
    methods:{
      serice(){
        kefu();
      }
    }
  }
</script>

<style scoped>
.ProfeClass{
  padding-top: 200px;
}
/*ps*/
.ps-box{
  background-color: #fff;
}
.ps-left-tit{
  font-size: 46px;
  color: #001750;
  line-height: 81px;
}
.ps-right-tit{
  font-size: 24px;
  color: #001750;
  line-height: 81px;
}
.ps-content{
  display: inline-block;
  font-size: 24px;
  color: #001750;
  opacity: 0.8;
  margin: 30px 0;
  line-height: 40px;
  padding-right: 120px;
}
.ps-content-space{
  display: inline-block;
  font-size: 24px;
  color: #001750;
  opacity: 0.8;
  margin: 30px 0;
  line-height: 40px;
}
.ps-subtit-box{
  height: 30px;
  line-height: 30px;
  border-left: 5px solid red;
  padding-left: 5px;
  font-size: 24px;
}
.ps-left-item{
  font-size: 20px;
  color: #001750;
  line-height: 30px;
  margin: 5px 0;
}
.ps-btn{
  display: inline-block;
  width: 299px;
  height: 85px;
  border-radius: 10px;
  border: solid 1px #001750;
  font-size: 32px;
  line-height: 85px;
  text-align: center;
  margin: 45px 0;
}
.px-right{
  text-align: right;
}
.px-right img{
  width: 100%;
  height:100%;
}
/*  AI */
.Ai-box{
  height: 1000px;
  background:url('../assets/class/class07.png') no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  padding-top: 150px;
}
.Ai-subtit{
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-left: 5px solid red;
  padding-left: 5px;
  font-size: 24px;
}
.Ai-content{
  position: absolute;
  text-align: left;
  top: 610px;
  right: 350px;
}
/*  Fs*/
.Fs{
  height: 700px;
  background: url('../assets/class/class02.png') no-repeat;
  background-size: cover;
}
/*  Web*/
.Web{
  padding: 200px 0;
}
/*  app*/
.app{
  height: 1000px;
  background: url('../assets/class/class05.png') no-repeat;
  background-size: cover;
  text-align: center;
  padding: 70px 0;
}
.app-item{
  display: inline-block;
  font-size: 20px;
  color: #001750;
  line-height: 30px;
  margin: 0 70px;
}
.app-subtit{
  width: 100px;
  height: 30px;
  font-size: 24px;
  margin: 30px auto;
}
.app-subtit-border{
  display: inline-block;
  height: 5px;
  width: 30px;
  background-color: red;
  position: relative;
  top: -15px;
}
@media (max-width: 1650px){
  .Ai-content{
    top: 460px;
    right: 2%;
  }
}
</style>
