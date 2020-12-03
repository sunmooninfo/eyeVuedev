<template>
  <div class="footer1">
      <el-row type="flex" justify="center">
        <el-col :xl="18">
         <el-row type="flex">
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

           <el-col :span="6">
            <span class="footer-er-box">
               <img src="../../assets/erweima.png">
            </span>
           </el-col>

           <el-col :span="6">
             <span class="footer-lastmap-box">
               <img src="../../assets/footer1-last-map.png">
             </span>
           </el-col>

         </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    name: "Footer1"
  }
</script>

<style scoped>
.footer1{
  height: 340px;
  background-color: #000000;
  padding-top: 95px;
  color: #fff;
}
.footer-left-item{
  width: 100%;
  height: 50px;
  margin: 30px 15px;
}
.footer-left-item img{
  float: left;
  margin-right: 15px;
}
.footer-er-box{
  display: inline-block;
  padding: 20px;
  background-color: #ef6d1a;
  margin-top: 15px;
  margin-left: 10px;
}
.footer-lastmap-box{
  display: inline-block;
  position: absolute;
  background-color: #ef6d1a;
  top: -150px;
}
.footer-lastmap-box img{
  width: 100%;
  height: 100%;
  position: relative;
  top: -10px;
  left: -5px;
}
</style>
