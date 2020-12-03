<template>
  <div>
    <!-- <div class="smallnav" v-show="iscolldisplay">
      <div>浪博云大学</div>
    </div> -->
    <div v-show="isdisplay">
      <el-carousel class="car" direction="vertical" height="600px" :interval="5000" arrow="always">
        <el-carousel-item>
          <div class="caritem">
            <div class="caritemchild" >
              <div>浪博云大学</div>  
            </div>
            <div class="caritemchild2" style="">面向云生态用户的一站式学习成长平台</div>
            <div>
              <div class="titlecc">
                <div><i style="font-size:16px;color:#0abf5b" class="el-icon-success"><span style="color: #fff;font-size: 16px;margin-left:.5rem">体系化的课程内容</span></i></div>
                <div><i style="font-size:16px;color:#0abf5b;margin-left:1rem" class="el-icon-success"><span style="color: #fff;font-size: 16px;margin-left:.5rem">多维度的教学方式</span></i></div>
              </div>
              <div style="display:flex;margin-left:7rem">
                <div><i style="font-size:16px;color:#0abf5b" class="el-icon-success"><span style="color: #fff;font-size: 16px;margin-left:.5rem">权威性的认证考试</span></i></div>
                <div><i style="font-size:16px;color:#0abf5b;margin-left:1rem" class="el-icon-success"><span style="color: #fff;font-size: 16px;margin-left:.5rem">全方位的人才培养</span></i></div> 
              </div>
            </div>
            <el-button class="bgbutton carbutn">了解详细</el-button>
          </div>
        </el-carousel-item>
      
      </el-carousel>
    </div>
    <div :class="{container:isdisplay,'container2':iscolldisplay}">
      <div class="cardcontainer">
        <el-row :gutter="50">
          <el-col class="cardcol" :xs="24" :sm="8" :lg="8">
            <div >
              <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1555559020487_blg2x6xh42cipy14i.png" alt="">
            </div>
            <div class="cardtitle">在线学习中心</div>
            <div class="carditem" >为开发者搭建的线上视频学习平台，提供丰富的云计算视频课程，助力开发者提升自身技术能力</div>
            <el-button class="card-btn">我是开发者</el-button>
          </el-col>
          <el-col class="cardcol" :xs="24" :sm="8" :lg="8">
            <div >
              <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1555559020487_blg2x6xh42cipy14i.png" alt="">
            </div>
            <div class="cardtitle">在线学习中心</div>
            <div class="carditem" >为开发者搭建的线上视频学习平台，提供丰富的云计算视频课程，助力开发者提升自身技术能力</div>
            <el-button class="card-btn">我是开发者</el-button>
          </el-col>
          <el-col class="cardcol" :xs="24" :sm="8" :lg="8">
            <div >
              <img src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1555559020487_blg2x6xh42cipy14i.png" alt="">
            </div>
            <div class="cardtitle">在线学习中心</div>
            <div class="carditem" >为开发者搭建的线上视频学习平台，提供丰富的云计算视频课程，助力开发者提升自身技术能力</div>
            <el-button class="card-btn">我是开发者</el-button>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="footer-top">
          <el-row>
            <el-col class="ctitle" :xs="24" :sm="12" :lg="6">
              <div class="title">专家服务 ></div>
              <div class="title-c">提供咨询、规划、检测、运维和交付等全生命周期定制化安全整体解决方案</div>
            </el-col>
            <el-col class="ctitle" :xs="24" :sm="12" :lg="6">
              <div class="title">合规性 ></div>
              <div class="title-c">浪博云具备充分的安全合规能力，满足众多的标准要求，并已通过系列合规认证</div>
            </el-col>
            <el-col class="ctitle" :xs="24" :sm="12" :lg="6">
              <div class="title">专家服务 ></div>
              <div class="title-c">提供咨询、规划、检测、运维和交付等全生命周期定制化安全整体解决方案</div>
            </el-col>
            <el-col class="ctitle" :xs="24" :sm="12" :lg="6">
              <div class="title">合规性 ></div>
              <div class="title-c">浪博云具备充分的安全合规能力，满足众多的标准要求，并已通过系列合规认证</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div >
        <el-divider></el-divider>
      </div>
      <div>
        <el-row>
          <el-col :xs="0" :sm="24" :lg="24">
            <div class="tabstitle">
              按职业方向为您搭建阶梯式学习路径
            </div>
            <div class="ptabs">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane  name="first">
                  <span slot="label"><i class="el-icon-date"></i>云从业者</span>
                  <el-row>
                    <el-col :span="12">
                      <div class="tabs_tit">浪博云从业者</div>
                      <div class="tabs_text">系统介绍云计算基本概念，浪博云基础产品及服务的功能、优势、应用场景。本课程是进一步了解浪博云产品和服务所需的基础课程。</div>
                      <div class="ptext" ><i style="font-size:16px;color:#0abf5b;" class="el-icon-success"><span >多维度的教学方式</span></i></div>
                      <div class="ptext"><i style="font-size:16px;color:#0abf5b;" class="el-icon-success"><span >多维度的教学方式</span></i></div>
                      <div class="ptext"><i style="font-size:16px;color:#0abf5b;" class="el-icon-success"><span >多维度的教学方式</span></i></div>
                      <div class="ptext"><i style="font-size:16px;color:#0abf5b;" class="el-icon-success"><span>多维度的教学方式</span></i></div>
                    </el-col>
                    <el-col :span="12">
                      <img height="320px" width="500px" src="../../assets/bg.png" alt="">
                    </el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane  name="second">
                  <span slot="label"><i class="el-icon-date"></i>云运维工程师</span>
                </el-tab-pane>
                <el-tab-pane  name="third">
                  <span slot="label"><i class="el-icon-date"></i>云架构工程师</span>
                </el-tab-pane>
                <el-tab-pane  name="fourth">
                  <span slot="label"><i class="el-icon-date"></i>AI机器学习工程师</span>
                </el-tab-pane>
                <el-tab-pane  name="five">
                  <span slot="label"><i class="el-icon-date"></i>大数据工程师</span>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :xs="24" :sm="0" :lg="0">
            <div class="xstitle">按职业方向为您搭建阶梯式学习路径</div>
            <el-collapse style="margin-top: 2rem" accordion>
              <el-collapse-item v-for="(item, i) in list" :key="i">
                <template slot="title">
                  <i :class="item.class"></i>{{item.title}}
                </template>
                <div>{{item.text}}</div>
                <div>{{item.text}}</div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </div>
    </div>
    <div>
      <el-row >
        <el-col class="footerimg" :xs="24" :sm="12" :lg="12" >
          <div class="study_title">浪博云人才培养计划</div>
          <div class="study_text">参与系统培训并通过浪博云认证考试，您的简历将可录入浪博云人才简历库，供浪博及合作企业择优录用</div>
          <div>
            <el-timeline class="pstudy">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
                {{activity.content}}
              </el-timeline-item>
            </el-timeline>
          </div>
          <div>已有 22082 名优秀人才录入简历库</div>
          <el-button class="bgbutton studybtn">了解更多</el-button>
        </el-col>
        <el-col class="footerimg_2" :xs="24" :sm="12" :lg="12" >
          <div class="study_title">浪博云人才培养计划</div>
          <div class="study_text">参与系统培训并通过浪博云认证考试，您的简历将可录入浪博云人才简历库，供浪博及合作企业择优录用</div>
          <div>
            <el-timeline class="pstudy">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
                {{activity.content}}
              </el-timeline-item>
            </el-timeline>
          </div>
          <div>已有 22082 名优秀人才录入简历库</div>
          <el-button class="bgbutton studybtn">了解更多</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="footer_container">
      <FloorThird></FloorThird>
      <!-- <div class="footer_tit">经验丰富的合作伙伴</div> -->
    </div>
  </div>
