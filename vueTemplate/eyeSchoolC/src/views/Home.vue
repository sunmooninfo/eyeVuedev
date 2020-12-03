<template>
  <div class="home">
<!--    轮播-->
    <el-row>
      <el-col :xl="24">
        <div class="swiper-box">
          <div class="swiper-img"></div>
          <span class="sign-up-immediately" @click="serice">立即报名</span>
        </div>
      </el-col>
    </el-row>
<!-- PS三剑客-->
    <el-row>
      <el-col :xl="24">
        <div class="content-box">
          <div class="content-title">
            <p class="main-title">从设计到代码让你<span class="special-main-title">在职场游刃有余</span></p>
            <p class="sub-title">软件基础+平面设计+网页设计+商业提案+插画设计+WEB前端基础+项目实训</p>
          </div>


              <el-row type="flex" justify="center">
                <el-col :span="5">
                 <span class="content-item">
                    <img src="../assets/home/公司首页_07.jpg">
                  </span>
                </el-col>
                <el-col :span="5">
                 <span class="content-item">
                    <img src="../assets/home/公司首页_09.jpg">
                  </span>
                </el-col>
                <el-col :span="5">
                 <span class="content-item">
                    <img src="../assets/home/公司首页_11.jpg">
                  </span>
                </el-col>
              </el-row>


          <span class="content-details" @click="serice"> <img src='../assets/home/xiaoxi-icon.png'/> 了解详情</span>
        </div>
      </el-col>
    </el-row>
<!--课程安排-->
    <el-row>
      <el-col :xl="24" class="class-box">
          <div class="class-title">
            <p >课程阶段安排</p>
            <p class="class-sub-title">Course Schedule</p>
          </div>

        <el-row type="flex" justify="center" class="class-content">
          <el-col :span="3">
            <div class="class-item">
              <span class="class-item-tit">
                GUI <br/> 1
              </span>
              <span>
                学习Photoshop软件基础及海报等各类平面设计方法和技巧，让学员达到熟练使用PS，能够独立完成平面设计作品的水平
              </span>
            </div>
          </el-col>

          <el-col :span="1">
            <div class="class-item-right">
              <img src="../assets/home/xi-angle-right.png">
            </div>
          </el-col>

          <el-col :span="3">
            <div class="class-item">
              <span class="class-item-tit">
                GUI <br/> 1
              </span>
              <span>
                学习Photoshop软件基础及海报等各类平面设计方法和技巧，让学员达到熟练使用PS，能够独立完成平面设计作品的水平
              </span>
            </div>
          </el-col>

          <el-col :span="1">
            <div class="class-item-right">
              <img src="../assets/home/xi-angle-right.png">
            </div>
          </el-col>

          <el-col :span="3">
            <div class="class-item">
              <span class="class-item-tit">
                GUI <br/> 1
              </span>
              <span>
                学习Photoshop软件基础及海报等各类平面设计方法和技巧，让学员达到熟练使用PS，能够独立完成平面设计作品的水平
              </span>
            </div>
          </el-col>

          <el-col :span="1">
            <div class="class-item-right">
              <img src="../assets/home/xi-angle-right.png">
            </div>
          </el-col>

          <el-col :span="3">
            <div class="class-item">
              <span class="class-item-tit">
                GUI <br/> 1
              </span>
              <span>
                学习Photoshop软件基础及海报等各类平面设计方法和技巧，让学员达到熟练使用PS，能够独立完成平面设计作品的水平
              </span>
            </div>
          </el-col>
        </el-row>

        <div class="class-last">

            <img src="../assets/home/xi-help-o.png" alt="">

          <span class="last-titbox">
            <span class="class-last-tit">实用干货内容，从入门到精通</span><br/>
            <span class="class-last-subtit"><span class="special-dian">·</span>课程内容设置经过1年以上市场调研，企业高层参与研发，<br/>
             <span class="special-dian">·</span>符合企业真实岗位技术需要。教授技能同时，更教授工作标准、规范和项目流程！ </span>
          </span>
        </div>

      </el-col>
    </el-row>
<!--    教学环境-->
<class-environment></class-environment>
<!--    展示作品-->
<show-works></show-works>
<!--    入学答题-->
<school-problem></school-problem>

<!--    底部-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./public/Footer";
import ClassEnvironment from "./home/ClassEnvironment";
import ShowWorks from "./home/ShowWorks";
import SchoolProblem from "./home/SchoolProblem";
import {kefu} from '../assets/js/kefu'
export default {
  name: 'Home',
  components: {
    ClassEnvironment,
    ShowWorks,
    SchoolProblem,
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
  .home{
    position: relative;
  }
  /*轮播*/
.swiper-box{
  height: 615px;
  font-size: 79px;
  color: #ffffff;
  position: relative;
  top: -10px;
  z-index: 1;
}
.swiper-img{
  width: 100%;
  height: 625px;
  position: absolute;
  background: url("../assets/home/Home-swiper1.png") no-repeat top   ;
  background-size: 100% 80%;
  background-attachment: fixed;
}
.swiper-box img{
  width: 100%;
  height: 640px;
}
.sign-up-immediately{
  display: inline-block;
  width: 486px;
  height: 112px;
  background-color: #ffcc00;
  border-radius: 56px;
  text-align: center;
  line-height: 112px;
  position: absolute;
  bottom: -56px;
  left: 50%;
  margin-left: -243px;
}
/*content*/
.content-box{
  height: 612px;
  padding-top: 133px;
  background: url('../assets/home/Shape 3.png') no-repeat;
}
.content-title{
  text-align: center;
  color:  #3c53c3;
}
.main-title{
  font-size: 49px;
}
.special-main-title{
  color: #ffcc00;
}
.sub-title{
  font-size: 22px;
  margin: 25px 0 60px;
}
.content-item{
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  margin: 0px 10px;
}
.content-item img{
  width: 100%;
}
.content-details{
  display: flex;
  width: 292px;
  height: 59px;
  border-radius: 4px;
  border: solid 1px #dd2b2e;
  font-size: 27px;
  color: #444;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 70px auto 0;
}
.content-details>img{
  margin-right: 23px;
}
/*课程安排*/
.class-box{
  height: 905px;
  padding-top: 155px;
  position: relative;
  background: url('../assets/home/class07.png');
  background-size: 100% auto;
  background-attachment: fixed;
}
.class-title{
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 60px;
}
.class-sub-title{
  font-size: 16px;
  letter-spacing: 26px;
  color: #ffd800;
}
.class-content{
  margin-top: 90px;
}
.class-item{
  display: flex;
  width:100%  ;
  height: 200px;
  background: #fff;
  border-radius:8px;
  position: relative;
  align-items: center;
  padding: 0 12px;
}
.class-item-tit{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  background-color: #003bd3;
  box-shadow: 0px 10px 0px 0px
  rgba(221, 221, 221, 0.75);
  position: absolute;
  top: -30px;
  left: 50%;
  margin-left: -30px;
  color: #fff;
}
.class-item-right{
  width: 140%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.class-last{
  width: 900px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom:160px;
  left: 235px;
}
.class-last>img{
  float: left;
}
.last-titbox{
  display: inline-block;
  line-height: 24px;
  margin-left: 30px;
}
.class-last-tit{
  font-size: 24px;
  color: #fff;
}
.class-last-subtit{
  font-size: 14px;
  color: #fff;
}
.special-dian{
  color: gray;
  margin-right: 5px;
}
@media (max-width:1400px) {
  .class-item-right{
    display: none;
  }
}
</style>
