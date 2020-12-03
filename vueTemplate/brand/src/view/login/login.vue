<template>
  <div class="container">
    <div>
      <div class="login">
      <div style="border-bottom: 2px solid #ccc;padding:1.5rem">
        <span class="l-title">欢迎登陆浪博数据</span>
        <span>还没账号？</span>
        <span style="color: red;" @click="goReg">马上注册</span>
      </div>
      <div class="l-tab" style="text-align: center">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="普通账号登陆" name="first">
            <div style="padding: 1.5rem">
              <el-input v-model="dataForm.uname" placeholder="用户名"></el-input>
              <el-input style="margin-top: 1rem" v-model="dataForm.upawd" type="password" placeholder="登陆密码"></el-input>
            </div>
            <div class="elbtn">
              <el-button @click="login">立即登陆</el-button>
            </div>
            <div style="margin-top:1.8rem">
              忘记密码了，<span style="color: red;">点击找回</span>
            </div>
            <!-- <div style="font-size: 20px;color: #333;margin-top: 35px;">
              ————第三方登陆————
            </div>
            <div style="display: flex;justify-content:space-between;padding:3rem">
              <img width="48px" src="../../assets/qq.png" alt="">
              <img width="48px" src="../../assets/微信.png" alt="">
              <img width="48px" src="../../assets/微博.png" alt="">
            </div> -->
          </el-tab-pane>
          <el-tab-pane label="手机动态密码登陆" name="second">
            123
          </el-tab-pane>
        </el-tabs>
      </div>
      <div></div>
    </div>
      <!-- <img width="100%" height="100%" src="../../assets/banner1.jpg" alt=""> -->
    </div>
  </div>
</template>
<script>
import { uLogin } from '@/api/login/login'
export default {
  data () {
    return {
      activeName: 'first',
      dataForm: {
        uname: '',
        upawd: ''
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    goReg () {
      this.$router.push({path: '/reg'})
    },
    login () {
      const data = {
        username: this.dataForm.uname,
        password: this.dataForm.upawd
      }
      uLogin(data).then(res => {
        if (res.data.errno === 0) {
          // setLocalStorage({
          //   Authorization: res.data.data.token,
          //   avatar: this.userInfo.avatarUrl,
          //   nickName: this.userInfo.nickName
          // })
          localStorage.setItem('nickName', res.data.data.userInfo.nickName)
          localStorage.setItem('token', res.data.data.token)
          this.$message({
            message: '登陆成功',
            center: true,
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push({
              path: '/'
            })
          }, 1000)
        } else {
          this.$message({
            message: `${res.data.errmsg}`,
            center: true
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.elbtn /deep/ .el-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 9px 100px;
  font-size: 20px;
  border-radius: 4px;
}
.l-tab /deep/ .el-tabs__item {
    padding: 0 48px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    color: #999999;
    position: relative;
}
.l-tab /deep/ .el-tabs__item:hover {
    color: #000000;
    cursor: pointer;
}
.l-tab /deep/ .el-tabs__item.is-active {
    color: #000000;
}
.l-tab{
  margin-top 1rem
}
.l-tab /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 0;
    border-left: 0;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
}
.l-tab /deep/ .el-tabs--card>.el-tabs__header {
    /* border-bottom: 1px solid #E4E7ED; */
}
.l-tab /deep/ .el-tabs--card>.el-tabs__header {
    border-bottom: 0
}
.l-tab /deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 0;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.l-title{
  font-size: 22px;
  margin-right: 20px;
}
.login{
  width: 440px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 0 30px 30px 30px;
  position: absolute;
  // top: 50%;
  left:calc(50% - 250px)
  top calc(50% - 268px)
  // left: 50%;
}
.container{
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  // height 100px
  // width 100px
  background-image url('../../assets/banner1.jpg')
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  line-height: 1.42857143;
  color: #333;
}
</style>