</template>
<script>
import FloorThird from '../home/floorThird'
export default {
  components:{
    FloorThird
  },
  data(){
    return{
      search: '',
      bground: true,
      isbground: false,
      activeName: 'first',
      screenWidth: document.body.clientWidth,
      isdisplay: true ,
      iscolldisplay: false,
      activities: [{
          content: '学习精品课程',
          size: 'large',
          type: 'primary',
          color: '#fff'
        }, {
          content: '通过认证考试',
          type: 'primary',
          color: '#fff'
        }, {
          content: '填写并投递简历',
          type: 'primary',
          color: '#fff'
        }],
      list:[
        {
          class: 'header-icon el-icon-info',
          text: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
          title: '云创业者'
        },
        {
          class: 'header-icon el-icon-info',
          text: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
          title: 'AI机器学习工程师'
        },
        {
          class: 'header-icon el-icon-info',
          text: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
          title: '大数据工程师'
        },
        {
          class: 'header-icon el-icon-info',
          text: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
          title: '云架构工程师'
        }
      ]
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
    const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
  },
  methods:{
    handleClick(tab, event) {
          // console.log(tab, event);
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if( scrollTop > 0 ){
        this.bground = true
        this.isbground = false
      }else{
        this.bground = false
        this.isbground = true
      }
      // console.log(scrollTop)
    },
  },
  watch: {
        screenWidth: {
            immediate: true,
            handler: function (newVal) {
                // console.log(newVal)
                if(newVal < 760){
                    this.isdisplay = false
                    this.iscolldisplay = true
                }else {
                    this.isdisplay = true
                    this.iscolldisplay = false
                }
            }
        }
    },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  
}
</script>
<style  scoped>
  .smallnav{
    position: fixed;
    left: 0;
    color: #fff;
    display: flex;
    align-items:center;
    justify-content:center;
    height:50px;
    top: 0;
    z-index:1000;
    background:#2b303b;
    width: 100%;
  }
  .footer_container{
    /* margin-top: 5rem; */
    background: #f5f7fa;
  }
  .footer_tit{
    padding-top: 5rem;
    text-align: center;
    line-height: 40px;
    font-size: 28px;
    color: #000;
    font-weight: 400;
    white-space: nowrap;
  }
  .studybtn{
    margin-top: 1rem;
  }
  .study_text{
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  .study_title{
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
  }
  .pstudy /deep/ .el-timeline-item__content {
    color: #fff;
  }
  .footerimg_2{
    background-image: url(https://imgcache.qq.com/open_proj/proj_qcloud_v2/college/project/college/build/developer-platform/images/bg-genius-partner.png);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
    /* position: absolute; */
    right: 50%;
    top: 0;
    z-index: 1;
    padding: 5rem;
    color:#fff
  }
  .footerimg{
    padding: 5rem;
    background-image: url(https://imgcache.qq.com/open_proj/proj_qcloud_v2/college/project/college/build/developer-platform/images/bg-genius-infor.png);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
    /* position: absolute; */
    right: 50%;
    top: 0;
    z-index: 1;
    color: #fff;
  }
  .xstitle{
    line-height: 28px;
    text-align:center;
    font-size: 20px;
    font-weight: 700;
  }
  .ptext span{
    color: #4a4a4a;
    font-size: 16px;
    margin-left:.5rem
  }
  .ptext{
    margin-top:1rem;
    margin-bottom:1rem
  }
  .tabs_text{
    color: #4a4a4a;
    font-size: 14px;
    line-height: 26px;
    margin-top: 20px;
  }
  .tabs_tit{
    color: #000;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .ptabs{
    margin-top: 3rem;
    padding: 1rem;
  }
  .tabstitle{
    line-height: 40px;
    font-size: 28px;
    color: #000;
    font-weight: 400;
    white-space: nowrap;
    text-align:center
  }
  .ctitle{
    padding: 1rem;
  }
  .fcontainer{
    text-align:center;
    background:#fff;
    color:#666
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
    /* margin-left: 3rem; */
    /* margin-right: 3rem; */
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    text-align: left  ;
  }
  .container{
    
    margin-left:8%;
    margin-right:8%;
    background: #fff;
  }
  .container2{
    margin-top:5rem;
    margin-left:8%;
    margin-right:8%;
    background: #fff;
  }
  .cardcontainer{
    background: #fff;
    border: 1px solid #e5e8ed;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(3,27,78,.12);
    padding:2rem;
    margin-top: -3rem;
    display: flex;
    position: relative;
    z-index: 100;
    /* height: 320px; */
  }
  .cardtitle{
    color: #000;
    font-size: 20px;
    line-height: 26px;
    margin-top: .5rem;
  }
  .card-btn{
    margin-top: 1rem;
    background-color: #5956cc ;
    color: #fff;
    margin-bottom: 1rem;
  }
  .carditem{
    color: #666;
    font-size: 14px;
    line-height: 24px;
    margin-top: .5rem;
  }
  .cardcol{
    text-align:center;
    /* padding: 2rem; */
    
  }
  .cardcol div img{
    /* display: inline-block; */
    /* height: 120px; */
    margin-top: 1rem;
    vertical-align: top;
    max-width: 300px;
    /* min-width: 300px; */
    width: 100%;
  }
  
  .titlecc{
    display:flex;
    margin-left:7rem;
    margin-top: 3rem;
  }
  .titlecc div{
    margin-bottom: 1.5rem;
  }
  .carbutn{
    margin-left:12rem;
    margin-top:2rem;
    width:130px
  }
  .caritemchild{
    margin-left: 7rem;
    margin-top:10rem;
    color:#fff;
    font-size: 36px;
    line-height: 50px;
    font-weight: 400;
    width:400px;
  }
  .caritemchild2{
    margin-top:1.5rem;
    font-size:20px;
    color:#fff;
    width:400px;
    margin-left:7rem
  }
  .car{
    /* width: 100%; */
    min-width: 1200px; 
  }
  
  .caritem{
    position: absolute;
    background-image: url(https://ask.qcloudimg.com/raw/yehe-ffb5e0f18/fididk07mw.jpg);
    overflow: hidden;
    width: 120%;
    height: 120%;
    display: inline-block;
    position: absolute;
    background-size: 100% 100%;
    text-decoration: none;
  }
  .car img{
    overflow: hidden;
    width: 120%;
    height: 120%;
    display: inline-block;
    position: absolute;
    background-size: 100% 100%;
    text-decoration: none;
  }
  .header{
    display: flex;
    width: 100%;
    min-width: 1400px;
    margin:auto;
    height: 50px;
    align-items:center;
    justify-content:center;
    color: #fff;
    position: fixed;
    /* left: 0; */
    /* top: 0; */
    z-index: 1000;
    background: none;
  }
  .header div{
    padding: 1rem;
  }
  .header p span:hover{
    color: #008cff;
    cursor: pointer;
  }
  .header div:hover{
    color: #00a4ff;
    cursor: pointer;
  }
  .header1{
    display: flex;
    width: 100%;
    min-width: 1400px;
    margin:auto;
    height: 50px;
    align-items:center;
    justify-content:center;
    color: #fff;
    position: fixed;
    /* left: 0; */
    /* top: 0; */
    z-index: 1000;
    background: #2b303b;
  }
  .header1 div{
    padding: 1rem;
  }
  .header1 p span:hover{
    color: #008cff;
    cursor: pointer;
  }
  .header1 div:hover{
    color: #00a4ff;
    cursor: pointer;
  }
  .bgbutton{
    /* width: 150px; */
    background: none;
    color:#fff;
  }
  .bgbutton:hover{
    background: #fff;
    color:#008cff
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>