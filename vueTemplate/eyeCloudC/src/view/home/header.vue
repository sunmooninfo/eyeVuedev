<template>
    <div class="nav-root">

        <div class="top">
          <el-row :gutter="10">
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
<!--              大屏幕显示的内容-->
              <!----------------------导航栏左边-->
              <div class="tops">
                <div class="left">
                  
                    <span @click="Jump"> <i class="el-icon-s-unfold"></i> 菜单</span>
                  
                  <span class="gun"></span>
                  <span><i class="el-icon-cloudy"></i> 浪博云</span>
                </div>

                <div class="right">
                  <div>
                    <el-input
                      class="login-form-input"
                      size="small"
                      placeholder="云服务器CVM"
                      suffix-icon="el-icon-search">
                    </el-input>
                  </div>

                  <div class="top-operation">
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="el-icon-s-promotion"></i>
                        中国站<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>中国站</el-dropdown-item>
                        <el-dropdown-item>Do more with Tencent</el-dropdown-item>

                      </el-dropdown-menu>
                    </el-dropdown>
                    <a href="">备案</a>
                    <a href="">控制台</a>
                  </div>

                </div>

                <div class="top-2">
                  <ul>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                最新活动
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                          <span class="el-dropdown-link">产品</span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                解决方案
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                定价
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                文档
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                企业中心
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                云市场
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <el-dropdown :hide-on-click="false">
                            <span class="el-dropdown-link">
                                开发者
                            </span>
                          <el-dropdown-menu slot="dropdown" class="dropdown-box">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </a>
                    </li>
                  </ul>
                  <ol>
                    <li>
                      <!--                    <a href="#"></a>-->
                      <router-link to="/login">登录</router-link>
                    </li>
                    <li>
                      <router-link to="/register">
                        <el-button size="small" type="primary">免费注册</el-button>
                      </router-link>

                    </li>

                  </ol>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="0" :md="0" :lg="0" :xl="0" id="xs">
<!--     小屏幕显示的内容-->
              <div id="content-xs">
                <div class="left-xs">
                  <span><i class="el-icon-cloudy"></i>浪博云</span>
                </div>
                <div class="right-xs">
                  <div>
                    <i class="el-icon-search"></i>
                  </div>
                  <div>
                    <i class="el-icon-user"></i>
                  </div>
                  <div @click="menu">
                    <i :class="menus ? 'el-icon-close' : 'el-icon-s-fold'"></i>
                  </div>
                </div>
              </div>
              <el-collapse accordion v-show="menus" id="shoufeng">
                <el-collapse-item title="浪博云计算" name="1">
                  <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                  <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="产品" name="2">
                  <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                  <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="解决方案" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="定价" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
                <el-collapse-item title="文档" name="5">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
              </el-collapse>

            </el-col>
          </el-row>


        </div>
    </div>
</template>

<script>

    export default {
        name: "top",
        data(){
            return{
              input4:'',
              menus:false,
              // activeName: '1'

            }
        },
      methods: {
        Jump(){
          this.$router.push({
            path: '/about'
          })
        },
        handleOpen(key, keyPath) {
          // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          // console.log(key, keyPath);
        },
        menu(){
          this.menus = !this.menus
        }
      }
    }
</script>

<style scoped>

  @import "../../assets/header.css";
    /*导航top1*/
    .top{
      width: 100%;
      height: 40px;
      background-color: #2b303b;
    }
    .tops{
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left{
        height: 40px;
        color: white;
    }
    .left .gun{
        border-right: 1px solid grey;
    }
    .left span{
        margin-left: 20px;
    }
  .left span i{
    font-size: 20px;
  }
  .left .el-icon-cloudy{
    color: #409EFF;
    font-size: 30px;
    position: relative;
    top: 5px;
  }

    .right{
        color: white;
    }
    .right>div{
        display: inline-block;
        color: white;
    }
    /*导航栏右边样式*/
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
  
    .top-operation .el-dropdown{
        margin:0  20px;

    }
    .top-operation .el-dropdown span{
        font-size: 14px;
        color: white;
    }
    .top-operation  a{
        color: white;
        font-size: 14px;
        margin-right: 20px;
    }
/*导航top2*/
    .top-2{
        width: 100%;
        height: 50px;
        background-color:rgba(0,0,0,0);
        position: absolute;
        top: 40px;
        display: flex;
        justify-content: space-between;
        z-index: 100;
        border-bottom: 1px solid #8492a6;
    }
    .top-2>ul{
        list-style: none;
        display: flex;
        line-height: 50px;
    }
    
    /*导航栏2 左边样式*/
    .top-2>ul>li{
        margin-left: 20px;
    }
    /*导航栏2 右边样式*/
    .top-2>ol{
        list-style: none;
        display: flex;
        line-height: 50px;
    }
    .top-2>ol>li{
        margin-right: 20px;
    }
    .top-2>ol>li>a{
        /*color: white;*/
        font-size: 15px;
    }
    .top-2>ol .el-button{
        /*width: 80px;*/
        /*height: 30px;*/
        border-radius: 0;
    }

</style>
