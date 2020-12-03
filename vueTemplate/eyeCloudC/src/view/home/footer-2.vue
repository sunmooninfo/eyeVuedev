<template>
  <div class="container">
    <div class="footer-top">
      <el-row>
        <el-col :span="11">
          <div class="title">专家服务 ></div>
          <div class="title-c">提供咨询、规划、检测、运维和交付等全生命周期定制化安全整体解决方案</div>
        </el-col>
        <el-col style="text-align:center;" :span="2">&nbsp;</el-col>
        <el-col :span="11">
          <div class="title">合规性 ></div>
          <div class="title-c">浪博云具备充分的安全合规能力，满足众多的标准要求，并已通过系列合规认证</div>
        </el-col>
      </el-row>
    </div>
    <div class="floor" >可靠，安全，合规的云服务</div>
    <el-divider >获得众多合规认证</el-divider>
    <el-row style="padding-top:2rem;padding-bottom:3rem">
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/ISO.png" alt="">
          <div>IOS 27001</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/DJCP.png" alt="">
          <div>网络安全等级保护</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/trucs.png" alt="">
          <div>可信云</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/big-data.png" alt="">
          <div>大数据产品能力认证</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img//CSA+STAR.png" alt="">
          <div>CSA STAR金牌认证</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/cispe.png" alt="">
          <div>CISPE认证</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon">
          <img src="../../assets/footer-img/AICPA+SOC.png" alt="">
          <div>SOC鉴证审计</div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6"  :lg="3">
        <div class="Ticon eicon">
          <img src="../../assets/footer-img/more.png" alt="">
          <div>查看更多</div>
        </div>
      </el-col>
    </el-row>
    <div class="bg">
        <div class="bg-1">开始体验免费套餐</div>
        <div class="bg-2">立即 注册 领取40+款产品的免费体验套餐</div>
        <el-button class="bgbutton">免费体验 </el-button>
        <div style="padding-top:2.5rem"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },

}
</script>
<style scoped>
  .Ticon img{
    width: 60px;
    height: 60px;
  }
  .title{
    color: #000;
    font-size: 18px;
    line-height: 28px;
    color: #333;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-font-smoothing: antialiased;
  }
  .title:hover{
    color: #008cff;
    cursor: pointer;
  }
  .title-c:hover{
    color: #008cff;
    cursor: pointer;
  }
  .title-c{
    margin-top: 12px;
    font-size: 14px;
    line-height: 24px;
    color: #999;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 48px;
    word-wrap: break-word;
  }
  .footer-top{
    /* margin: 3rem; */
    padding: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    text-align: left  ;
  }
  .container{
    text-align:center;
    background:#fff;
    color:#666
  }
  .floor{
    color:#333;
    font-size:24px;
    margin-bottom:3rem;
    padding-top: 3rem;
  }
  .Ticon div:hover{
    color: #008cff;
    cursor: pointer;
  }
  .Ticon div{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .bg{
    background-image: url(../../assets/footer-img/bg.jpg);
    width: 100%;
    height: 100%;
  }
  .bg div{
    color: #fff
  }
  .bg-1{
    font-size: 32px;
    padding-top: 3rem;
  }
  .bg-2{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .bgbutton{
    width: 150px;
    background: none;
    color:#fff;
  }
  .bgbutton:hover{
    background: #fff;
    color:#008cff
  }
  
</style>