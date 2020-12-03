<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
             <div class="bgc">
                <div class="text_info">
                    <div class="content">
                        <h2>客户精品案例</h2>
                        <div class="content_info">
                            <el-carousel indicator-position="outside" height="240px">
                                <el-carousel-item v-for="(item,index) in imgList" :key="index">
                                    <img class="sm_img" v-for="(list,key) in item.imgMenu" :key="key" :src="list.img" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div class="bottom_content">
                    <h2>更多热门活动</h2>
                        <div class="bottom_info_content">
                            <div class="info_con_menu" v-for="(list,key) in infoList" :key="key">
                                <img class="ab_img" :src="list.img" alt="">
                                <p class="menu_fir">
                                    <span class="fir_title">{{list.title}} </span>
                                    <span class="fir_pay">{{list.pay}} </span>
                                </p>
                                <p class="menu_sec">{{list.text}} </p>
                                <el-button class="payButton">立即抢购</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="out_shadow out_shadow_white">
                <div class="bottom_info bom_Fir">
                     <div class="sm_content">
                        <h2>客户精品案例</h2>
                        <div class="sm_content_info">
                            <el-carousel :interval="4000" type="card" height="150px">
                                <el-carousel-item v-for="(item,index) in sm_imgList" :key="index">
                                    <img class="IMG_menu" :src="item.img" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div class="sm_bottom_content">
                        <h2>更多热门活动</h2>
                        <div class="sm_bottom_info_content">
                            <div class="sm_info_con_menu" v-for="(list,key) in infoList" :key="key">
                                <img class="ab_img" :src="list.img" alt="">
                                <p class="menu_fir">
                                    <span class="fir_title">{{list.title}} </span>
                                    <span class="fir_pay">{{list.pay}} </span>
                                </p>
                                <p class="menu_sec">{{list.text}} </p>
                                <el-button class="payButton">立即抢购</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [
                    {
                        imgMenu: [
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/dc3e2135a813e9ca304bee6ddcfbd806.jpg'},
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/867434750a84f2785a6c569ac5901fcb.png'},
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/402341332d66a7f060b5017ce6565b96.jpg'},
                        ]
                    },
                    {
                        imgMenu: [
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/8c1ec4d96b8a19d569c372a0c6e5ee41.jpg'},
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/3dc927d93557eea873be2a06b7b076d9.jpg'},
                            {img: '//market-10039692.file.myqcloud.com/images/2019/11/404e67ee827fd09c52c041416002340b.jpg'},
                        ]
                    },
                ],
                sm_imgList: [
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/dc3e2135a813e9ca304bee6ddcfbd806.jpg'},
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/867434750a84f2785a6c569ac5901fcb.png'},
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/402341332d66a7f060b5017ce6565b96.jpg'},
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/8c1ec4d96b8a19d569c372a0c6e5ee41.jpg'},
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/3dc927d93557eea873be2a06b7b076d9.jpg'},
                    {img: '//market-10039692.file.myqcloud.com/images/2019/11/404e67ee827fd09c52c041416002340b.jpg'},
                ],
                infoList: [
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/11/114fc373b2d752f0a59c7dce7d293d90.png',
                        title: '商标注册、续展、延伸 一站式服务',
                        pay: '低至270元起',
                        text: '免费咨询+特惠补贴，疫情期间助您足不出户保护品牌'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/11/9978442a6d96923a10383cbb1b792d77.png',
                        title: 'DNSPod 新春特惠活动',
                        pay: '超值域名低至 1 元',
                        text: '暖心代金券大礼包'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/11/d1295ecdd623d9db825e9247c5ffd89a.png',
                        title: '域名限时特惠',
                        pay: '.club域名1元购',
                        text: '买域名就送证书和解析'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/11/375258b62d6ce897a1d1c63f398241da.png',
                        title: '小程序普惠节',
                        pay: '全场1元起',
                        text: '无需购买即可体验编辑后台，百套经典模版可选'
                    },
                ]

            }
        },
        methods: {
            handleClick() {

            },
        }
    }
</script>

<style scoped>
    .bgc {
        background: #fff;
    }
    .bgc_other {
        background: #f7f8fa;
        padding-top: 40px;
    }
    .text_info {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
        background: #fff;
        text-align: center;
        /* border-bottom: 3px solid #eee; */
    }
    .text_info_gray {
        background: #f7f8fa;
    }
    h2 {
        font-weight: normal;
        margin: 20px 0;
        font-size: 28px;
    }
    .content_info {
        margin-top: 40px;
    }
    .sm_img {
        width: 32%;
        margin-right: 1%;
    }
    .info_con_menu {
        border: 1px solid #e5e5e5;
        display: inline-block;
        width: 41%;
        padding: 2% 5% 2% 2%;
        text-align: left;
        position: relative;
        margin-bottom: 20px;
        margin-right: 1%;
    }
    .ab_img {
        position: absolute;
        width: 128px;
        right: 0;
        top: 9px;
    }
    .menu_fir {
        font-size: 18px;
    }
    .menu_fir .fir_title {
        color: #000;
        font-weight: bold;
        margin-right: 10px;
    }
    .fir_pay {
        color: #FF6000;
    }
    .menu_sec {
        color: #666;
        margin:5px 0 15px 0;
    }
    .payButton {
        color: #00A4FF;
        width: 120px;
    }
    /* 响应式 */
    .bottom_info {
        padding: 30px 0px 0 0;
        text-align: center;
    }
    .out_shadow {
        box-shadow: 0 4px 4px 0 rgba(3,27,78,.06);
        padding-bottom: 1px;
        /* margin-bottom: 20px; */
    }
    .out_shadow_white {
        background: #fff;
    }
    .out_shadow_gray {
        background-color: #f7f8fa;
    }
    .sm_bottom h2 {
        font-weight: normal;
        margin-bottom: 20px;
    }
    .IMG_menu {
        width: 100%;
    }
    .sm_bottom_info_content {
        padding: 15px 10px;
    }
    .sm_info_con_menu {
        border: 1px solid #e5e5e5;
        display: inline-block;
        padding: 2% 5% 2% 2%;
        text-align: left;
        position: relative;
        margin-bottom: 20px;
        margin-right: 1%;
        width: 93%;
    }
    .sm_info_con_menu .ab_img {
        width: 80px;
        z-index: 100;
    }   
    .sm_info_con_menu .menu_fir {
        font-size: 16px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width:300px;
    }
    .sm_info_con_menu .menu_sec {
        font-size: 12px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: 280px;
    }
</style>

