<template>
  <div >
    <el-row class="about">
      <el-col :xl="24" >
        <el-row>
          <el-col :xl="24" class="about-top">
            <img src="../assets/about/about-top.png" >
          </el-col>
        </el-row>

        <el-row>
          <el-col :xl="24" class="about-bottom">
            <el-row>
              <el-col :xl="24" class="tit-box">
                <div>
                  <span class="about-tit">关于我们</span>
                  <div class="about-modified"></div>
                  <p class="about-maintit">更深入的了解，意味着更深刻的信任</p>
                  <p class="about-subtit">Deeper understanding means deeper trust</p>
                </div>
              </el-col>
            </el-row>



          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :xl="18" :lg="20">
            <el-row type="flex">
              <el-col :span="15" :sm="24" class="about-lb-img">
                <img src="../assets/about/about-lb.jpg">
              </el-col>

              <el-col :span="9" :sm="24" >
                <div class="lb-introduce-box">
                  <div class="test">
                    <div class="lb-introduce">
                      <div class="lb-introduce-left">
                        浪博简介
                      </div>
                      <div class="lb-introduce-right">
                        LANGBO<br>
                        INTRODUCTION
                      </div>
                    </div>
                    <p>
                      <span class="company-name">河南浪博科技集团</span> 是以IT技术研发为主业，兼容互联网云服务、智能化教育、软件开发、科技孵化、文化传媒、现代物流、物联网等多种产业为一体的国际化高科技开源企业。
                    </p>
                    <p>
                      集团位于开封市中关村智酷园区，现有服务器500余台，智能化教室1000多平米，拥有国内顶级的技术研发团队和师资力量，并与国内多家知名IT企业建立战略合作关系，是中原地区最具规模的IT技术研发和服务企业之一，为推进地区信息科技事业的发展做出了积极的贡献。
                    </p>
                  </div>

                </div>

              </el-col>

            </el-row>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :xl="18" :lg="20" class="about-item-box">

            <el-row type="flex" justify="space-between">
              <el-col :span="7">
                <div class="about-item">
                  <div class="item-tit">
                    <span class="item-tit-left">师资力量/</span> <span class="item-tit-right">faculty</span>
                  </div>
                  <div class="item-content">
                     <p>
                      浪博教育拥有严格的教师选拔规则，要求自己的教员必须具备5年以上的项目开发经验，5年以上教育行业从业经验。具备微软、华为、思科等权威部门高级网络工程师认证资格。浪博教育要求每一位教员认真教学，绝不允许任何学员在课程知识点掉队。
                     </p>
                  </div>
                </div>
              </el-col>

              <el-col :span="7">
                <div class="about-item">
                  <div class="item-tit">
                    <span class="item-tit-left">培训目标/</span> <span class="item-tit-right">Training objectives</span>
                  </div>
                  <div class="item-content">
                    <p>
                      浪博教育长期致力于对毕业大大学生以及社会零基础人士的软件教育培训，IT行业人才需求量如此之大，势必要求像我们一样的职业教育培训企业担负起为国家和企业培养IT人才的重任。

                    </p>
                  </div>
                </div>
              </el-col>

              <el-col :span="7">
                <div class="about-item">
                  <div class="item-tit">
                    <span class="item-tit-left">就业规划/</span> <span class="item-tit-right">Employment planning</span>
                  </div>
                  <div class="item-content">
                    <p>
                      浪博教育和多个互联网软件公司都有长期人才输送政策，也是用人单位和人才之间的桥梁和纽带。学员可以自由选择自己想要的就业方向，比如开发方向、测试方向、QA方向、项目管理方向，服务支持方向等。浪博教育会为学员推荐最合适的企业，安排面试。

                    </p>
                  </div>
                </div>
              </el-col>


            </el-row>


          </el-col>
        </el-row>

      </el-col>
    </el-row>

<!--    footer-->
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "./public/Footer";
  export default {
    name:'about',
    components:{
      Footer
    }
  }
</script>
<style scoped>
.about{
  padding-bottom: 60px;
}
.company-name{
   color: #0264c0;;
}
.about-top{
  margin-bottom: 60px;
 /* height: 840px;
  background: url("../assets/about/about-top.png") no-repeat bottom center;
  background-size: 100% 90%;
  background-attachment: fixed;*/
}
.about-top img{
  width: 100%;
}
.about-bottom{
  text-align: center;
}
.about-lb-img{
  width: 100%;
}
.tit-box{
  margin-bottom: 80px;
}
.about-tit{
  display: inline-block;
  width: 242px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: solid 1px #434343;
  font-size: 42px;
  letter-spacing: 9px;
  color: #000000;
  opacity: 0.8;
}
.about-modified{
  width: 117px;
  height: 4px;
  background-image: linear-gradient(0deg,
  #0179da 0%,
  #024ea6 100%);
  margin: 15px auto;
}
.about-maintit{
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 13px;
  color: #000000;
  opacity: 0.8;
}
.about-subtit{
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 3px;
  color: #000000;
  opacity: 0.8;
}
.about-lb-img img{
  width: 100%;
  height: 100%;
}
.lb-introduce-box{
  height: 100%;
  background-color: #e6e4e7;

}
.test{
  padding: 55px 20px 50px 30px;
}
.lb-introduce{
  overflow: hidden;
  margin-bottom: 40px;
}
.lb-introduce div{
  float: left;
}
.lb-introduce-left{
  font-size: 40px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.8;
}
.lb-introduce-right{
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #0264c0;
}
.lb-introduce-box p{
  text-indent: 32px;
}
.about-item-box{
  margin-top: 80px;
}
.about-item{
  color: #fff;
}
.item-tit{
  height: 80px;
  background-color: #9f9da0;
  text-align: center;
  line-height: 80px;
  margin-bottom: 10px;

}
.item-tit-left{
  font-size: 31px;
  letter-spacing: 4px;
}
.item-tit-right{
  font-size: 17px;
  letter-spacing: 1.5px ;
}
.item-content{
  height: 280px;
  font-size: 18px;
  padding: 30px 20px 0px 15px;
  background-color: #e6e4e7;
  color: #000;
  opacity: 0.8;
  text-indent: 36px;
  line-height: 30px;
}
</style>
