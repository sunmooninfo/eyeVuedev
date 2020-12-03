<template>
    <div class="top-root">
<!--      头部-->
        <div class="com-nav">
          <div class="mp-logo mp">
            <a href="#">
              <img src="../../assets/img/cloud-logo.svg" alt="云市场">
            </a>
          </div>
          <div class="mp-search mp">
            <div class="search-main">
              <div class="search-main-goal">
                <el-input class="search-input" size="large"
                  placeholder="请输入关键字"
                  v-model="input2"
                  clearable>
                  <template slot="append"><el-button class="btn" type="primary" icon="el-icon-search"></el-button></template>
                </el-input>
              </div>
            </div>
            <div class="search-main-content">
              <ul>
                <li><a href="">商标注册（特惠上新）<el-divider direction="vertical"></el-divider></a> </li>

                <li><a href="">微盟·表单（限时免费）<el-divider direction="vertical"></el-divider></a></li>

                <li><a href="">域名 <el-divider direction="vertical"></el-divider></a></li>
                <li><a href="">网站建设 <el-divider direction="vertical"></el-divider></a></li>
                <li><a href="" class="search-last">小程序</a></li>
              </ul>
            </div>
          </div>
          <div class="mp-board">
            <a href="#">
              <img src="../../assets/img/input.jpg" alt="618年中大促">
            </a>
          </div>
        </div>
<!--       中部 -->
      <div class="com-header">

        <div class="com-top">
         <div class="com-content">
           <div class="com-left">
             <div class="fenlei">
               <a href="#">商品分类</a>
             </div>
             <div class="menu-list">
                <div>
                  <a href="#">小程序</a><a href="#">电商零售</a><a href="#">餐饮外卖</a>
                </div>
               <div>
                 <a href="#">网站建设</a><a href="#">企业官网</a><a href="#">电商网站</a>
               </div>
               <div>
                 <a href="#">基础软件</a><a href="#">运行环境</a><a href="#">操作系统</a>
               </div>
               <div>
                 <a href="#">专家服务</a><a href="#">企业服务</a><a href="#">上云迁移</a>
               </div>
               <div>
                 <a href="#">企业应用</a><a href="#">办公管理</a><a href="#">销售管理</a>
               </div>
               <div>
                 <a href="#">安全</a><a href="#">应用安全</a><a href="#">网络安全</a>
               </div>
               <div>
                 <a href="#">API服务</a><a href="#">电子商务</a><a href="#">生活服务</a>
               </div>
             </div>
           </div>
           <div class="com-right">
             <div class="fenlei-list">
               <ul>
                 <li><a href="#">小程序</a></li>
                 <li><a href="#">网站建设</a></li>
                 <li><a href="#">基础软件</a></li>
                 <li><a href="#">办公软件</a></li>
                 <li><a href="#">企业服务</a></li>
                 <li><a href="#">API服务</a></li>
                 <li><a href="#">物联网</a></li>
                 <li><a href="#">臻选计划</a></li>
                 <li> <i class="el-icon-s-opportunity"></i> <a href="#">成功案例</a></li>
               </ul>
             </div>

             <div class="show-content">
               show
             </div>


           </div>
         </div>

          <!--        轮播-->
        <div class="Carousel">
            <el-carousel :interval="5000" arrow="always" height="320px">
              <el-carousel-item v-for="item in urls" :key="item.imgs">
                <a href="#">
                  <img :src="item.imgs" alt="">
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>

        </div>


      </div>
<!--      下部-->
      <div class="bottom-img">
        <div v-for="i in imgs" :key="i.img">
          <div class="img-item" :style="{backgroundImage:'url('+i.img+')'}">
            <div id="cell">
              <h2>循环content</h2>
              <p>这是循环的si数据</p>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Top",
        data(){
          return{
            input2:"",
            urls:[
              {
                imgs:require('../../assets/img/carousel.jpg'),
              },
              {
                imgs:require('../../assets/img/carousel-1.jpg'),
              },
              {
                imgs:require('../../assets/img/carousel-2.jpg'),
              },
              {
                imgs:require('../../assets/img/carousel-3.jpg'),
              },
              {
                imgs:require('../../assets/img/carousel-4.jpg'),
              }

            ],
            imgs:[
              {
                img:require('../../assets/img/mp-index-1.png'),
              },
              {
                img:require('../../assets/img/mp-index-2.png'),
              },
              {
                img:require('../../assets/img/mp-index-3.png'),
              },
              {
                img:require('../../assets/img/mp-index-4.png'),
              },
            ],
          }
        },
    }
</script>

