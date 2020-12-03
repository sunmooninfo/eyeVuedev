<template>
    <el-row :gutter="10" class="banner_row">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="content">
            <div class="banner_top">
              <span class="menu" @mousemove='showDraw'>
                <i class="el-icon-s-unfold"></i>
                菜单
              </span>
              <span class="banner_img" @click="linkToHome">
                <img src="./img/banner.png" alt="">
                <span>浪博科技</span>
              </span>
              <div class="right_content">
                <span class="search_span">
                  <el-input size="mini" v-model="search" placeholder="请输入搜索内容"></el-input>
                  <i class="el-icon-search search_btn"></i>
                </span>
                <span class="right_link">中国站</span>
                <span class="right_link">备案</span>
                <span class="right_link">控制台</span>
              </div>
            </div>
            <div class="banner_bottom">
              <ul class="bottom_ul">
                <li v-for="(item,index) in liList" :key="index" @click="routerTo(item.url)">
                  {{item.name}}
                </li>
              </ul>
              <div class="bottom_right">
                <span class="login_in">登录</span>
                 <el-button type="primary" size="mini">免费注册</el-button>
              </div>
            </div>
          </div>

          <!-- 弹出层 -->
          <el-drawer
            class="banner_drawer"
            :visible.sync="drawerLeft"
            :direction="direction"
            :show-close='false'
            :modal='false'>
            <el-cascader-panel 
            v-model="casValue" 
            :props="{ expandTrigger: 'hover' }" 
            :options="options"
            @change="handleChange"
            >
            </el-cascader-panel>
          </el-drawer>

        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" style="height:50px">
          <!-- <div class="sm_content"> -->
            <div class="sm_top">
              <div class="smTop_left" @click="linkToHome">
                <img src="./img/sm_banner.png" alt="">
                <span>腾讯云</span>
              </div>
              <div class="smTop_right">
                <i class="el-icon-search"></i>
                <i class="el-icon-s-custom"></i>
                <i class="el-icon-s-unfold" @click="dialogVisible = true"></i>
              </div>
            </div>
          <!-- </div> -->
          <el-dialog
            class="sm_dialog"
            :visible.sync="dialogVisible"
            :show-close='false'
            :close-on-click-modal='false'
            :close-on-press-escape='false'
            width="100%"
            >
              <div class="sm_top">
                <div class="smTop_left" @click="linkToHome">
                  <img src="./img/sm_banner.png" alt="">
                  <span>腾讯云</span>
                </div>
                <div class="smTop_right">
                  <i class="el-icon-close" @click="dialogVisible = false"></i>
                </div>
              </div>
              <div class="diago_bottom">
                <el-collapse v-model="activeNames">
                  <el-collapse-item title="浪博科技" name="1">
                    <div class="collapse_div" v-for="(list, index) in options[0].children" :key="index" @click="sm_routerTo(list.value)">{{list.label}}</div>
                  </el-collapse-item>
                  <el-collapse-item title="解决方案" name="2">
                    <div class="collapse_div" @click="sm_routerTo('solution')">网站解决方案</div>
                    <div class="collapse_div" @click="sm_routerTo('solution/retailers')">电商解决方案</div>
                    <div class="collapse_div" @click="sm_routerTo('solution/education')">教育解决方案</div>
                    <div class="collapse_div" @click="sm_routerTo('solution/wechat')">小程序解决方案</div>

                  </el-collapse-item>
                  <el-collapse-item title="产品" name="3">
                    <div class="collapse_div" v-for="(list, index) in options[2].children" :key="index" @click="sm_routerTo(list.value)">{{list.label}}</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
          </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
              activeNames: ['1'],
               search: '',
               drawerLeft: false,
               direction: 'ltr', 
               casValue: '',
               options: [],
               ifHiden: false,
               dialogVisible : false,
               liList: [
                 {name: '关于我们',url:'/about'},
                 {name: '网站解决方案',url:'/solution'},
                 {name: '电商解决方案',url:'/solution/retailers'},
                 {name: '教育解决方案',url:'/solution/education'},
                 {name: '小程序解决方案',url:'/solution/wechat'},
                 {name: '电商',url:'/online-retailers'},
                 {name: '云市场',url:'/cloud/market'},
                 {name: '云+社区',url:'/cloud/community'},
                 {name: '云大学',url:'/school'},
               ]
            }
        },
        created(){
          this.resetOption()
        },
        mounted(){
          console.log('111')
        },
        methods: {
          routerTo(url) {
            this.$router.push({
              path: url
            })
          },
          linkToHome() {
            this.$router.push({
              path: '/'
            })
          },
          sm_routerTo(url) {
            this.$router.push({
              path: '/' + url
            })
          },
          showDraw() {
            this.drawerLeft = true
          },
          resetOption() {
            this.options = [{
            value: '浪博科技',
            label: '浪博科技',
            children: [{
              value: 'about',
              label: '关于我们',
            }, {
              value: 'school',
              label: '云大学',
            }]
            }, {
              value: '解决方案',
              label: '解决方案',
              children: [{
                value: '通用解决方案',
                label: '通用解决方案',
                children: [{
                  value: 'solution',
                  label: '网站解决方案'
                }, {
                  value: 'solution/retailers',
                  label: '电商解决方案'
                }]
              }, {
                value: '行业解决方案',
                label: '行业解决方案',
                children: [{
                  value: 'solution/education',
                  label: '教育解决方案'
                }, {
                  value: 'solution/wechat',
                  label: '小程序解决方案'
                }]
              }]
            },{
            value: '产品',
            label: '产品',
            children: [{
              value: 'online-retailers',
              label: '电商',
            }, {
              value: 'cloud/market',
              label: '云市场',
            }, {
              value: 'cloud/community',
              label: '云+社区',
            }]
            },]
          },
          // 级联选择器跳转
          handleChange() {
            let length = this.casValue.length
            let url = this.casValue[length - 1]
            console.log(url)
            this.$router.push({
              path: '/' + url
            })
          },
        }
    }
