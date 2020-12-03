<template>
<div>
  <el-row class="Adobe-box">
    <el-col :xl="24">
<!--top-->
    <el-row>
      <el-col :xl="24" class="top">
        <img src="../assets/adobe/1.png" class="top-img">
        <p class="top-tit top-maintit">2020Adobo国际认证 </p>
        <p class="top-tit top-subtit">授权培训中心</p>
      </el-col>
    </el-row>
<!--品牌介绍-->
    <el-row type="flex" justify="center" class="show">
      <el-col :span="16">
       <el-row type="flex" justify="space-between" >
         <el-col :span="6">
           <p class="show-tit">品牌介绍</p>
         </el-col>
       </el-row>
          <el-row type="flex" justify="space-between" class="item-box">

            <el-col :span="7" class="show-item">
              <div class="item-tit">
                <img src="../assets/adobe/4.png">
                <br><span>Adobe</span>
              </div>
              <div class="item-content">
                Adobe是全球最大、最多元化的软件公司之一，旗下拥有众多深受客户信赖的软件品牌。其产品已被广泛应用于创意产业各领域，激发年轻人的创造力，改变了人们展示创意、处理信息的方式。
              </div>
            </el-col>

            <el-col :span="7" class="show-item2">
              <div class="item-tit2">
                <img src="../assets/adobe/5.png" class="item2-img">
                <span>
                  <span class="item2-tit">AUTHORISED</span>
                  <br>
                  <span class="item2-subtit">Training Centre</span>
                </span>
              </div>
              <div class="item-content2">
                Adobe AuthorisedTraining Centre (AATC)是Adobe全球官方培训认证体系服务机构。2017年中科卓望成为Adobe中国授权培训中心并引入Adobe国际认证(ACA) 体系，打造设计师人才培训认证标准。
              </div>
            </el-col>

            <el-col :span="7" class="show-item3">
              <div class="item-tit3">

              </div>
              <div class="item-content3">
                Adobe国际认证(AdobeCertified Associate 简称ACA)是面向全球Adobe软件学习及使用者的权威认证体系。Adobe公司权威推出，并由Adobe全球CEO签发。全球128个国家均有进行，共19种语言版本。
              </div>
            </el-col>
          </el-row>
      </el-col>
    </el-row>
<!--国际认证-->
    <el-row>
      <el-col :xl="24" class="certificate">
        <div>
          <span class="certificate-tit-box">
            <span class="tit-main">A</span>
           <span class="certificate-tit">dobe</span>
            <img src="../assets/adobe/4.png" class="certificate-tit-img">
          </span><br>
          <span class="certificate-subtit">国际认证价值</span>
        </div>
        <img src="../assets/adobe/8.png" class="certificate-content">
      </el-col>
    </el-row>
<!--Adobe软件-->
    <el-row class="app-box">
      <el-col :xl="24" class="app-top">
      </el-col>
      <el-col :xl="24">
        <el-row type="flex" justify="center">
          <el-col :span="16" class="app-show-box">
            <img src="../assets/adobe/15.png" class="app-15-img">
            <img src="../assets/adobe/17.png" class="app-17-img" >
            <div class="app-show">
              <span class="app-zixun" @click="serice">立即咨询</span>
            </div>
            <div class="img-18-box">
              <img src="../assets/adobe/18.png">
            </div>

            <div class="img-13-box">
              <img src="../assets/adobe/13.png">
            </div>

            <div class="exchange">
              <p class="exchange-tit">综合证书兑换</p>

              <el-row type="flex" justify="space-between" class="exchange-item">
                <el-col :span="16">
                  <p class="exchange-item-tit">考取Photoshop、Animate、Dreamweaver三门认证可免费获取Adobe网页设计师综合证书
                  </p>
                </el-col>
                <el-col :span="8">
                  <img src="../assets/adobe/21.png">
                </el-col>
              </el-row>

              <el-row type="flex" justify="space-between" class="exchange-item">
                <el-col :span="16">
                  <p class="exchange-item-tit">考取Photoshop、lustrator、InDesign三门认证可免费获取Adobe视觉设计师综合证书</p>
                </el-col>
                <el-col :span="8">
                  <img src="../assets/adobe/21.png">
                </el-col>
              </el-row>

            </div>

          </el-col>
        </el-row>
        <img src="../assets/adobe/21.png" class="space-1">
        <img src="../assets/adobe/21.png" class="space-2">
        <img src="../assets/adobe/21.png" class="space-3">
        <img src="../assets/adobe/21.png" class="space-4">
        <img src="../assets/adobe/21.png" class="space-5">
        <img src="../assets/adobe/21.png" class="space-6">
      </el-col>
    </el-row>


    </el-col>
  </el-row>
  <Footer2></Footer2>
</div>

</template>

<script>
  import Footer2 from "./public/Footer2";
  import {kefu} from '../assets/js/kefu'
  export default {
    name: "Adobe",
    components:{
      Footer2
    },
    methods:{
      serice(){
        kefu();
      }
    }
  }
