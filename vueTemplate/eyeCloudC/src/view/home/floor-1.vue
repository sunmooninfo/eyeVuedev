<template>
    <div class="floor-root">
<!---------轮播图与基础的栅格布局-->
      <el-row>
        <el-col :span="24">
          <el-carousel  indicator-position="none" height="480px">
            <el-carousel-item v-for="(item,index) in urls" :key="index" >
<!--              <img :src="item.img" alt="">-->
              <a href="#" :style="{backgroundImage:'url(' + item.img+ ')'}">
                <div v-show="index!=0" class="contend">
                  <h1>浪博云企业中心</h1>
                  <p class="hidden-xs-only swiper-title">为企业提供一站式的上云服务，满足企业各个阶段的发展的软硬件需求，助力您的事业腾飞！</p>
                  <el-button >了解详情</el-button>
                </div>
              </a>
              <section class="hidden-xs-only">
                <div style="background-image: url(https://main.qcloudimg.com/raw/47c5fa6fe4cef28c895dae07b1a07c4f/xxsl.png)">
                  <span>技术沙龙</span>
                  <br>
                  <p>报名参加线下技术沙龙</p>
                </div>
                <div style="background-image: url(https://main.qcloudimg.com/raw/bd81bcf401eb0a7394c0185681577616/yrz.png)">
                  <span>云认证</span>
                  <p>考试获取权威行业认证</p>
                </div>
                <div style="background-image: url(https://main.qcloudimg.com/raw/5bc8056232f427ed09e80e2070ba36e4/tvp.png)">
                  <span>TVP</span>
                  <p>探索TVP最具价值专家</p>
                </div>
              </section>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
<!-----------------响应式布局-->
      <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <!----------------大屏显示的内容---------->
          <!------------中部内容----------------------------->

          <div class="floor-main">
            <div class="event">
              <div>
                <img src="https://main.qcloudimg.com/raw/57fe551652c75efdd5b23ae68da53282.svg" alt="">
                <div>
                  <h3>新手入门</h3>
                  <p>仅需几步，快速上云</p>
                </div>
              </div>
              <div>
                <img src="https://main.qcloudimg.com/raw/3b340927684bc805e5c553c291f8fbf9.svg" alt="">
                <div>
                  <h3>新手入门</h3>
                  <p>仅需几步，快速上云</p>
                </div>
              </div>
              <div>
                <img src="https://main.qcloudimg.com/raw/8566024e3f0d13baa7639f9001873668.svg" alt="">
                <div>
                  <h3>新手入门</h3>
                  <p>仅需几步，快速上云</p>
                </div>
              </div>
              <div>
                <img src="https://main.qcloudimg.com/raw/31c4fb4bcde38df4c46ba27b2650c6c9.svg" alt="">
                <div>
                  <h3>新手入门</h3>
                  <p>仅需几步，快速上云</p>
                </div>
              </div>

            </div>
            <div class="tag">
              <h1>性能强大、安全、稳定的云产品</h1>
            </div>
            <div class="Tabs">
              <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true" >
                <el-tab-pane class="tab-pane" name="second">
                  <span class="tags-span" slot="label"><i class="el-icon-s-help"></i>热门</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane class="tab-pane">
                  <span class="tags-span" slot="label"><i class="el-icon-help"></i>基础</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane class="tab-pane">
                  <span class="tags-span" slot="label"><i class="el-icon-house"></i>安全</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane class="tab-pane">
                  <span class="tags-span" slot="label"><i class="el-icon-cpu"></i>大数据与AI</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane class="tab-pane">
                  <span class="tags-span" slot="label"><i class="el-icon-data-analysis"></i>企业与行业应用</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane class="tab-pane">
                  <span class="tags-span" slot="label"><i class="el-icon-user-solid"></i>开发者服务</span>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                    <div>
                      <p>云服务器 CVM </p>
                      <span>稳定、安全、弹性、高性能的云端计算服务</span>
                    </div>
                  </div>
                </el-tab-pane>

              </el-tabs>
            </div>

          </div>
        </el-col>
        <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" id="el-mian">
            <!------小屏显示的内容-->
          <div class="title">
            <p>我们的云产品</p>
          </div>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title" class="collapse-template"><i class="el-icon-cpu"></i>
                <p>计算</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-s-help"></i>
                <p>储存</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-loading"></i>
                <p>网络</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-folder"></i>
                <p>数据库</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-video-play"></i>
                <p>视频服务</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-film"></i>
                <p>视频智能</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-paperclip"></i>
                <p>云通信</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-s-grid"></i>
                <p>Serverless</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-s-promotion"></i>
                <p>移动开发</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="el-icon-data-analysis"></i>
                <p>大数据</p>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
          </el-collapse>
          <div class="base"></div>
        </el-col>

      </el-row>




    </div>
