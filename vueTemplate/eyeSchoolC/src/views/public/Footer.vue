<template>
  <div class="footer">
    <el-row>
      <el-col :xl="24">
        <div class="footer-top-box">
          <div>
            <img src="../../assets/footer-logo.png" alt="">
          </div>
          <div class="footer-contact">
            <p>在一切未开始<span class="special-text">之前</span>,先给我们说说你的<span class="special-text">想法</span>吧！</p>
            <p class="footer-contact-subtitle">BEFORE WE START, LET'S TALK ABOUT YOUR START!</p>
          </div>
          <div class="tep-phone">
            <p class="tep-phone-tit">电话：15237878977   18003787940</p>
            <p> 地址：五大街与安康路交叉口中关村智酷人才与产业创新基地6楼浪博教育</p>
          </div>
          <span class="footer-consulting" @click="serice">立即咨询</span>
        </div>
      </el-col>
      <el-col :xl="24">
        <div class="footer-online-consulting">
          <span class="online-consulting" @click="serice">
            在线咨询 <img src="../../assets/right.png">
          </span>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import {kefu} from '../../assets/js/kefu'
  export default {
    name: "Footer",
    methods:{
      serice(){
        kefu();
      }
    }
  }
</script>

<style scoped>
.footer-top-box{
  height: 405px;
  background: url("../../assets/footer-back-img.png") no-repeat;
  background-size: cover;
  color: #ffffff;
  padding-top: 15px;
  text-align: center;
}
.footer-contact{
  text-align: center;
  font-size: 36px;
  margin-top: 8px;
}
.footer-contact-subtitle{
  font-size: 15px;
  letter-spacing: 1px;
  color: #b9b8b8;
}

.tep-phone{
  text-align: center;
  font-size: 21px;
  margin-top: 25px;
}
.tep-phone-tit{
  font-size: 19px;margin-bottom: 20px;
}
.footer-consulting{
  display: inline-block;
  width: 415px;
  height: 58px;
  border: 2px solid #ffffff;
  text-align: center;
  line-height: 58px;
  border-radius: 30px;
  margin-top: 35px;
}
.special-text{
  color: #0179da;
}
.footer-online-consulting{
  height: 100px;
  background: RGB(33,33,33);
  position: relative;
}
.online-consulting{
  display: inline-block;
  width: 335px;
  height: 120px;
  background-image: linear-gradient(0deg,
  #0179da 0%,
  #024ea6 100%);
  font-size: 48px;
  line-height: 120px;
  color: #ffcc00;
  padding-left:25px;
  position: absolute;
  right: 120px;
  bottom: 0;
}
  .online-consulting>img{
    vertical-align: middle;
    margin: -6px 0 0 40px ;
  }
</style>
