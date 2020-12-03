<template>
    <div>
      <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" :span="4">
          <!--------------------正常屏幕显示-------------------->
          <div class="study">
            <div class="study-box">
              <div class="study-top">
                <h3>学习资料</h3>
                <div class="houzhui"> <span>视频课程</span></div>
              </div>
              <div class="study-bottom">
                  <div>
                    <img src="../../assets/img/video-01.png" alt="">
                    <div class="xiao">
                      <p>小程序云开发基础</p>
                    </div>
                  </div>
                <div>
                    <img src="../../assets/img/video-02.png" alt="">
                    <div class="xiao">
                      <p>小程序·云开发技术应用的架构演进与实践</p>
                    </div>
                  </div>
                <div>
                    <img src="../../assets/img/video-01.png" alt="">
                    <div class="xiao">
                      <p>用云开发实时数据库，打造生动的小程序和小游戏</p>
                    </div>
                  </div>
                <div>
                    <img src="../../assets/img/video-01.png" alt="">
                    <div class="xiao">
                      <p>小程序·云开发实战：搭建小程序订阅消息系统</p>
                    </div>
                  </div>
                <div>
                  <img src="../../assets/img/video-02.png" alt="">
                  <div class="xiao">
                    <p>小程序·云开发实战：SCRM社交化客户管理小程序</p>
                  </div>
                </div>
                <div>
                  <img src="../../assets/img/video-02.png" alt="">
                  <div class="xiao">
                    <p>从0到1快速开发电商小程序</p>
                  </div>
                </div>
                <div>
                  <img src="../../assets/img/video-02.png" alt="">
                  <div class="xiao">
                    <p>小游戏开发之路</p>
                  </div>
                </div>
                <div>
                  <img src="../../assets/img/video-02.png" alt="">
                  <div class="xiao">
                    <p>小游戏云开发实战</p>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <!--------------------小屏显示------------------------->
          <div class="study-bottom-xs">
            <div>
              <img src="../../assets/img/video-01.png" alt="">
              <div class="xiao-xs">
                <p>小程序云开发基础</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-02.png" alt="">
              <div class="xiao-xs">
                <p>小程序·云开发技术应用的架构演进与实践</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-01.png" alt="">
              <div class="xiao-xs">
                <p>用云开发实时数据库，打造生动的小程序和小游戏</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-01.png" alt="">
              <div class="xiao-xs">
                <p>小程序·云开发实战：搭建小程序订阅消息系统</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-02.png" alt="">
              <div class="xiao-xs">
                <p>小程序·云开发实战：SCRM社交化客户管理小程序</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-02.png" alt="">
              <div class="xiao-xs">
                <p>从0到1快速开发电商小程序</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-02.png" alt="">
              <div class="xiao-xs">
                <p>小游戏开发之路</p>
              </div>
            </div>
            <div>
              <img src="../../assets/img/video-02.png" alt="">
              <div class="xiao-xs">
                <p>小游戏云开发实战</p>
              </div>
            </div>

          </div>

        </el-col>
      </el-row>


    </div>

</template>

<script>
    export default {
        name: "Centre"
    }
</script>

<style scoped>
  .study-bottom>div:hover {
    transform: translateY(-10px);
    box-shadow: 1px 1px 6px #ccc;
  }
  /*-----------------------------------------------------*/
  .study{
    background-color: white;
    width: 100%;
  }
 .study .study-box{
    width: 80%;
    margin: 0 auto;
    padding: 50px 0px;

  }
 .study-top{
    text-align: center;

  }
 .study-top h3{
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .study-top .houzhui span{
    margin: 0 30px;
  }
 .study-top .houzhui:before{
    content: '';
    height: 1px;
    width: 400px;
    border-top: 1px solid #ccc;
    display: inline-block;

  }
  .study-box .study-top .houzhui:after{
    content: '';
    height: 1px;
    width: 400px;
    border-top: 1px solid #ccc;
    display: inline-block;
  }
  .study-bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .study-bottom>div{
    border: 1px solid rgba(0,0,0,0);
    flex-basis: 20%;
    box-shadow: 1px 1px 3px #ccc;
    margin-bottom: 20px;
    transition: all 1s;
    overflow: hidden;
    white-space: pre-wrap;
    /*overflow: hidden;*/
    text-overflow: ellipsis;
  }
  .study-bottom img{
    width: 100%;
  }
  .study-bottom>div .xiao{
    height: 50px;
    font-size: 16px;
    line-height: 26px;
  }

/*  ----------小屏样式---------------------*/
  .study-bottom-xs>div:hover{
    transform: translateY(-10px);
    box-shadow: 1px 1px 6px #ccc;
  }
  .study-bottom-xs{
    display: flex;
    flex-wrap: wrap;
  }
  .study-bottom-xs>div img{
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
  }
  .study-bottom-xs>div>div{
    width: 100%;
    height: 100px;
    line-height: 50px;

  }
  .study-bottom-xs>div{
    /*flex-basis: 100%;*/
    height: 200px;
    margin-bottom: 20px;
    transition: all 1s;
  }
</style>
