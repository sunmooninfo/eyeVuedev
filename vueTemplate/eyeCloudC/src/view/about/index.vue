<template>
  <div>
    <!-- <div class="smallnav" v-show="iscolldisplay">
      <div>关于我们</div>
    </div> -->
    <div v-show="isdisplay">
      <el-carousel class="car" direction="vertical" height="400px" :interval="5000" arrow="always">
        <el-carousel-item>
          <div class="caritem">
            <div class="caritemchild" >
              <div>我们专注于提供全球领先的专业云计算服务</div>  
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="aboutvideo" style="margin-left:8%;margin-right:8%">
      <el-row>
        <el-col class="about_left" :xs="24" :sm="24" :lg="14">
          <div class="about_title">关于浪博云</div>
          <div class="about_txt">浪博云，浪博集团倾力打造的云计算品牌，面向全世界各个国家和地区的政府机构、企业组织和个人开发者，提供全球领先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的行业解决方案，构建开放共赢的云端生态，推动产业互联网建设，助力各行各业实现数字化升级。
          </div>
          <div class="about_txt2">
            为开发者搭建的线上视频学习平台，提供丰富的云计算视频课程，助力开发者提升自身技术能力
          </div>
        </el-col>
        <el-col class="video" :xs="24" :sm="24" :lg="10">
          <video  autoplay="autoplay" muted="muted" preload="auto" loop="loop"  src="https://about-10050352.file.myqcloud.com/%E5%B9%95%E5%90%8E%E8%8B%B1%E9%9B%84-60s-final.mp4"></video>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="item" v-for="(item,index) in aboutList" :key="index" :xs="12" :sm="8" :lg="4">
          <div>{{item.title}}</div>
          <div class="item_txt">{{item.txt}}</div>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div>
      <div style="text-align:center">
        <div class="img_title">完善的产品体系</div>
        <div class="img_txt">7 大类，210+ 款产品共筑浪博云完善产品体系</div>
      </div>
      <el-row>
        <el-col>
          <img width="100%" src="../../assets/bgimage.png" alt="">
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div style="text-align:center">
        <div class="img_title">强大的生态服务</div>
        <div class="img_txt">浪博云强大的生态体系和多样化的服务支持，助您无忧上云</div>
      </div>
      <el-row  class="bodyimg">
        <el-col class="cardbody" v-for="(item,index) in BodyList" :key="index" :xs="24" :sm="12" :lg="6">
          <div class="bodycon">
            <div class="body_title">{{item.title}}</div>
            <div class="body_txt">{{item.txt}}</div>
            <div class="body_jump">前往{{item.title}} ></div>
            <img :src="item.imgUrl" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer_bg">
      <div class="img_title" style="color: #fff;padding-top:5rem" >遍布全球的基础设施</div>
      <div class="img_txt" style="color: hsla(0,0%,100%,.6);padding-bottom:2rem">浪博云的基础设施覆盖全球五大洲 25 个地区，运营 53 个可用区</div>
      <el-row style="margin-left:5%;margin-right:5%;padding-bottom: 3rem">
        <el-col v-for="(item,index) in addressList" :key="index" class="el_bg" :xs="24" :sm="12" :lg="8">
          <div class="el_child" style="">
            <h3>{{item.address}}</h3>
            <img width="100%" :src="item.imgUrl" alt="">
            <div style="margin-top:1rem">{{item.txt}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="footer_container">
      <div class="img_title">我们获得的权威认证</div>
      <el-row style="margin-top: 3rem">
        <el-col style="padding-left:1rem;padding-right:1rem" v-for="(item,index) in cateList" :key="index" :xs="24" :sm="12" :lg="12">
          <div class="footer_container1" >
            <img :src="item.imgUrl" alt="">
            <div>
              <div class="add_title">{{item.title}}</div>
              <div class="add_txt">{{item.txt}}</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="12">

        </el-col>
      </el-row>
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
      bground: true,
      isbground: false,
      activeName: 'first',
      screenWidth: document.body.clientWidth,
      isdisplay: true ,
      iscolldisplay: false,
      aboutList:[
        {
          title: '100W+',
          txt: '全球服务器数量'
        },
        {
          title: 'EB级别',
          txt: '数据存储规模达'
        },
        {
          title: '1300+',
          txt: '全球加速节点数'
        },
        {
          title: '100 T',
          txt: '带宽储备达'
        },
        {
          title: '70+',
          txt: '权威认证'
        },
        {
          title: '210+',
          txt: '云产品服务'
        },
      ],
      BodyList: [
        {
          title: '解决方案',
          txt: '提供支持 192 个业务场景的解决方案',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575356944271_ek32rqpsnhfr.svg'
        },
        {
          title: '云市场',
          txt: '提供支持 192 个业务场景的解决方案',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575356944271_ek32rqpsnhfr.svg'
        },
        {
          title: '官方文档',
          txt: '提供支持 192 个业务场景的解决方案',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575356944271_ek32rqpsnhfr.svg'
        },
        {
          title: '服务支持',
          txt: '提供支持 192 个业务场景的解决方案',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575356944271_ek32rqpsnhfr.svg'
        },
      ],
      addressList: [
        {
          address: '中国',
          txt: '可用区数共 32 个，分布在 7 个地理区域',
          imgUrl: 'http://main.qcloudimg.com/raw/7656b0c3993c5d8de908c9c152d26581.png'
        },
        {
          address: '亚太地区',
          txt: '可用区数共 6 个，分布在 5 个地理区域',
          imgUrl: 'http://main.qcloudimg.com/raw/f52f87da064be0724857202ff78c501b.png'
        },
        {
          address: '北美地区',
          txt: '可用区数共 5 个，分布在 3 个地理区域',
          imgUrl: 'http://main.qcloudimg.com/raw/5e501d39b78685dfa91bddaff8bdb065.png'
        },
        {
          address: '欧洲地区',
          txt: '可用区数共 2 个，分布在 2 个地理区域',
          imgUrl: 'http://main.qcloudimg.com/raw/c6a80afda0f6b07c856c6a4fa1767e9f.png'
        },
        {
          address: '海外合作基础设施',
          txt: '合作可用区数共 8 个',
          imgUrl: 'http://main.qcloudimg.com/raw/7656b0c3993c5d8de908c9c152d26581.png'
        },
        {
          address: '全球基础设施',
          txt: '可用区数共 32 个，分布在 7 个地理区域',
          imgUrl: 'http://main.qcloudimg.com/raw/7656b0c3993c5d8de908c9c152d26581.png'
        },
      ],
      cateList: [
        {
          title: 'ISO22301国际认证',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575354314037_q1nf0eessfzssv2t9.png',
          txt: 'ISO 22301是第一份以业务连续管理（Business Continuity Management，简称 BCM）为主题的国际标准，提供了一种完整通用的 BCM 方法论，让企业能够达到国际上公认的最佳实践。浪博云是国内首批通过 ISO 22301认证的云服务商。'
        },
        {
          title: 'ISO22301国际认证',
          imgUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1575354314037_q1nf0eessfzssv2t9.png',
          txt: 'ISO 22301是第一份以业务连续管理（Business Continuity Management，简称 BCM）为主题的国际标准，提供了一种完整通用的 BCM 方法论，让企业能够达到国际上公认的最佳实践。浪博云是国内首批通过 ISO 22301认证的云服务商。'
        },
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
  .add_txt{
    padding-left: .5rem;
    margin-top: 12px;
    line-height: 24px; 
    font-size: 14px;
    color: #666;
    text-align: justify;
    max-height: 96px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .add_title{
    line-height: 28px;
    font-size: 18px;
    color: #000;
  }
  .el_child{
    background:#202b40;
    border: 1px solid #2a3653;
    padding: 1rem;
  }
  .el_bg{
    text-align: left;
    /* background: #202b40; */
    /* border: 1px solid #2a3653; */
    /* margin: 1rem; */
    padding: 1rem;
    color: #fff;
  }
  .footer_container1{
    margin-top: 2rem;
    margin-bottom: 2rem;
    display:flex;
    padding:1rem;
    position: static;
    top: 0;
    /* display: block; */
    width: 100%;
    height: auto;
    background: #fff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .footer_container1 img{
    width: 120px;
    height: 150px;
    border: 1px solid #eee;
  }
  .el_bg :first-child{
    margin-bottom: 8px;
    line-height: 26px;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .footer_bg{
    margin-top: 3rem;
    background: #1a2334;
    text-align: center;
  }
  .cardbody{
    /* border: 2px solid #eee; */
    padding-left: 2rem;
    padding-right: 2rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }
  .bodycon{
    padding: 1rem;
    border: 1px solid #eee;
    box-shadow: 0 3px 6px 0 rgba(3,27,78,.06);
  }
  .bodyimg{
    padding: 1rem;
    text-align: center;
    margin-top: 3rem;
  }
  .bodyimg img{
    margin-top: 1rem;
    width: 100%;
  }
  .body_title{
    margin-bottom: 8px;
    line-height: 28px;
    font-size: 20px;
    color: #000;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .body_txt{
    line-height: 24px;
    font-size: 14px;
    color: #666;
    max-height: 72px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 1rem;
  }
  .body_jump{
    color:#2ab3ff;
    margin-top: 1rem;
  }
  .img_txt{
    line-height: 26px;
    font-size: 16px;
    color: #666;
    margin-top: 1rem;
  }
  .img_title{
    margin-top: 3rem;
    line-height: 46px;
    font-size: 32px;
    color: #000
  }
  .item_txt{
    margin-top: .5rem;
    line-height: 26px;
    font-size: 16px;
    color: #000;
  }
  .item{
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .item :first-child{
    line-height: 48px;
    font-size: 32px;
    color: #00a4ff;
    font-weight: 400;
  }
  .video{
    padding: 1rem;
  }
  .video video{
    padding: 1rem;
    border: 3px solid #eee;
    width: 90%;
  }
 
  .about_txt{
    /* width: 70%; */
    padding: 1rem;
    margin-top: 3rem;
    line-height: 24px;
    font-size: 14px;
    color: #333;
    margin-bottom: 1rem;
  }
  .about_txt2{
    /* width: 70%; */
    padding: 1rem;
    margin-top: 1rem;
    line-height: 24px;
    font-size: 14px;
    color: #333;
    /* margin-bottom: 2rem; */
  }

  .about_title{
    margin-bottom: 1rem;
    line-height: 48px;
    font-size: 32px;
    color: #000;
    font-weight: 400;
  }
  .aboutvideo{
    padding-top: 3rem;
  }
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
    text-align: center;
    background: #fff;
    margin-left: 8%;
    margin-right: 8%
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