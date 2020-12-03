<template>
    <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="PC_text_info">
                <div class="top">
                    <div>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>品牌大全</el-breadcrumb-item>
                        <!-- <el-breadcrumb-item>净水器</el-breadcrumb-item> -->
                        <el-breadcrumb-item>{{brand.name}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="content">
                        <div class="left">
                            <img :src="brand.picUrl" alt="">
                        </div>
                        <div class="right">
                            <ul>
                                <li class="li_block " style="font-size: 20px;font-weight: bold;color:rgb(51, 51, 51)">{{brand.name}}</li>
                                <li class="li_block">
                                    <span class="li_name">所属公司:</span>
                                    <span>{{brand.company}}</span>
                                </li>
                                <li>
                                    <span class="li_name">法定代表人:</span>
                                    <span>{{brand.representative}}</span>
                                </li>
                                <li>
                                    <span class="li_name">电话:</span>
                                    <span>{{brand.telephone}}</span>
                                </li>
                                <li>
                                    <span class="li_name">品牌发源地:</span>
                                    <span>{{brand.birthplace}}</span>
                                </li>
                                <li>
                                    <span class="li_name">品牌创立时间:</span>
                                    <span>{{brand.brandCreationTime}}</span>
                                </li>
                                <li class="li_block">
                                    <span class="li_name">主营产品:</span>
                                    <span>{{brand.product}}</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="top_sec">
                    <img :src="brand.introduceImage" alt="">
                    <div class="fons-size:20px;font-weight: bold;color:rgb(51, 51, 51)">{{brand.name}}</div>
                    <!-- {{brand.detail}} -->
                    <div v-html="brand.detail" class="sec_text"></div>
                </div>
                <div class="top_third" v-if="merchants">
                    <div class="third_top border_top">
                        <span>品牌招商</span>
                        <!-- <span>查看更多></span> -->
                    </div>
                    <div class="third_content">
                        <div class="con_top">
                            <div class="left">
                                <img :src="merchants.picUrl" alt="">
                            </div>
                            <div class="right">
                                <div class="d1">{{merchants.name}}
                                    <span>认证</span>
                                    <el-button class="downLoad" type="danger" size="small" @click="downLoad">免费索要资料</el-button>
                                </div>
                                <div class="d2">（{{merchants.company}}）</div>
                                <div class="d3">
                                    <span>员工人数：{{merchants.employeesNumber}}</span>
                                    <span>日产量：{{merchants.dailyOutput}}</span>
                                    <span>库存量：{{merchants.inventory}}</span>
                                    <span>行业：{{merchants.business}}</span>
                                </div>
                                <div class="d4">
                                    招商简介：{{merchants.brief}}
                                </div>
                            </div>
                        </div>
                        <div class="con_bom">
                            <span>热线电话：{{merchants.telephone}}</span>
                            <!-- <el-button type="danger" size="mini">点击查看</el-button> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="top_four">
                     <div class="four_top border_top">
                        <span>品牌网店</span>
                    </div>
                    <div class="four_content">
                        <div class="four_item" v-for="(item,index) in list" :key="index" :class="[index % 2 ==1 ?'marR':'']">
                            <div class="item_name">
                                <img src="https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg" alt="">
                                <div class="name_right">
                                    <p>官方旗舰店</p>
                                    <div>
                                        <img src="https://static.chinapp.com/home/img/shop3.png" alt="">
                                        <span>天猫</span>
                                    </div>
                                </div>
                                <div class="right_link">
                                    <span>进店逛逛 ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
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
      list: [
        {
          url: 'https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg'
        },
        {
          url: 'https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg'
        },
        {
          url: 'https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg'
        },
        {
          url: 'https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg'
        },
        {
          url: 'https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg'
        }
      ],
      brand: '',
      merchants: ''
    }
  },
  props: {
    id: String
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    handleClick () {

    },
    getDetail () {
      getDetail({'id': this.id}).then(res => {
        if (res.data.errno === 0) {
          this.brand = res.data.data.brand
          this.merchants = res.data.data.merchants
        } else {
          this.$message.error(res.data.errmsg)
        }
      })
    },
    downLoad () {
      var data = 'https://wwwapidev.6eye9.com/langbo/storage/download?key=' + this.merchants.data
      window.open(data)

    //   downLoad({'key': this.merchants.data}).then(res => {
    //     // if (res.data.errno === 0) {
    //     //   this.brand = res.data.data.brand
    //     //   this.merchants = res.data.data.merchants
    //     // } else {
    //     //   this.$message.error(res.data.errmsg)
    //     // }
    //   })
    }
  }
}
</script>

