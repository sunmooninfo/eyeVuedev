<template>
  <div :class="{header:isbground, 'header1':bground}">
      <div>{{header[0].name}}</div>
      <div>专栏</div>
      <div>问答</div>
      <div>沙龙</div>
      <div>快讯</div>
      <div>团队主页</div>
      <div>开发者手册</div>
      <div>智能钛AI</div>
      <div>更多</div>
      <div>
        <el-input
          placeholder="请输入搜索内容"
          v-model="search">
          <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
        </el-input>
      </div>
      <div>
        <el-button type="primary">写文章</el-button>
      </div>
      <div>
        <el-button class="bgbutton">提问</el-button>
      </div>
      <!-- <div>{{header}}</div> -->
      <p>
        <span>登陆</span>·<span>注册</span>
      </p>
    </div>
</template>

<script>
export default {
  props:{
      header:{
        type:Array,
        required:true,//必填
      },
    },
  data(){
    return{
      search: '',
      bground: true,
      isbground: false
    } 
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
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
  }
  
}
</script>

<style scoped>
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
    background: #2b303b;
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
</style>