<template>
  <div class="nav">
    <el-row class="nav-test">
      <el-col :xl="8" :lg="8" :sm="24" class="logo-left">
       <div class="logo-box">
         <img src="../../assets/logo.png" class="logo-img">
       </div>
      </el-col>
      <el-col :xl="16" :lg="16" :sm="24" class="logo-right">
        <div class="nav-box">
          <router-link :to="item.router" v-for="(item,index) in routerList">
            <div class="nav-item" @click="inColor(index)" @mouseover="mouseColor(index)" @mouseleave="outColor"  :class="[colorIndex == index?'changeItem': '']">
              <span>
                <span>{{item.tit}}</span><br/>
                <span class="itemSubtit" :class="[colorIndex == index?'changeColor': '']" >{{item.engtit}}</span>
              </span>
            </div>
          </router-link>


        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return{
       routerList:[
         {
           router:'/home',
           tit:'公司首页',
           engtit:'HOME'
         },
         {
           router:'/about',
           tit:'关于我们',
           engtit:'ABOUT'
         },
         {
           router:'/profeclass',
           tit:'专业课程',
           engtit:'COURSES'
         },
         {
           router:'/adobe',
           tit:'Adobe认证',
           engtit:'CERTIFICATION'
         },
         {
           router:'/contact',
           tit:'联系我们',
           engtit:'ANT'
         }
       ],
        colorIndex: 0,
        currentIndex:0
      }

    },
    methods: {
      inColor(index) {
        this.currentIndex=index;
      },
      mouseColor(index){
        this.colorIndex = index;
      },
      outColor() {
        this.colorIndex = this.currentIndex;
      }
    }

  }
</script>

<style scoped>
.nav-test{
  z-index: 2;
}
.logo-box{
  height: 123px;
  vertical-align: middle;
  display: flex;
  justify-content:center;
  align-items: center;
}
.logo-left{
  background: url("../../assets/nav/nav-left.png") no-repeat;
}
.logo-right{
  background: url("../../assets/nav/nav-right.png") no-repeat;
  background-size: cover;
}
.logo-img{
  width: 230px;
  height: 64px;
}
.nav-box{
  height: 123px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 70px;
}
.nav-item{
  width: 140px;
  height: 114px;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 0  15px;
}
.itemSubtit{
  font-size: 14px;
}
.changeItem{
  background: url("../../assets/nav/图层 7.png") no-repeat center center;
  color: #fff;
}
.changeColor {
  color: #ff9900
}
</style>
