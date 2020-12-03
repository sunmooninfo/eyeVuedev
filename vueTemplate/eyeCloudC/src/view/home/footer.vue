<template>
    <div class="container">
        <Hfooter></Hfooter>
        <el-row class="row" :gutter="10">
            <el-col :xs="12" :sm="12"  :lg="6">
                <div>
                    <img class="icon-img" src="../../assets/footer-img/money.png" alt="">
                    <div class="fchange">7天无理由退款</div>
                </div>
            </el-col>
            <el-col  :xs="12" :sm="12"  :lg="6" >
                <div>
                    <img  class="icon-img" src="../../assets/footer-img/beian.png" alt="">
                    <div class="fchange">免费备案</div>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12"  :lg="6" >
                <div>
                    <img  class="icon-img" src="../../assets/footer-img/people.png" alt="">
                    <div class="fchange">1v1大客户服务</div>
                </div>
            </el-col>
            <el-col  :xs="12" :sm="12"  :lg="6" >
                <div>
                    <img  class="icon-img" src="../../assets/footer-img/phone.png" alt="">
                    <div class="fchange">7×24小时服务</div>
                </div>
            </el-col>
        </el-row>
        <el-row    class="row" :gutter="10">
            <el-col   :xs="0" :sm="4"  :lg="4" >
                <div>
                    <div>浪博云计算</div>
                    <div>
                        <div class="about">
                            <div class="citem">产品</div>
                            <div class="citem">云市场</div>
                            <div class="citem">客户备案</div>
                            <div class="citem">产品发布台</div>
                            <div class="citem">网站备案</div>
                            <div class="citem">认证信息</div>
                            <div class="citem">关于我们</div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col  :xs="0" :sm="4"  :lg="4"   >
                <div>
                     <div>解决方案</div>
                     <div class="about">
                         <div class="citem">视频</div>
                         <div class="citem">游戏</div>
                         <div class="citem">金融</div>
                         <div class="citem">电商</div>
                         <div class="citem">网站</div>
                         <div class="citem">大数据</div>
                         <div class="citem">在线教育</div>
                     </div> 
                </div>
            </el-col>
            <el-col  :xs="0" :sm="4"  :lg="4"   >
                <div>
                     <div>资源与社区</div>
                     <div class="about">
                         <div class="citem">免费套餐</div>
                         <div class="citem">入门中心</div>
                         <div class="citem">定价中心</div>
                         <div class="citem">资源中心</div>
                         <div class="citem">浪博云</div>
                         <div class="citem">云+社区</div>
                         <div class="citem">专栏</div>
                     </div> 
                </div>
            </el-col>
            <el-col    :xs="0" :sm="4"  :lg="4" >
                <div>
                     <div>合作与生态</div>
                     <div class="about">
                         <div class="citem">合作伙伴</div>
                         <div class="citem">合作伙伴学院</div>
                         <div class="citem">推广奖励</div>
                         <div class="citem">云+公益</div>
                         <div class="citem">云+校园</div>
                         <div class="citem">云+创业</div>
                         <div class="citem">云启产业计划</div>
                     </div>
                </div>
            </el-col>
            <el-col    :xs="0" :sm="4"  :lg="4" >
                <div>
                     <div>管理与支持</div>
                     <div class="about">
                         <div class="citem">公告</div>
                         <div class="citem">控制台</div>
                         <div class="citem">续费管理</div>
                         <div class="citem">访问管理</div>
                         <div class="citem">安全中心</div>
                         <div class="citem">工单管理</div>
                         <div class="citem">联系我们</div>
                     </div>
                </div>
            </el-col>
            <el-col    :xs="0" :sm="4"  :lg="4" >
                <div>
                     <div>联系我们</div>
                     <div class="about">
                         <div class="citem">微信</div>
                         <div class="citem">微博</div>
                         <div class="citem">公众号</div>
                     </div> 
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="0"  :lg="0">
                <el-collapse  class="footer-collapse" @change="handleChange">
                    <el-collapse-item  class="footer-item" title="浪博云计算" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="解决方案" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="资源与社区" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="合作与生态" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="管理与支持" name="5">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>
        <!-- 产品推荐 -->
        <div  style="padding: 2rem">
            <el-row style="text-align:center">
                <el-col :xs="0" :sm="3"  :lg="3" class="pitem" >热门推荐</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >域名注册</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >云服务器</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >区块链服务</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >消息列表</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >网络加速</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >云数据库</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >域名解析</el-col>
            </el-row>
            <el-row style="text-align:center">
                <el-col :xs="0" :sm="3"  :lg="3" class="pitem" >更多推荐</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >人脸识别</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >浪博会议</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >企业云</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >CDN加速</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >视频通话</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >图像分析</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >SSL证书</el-col>
            </el-row>
            <el-row style="text-align:center">
                <el-col :xs="0" :sm="3"  :lg="3" class="pitem" >热门产品</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >数据安全</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >负载均衡</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >短信</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >文字识别</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >云点播</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >商标注册</el-col>
                <el-col :xs="0" :sm="3"  :lg="3" class="citem" >小程序开发</el-col>
            </el-row>
        </div>
        <!-- 产品推荐手风琴 -->
        <el-row>
            <el-col :xs="24" :sm="0"  :lg="0" > 
                <div  class="pcollapse" >产品推荐</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="0"  :lg="0">
                <el-collapse  class="footer-collapse" @change="handleChange">
                    <el-collapse-item  class="footer-item" title="热门推荐" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="更多推荐" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="热门产品" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>
        <div class="langbo" >浪博科技有限公司</div>
    </div>