<style scoped>
    .PC_text_info {
        /* width: 100%; */
        width: 1200px;
        margin: 0 auto;
    }
    .top {
        background: #fff;
        padding: 15px;
    }
    .content {
        margin-top: 10px;
    }
    .content .left {
        display: inline-block;
        width: 25%;
        border: 1px solid #ddd;
    }
    .content .left img {
        width: 100%;
    }
    .content .right {
        display: inline-block;
        width: 73%;
        vertical-align: top;
    }
    .content .right ul {
        margin: 0;
        padding-left: 15px;
    }
    .content .right ul li {
        list-style: none;
        display: inline-block;
        width: 49%;
        font-size: 14px;
        margin-bottom: 1px;
        color: rgb(102, 102, 102);;
        margin-bottom: 11px;
    }
    .content .right ul li.li_block {
        display: block;
    }
    .li_name {
        margin-right: 5px;
    }

    /* ~~~~~~~ */
    .top_sec {
        min-height: 250px;
    }
    .top_sec,.top_third,.top_four {
        background: #fff;
        padding: 15px;
        margin-top: 15px;
    }
    .top_sec img {
        float:left;
        margin: 0 15px 15px 0;
    }
    .top_sec .sec_text {
        font-size: 14px;
        text-indent: 2em;
    }

    /* ~~~~~~ */
    .border_top {
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        border-left: 5px solid #E00B0B;
    }
    .border_top span:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
    }
    .border_top span:nth-child(2) {
        float: right;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
    .con_top {
        margin-top: 15px;
    }
    .con_top .left {
        display: inline-block;
        width: 20%;
        border: 1px solid #ddd;
    }
    .con_top .left img {
        width: 100%;
        height: 110px;
    }
    .con_top .right{
        display: inline-block;
        width: 78%;
        vertical-align: top;
        margin-left: 1%;
    }
    .right .d1{
        font-size: 20px;
        font-weight: bold;
    }
    .con_top .d1 span {
        font-size: 12px;
        background: yellowgreen;
        color: #fff;
        padding:0 5px;
    }
    .right .d1 .downLoad {
        float: right;
    }
    .con_top .d2 {
        color: rgb(153, 153, 153);
        margin: 5px 0;
        font-size: 14px;
    }
    .con_top .d3 span{
        font-size: 14px;
        margin-right: 25px;
    }
    .con_top .d4 {
        font-size: 14px;
        margin-top: 5px;
    }
    .con_bom {
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #efefef;
        margin-top: 10px;
    }

    /* ~~~~~~~~~~~ */
    .four_item {
        display: inline-block;
        width: 47%;
        border: solid 1px #efefef ;
        padding: 1%;
        height: 50px;
        margin-bottom: 10px;
    }
    .marR {
        margin-left: 1%;
    }
    .four_content {
        margin-top: 10px;
    }
    .four_item .item_name>img {
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
    }
    .name_right {
        display: inline-block;
        margin-left: 10px;
    }
    .name_right p {
        font-size: 14px;
        margin-top: 0;
    }
    .name_right div span {
        font-size: 14px;
    }
    .right_link {
        float: right;
        margin-top: 15px;
        border: solid 1px #e00b0b;
        color: #e00b0b;
        font-size: 14px;
        padding: 3px 5px;
        cursor: pointer;
    }
</style>
