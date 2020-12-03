<template>
<div class="footer2">
  <el-row type="flex" justify="space-around">
    <el-col :span="9">
      <div class="footer-left-item">
        <img src="../../assets/contact/15.png">
        <span>ADD / 你可以在这里找到我</span> <br/>
        <span>五大街与安康路交叉口中关村智酷人才与产业创新基地6楼</span>
      </div>

      <div class="footer-left-item">
        <img src="../../assets/contact/16.png">
        <span>TEL / 你可以拨这个联系我</span> <br/>
        <span>13353824400 / 13393824400</span>
      </div>

      <div class="footer-left-item">
        <img src="../../assets/contact/17.png">
        <span>MAL / 你可以发这个调戏我</span> <br/>
        <span>2569791803@qq.com</span>
      </div>
    </el-col>

    <el-col :span="5" class="footer2-shouquan">
      <img src="../../assets/adobe/22.png">
    </el-col>

    <el-col :span="8">
      <span class="footer-er-box">
        <img src="../../assets/erweima.png" alt="">
      </span>
    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    name: "Footer2"
  }
</script>

<style scoped>
.footer2{
  height: 310px;
  background-color: #000;
  padding-top:210px;
  color: #fff;
}
.footer-left-item{
  width: 100%;
  height: 50px;
  margin: 30px 0;
}
.footer-left-item img{
  float: left;
  margin-right: 15px;
}
.footer2-shouquan{
  margin-right: 100px;
  position:absolute;
  top:-250px;
}
.footer-er-box{
  display: inline-block;
  padding: 20px;
  background-color: #ef6d1a;
  margin-top: 15px;
  margin-left: 150px;
}
</style>