</template>
<script>
import Hfooter from './footer-2'
export default {
    components: {
        Hfooter,
    },
    data(){
        return{
            // screenWidth: document.body.clientWidth,
            // isdisplay: true ,
            // iscolldisplay: false,
        }
    },
    created(){
        
    },
    methods:{
        handleChange(val) {

        },
    },
    mounted(){
        // const that = this
        // window.onresize = () => {
        //     return (() => {
        //         window.screenWidth = document.body.clientWidth
        //         that.screenWidth = window.screenWidth
        //     })()
        // }
        
    },
    watch: {
        // screenWidth: {
        //     immediate: true,
        //     handler: function (newVal) {
        //         // console.log(newVal)
        //         if(newVal < 760){
        //             this.isdisplay = false
        //             this.iscolldisplay = true
        //         }else {
        //             this.isdisplay = true
        //             this.iscolldisplay = false
        //         }
        //     }
        // }
    },
    
}
</script>
<style scoped>
  .container{
      background: #2e3033;
      color: #fff;
      
  }
  .pcollapse{
      text-align:center;
      font-size:20px
  }
  .langbo{
      text-align:center;
      padding-bottom:3rem;
      padding-top:1rem;
      font-size:18px
  }
  .row{
      text-align: center;
      padding: 2rem;
  }
  .icon-img{
      height: 32px;
      width: 32px;
      margin-top: 2rem;
  }
  .about{
      
      margin-top: 1.5rem;
      color: #ccc;
      font-size: 12px;
      
  }
    .footer-collapse /deep/ .el-collapse-item__header{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 48px;
            line-height: 48px;
            background-color: #2e3033;
            color: #fff;
            cursor: pointer;
            border-bottom: 0.5px solid #36393d;
            font-size: 13px;
            font-weight: 500;
            -webkit-transition: border-bottom-color .3s;
            transition: border-bottom-color .3s;
            outline: 0;
            
    }  
    .footer-collapse /deep/ .el-collapse-item__wrap {
        will-change: height;
        color: #fff;
        background-color: #2e3033;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #36393d;
    }
    .footer-collapse /deep/ .el-collapse-item__content{
            padding-bottom: 25px;
            font-size: 13px;
            color: #fff;
            line-height: 1.769230769230769;
    }
    .footer-collapse /deep/.el-collapse{
        border-top: 1px solid #2e3033;
        border-bottom: 1px solid #2e3033;   
    }

  .footer-collapse{
      padding: 1rem;
  }
  .pitem{
      font-size:12px;

  }

  .citem{
      font-size:12px;color:#ccc;
      padding: .2rem
  }
  .citem:hover{
      color:#008cff; 
      cursor:pointer;
  }
  .fchange:hover{
      color: #008cff;
      cursor: pointer;
  }
  /* .footer-item{
      color: #fff!important;    
  } */
  
</style>
<style >
    .footer-collapse /deep/ .el-collapse-item__header{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 48px;
            line-height: 48px;
            background-color: #2e3033;
            color: #fff;
            cursor: pointer;
            border-bottom: 0.5px solid #36393d;
            font-size: 13px;
            font-weight: 500;
            -webkit-transition: border-bottom-color .3s;
            transition: border-bottom-color .3s;
            outline: 0;
            
    }  
    .footer-collapse /deep/ .el-collapse-item__wrap {
        will-change: height;
        color: #fff;
        background-color: #2e3033;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #36393d;
    }
    .footer-collapse /deep/ .el-collapse-item__content{
            padding-bottom: 25px;
            font-size: 13px;
            color: #fff;
            line-height: 1.769230769230769;
    }
    .footer-collapse /deep/.el-collapse{
        border-top: 1px solid #2e3033;
        border-bottom: 1px solid #2e3033;   
    }

  .footer-collapse{
      padding: 1rem;
  }
</style>