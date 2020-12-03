<template>
<div class="problem">
  <el-row>
    <el-col :xl="24" class="problem-tit-box">
      <p class="problem-tit">ANSWERING</p>
      <p class="problem-subtit"><<< 入学答疑 >>></p>
      <el-row type="flex" justify="center">
        <el-col :span="7" :lg="10" :xl="7">
          <div class="problem-item">
            <p class="item-tit">我是零基础怎么办？能学会么？</p>
            <div class="item-decoration"></div>
            <span><p>浪博80%的学员都是零基础，我们坚持小班授课，只要认真学习不旷课，我们相信毕业以后都能在就公司担任设计岗位，在授课过程中，我们会将美术基础与手绘课程贯穿其中。</p></span>
          </div>
        </el-col>

        <el-col :span="7" :lg="10" :xl="7">
          <div class="problem-item">
            <p class="item-tit">是否推荐就业？</p>
            <div class="item-decoration"></div>
            <span><p>学校负责推荐就业岗位和单位，学习是培训机构师资力量与学员自我学习相互作用的过程，如果学员不努力，再牛的行业也无法保证就业。所以希望报名学习的同学，上课时要认真听讲，课下认真练习，把知识学扎实。保证郑州本地就业薪资8000+，一线城市薪资12000+</p></span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7" :lg="10" :xl="7">
          <div class="problem-item">
            <p class="item-tit">是否有团购或其他优惠？</p>
            <div class="item-decoration"></div>
            <span><p>没有，浪博教育不接受任何形式的议价。</p>
                  <p>我们目前有足够的资金流支撑，完全可以前期不盈利为目的招生，我们承诺绝对不会以盈利为第一导向而牺牲教学品质。</p></span>
          </div>
        </el-col>

        <el-col :span="7" :lg="10" :xl="7">
          <div class="problem-item">
            <p class="item-tit">怎么报名？会安排试听么？</p>
            <div class="item-decoration"></div>
            <span><p>咨询电话：18003787940 张老师</p>
                  <p>微信：aondy2012</p>
                  <p>我们有免费试听课!</p>
            </span>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    name: "SchoolProblem"
  }
</script>

<style scoped>
.problem-tit-box{
  text-align: center;
}
.problem{
  height: 640px;
  padding-top: 90px;
  background: url("../../assets/home/problem-back.png") no-repeat;
}
.problem-item{
  text-align: left;
}
.problem-tit{
  font-size: 45px;
  line-height: 28px;
  letter-spacing: 5px;
  color: #ffcc00;
  font-weight: bold;
  -webkit-text-stroke: 1.2px #fff;
}
.problem-subtit{
  font-size: 24px;
  line-height: 79px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: bolder;
}
.problem-item{
  height: 102px;
  font-size: 14px;
  background-color: #ffffff;
  box-shadow: 0px 18px 43px 0px
  rgba(6, 0, 1, 0.09);
  border-radius: 10px;
  padding: 39px 35px 40px 28px;
  margin: 20px 20px;
  overflow: hidden;
}
.problem-item span{
  display: inline-block;
  text-align: left;
  overflow: hidden;
}
.item-decoration{
  width: 43px;
  height: 3px;
  background-color: #ffcc00;
  margin-bottom: 10px;
}
.item-tit{
  font-size: 18px;
  color: #000000;
  padding-bottom: 10px;
}
</style>
