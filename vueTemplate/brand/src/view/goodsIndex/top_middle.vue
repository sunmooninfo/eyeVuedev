<template>
    <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" style="background: #D90D26;">
            <div class="PC_text_info">
                <el-row>
                    <el-col :span="24">
                        <div class="content">
                            <div class="content_left">
                                <div class="lfD_img">
                                    <img :src="brand.picUrl" alt="">
                                </div>
                                <div class="lfD_text">
                                    <div>{{brand.name}}</div>
                                    <div>
                                        <img src="https://static.chinapp.com/home/img/newbrand-label1.png" alt="">
                                        <img src="https://static.chinapp.com/home/img/newbrand-label2.png" alt="">
                                        <img src="https://static.chinapp.com/home/img/newbrand-label3.png" alt="">
                                    </div>
                                    <div>
                                       {{brand.company}}
                                    </div>
                                </div>
                            </div>
                             <div class="content_right">
                                 <ul>
                                     <li class="active">品牌首页</li>
                                     <li>品牌招商</li>
                                     <li>品牌资讯</li>
                                     <li>企业信息</li>
                                     <li>品牌特惠</li>
                                 </ul>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>

    </el-row>

</template>

<script>
import { getDetail } from '@/api/api'
export default {
  data () {
    return {
      pc_search: '',
      brand: ''
    }
  },
  props: {
    id: String
  },
  created () {
    this.getDetail()
  },
  methods: {
    handleClick () {

    },
    getDetail () {
      getDetail({'id': this.id}).then(res => {
        if (res.data.errno === 0) {
          this.brand = res.data.data.brand
        } else {
          this.$message.error(res.data.errmsg)
        }
      })
    }
  }
}
</script>

<style scoped>
    .PC_text_info {
        width: 1200px;
        margin: 0 auto;
        background: #D90D26;
        height: 40px;
        /* text-align: center; */
    }
    .content {
        height: 90px;
        display: flex;
    }
    .content_left {
        padding-top: 7px;
    }
    .content_left,.content_right {
        display: inline-block;
        /* width: 48%; */
        flex-grow: 1;
        vertical-align: top;

    }
    .lfD_img,.lfD_text {
        display: inline-block;
        vertical-align: top;
    }
    .lfD_text {
        margin-left: 5px;
    }
    .lfD_img img {
        width: 150px;
    }
    .content_right ul {
        margin: 0;
        text-align: right;
    }
    .content_right ul li{
        list-style: none;
        display: inline-block;
        height: 90px;
        line-height: 90px;
        padding: 0 10px;
        color: #fff;
        cursor: pointer;
    }
    .active {
        background: #c10202;
    }
    .lfD_text div:nth-child(1) {
        color: #fff;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .lfD_text div:nth-child(3) {
        color: #fff;
        font-size: 12px;
    }
</style>
