<template>
  <div>
    <div> <span class="Breadcrumb">文档中心 </span> > <span class="Breadcrumb"> 电商 </span> > 方案总览</div>
    <div>
      <div>
        <div class="title1">方案总览</div>
        <div class="time">最近更新时间：2019-08-01 14:54:49</div>
        <div class="tab">
          <div><span class="tabs">行业趋势</span></div>
          <div><span class="tabs">面临挑战</span></div>
          <div><span class="tabs">简介</span></div>
          <div><span class="tabs">行业场景</span></div>
          <div>
            <div class="tabs-1"><span>成熟电商</span></div>
            <div class="tabs-1"><span>初创电商</span></div>
            <div class="tabs-1"><span>敏捷型</span></div>
          </div>
        </div>
      </div>
      <div>
        <div class="title2">行业趋势</div>
        <ul style="margin-left:1.5rem">
          <li>线上线下融合发展。</li>
          <li>新技术推动电商服务不断升级。</li>
          <li>消费升级，品牌认知度提高，互联网电商品牌纷纷上市。</li>
          <li>社交电商掀起新浪潮。</li>
          <li>生鲜电商存在高风险，但具有巨大的市场前景。</li>
          <li>跨境电商，农村电商成为各大巨头抢占的市场。</li>
        </ul>
      </div>
      <div>
        <div class="title2">面临挑战</div>
          <div class="challenge">
            <div>业务快速变化</div>
            <div>客户访问量随业务变化波动，应对秒杀、大促流量爆发，企业需要配置灵活伸缩的计算资源。</div>
          </div>
          <div class="challenge">
            <div>网络安全威胁</div>
            <div>网络攻击与网络欺诈给电商业务带来巨大风险。</div>
          </div>
          <div class="challenge">
            <div>智能推荐营销</div>
            <div>电商竞争激烈，提高客户粘度、精准营销已成为电商行业当务之急。</div>
          </div>
          <div class="challenge">
            <div>安全可靠支付</div>
            <div>企业和用户面临商户端第三方支付的安全性和可靠性问题。</div>
          </div>
      </div>
      <div>
        <div class="title2">简介</div>
        <div style="color:#333">浪博云为电商客户提供高效便捷、安全可靠、灵活开放的云服务产品，针对电商行业常见的秒杀、大促、电商直播等场景定制多种专属产品和工具，支持 PC 端、移动端、微信商城等多种部署模式，可帮助企业快速搭建电商平台、完成资源的创建和配置，从容面对业务难题。电商解决方案整体架构图如下：<br>
          <img class="images" src="//mc.qcloudimg.com/static/img/03bddf0f3d702f85643c20c5db9b6f9c/image.png" alt="">
          <br>
          A. 线上平台资源灵活配置<br>
          B. 安全防护及合规<br>
          C. 用户分析与智能推荐<br>
          D. 安全可靠云支付<br>
          E. 混合云多系统打通<br>
          F. 智能门店管理<br>
          G. 社交电商与视频图片处理<br>
        </div>
      </div>
      <div>
        <div class="title2">行业场景</div>
        <div>
          <h3 style="margin-top:1rem;margin-bottom:1rem">成熟电商</h3>
          <h4 style="margin-top:1rem">主要需求</h4>
          <div>
            <ul style="margin-left:1.5rem">
              <li>物理机需求场景。</li>
              <li>混合云实现 IDC 和云的互通。</li>
              <li>全方位的安全防护，应对 DDoS，CC 攻击，刷单等问题。</li>
            </ul>
          </div>
          <h4 style="margin-top:1rem">对应解决方案</h4>
          <div >
            <ul style="margin-left:1.5rem">
              <li>物理机需求场景。</li>
              <li>混合云实现 IDC 和云的互通。</li>
              <li>全方位的安全防护，应对 DDoS，CC 攻击，刷单等问题。</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 style="margin-top:1rem;margin-bottom:1rem">初创电商</h3>
          <h4 style="margin-top:1rem">主要需求</h4>
          <div>
            <ul style="margin-left:1.5rem">
              <li>物理机需求场景。</li>
              <li>混合云实现 IDC 和云的互通。</li>
              <li>全方位的安全防护，应对 DDoS，CC 攻击，刷单等问题。</li>
            </ul>
          </div>
          <h4 style="margin-top:1rem">对应解决方案</h4>
          <div >
            <ul style="margin-left:1.5rem">
              <li>物理机需求场景。</li>
              <li>混合云实现 IDC 和云的互通。</li>
              <li>全方位的安全防护，应对 DDoS，CC 攻击，刷单等问题。</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style scoped>
  .title2{
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: 400;
  }
  
  .images{
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    max-width: 100%;
    height: auto;
    box-sizing: content-box;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
  }
  .challenge :first-child{
    font-weight: 700;
    line-height: 1.5;
    color: #333;
    margin-top: .2rem;
    margin-bottom: .2rem;
  }
  .challenge :last-child{
    color: #333;
    margin-bottom: .5rem;
  }
  ul li{
    box-sizing: border-box;
    list-style: inherit;
    color: #333;
    margin-top: .5rem;
  }
  .Breadcrumb{
    color: #999;
  }
  .Breadcrumb:hover{
    color: #00a4ff;
    cursor: pointer;
  }
  .title1{
    font-size: 30px;
    font-weight: 400;
    margin-top: 2rem;
  }
  .time{
    margin-top: 1rem;
    font-size: 12px;
    color: #666;
    line-height: 20px;
  }
  .tab{
    color: #00a4ff;
    font-size: 14px;
    border-left: 2.5px solid #eee;
  }
  .tab div{
    margin-top: .5rem;
  }
  .tabs{
    margin-left: .875rem;
  }
  .tabs:hover{
    cursor: pointer;
  }
  .tabs-1{
    font-size: 12px;
    margin-left: 1.5rem;
  }
  .tabs-1 span{
    cursor: pointer;
  }
</style>