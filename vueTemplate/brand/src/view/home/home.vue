/* eslint-disable no-unused-vars */
<template>
<div  class="container">
  <el-row>
    <el-col :xs="0" :sm="24" >
      <div>
        <div class="head">
          <img style="width: 100%" src="../../assets/back.jpg" alt="">
        </div>
        <div class="body">
        <div class="title">
          <i class="line"></i>
          <span class="goods">浪博</span>
          <span class="goods_">物资统计可视化</span>
          <i class="line"></i>
          </div>
          <div class="search">
            <el-input
              placeholder="请输入公司名称"
              v-model="listQuery.company"
              clearable>
            </el-input>
            <el-button style="margin-left: 2rem" @click="search" >点击搜索</el-button>
          </div>
          <div class="detail" v-for="(item, i) in list" :key="i">
            <div class="goodsname">
              <div class="No" v-if="i<3">
                <img :src="item.smImg" alt="">
              </div>
              <div class="No" v-if="i>=3">
                <div class="num">{{i+1}}</div>
                <!-- <img src="../../assets/1.png" alt=""> -->
              </div>
              <div class="detail_img">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="container_2">
                <div style="display: flex;justify-content: space-between;padding-bottom: .5rem;">
                  <div class="company">
                    <span class="first">{{item.name}}</span>
                    <span class="second">{{item.company}}</span>
                  </div>
                  <!-- <div style="display:flex;align-items: center;">
                    <div><img src="../../assets/hot.png" width="32px" alt=""></div>
                    <div style="line-height: 30px;color: #666;font-size: 16px;">排名指数：</div>
                    <div style="color: #f39800;margin-left: 8px;font-weight: 700;">{{item.num}}</div>
                  </div> -->
                </div>
                <div class="txt">{{item.brief}}</div>
                <div class="btn">
                  <el-button @click="goDetails(item.id)">品牌店铺</el-button>
                  <el-button style="margin-left: .5rem">品牌官网</el-button>
                  <el-button style="background: #cccccc;margin-left: .5rem">品牌招商</el-button>
                </div>
              </div>
              <div class="bigbtn">
                <el-button @click="goDetails(item.id)" style="margin-left: 2rem;margin-top: 2rem;" >品牌介绍</el-button>
              </div>
            </div>
          </div>
          <div class="footbtn">
            <el-button type="danger" round>查看更多榜单+</el-button>
          </div>
          <div class="service">
            <div class="text">以上获奖品牌可通过网站底部 服务热线 /服务QQ 联系我们<br>领取奖杯和荣誉证书</div>
            <img style="margin: 36px auto" src="https://static.chinapp.com/home/img/brand-details-qq-chat.png" alt="">
            <img src="https://static.chinapp.com/home/img/brand-details-gold.jpg?=20200303" alt="">
          </div>
          <div class="title">
            <div>
              <i class="line"></i>
              <span class="media ">媒体支持</span>
              <i class="line"></i>
            </div>
            <div style="margin-top: 1.8rem">
              <img class="logoimg" v-for="(item, i) in 10" :key="i" style="width: 108px" src="https://static.chinapp.com/home/img/img_meiti1.png" alt="">
            </div>
            <div >
              <img class="logoimg" v-for="(item, i) in 10" :key="i" style="" src="https://static.chinapp.com/home/img/img_meiti1.png" alt="">
            </div>
          </div>
        </div>
        <div class="foot" style="padding-bottom: 3rem">
          <el-row>
            <el-col :span="24">
              <div class="about">
                <div>关于我们</div>
                <div>品牌服务</div>
                <div>认证查询</div>
                <div>服务声明</div>
                <div>联系我们</div>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center" style="padding-top: 2rem">
            <el-col :span="7" style="border-right: 1px solid #fff">
              <div style="margin-top: 2rem;margin-left: 1rem;">
                <img width="266px" height="90px" src="https://static.chinapp.com/home/img/newbrand-index-9.png" alt="">
              </div>
            </el-col>
            <el-col :span="7" style="display:flex;justify-content: center;border-right: 1px solid #fff;border:right: 1px solid #fff">
              <div>
                <img style="width: 120px;height: 120px; padding:1rem" src="https://static.chinapp.com/home/img/phone.png" alt="">
                <div style="text-align:center;font-size: 16px;color:#fff">浏览器手机版</div>
              </div>
              <div>
                <img style="width: 120px;height: 120px;padding:1rem" src="https://static.chinapp.com/home/img/phone.png" alt="">
                <div style="text-align:center;font-size: 16px;color:#fff">关注公众号</div>
              </div>
            </el-col>
            <el-col :span="7" style="text-align: center;">
              <div class="color">400-832-5988</div>
              <div style="display: flex;justify-content: center;padding:.5rem">
                <img width="20px" height="20px" src="../../assets/phone.png" alt="">
                <div style="margin-left:.5rem;color: #fff">服务热线（周一至周六 9:00-20:00）</div>
              </div>
              <div class="color">400-832-5988</div>
              <div style="display: flex;justify-content: center;padding:.5rem">
                <img width="20px" height="20px" src="../../assets/phone.png" alt="">
                <div style="margin-left:.5rem;color: #fff">服务热线（周一至周六 9:00-20:00）</div>
              </div>
            </el-col>
          </el-row>
          <div class="icp" style="text-align:center;color:#fff;font-size: 14px">
            <div>ICP证号：粤ICP备17136434号-4 如有意见请反馈或投诉等情况</div>
            <div>CopyRight 2005-2020 中国品牌网（www.chinapp.com）未经授权 禁止复制转载 版权所有</div>
            <div>免责声明： 评选结果由中国品牌网大数据结合专业考评与消费问卷调查三项综合评定，仅供参考。</div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="0" >
        <div class="head">
          <img style="width: 100%" src="../../assets/back.jpg" alt="">
        </div>
        <div class="m-body" >
          <div class="company">
            <div class="comname">浪博</div>
            <div class="ttex">物资统计可视化</div>
          </div>
          <div class="m-container-d" v-for="(item,i) in list" :key="i">
            <div class="m-detail">
              <img v-if="i < 3" :src="item.smImg" alt="">
              <div class="m-num" v-if="i >= 3">{{ i+1 }}</div>
              <div class="m-com">{{item.name}}</div>
              <div class="m-comn">{{item.company}}</div>
            </div>
            <div class="m-de-com">
              <img style="padding:.5rem" width="70px" height="35px" :src="item.picUrl" alt="">
              <div>
                <div style="color: #666666;font-size:12px">品牌指数：<span style="color:#f39700;margin-left: 0.14rem;font-weight:700">{{item.num}}</span></div>
                <div style="height: 35px;">{{item.brief}}</div>
              </div>
            </div>
            <div class="m-btn">
              <el-button>品牌店铺</el-button>
              <el-button>品牌官网</el-button>
              <div  class="m-mybtn">品牌招商</div>
            </div>
          </div>
          <div class="m-footbtn">
            <el-button type="danger" round>查看更多榜单+</el-button>
          </div>
          <div class="m-qq">
            <div class="m-pho">
              <p>以上获奖品牌可通过<br>
              服务热线:400-832-5988<br>
              服务QQ:85926368<br>
              联系我们领取奖杯和荣誉证书</p>
            </div>
            <div style="text-align: center">
              <img width="90px" style="margin: 1rem auto" src="https://static.chinapp.com/mobile/img/m-brand-details-chat.png" alt="">
            </div>
            <div style="text-align: center">
              <img width="90%" src="https://static.chinapp.com/mobile/img/m-brand-details-goldp.png?=20200303" alt="">
            </div>
          </div>
          <div class="m-qq">
            <div class="title" style="padding-top:1.5rem;margin-bottom: 1px">
              <div>
                <i class="line"></i>
                <span class="media" style="font-size: 16px">媒体支持</span>
                <i class="line"></i>
              </div>
              <div style="margin-top: 1.8rem">
                <img class="m-logoimg" v-for="(item, i) in 20" :key="i" style="width: 64px" src="https://static.chinapp.com/home/img/img_meiti1.png" alt="">
              </div>
            </div>
          </div>
          <div class="m-footer">
            <p>CopyRight2005-2020中国品牌网</p>
            <p>（m.chinapp.com）版权所有</p>
          </div>
        </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import { getList } from '@/api/login/login'
