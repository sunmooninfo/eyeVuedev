<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
             <div class="bgc_other">
                <div class="text_info text_info_gray">
                    <div class="content">
                        <h2>快速建站指南及相关服务</h2>
                        <div class="comtent_line">
                            <div class="comtent_info" v-for="(list,key) in list" :key="key">
                                <p class="info_p1">
                                    <span class="num">{{'0' + (key + 1)}}</span>
                                    <img v-if="key != 5" src="https://imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_setppc.svg" alt="">
                                </p>
                                <p class="info_p2">{{list.name}} </p>
                                <p class="info_p3">{{list.info}} </p>
                            </div>
                        </div>
                        <div class="content_menu">
                            <div class="con_menu_info" v-for="(list,key) in listSec" :key="key">
                                <p class="menu_p1">
                                    <img :src="list.img" alt="">
                                    <span>{{list.name}} </span>
                                </p>
                                <p class="menu_p2">{{list.text}} </p>
                                <p class="menu_p3"> 
                                    <span style="color:#f60;font-size:14px" v-if="list.pay">
                                         <span style="font-size:18px">{{list.pay}}</span> 元/年
                                    </span>
                                    <span v-if="list.pay" style="color:#f60;font-size:14px"> 起</span>
                                    <span v-else style="color:#f60;font-size:18px">免费</span>
                                    <span class="link">→</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="out_shadow out_shadow_gray">
                <div class="bottom_info bom_Fir">
                    <h2>快速建站指南及相关服务</h2>
                    
                    <div class="sm_comtent_line">
                        <div class="sm_comtent_info" v-for="(list,key) in list" :key="key">
                            <p class="info_p1">
                                <span class="num">{{'0' + (key + 1)}}</span>
                                <span class="name">{{list.name}} </span>
                            </p>
                            <p class="info_p3">{{list.info}} </p>
                        </div>
                    </div>
                </div>
                <div class="sm_content_menu">
                    <div class="con_menu_info" v-for="(list,key) in listSec" :key="key">
                        <p class="menu_p1">
                            <img :src="list.img" alt="">
                            <span>{{list.name}} </span>
                        </p>
                        <p class="menu_p2">{{list.text}} </p>
                        <p class="menu_p3"> 
                            <span style="color:#f60;font-size:14px" v-if="list.pay">
                                    <span style="font-size:18px">{{list.pay}}</span> 元/年
                            </span>
                            <span v-if="list.pay" style="color:#f60;font-size:14px"> 起</span>
                            <span v-else style="color:#f60;font-size:18px">免费</span>
                            <span class="link">→</span>
                        </p>
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
                activeName : '1' ,
                activeName_sec : '1' ,
                sm_activeName: '1',
                sm_activeName1: '1',
                list: [
                    {name: '域名注册',info: '挑选您的专属域名，多类型后缀可自主选择'},
                    {name: '选购建站服务及主机',info: '海量网站模板、弹性灵活云主机，一站式满足'},
                    {name: '域名解析',info: '将域名与主机IP地址对应，利于网站快速访问'},
                    {name: '网站备案',info: '快速初审、免费幕布、备案补偿的办理服务'},
                    {name: '部署域名证书',info: '加密数据传输安全、100%兼容性、提升搜索排名'},
                    {name: '网站上线',info: '专属于您的网站正式上线，后续管理简单便捷'},
                ],
                listSec: [
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service1.svg',
                        name: '域名注册',
                        text: '挑选您的专属的域名，让人们轻松记住您的网站.com/.cn/.net/.club/.xyz等多种后缀任选',
                        pay: '1'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service2.svg',
                        name: '选购网站服务',
                        text: '您可以在上方选择网站模板，可先体验后购买海量模板，无需开发，简单拖拽',
                        pay: '0'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service2.svg',
                        name: '选购云服务器',
                        text: '云服务器将用来存放您网站的图片、代码等信息，管理便捷，稳定可靠，弹性灵活，限时秒杀',
                        pay: '99'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service4.svg',
                        name: '域名解析',
                        text: '域名解析帮您将域名和主机IP地址对应起来，帮助人们访问到您网站的内容',
                        pay: '0'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service5.svg',
                        name: '网站备案',
                        text: '根据管局规定，使用大陆服务器开办网站必须进行备案，腾讯云为您提供免费快速备案服务',
                        pay: ''
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service6.svg',
                        name: 'SSL安全证书',
                        text: '部署SSL安全证书后，用户访问您的网站时可以看到加锁安全的标志，能向访客展示您的网站安全可靠',
                        pay: '0'
                    },
                ],
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
        margin: 20px 0 40px 0;
        font-size: 28px;
    }
    .comtent_line {
        display: flex;
    }
    .comtent_info {
        flex-grow: 1;
        text-align: left;
        width: 16%;
    }
    .info_p1 span.num {
        font-size: 28px;
        color: #34A4FC;
    }
    .info_p1 img {
        vertical-align: top;
        margin-top: 17px;
        width: 76%;
    }
    .info_p2 {
        font-size: 18px;
        margin: 15px 0 20px 0;
    }
    .info_p3 {
        color: #666;
        font-size: 14px;
        width: 94%;
    }
    .content_menu, .sm_content_menu{
        margin-top: 20px;
    }
    .con_menu_info {
        background: #fff;
        border: 1px solid #e5e5e5;
        width: 29%;
        display: inline-block;
        padding: 1%;
        text-align: left;
        margin-bottom: 20px;
        margin-right: 2%;
    }
    .menu_p1 {
        height: 30px;
        line-height: 30px;
    }
    .menu_p2 {
        margin: 20px 0;
        font-size: 14px;
    }
    .menu_p1 img {
        width: 32px;
    }
    .menu_p1 span {
        vertical-align: top;
    }
    .menu_p3 {
        height: 30px;
        line-height: 30px;
    }
    .menu_p3 .link {
        float: right;
        font-size: 28px;
        color: #666;
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
    .sm_comtent_line {
        padding: 20px 40px;
    }
    .sm_comtent_info {
        text-align: left;
    }
    .sm_comtent_info .info_p1 {
        line-height: 24px;
    }
    .sm_comtent_info .name {
        font-size: 18px;
        color: #222;
        vertical-align: top;
    }
    .sm_comtent_info .info_p3 {
        margin: 20px 0 30px 0;
        width: 100%;
    }
    .sm_content_menu {
        padding: 0 20px;
    }
     .sm_content_menu .con_menu_info {
        background: #fff;
        border: 1px solid #e5e5e5;
        padding: 20px;
        text-align: left;
        margin-bottom: 20px;
        width: 90%;
    }
</style>