<style scoped>
/*logo头部样式*/
    *{
      box-sizing: border-box;

    }
    .top-root{
      width: 100%;
      background-color: white;
    }
    ul{
      list-style: none;
    }
    a{
      text-decoration: none;
    }
    .com-nav{
      width: 1200px;
      margin: 70px auto 30px;
      /*padding: 48px 0 32px;*/
      height: 80px;
      /*border: 1px solid red;*/
    }
    .com-nav .mp{
      float: left;
    }
    .mp-board{
      text-align: right;
      position: relative;
      bottom: 14px;
    }
/*-------------------------*/
    .search-main-content ul li{
      float: left;
      margin: 0 0 0 10px;
    }
    .search-main-content>ul>li:last-child:after{
      color: red;
    }
    .search-main .search-main-goal{
        width: 590px;
    }
    .search-input .btn{
      background-color: dodgerblue;
      /*border: #409EFF;*/
      border-radius: 0;
      height: 46px;
      color: white;
      font-size: 20px;
    }
    .mp-search{
      padding-left: 40px;
    }
    .mp-board img{
      width: 240px;

    }
    /*.btn >>> .el-button{*/
    /*  background-color: #409EFF;*/
    /*}*/
    .search-main-content a{
      font-size: 12px;
      color: #999;
      transition: color .15s;
    }
    .search-input >>> input.el-input__inner {
      border-radius: 0;
      border: 2px solid dodgerblue;
      height: 46px;
    }
/*    中部样式*/
    .com-top{
      width: 100%;
      height: 370px;
      position: relative;
    }
    .com-content{
      width: 1200px;
      height: 370px;
      /*border: 1px solid black;*/
      margin: 0 auto;
      display: flex;
    }
    .com-content .com-left{
        flex: 25%;
        /*background-color: red;*/
    }
    .com-content .com-right{
        flex: 100%;
      display: flex;
      flex-direction: column;
    }
    .com-content .com-right .fenlei-list{
      /*flex-basis: 20%;*/
      z-index: 100;

    }
   .com-content .com-right .show-content{
     /*border: 1px solid red;*/
     background-color: white;
     flex-basis: 100%;
     z-index: 100;
     display: none;
    }


    .com-top .fenlei-list ul{
      line-height: 50px;
      margin-left: 20px;
    }
    .com-top .fenlei-list ul li{
      float: left;
      margin: 0 15px;
    }
    .com-top .fenlei-list ul li a{
      color: black;
    }
    .com-top .fenlei-list ul li:last-child a{
      color: #999999;
    }
    .com-top .fenlei-list ul li:last-child a:hover{
      color: black;
    }
    .com-top .fenlei-list ul li a:hover{
      color: dodgerblue;
    }
    .com-top .fenlei-list ul li i{
      color: yellow;
    }
    .fenlei a{
      color: white;
      font-weight: bold;
    }

    .com-top .com-left{
      /*border: 1px solid pink;*/

      display: flex;
      flex-direction: column;
    }
    .com-left .fenlei{
      background-color: #2A303B;
      padding: 15px;
    }
    .com-left .menu-list{
      flex-basis: 100%;
      background-color: rgba(0,0,0,.4);
      z-index: 100;
      display: flex;
      flex-direction: column;
    }
    .com-left .menu-list:active .show-content{
      display: block;
    }
    .com-left .menu-list>div{
      flex-basis: 100%;
      /*border: 1px solid black;*/
      margin: 5px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

    }
    .com-left .menu-list>div:hover{
      background-color: white;
    }
    .com-left .menu-list>div:hover a{
      color: black;
    }
    .com-left .menu-list>div>a:hover{
      color: gray;
    }
    .com-left .menu-list>div>a{
      color: white;
      font-size: 15px;

    }

/*    轮播图*/
    .Carousel{
      width: 100%;
      height: 100%;
     position: absolute;
      top: 50px;
      left: 0;
      /*z-index: 1000;*/
    }
    .el-carousel__item img {
      width: 100%;
      height: 350px;
      display: inline-block;
    }

/*-------------下部----------*/
    .bottom-img{
      /*border: 1px solid red;*/
      width: 1200px;
      height: 110px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
    }
    .bottom-img div{
      flex-basis: 22%;
      height: 100%;
      /*border: 1px solid red;*/
      background-size: 100% 100%;
      position: relative;
    }
    .bottom-img div:hover{
      -webkit-filter: grayscale(100%);filter: grayscale(100%);
    }
    .bottom-img .img-item>div{
      padding: 26px 0 26px 20px;
      color: white;
    }
.bottom-img .img-item>div>h2{
    margin-bottom: 5px;
}







</style>
