<template>
  <div>
    <!-- <Header :header="header"></Header> -->
    <div style="padding-top:3rem" class="left-menu">
      <el-row >
        <el-col :xs="0" :sm="5" :md="5" :lg="5" >
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#000"
            active-text-color="#00A4FF">
            <el-menu-item @click="Open" index="1">
              <span  slot="title">方案总览</span>
            </el-menu-item>
            <!-- <el-menu-item index="2">
              <span slot="title">客户案例</span>
            </el-menu-item> -->
            <el-submenu index="3">
              <template slot="title">
                <span>技术架构</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">线上平台</el-menu-item>
                <el-menu-item index="3-2">安全与合规</el-menu-item>
                <el-menu-item index="3-3">用户分析及智能推荐</el-menu-item>
                <el-menu-item index="3-4">云支付</el-menu-item>
                <el-menu-item index="3-5">混合云架构</el-menu-item>
                <el-menu-item index="3-6">智能门店管理与安防监控</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col class="T-header" :xs="24" :sm="19" :md="19" :lg="19" >
          <div class="O-header">
            <div>
              <el-input
                placeholder="请输入内容"
                v-model="search">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
            <div class="center">
              <span>文档中心 &nbsp;&nbsp;&nbsp;</span>
              <span>API中心 &nbsp;&nbsp;&nbsp;</span>
              <span>SDK中心 &nbsp;&nbsp;&nbsp;</span>
            </div> 
          </div>
          <div v-show="isdisplay" >
            <div class="Floor-1">
              <div class="Floor-1-1">电商</div>
              <div style="font-size:14px">
                浪博云为电商客户提供高效便捷、安全可靠、灵活开放的云服务产品，针对电商行业常见的秒杀、大促、电商直播等场景定制多种专属产品和工具，支持 PC 端、移动端、微信商城等多种部署模式，可帮助企业快速搭建电商平台、完成资源的创建和配置，从容面对业务难题。
              </div>
              <div class="box">
                <div class="Floor-1-2">
                  <div>方案总览</div>
                  <div>
                    介绍电商解决方案的行业趋势、行业场景以及面临的挑战等
                  </div>
                </div>
                <div class="Floor-1-2" style="margin-left: 1rem" >
                  <div>客户案例</div>
                  <div>介绍电商解决方案的主要客户案例等</div>
                </div>
              </div>
            </div>
            <div class="Floor-3">
              <div class="Floor-2">技术架构</div>
              <div>
                <el-row>
                  <el-col class="Floor-2-1" :span="8">线上平台</el-col>
                  <el-col class="Floor-2-1" :span="8">安全与合规</el-col>
                  <el-col class="Floor-2-1" :span="8">用户分析及智能推荐</el-col>
                </el-row>
                <el-row style="margin-top:1rem" >
                  <el-col class="Floor-2-1" :span="8">混合云架构</el-col>
                  <el-col class="Floor-2-1" :span="8">智能门店管理与安防监控</el-col>
                </el-row>
              </div>
            </div>
          </div>
          <Class1 v-show="isdisplay1" class="Floor-3"></Class1>
          <Button class="Floor-3"></Button>
        </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>
import Button from './footer'
import Class1 from './class-1'
import Header from '../../components/ceiling'
export default {
  data(){
    return{
      header: [
        {name: '浪博云'}
      ],
      search: '',
      isdisplay: true,
      isdisplay1: false
    }
  },
  components:{
    Button,
    Class1,
    Header
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log( keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    Open(){
      this.isdisplay = false;
      this.isdisplay1 = true;
    }
  }
}
</script>
<style  scoped>
  .left-menu{
    padding: 1rem;
  }
  .O-header{
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    border-bottom: 2px solid #eee;
  }
  .center{
    display:flex;
    margin:0.5%;
    align-items:center;
    justify-content:center;
    color: #666;
  }
  .center span:hover{
    color: #00A4FF;
    cursor:pointer;
  }
  .T-header{
    padding: 1rem;
  }
  .Floor-1{
    color: #666;
    border-bottom: 2px solid #eee;
    padding: 1rem;
  }
  .Floor-1-1{
    font-size: 28px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #000;
  }
  .Floor-1-2{
    margin-top: 2rem;
    width:300px;
    border: 1px solid #eee;
    border-top: 3px solid #04C8DC;
    padding: 1rem;
    border-radius: 3px;
  }
  .Floor-3{
    padding: 1rem;
  }
  .Floor-1-2 :first-child{
    font-size: 18px;
    color: #000;
    line-height: 28px;
    margin-bottom: .875rem;
  }
  .Floor-1-2 :last-child{
    font-size: 14px;
    color: #999;
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
  }
  .box{
    display: flex;
  }
  .box :hover{
    box-shadow: 0 3px 6px 0 rgba(3,27,78,.06);
    cursor: pointer;
  }
  .Floor-2{
    margin-top: 2rem;
  }
  .Floor-2{
    font-size: 18px;
    color: #000;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .Floor-2-1{
    font-size: 14px;
    color: #00A4FF;
    padding-right: 1rem;
    white-space: nowrap;
  }
</style>