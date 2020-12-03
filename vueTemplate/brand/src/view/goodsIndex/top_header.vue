<template>
    <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" style="background: #f2f2f2;">
            <div class="PC_text_info">
                <el-row>
                    <el-col :span="24">
                        <div class="PC_top">
                            <div class="PC_topLeft">
                                <span>
                                    <i class="el-icon-s-home"></i>
                                    <span>首页</span>
                                </span>
                                <span>
                                    嗨，欢迎来到品牌网
                                </span>
                                <span>
                                    全国服务热线：
                                    <span style="color:#e00b0b">400-832-5988</span>
                                </span>
                            </div>
                            <div class="PC_topRight">
                                <span v-if="!showLogin" class="login" @click="goLogin">登录</span>
                                <span v-if="!showLogin" class="login" @click="goReg">注册</span>
                                <el-dropdown v-if="showLogin"  @command="handleCommand">
                                <span class="el-dropdown-link">
                                    {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>
                                <span>品牌商入口</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="middle">
                <div class="PC_text_info_sec">
                    <div class="PC_Link">
                        <span v-for="(item,index) in pc_list" :key="index">
                            {{item}}
                        </span>
                    </div>
                    <div class="PC_search">
                        <div class="PC_searchLeft">
                            <img src="./img/logo.png" alt="">
                        </div>
                        <div class="PC_searchCenter">
                            <el-input
                                class="PC_searchInput"
                                placeholder="请输入搜索内容"
                                suffix-icon="el-icon-search"
                                v-model="pc_search">
                            </el-input>
                            <el-button type="danger" class="pc_searchbtn">搜索</el-button>
                            <div>
                                热门品牌:
                                <span v-for="(item,index) in pc_hotlist" :key="index" style="color:#999">
                                    {{item}}
                                </span>
                            </div>
                        </div>
                        <div class="PC_searchRight">
                            <span class="pc_rightEr">
                                <img src="https://static.chinapp.com/home/img/wechatkf.jpg" alt="">
                                <span style="">客服微信号</span>
                            </span>
                            <span class="pc_rightEr">
                                <img src="https://static.chinapp.com/home/img/wx.jpg" alt="">
                                <span style="">关注公众号</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>

    </el-row>

</template>

<script>
// import { logOut } from '@/api/api'

export default {
  data () {
    return {
      pc_list: [
        '建材', '家具', '餐饮', '酒店', '教育', '母婴', '美容', '服装', '家纺'
      ],
      pc_hotlist: [
        '昂立教育',
        '世丰管材',
        '班贝格',
        '明超电缆',
        '蒙太奇'
      ],
      pc_search: '',
      userName: '',
      showLogin: true
    }
  },
  mounted () {
    let local = localStorage.getItem('nickName')
    console.log(local)
    if (local) {
      this.userName = local
      this.showLogin = true
    } else {
      this.userName = ''
      this.showLogin = false
    }
  },
  methods: {
    handleClick () {

    },
    goLogin () {
      this.$router.push({path: '/login'})
    },
    goReg () {
      this.$router.push({path: '/reg'})
    },
    handleCommand (command) {
    //   logOut().then(res => {
    //     if (res.data.errno === 0) {
      localStorage.removeItem('nickName')
      localStorage.removeItem('token')
      this.$message({
        message: '退出成功',
        center: true,
        type: 'success'
      })
      setTimeout(() => {
        this.$router.push({
          path: '/login'
        })
      }, 1000)
      // } else {
      //   this.$message.error(res.data.errmsg)
      // }
    //   })
    }
  }
}
</script>

<style scoped>
    .login:hover{
        cursor: pointer;
        color: #D90D26;
    }
    body {
        margin: 0;
    }
    .PC_text_info {
        width: 1200px;
        margin: 0 auto;
        background: #f2f2f2;
        height: 40px;
        /* text-align: center; */
    }
    .middle {
        background: #fff;
        height: 135px;
    }
    .PC_text_info_sec {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }
    .PC_top {
        font-size: 12px;
        color: #999;
        height: 40px;
        line-height: 40px;
    }
    .PC_topLeft {
        float: left;
    }
    .PC_topLeft>span {
        margin-right: 10px;
    }
    .PC_topRight {
        float: right;
    }
    .PC_topRight span {
        margin-left: 10px;
    }

    .PC_Link span {
        border-left:1px solid #ddd ;
        padding: 0 12px 0 16px;
        cursor: pointer;
    }
    .PC_Link span:nth-child(1) {
        border: none;
    }

    .PC_searchLeft {
        float: left;
    }
    .PC_searchLeft img {
        width: 200px;
    }
    .PC_searchCenter {
        width: 40%;
        display: inline-block;
    }
    .PC_searchInput {
        width: 70%;
    }
    /deep/ .PC_searchInput .el-input__inner {
        border: 2px solid #D90D26;
    }
    .pc_searchbtn {
        background: #D90D26;
        border-color: #D90D26;
        margin-left: -7px;
    }
    .PC_searchRight {
        float: right;
    }
    .PC_searchRight img {
        width: 60px;
    }
    .pc_rightEr {
        display: inline-block;
        margin-left: 10px;
    }
    .pc_rightEr span {
        display:block;
        line-height: 2px;
    }

    /deep/ .el-dropdown-link,/deep/.el-dropdown-menu__item {
        font-size: 12px;
        cursor: pointer;
    }
</style>