</script>

<style scoped>
.Adobe-box{
  height: 8100px;
}
.top{
  height: 630px;
 background: url("../assets/adobe/2.png");
  background-size: cover;
  text-align: center;
  padding-top: 60px;
}
.top-img{
  margin-left: -900px;
}
.top-tit{
  font-size: 84px;
  line-height: 84px;
  letter-spacing: 14px;
  color: #000;
  -webkit-text-stroke: 1.2px #fff;
  font-weight: bolder;
}
.top-maintit{
  margin-top: 150px;
}
/*  品牌*/
.show{
  height: 940px;
  background: url("../assets/adobe/7.png");
  background-size: cover;
  color: #fff ;
  padding-top: 75px;
}
.show-tit{
  font-size: 68px;
  letter-spacing: 5px;
  position: relative;
  background: url("../assets/adobe/3.png") no-repeat bottom ;
  text-align: center;
}
.item-box{
  margin-top: 117px;
  color: #fff;
}
.item-tit{
  text-align: center;
  font-size: 49px;
  line-height:69px;
}
.item-content{
  font-size: 24px;
  margin-top: 55px;
}
/*  item2*/
.item-tit2{
  overflow: hidden;
  line-height: 50px;
}
.item2-img{
  float: left;
  margin-right: 5px;
}
.item2-tit{
  font-size: 20px;
}
.item2-subtit{
  font-size: 38px;
}
.item-content2{
  font-size: 24px;
  margin-top: 123px;
}
/*  item3*/
.item-tit3{
  height: 100px;
  background: url("../assets/adobe/6.png") no-repeat;
}
.item-content3{
  font-size: 24px;
  margin-top: 130px;
}
/*国际认证*/
.certificate{
  text-align: center;
  padding-top: 85px;
  padding-bottom: 100px;
}
.certificate-tit-box{
  display: inline-block;
  position: relative;
}
.certificate-tit{
  font-size: 55px;
  letter-spacing: 3px;
  color: #000000;
  font-weight: bolder;
}
.tit-main{
  font-size: 74px;
  letter-spacing: 4px;
  color: #fd0000;
  font-weight: bolder;
}
.certificate-subtit{
  font-size: 34px;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.9;
  font-weight: bolder;
}
.certificate-tit-img{
  height: 100%;
  position: absolute;
  right: -40px;
  bottom: -20px;
  z-index: -1;
}
.certificate-content{
  margin-top: 70px;
}
/*  软件*/
.app-top{
  height: 787px;
  background: url("../assets/adobe/11.png") no-repeat ;
  background-size: cover;
}
.app-show-box{
  max-width: 1199px;
  height: 5400px;
  position: absolute;
  top: -570px;
  background: #fff;
  box-shadow: 0px 21px 46px 0px
  rgba(0, 0, 0, 0.36);
}
.app-show{
  height: 570px;
  background: url("../assets/adobe/16.png") no-repeat;
  background-size: cover;
  position: relative;
}
.app-15-img{
  position: absolute;
  z-index: 2;
  right: -130px;
  top: 200px;
}
.app-17-img{
  position: absolute;
  z-index: 2;
  right: 0;
  top: 350px;
}
.app-zixun{
  display: inline-block;
  width: 382px;
  height: 72px;
  line-height: 72px;
  background-color: #e60012;
  border-radius: 10px;
  text-align: center;
  font-size: 45px;
  letter-spacing: 2px;
  color: #ffffff;
  position: absolute;
  bottom: -36px;
  left: 50%;
  margin-left: -191px;
}
.img-18-box{
   text-align: center;
  padding: 100px 0;
}
.img-13-box{
  position: absolute;
  left: -102px;
}

/* 证书兑换*/
.exchange{
  position: absolute;
  bottom: 100px;
  padding-left: 45px;
}
.exchange-tit{
  color: red;
  font-size: 35px;
  font-weight: bold;
}
.exchange-item-tit{
  font-size: 28px;
  color: #000;
  opacity: .6;
  line-height: 60px;
  margin-top: 60px;
}
/*  space*/
.space-1{
  width: 458px;
  height: 354px;
  position: absolute;
  top: 1350px;
  left: 21%;
}
.space-2{
  width: 458px;
  height: 354px;
  position: absolute;
  top: 2000px;
  left: 55%;
}
.space-3{
  width: 458px;
  height: 354px;
  position: absolute;
  top: 2600px;
  left: 21%;
}
.space-4{
  width: 458px;
  height: 354px;
  position: absolute;
  top: 3200px;
  left: 55%;
}
.space-5{
  width: 458px;
  height: 354px;
   position: absolute;
   top: 3800px;
   left: 21%;
 }
.space-6{
  width: 458px;
  height: 354px;
  position: absolute;
  top: 4400px;
  left: 55%;
}
  @media (max-width: 1660px) {
    .item2-subtit{
      font-size: 25px;
    }
  }
</style>
