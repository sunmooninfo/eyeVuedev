<template>
<div>
  <el-row>
    <el-col :xl="24" >
      <div class="concat-top">
          <el-row type="flex" justify="center">
            <el-col :span="14">

              <el-row type="flex" justify="space-between">
                <el-col :span="10">
                  <p>联系电话</p>
                  <p class="concat-phone">18003787940</p>
                  <p class="work-time">(工作日:9:00-18:00)</p>
                </el-col>

                <el-col :span="14" class="right-box">
                  <p class="right-tit">联系我们</p>
                  <p class="right-subtit">CONTACT US</p>
                </el-col>

              </el-row>
              <el-col :span="24">
                <p class="concat-adress">地址：五大街与安康路交叉口中关村智酷人才与产业创新基地6楼浪博教育</p>
              </el-col>

            </el-col>
          </el-row>
      </div>
    </el-col>

    <el-col :xl="24" class="map-box">
      <el-row type="flex" justify="center">
        <el-col :span="14">
          <el-row>
            <el-col :xl="24" >
              <div class="concat-map"id="map" >

              </div>
            </el-col>
          </el-row>

          <el-row type="flex">
            <el-col :span="8">
              <p class="tit">获取更多咨询</p>
              <p class="tit">请留下您的联系方式</p>
              <p class="subtit" style="margin-top: 20px">NEED TO KNOW</p>
              <p class="subtit">MORE？</p>
              <img src="../assets/contact/yellow-back.png" class="yellow-back">
            </el-col>

            <el-col :span="16" class="from">

                <el-row type="flex" justify="space-between">
                  <el-col :span="11">
                    <input type="text" value="姓名" class='from-name'>
                  </el-col>

                  <el-col :span="11">
                    <input type="text" value="电话" class='from-phone'>
                  </el-col>
                </el-row>

                <el-row type="flex" justify="space-between" >
                  <el-col :span="24">
                    <input type="email" value="邮箱" class='from-email'>
                  </el-col>
                </el-row>

                <el-row type="flex" justify="space-between">
                  <el-col :span="24">
                    <textarea class='from-msg'>
                      留言....
                    </textarea>
                  </el-col>
                </el-row>

                <el-row type="flex" justify="end">
                  <el-col :span="4">
                    <input type="submit" value="提交" class='from-submit'>
                  </el-col>
                  <el-col :span="4">
                    <input type="reset" value="重置" class="from-reset">
                  </el-col>
                </el-row>

            </el-col>
          </el-row>

        </el-col>
      </el-row>
    </el-col>
  </el-row>

<!--footer-->
  <Footer1></Footer1>
</div>
</template>

<script>

  import Footer1 from "./public/Footer1";
  export default {
    name: "Contact",
    data(){
      return{
      }
    },
    components:{
      Footer1
    },
    methods:{

    },
    mounted() {
      let map = new BMap.Map("map");
      let point = new BMap.Point(114.261245,34.813448);
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
    }
  }

</script>
<style scoped>
.concat-top{
  height: 550px;
  background: url("../assets/contact/back-top.png") no-repeat;
  background-size: cover ;
  color: white;
  font-size: 24px;
  padding-top: 80px;
}
.concat-phone{
  font-size: 36px;
  letter-spacing: 1px;
  margin: 15px 0;
}
.work-time{
  font-size: 20px;
  letter-spacing: 2px;
}
.right-box{
  text-align: right;
}
.right-tit{
  font-size: 78px;
}
.right-subtit{
  font-size: 88px;
  letter-spacing: 0px;
  -webkit-text-stroke: 3px RGB(60,61,253);
}
.concat-adress{
  font-size: 30px;
  letter-spacing: 4px;
  margin-top: 100px;

}
.concat-map{
  width: 100%;
  height: 560px;
  background: pink;
  position: relative;
  top:-135px;
}

.map-box{
  height: 1170px;
}
.tit{
  font-size: 32px;
  line-height: 55px;
  color: #000;
  opacity: 0.5;
}
.subtit{
  font-size: 27px;
  line-height: 40px;
  color: #000;
  opacity: 0.5;
}
.yellow-back{
  margin-top: 30px;
}
.from input{
  width: 100%;
  height: 39px;
  padding-left: 10px;
  border-radius: 3px;
  margin: 15px 0;
  font-size: 21px;
}
.from-name{
  background-color: #ef6d1a;
  color: #ffffff;
  border: none;
}
.from-phone{
  border: solid 1px #747474;
}
.from-email{
  border: solid 1px #747474;
}
.from-msg{
  width: 100%;
  height: 230px !important;
  border: solid 1px #747474;
  padding:5px 0 0 10px;
  font-size: 21px;
  letter-spacing: 1px;
}
.from-submit{
  padding: 0 !important;
  background-color: #ef6d1a;
  border: solid 1px #ef6d1a;
  font-size: 19px;
  color: #fff;
  margin-left: -20px!important;
}
.from-reset{
  border: solid 1px #ef6d1a;
  background-color: #fff;
}
@media (max-width: 1500px){
  .right-subtit{
    font-size: 70px;

  }
}
</style>
