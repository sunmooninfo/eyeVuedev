<template>
  <div class="show">
    <div class="test"></div>
    <el-row>
      <el-col :xl="24" class="show-box">
        <el-row type="flex" justify="space-between" class="show-item">
          <el-col :span="4"><img src="../../assets/home/showWorks/show01.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show02.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show03.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show04.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show05.png"></el-col>
        </el-row>
        <el-row type="flex" justify="space-between" class="show-item">
          <el-col :span="4"><img src="../../assets/home/showWorks/show09.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show10.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show11.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show12.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show13.png"></el-col>
        </el-row>
        <el-row type="flex" justify="space-between" class="show-item">
          <el-col :span="4"><img src="../../assets/home/showWorks/show14.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show15.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show16.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show17.png"></el-col>
          <el-col :span="4"><img src="../../assets/home/showWorks/show18.png"></el-col>
        </el-row>
      </el-col>

      <el-col :xl="24" class="mask">
      </el-col>
      <el-row class="mask-show">
        <el-col :xl="24">
          <img src="../../assets/home/showWorks/border.png" class="mask-show-borderImg">
          <div class="mask-tit">
            <span class="mask-show-tit">COME ON, SHOW IT!</span>
            <br>
            <span class="mask-show-maintit">来吧，展示！</span>
          </div>

          <div class="mask-item-box">
            <div class="mask-item">
              <span>
                <img src="../../assets/home/showWorks/show06.png">
                <br/>
                <span>推荐就业或自选</span>
              </span>
            </div>
            <div class="mask-item">
              <span>
                <img src="../../assets/home/showWorks/show07.png">
                <br/>
                <span>推荐就业或自选</span>
              </span>
            </div>
            <div class="mask-item">
              <span>
                <img src="../../assets/home/showWorks/show08.png">
                <br/>
                <span>推荐就业或自选</span>
              </span>
            </div>
          </div>

          <div class="mask-consulting-box" @click="serice">
            <span class="mask-consulting">立即咨询</span>
          </div>
        </el-col>
      </el-row>

    </el-row>

  </div>
</template>

<script>
  import {kefu} from '../../assets/js/kefu'
  export default {
    name: "ShowWorks",
    methods:{
      serice(){
        kefu()
      }
    }
  }
</script>

<style scoped>
.show{
  position: relative;
}
.show-box{
  width: 100%;
  height: 760.22px;
}
.show-box img{
  width: 100%;
  height: 100%;
}
.show-item{
  margin-bottom:40px ;
  display: none;
}

.mask{
  height: 100%;
  background: black;
  opacity: .67;
  position: absolute;
  top:0;
  left: 0;
}
.mask-show{
  color: #fff;
  position: absolute;
  top:50%;
  margin-top: -241px;
  left: 50%;
  margin-left: -600px;
}
.mask-tit{
  width:580px;
  text-align: center;
  position: absolute;
  top:0;
  margin-top: -40px;
  left: 50%;
  margin-left: -290px;
}
.mask-show-tit{
  font-size: 33px;
  line-height: 40px;
  letter-spacing: 7px;
  font-family:'Jackey_HandWrite';
}
.mask-show-maintit{
  font-family:'zhimang-xing217ec0471721fa2';
  font-size: 86px;
  line-height: 90px;
  letter-spacing: 5px;
  color: #ffffff;
}

.mask-item{
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 233px;
  height: 233px;
  border: solid 6px #ffffff;
  border-radius: 50%;
  float: left;
  margin: 0 20px;
}

.mask-item-box{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -427px;
  margin-top: -100px;
}
.mask-consulting-box{
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -99px;
}
.mask-consulting{
  display: inline-block;
  width: 198px;
  height: 52px;
  font-size: 34px;
  line-height: 52px;
  text-align: center;
  background-color: #ffcc00;
  border-radius: 2px;
}
.test{
  width: 100%;
  height: 760.22px;
  position: absolute;
  background: url("../../assets/home/showWorks/show20.png") no-repeat center center;
  background-size: 100% auto;
  background-attachment: fixed;
}
@media (max-width: 1200px) {
  .mask-show-borderImg{
    width: 100%;
  }
}
</style>