</script>

<style scoped>
  .hiden {
    display: none;
  }
  .content {
    width: 100%;
    min-width: 1200px;
  }
  .banner_top {
    height: 40px;
    line-height: 40px;
    background: #2b303b;
    color: #fff;
    padding: 0 20px;
  }
  .menu {
    font-size: 14px;
    padding-right: 20px;
    border-right: 1px solid gray;
    cursor: pointer;
  }
  .menu:hover,.right_link:hover,.bottom_ul li:hover,.login_in:hover{
    color: #00a4ff;
  }
  .menu i {
    font-size: 20px;
    vertical-align: middle;
  }
  .banner_img {
    margin-left: 20px;
    cursor: pointer;
    font-size: 15px;
  }
  .banner_img img {
    vertical-align: middle;
  }
  .right_content {
    float: right;
  }
  .search_span {
    position: relative;
  }
  .search_btn {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .right_link {
    font-size: 12px;
    cursor: pointer;
    margin-left: 15px;
  }
  .banner_bottom {
    position: absolute;
    width: 100%;
    top: 40px;
    z-index: 999;
    min-width: 1200px;
    height: 50px;
    line-height: 50px;
    background-color:rgba(0, 0, 0, .3) ;
    padding: 0 20px;
  }
  .bottom_ul {
    display: flex;
    width: 60%;
  }
  .bottom_ul li {
    list-style: none;
    cursor: pointer;
    color: #fff;
    flex-grow: 1;
    font-size: 14px;
  }
  .bottom_right {
    position: absolute;  
    right: 70px;
    top: -1px;
    color: #fff;
    font-size: 15px;
  }
  .login_in {
    margin-right: 15px;
    cursor: pointer;
  }

   /* 响应式 */
  .sm_top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #202124;
    color: #fff;
    
  }
  .smTop_left {
    display: inline-block;
    width: 30%;
    padding-left:10px;
  }
  .smTop_left img{
    vertical-align: middle;
  }
  .smTop_right {
    float: right;
    padding-right: 10px;
    line-height: 56px;
  }
  .smTop_right i {
    margin-left: 15px;
    font-size: 24px;
  }
  .diago_bottom {
    background: #000;
  }
  .collapse_div {
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    border-top: 1px solid #999;
    padding: 0 10px;
  }
</style>

<style >
  .diago_bottom .el-collapse {
    border-color: #999;
  }
  .sm_dialog .el-dialog__header,.sm_dialog .el-dialog__body {
    padding: 0;
  }
  .sm_dialog .el-dialog {
    margin-top: 0!important;
  }
  .sm_dialog .el-collapse-item__header {
    width: 100%;
    background: #16171a;
    color: #fff;
    border-color: #999;
  }
  .sm_dialog .el-collapse-item__wrap {
    background: #666;
    border-color: #999;
  }
  .sm_dialog .el-collapse-item__content {
    color: #fff;
    padding: 0;
  }
  /* .el-row {npm 
    margin: 0!important;
  }
  .el-col {
    padding: 0!important;
  } */
 .banner_drawer .el-drawer__header {
   margin-bottom: 0;
 }
 .content .banner_top .el-input--mini .el-input__inner {
    background: #383e4d;
    border: none;
    color: #999;
    padding-right: 20px;
}
  .search_span .el-input {
    display: inline-block;
    width: 200px;
  }
  .banner_drawer .el-drawer {
    width: auto!important;
    padding-right: 20px;
  }
  .banner_drawer .el-cascader-panel.is-bordered {
    border: none;
  }
</style>