</template>
<script>

  export default {
    data(){
      return{
        urls: [
          {img: "https://main.qcloudimg.com/raw/2d2af97042ba09f87493ac3380f42598.jpg"},
          {img: "https://main.qcloudimg.com/raw/d803b7a7cd2adfc52aa30e21eda1d6b0.png"},
          {img: "https://main.qcloudimg.com/raw/ead87cd1adc582aaa5a930b7c49655c9.png"},
          {img: "https://main.qcloudimg.com/raw/781608009ede95d8fa997f10dba63122.png"},
          // {img: "../../assets/img/b.png"},
          // {img: "../../assets/img/c.png"},
          // {img: "../../assets/img/d.png"},
          // {"../../assets/img/a.png"},
          // "../../assets/img/a.png",
          // "../../assets/img/b.png",
          // "../../assets/img/c.png",
          // "../../assets/img/d.png",
        ],
        tabs: true,
        activeName: 'second',
      }
    },
    created() {

    },
    methods:{
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }

  }

</script>
<style scoped>
  @import "../../assets/floor-1.css";
/*轮播图样式*/
  .el-carousel__item a {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    /*background-size: cover;*/
    background-size: 100% 100%;
    text-decoration: none;
  }
  .el-carousel__item .el-button{
    position: absolute;
    bottom: 30%;
    width: 110px;
    height: 40px;
  }
.el-carousel__item .contend{
    margin: 100px 80px;
    width: 40%;
    height: 60%;
    position: relative;
  }
.el-carousel__item .contend h1{
  margin-bottom: 20px;
  color: #409EFF;
}
.el-carousel__item section{
  position: absolute;
  right: 8%;
  top: 15%;
  z-index: 10;
  width: 15%;
  height: 75%;
}
.el-carousel__item section div{
  background-size: 100% 100%;
  border: 1px solid black;
  /*flex-basis: 100%;*/
  height: 65px;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.el-carousel__item section div span{
      border: 1px solid #04c8dc;
       color: #04c8dc;
      padding: 0 10px;
      margin-bottom: 10px;
}
.el-carousel__item section div span:hover{
  background-color: #04c8dc;
  color: #2b303b;
}
.el-carousel__item section div p{
  color: white;
}

/*  中部内容样式*/
  .floor-main{
    background: #fff;
    padding: 3rem;
    border-bottom: 3px solid #eee;
  }
  /*----------------新手入门样式-*/
  .floor-main .event{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 40px;
    z-index: 100;
  }
.floor-main .event>div{
  width: calc(100%/5);
  height: 120px;
  background-color: white;
  box-shadow: 0px 0px 2px black;
  display: flex;
  /* justify-content: space-around; */
}
.floor-main .event>div:hover{
  box-shadow: 0px 1px 11px black;
}
.floor-main .event div div{
  height: 70%;
  margin-top: 20px;
  margin-left: 20px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
.floor-main .event div img{
  margin-left: 20px;
}
.floor-main .event div div h3{
  margin-bottom: 20px;
}
/*  ---------------------------------*/
  .tag{
    width: 100%;
    text-align: center;
    font-weight: normal;
    margin-bottom: 20px;
  }
/*  标签页样式----------------------------*/
  .Tabs{
    width: 90%;
    margin: 0 auto;
    padding-bottom:5px ;

  }
  .tab-pane{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

  }
.Tabs .tags-span{
  font-size: 18px;
  color: black;
}
.Tabs .tags-span i{
  color: #04c8dc;
}
.tab-pane div {
  width: 33%;
  height: 100%;
}
.tab-pane div div{
  width: 80%;
  padding: 15px;
}
.tab-pane div div:hover{
  box-shadow: 2px 2px 8px 0px #E5E8ED;
}
.tab-pane div div p{
  margin-bottom: 8px;
}
.tab-pane div div span{
  font-size: 14px;
  color: grey;
}
/*  .Tabs .base{*/
/*  width: 100%;*/
/*  height: 10px;*/
/*}*/
/*add zyt */
.floor-root{
  width: 100%;
}
.swiper-title{
  color:#409EFF;
}
@media (max-width: 767px) {
  .el-carousel__item a{
    background-size:150% 100%
  }
  .el-carousel__item .contend h1{
    font-size: 22px;
  }
}
</style>