export default {
  data () {
    return {
      list: [],
      listQuery: {
        page: 1,
        limit: 10,
        company: ''
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    goDetails (id) {
      this.$router.push({
        path: '/goodsIndex/index',
        query: {name: id}
      })
    },
    getList () {
      getList(this.listQuery).then(res => {
        let arr = [Img1, Img2, Img3]
        let num = 3
        if (res.data.data.list.length > 3) {
          num = 3
        } else {
          num = res.data.data.list.length
        }
        for (let i = 0; i < num; i++) {
          res.data.data.list[i].smImg = arr[i]
        }
        this.list = res.data.data.list
      })
    },
    search () {
      this.getList()
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-footer{
  margin-top 1rem
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom 1rem
}
.m-qq{
  box-shadow: 1px 3px 8px #ccc;
  padding-bottom .5rem
}
.m-pho{
  text-align: center;
  color: #fc6634;
  font-size: 12px;
  text-align: center;
  padding-top 1rem
}
.m-num{
  width:1.8rem;
  text-align: center;
  color: #f06431;
  font-weight 700
}
.m-container-d{
  padding-bottom 1rem
  border-bottom 1px solid #eee
}
.m-mybtn{
  border: 1px solid #eee;
  padding-top: 1px;
  padding-bottom: 2px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 4px;
  color: #666666;
}
.m-btn{
  display flex
  justify-content space-between
  margin-top .6rem
}
.m-btn /deep/ .el-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #fc6634;
  color: #fc6634;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 6px;
}
.m-de-com{
  display flex
  overflow: hidden;
  font-size 12px
  // white-space: nowrap;
  // text-overflow: ellipsis;
  color #999999
}
.m-comn{
  font-size 12px
  color #999999
}
.m-com{
  font-size 14px
  color #333
  margin-left .5rem
}
.m-body{
  padding: 0 .8rem;
  overflow: hidden;
  height: auto;
  background: #fff;
}
.m-detail{
  display flex
  align-items center
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top .5rem
}
.m-detail img{
  width 1.8rem
  // height 1rem
}
.ttex{
  font-size: 12px;
  color: #666666;
  margin: 0.06rem 0;
}
.comname{
  font-size: 18px;
  color: #bf3134;
  font-weight: 600;
}
.company{
  text-align center
}
.search{
  display flex
  text-align center
  width 600px
  margin 0 auto
  margin-bottom 3rem
}
.search el-button{
  margin-left 3rem
}
.icp div{
  padding-top .5rem
}
.color{
  color: rgb(255, 115, 1);
  text-align: center;
  font-size 28px
  font-weight 600
  background: -webkit-linear-gradient(45deg, #fbd999, #fbbb5a, #fbd999, #fbbb5a, #fbd999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding:.5rem
}
.about div{
  display: block;
  color: #fff
  float: left;
  text-align: center;
  font-size: 18px
}
.about{
  display flex
  justify-content space-between
  padding-left 13rem
  padding-right 13rem
  padding-top 1rem
  padding-bottom 1rem
  border-bottom 1px solid #fff
}
.foot{
  background #333
}
.logoimg{
  width: 108px
  border 1px solid #eee
  margin 3px
}
.m-logoimg{
  width: 108px
  // border 1px solid #eee
  margin 3px
}
.media{
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333;
  text-align: center;
}
.service{
  margin-top 3rem
  text-align center
}
.text{
  font-size: 30px;
  color: #f39700;
  font-weight: 600;
  line-height: 50px;
  text-align center
}
.footbtn{
  text-align center
}
.m-footbtn{
  margin-top 1rem
  text-align center
  margin-bottom 1rem
}
.footbtn /deep/ .el-button{
  border-radius: 40px;
  padding: 16px 46px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #bf3134;
  border: 1px solid #DCDFE6;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  font-size: 18px;
}
.m-footbtn /deep/ .el-button{
  border-radius: 40px;
  padding: 8px 15px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fc6634;
  border: 1px solid #DCDFE6;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  font-size: 12px;
}
.footbtn /deep/ .el-button:hover{
  background #ef2626
}
.m-footbtn /deep/ .el-button:hover{
  background #ef2626
}
.num{
  font-size 22px
  font-weight 700
  color #f06431
  margin: 12px 15px;
}
.detail:hover{
  box-shadow: 1px 1px 8px #d6d6d6;
}
.bigbtn /deep/ .el-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #f39700;
  border: 1px solid #dcdfe6;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 8px 20px;
  font-size: 24px;
  border-radius: 4px;
}
.btn{
  padding-top .4rem
}
.btn /deep/ .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #e00b0b;
    border: 1px solid #DCDFE6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.txt{
  color: #666;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.container_2{
  margin-left: 27px;
  width: 680px;
}
.company>.first{
  font-size: 24px;
  color: #333;
  font-weight: 600;
  max-width: 290px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  float: left;
}
.company>.second{
  color: #666;
  font-size: 16px;
  margin-left: 26px;
  display: block;
  float: left;
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 34px;
}
// .company span {

// }
.detail_img img{
  width: 204px
  height: 106px
  box-sizing: border-box
  border: 1px #eeeeee solid
}
.No{
  margin: 25px 12px;
}
.No img {
  height: 50px;
  width: 40px;
}
.detail{
  border: 1px #eeeeee solid
  display: flex
  align-items: center
  padding: 24px 0
  margin: 0 auto 30px auto
  justify-content: space-between;
}
.goodsname{
  display flex
}
.container{
  width 100%
}
.body{
  width 1200px
  height auto
  margin 0 auto
  overflow: hidden
}
.title {
  text-align center
  margin: 54px 0
}
.goods{
  color: #bf3134
  font-size: 34px
  font-weight: 600
  margin: 0 14px
}
.goods_{
  color: #666
  font-size: 16px
  margin-right: 14px
}
.line{
  display inline-block
  width 76px
  height .8px
  background #cccccc
  vertical-align middle
}
</style>
