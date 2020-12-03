<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="header">
                <p>一站式网站解决方案特惠</p>
            </div>
            <div class="bgc_other">
                <div class="text_info_other text_info">
                    <el-tabs type="border-card" class="index_fir_tabs" v-model="activeName">
                        <el-tab-pane  name="sec">
                            <span slot="label"><i class="el-icon-s-cooperation"></i> 专业定制建站</span>
                                <h1>专业定制建站特点</h1>
                                <div class="top">
                                    <div class="top_content" v-for="(list,key) in imgList_sec" :key="key">
                                        <img :src="list.img" alt="">
                                        <p class="content_title">{{list.title}} </p>
                                        <p class="content_text">{{list.text}} </p>
                                    </div>
                                </div>
                        </el-tab-pane>
                        <el-tab-pane  name="thir">
                            <span slot="label"><i class="el-icon-s-platform"></i> 自助开发建站</span>
                                <h1>自主开发建站特点</h1>
                                <div class="top">
                                    <div class="top_content" v-for="(list,key) in imgList_thir" :key="key">
                                        <img :src="list.img" alt="">
                                        <p class="content_title">{{list.title}} </p>
                                        <p class="content_text">{{list.text}} </p>
                                    </div>
                                </div>

                            </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div class="bgc" v-if="activeName == 'thir'">
                <div class="text_info">
                    <div class="content_menu">
                        <h1 style="margin-bottom:20px">自主建站产品</h1>
                        <p style="margin-bottom:20px;color:#666">以下为自主建站所需的云产品，您可以按需选择，灵活配置</p>
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
                                <span v-if="list.pay" style="font-size:14px"> 起</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgc" v-if="activeName == 'sec'">
                <div class="text_info">
                    <h1>精选定制服务</h1>
                    <div class="sec_content">
                        <div class="sec_info" v-for="(list,index) in info_sec" :key="index" :class="[index==3?'noR':'']">
                            <img class="top_img" :src="list.img" alt="">
                            <div class="bottom_padding">
                                <p class="sec_info_title">{{list.title}} </p>
                                <ul>
                                    <li v-for="(item,key) in list.liList" :key="key">
                                        <img src="//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_gou.svg" alt="">
                                        <span>{{item.info}} </span>
                                    </li>
                                </ul>
                                <p class="discount">
                                    <span>{{list.discount}} </span>
                                </p>
                                <p class="money">
                                    <span class="nowMoney">
                                        <span>{{list.nowCount}}</span>元
                                    </span>
                                    <span class="lastMoney">
                                        ¥<span>{{list.oldCount}}</span>
                                    </span>
                                </p>
                                <p class="btnList">
                                    <el-button type="primary" size="small">立即购买</el-button>
                                    <el-button size="small">立即咨询</el-button>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="header_mobile">
                <p>一站式网站解决方案特惠</p>
            </div>
            <div class="out_shadow_gray out_shadow">
                <div class="bottom_info">
                    <div class="sm_top">
                        <div class="sm_content">
                            <el-tabs type="border-card" class="index_fir_tabs sm_index_fir_tabs" v-model="activeName">
                                <el-tab-pane  name="sec">
                                    <span slot="label"> 专业定制建站</span>
                                        <h1>专业定制建站特点</h1>
                                        <div class="sm_top">
                                            <div class="sm_top_content" v-for="(list,key) in imgList_sec" :key="key">
                                                <img :src="list.img" alt="">
                                                <p class="content_title">{{list.title}} </p>
                                            </div>
                                        </div>
                                </el-tab-pane>
                                <el-tab-pane  name="thir">
                                    <span slot="label">自助开发建站</span>
                                        <h1>自主开发建站特点</h1>
                                        <div class="sm_top">
                                            <div class="sm_top_content" v-for="(list,key) in imgList_thir" :key="key">
                                                <img :src="list.img" alt="">
                                                <p class="content_title">{{list.title}} </p>
                                            </div>
                                        </div>

                                    </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>

            </div>
            <div class="out_shadow_white out_shadow" v-if="activeName == 'thir'">
                <div class="bottom_info">
                    <div class="sm_content_menu">
                        <h1 style="margin-bottom:20px">自主建站产品</h1>
                        <div class="sm_con_menu_info" v-for="(list,key) in listSec" :key="key">
                            <p class="menu_p1">
                                <img :src="list.img" alt="">
                                <span>{{list.name}} </span>
                            </p>
                            <p class="menu_p2">{{list.text}} </p>
                            <p class="menu_p3"> 
                                <span style="color:#f60;font-size:14px" v-if="list.pay">
                                    <span style="font-size:18px">{{list.pay}}</span> 元/年
                                </span>
                                <span v-if="list.pay" style="font-size:14px"> 起</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="out_shadow_white out_shadow" v-if="activeName == 'sec'">
                <div class="bottom_info">
                    <h1>精选定制服务</h1>
                    <div class="sm_sec_content">
                        <div class="sm_sec_info" v-for="(list,index) in info_sec" :key="index" :class="[index==3?'noR':'']">
                            <img class="top_img" :src="list.img" alt="">
                            <div class="bottom_padding">
                                <p class="sec_info_title">{{list.title}} </p>
                                <ul>
                                    <li v-for="(item,key) in list.liList" :key="key">
                                        <img src="//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_gou.svg" alt="">
                                        <span>{{item.info}} </span>
                                    </li>
                                </ul>
                                <p class="discount">
                                    <span>{{list.discount}} </span>
                                </p>
                                <p class="money">
                                    <span class="nowMoney">
                                        <span>{{list.nowCount}}</span>元
                                    </span>
                                    <span class="lastMoney">
                                        ¥<span>{{list.oldCount}}</span>
                                    </span>
                                </p>
                                <p class="btnList">
                                    <el-button type="primary" size="small">立即购买</el-button>
                                    <el-button size="small">立即咨询</el-button>
                                </p>
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
                activeName: 'sec',
                activeName_sm: 'sec',
                imgList_thir: [
                   {
                        img: 'https://main.qcloudimg.com/raw/434f3db1eb373cda888f934ffc6606a1.svg',
                        title: '自主开发，配置灵活',
                        text: '自主研发网站，享专属云资源，可按需选择，进行灵活配置',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/1e9b91bc7a2541ed49b7503f7ed2f0a0.svg',
                        title: '快速部署，按量付费',
                        text: '快速搭建，按实际使用量付费，为您有效节约成本',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/616859c380627df425811b97879155df.svg',
                        title: '全面防护，安全稳定',
                        text: '安全可靠，多重防护为您保障业务稳定性及数据安全',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/4d311fce60fab3ffbe84f680205755de.svg',
                        title: '随时扩容，弹性伸缩',
                        text: '配置灵活，云产品可随时升级扩容，弹性适配建站需求',
                    },
                ],
                imgList_sec: [
                   {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_order1.svg',
                        title: '设计师1v1服务',
                        text: '专属设计师一对一服务，拥有丰富案例经验积累，可帮助用户快速定位网站，设计满意为止',
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_order2.svg',
                        title: '量身定制，无需开发',
                        text: '专业客户经理全程跟进，紧密贴合您的定制需求，无需编写任何代码即可拥有定制网站',
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_order3.svg',
                        title: '多端适配，源码交付',
                        text: '一站式解决PC、手机、平板等多端、跨屏适配问题，上线成功服务商即交付源码',
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/ic_order4.svg',
                        title: '在线客服，终身售后',
                        text: '7*8小时在线客服，全程咨询指导，助您安心购物，更有终身售后保障免您后顾之忧',
                    },
                ],
                listSec: [
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service1.svg',
                        name: '云服务器',
                        text: '配置丰富，各种建站镜像灵活选择',
                        pay: '1'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service2.svg',
                        name: 'MYSQL',
                        text: '采用高性能SSD硬盘',
                        pay: '0'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service2.svg',
                        name: '选购云服务器',
                        text: '云服务器将用来存放您网站的图片',
                        pay: '99'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service4.svg',
                        name: '域名解析',
                        text: '帮助人们访问到您网站的内容',
                        pay: '0'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service5.svg',
                        name: '网站备案',
                        text: '使用大陆服务器开办网站必须进行备案',
                        pay: '12'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service6.svg',
                        name: 'SSL安全证书',
                        text: '可以看到加锁安全的标志',
                        pay: '0'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service6.svg',
                        name: 'web防火墙',
                        text: '智能拦截',
                        pay: '99'
                    },
                    {
                        img: '//imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/slice/fast-service6.svg',
                        name: 'COS资源包',
                        text: '智能拦截常见网络攻击',
                        pay: '12'
                    },
                ],
                info_sec: [
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2020/03/c099120792e9aeda4c0c666947b53fb4.jpg',
                        title: '企业官网功能定制',
                        liList: [
                            {info: '全网适配：响应式布局PC+移动+Pad+TV'},
                            {info: '强收录：新一代智能SEO，收录才计费'},
                            {info: '开放接口：免费对接三方ERP、OA等'},
                            {info: '全能型：H5展示、获客、电商、营销'},
                        ],
                        discount: '8折优惠',
                        nowCount: '1500',
                        oldCount: '2000'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/12/10d0c2cac53ec959f184e1d0dfe4702b.jpg',
                        title: '云定制官网',
                        liList: [
                            {info: '全网适配：响应式布局PC+移动+Pad+TV'},
                            {info: '强收录：新一代智能SEO，收录才计费'},
                            {info: '开放接口：免费对接三方ERP、OA等'},
                            {info: '全能型：H5展示、获客、电商、营销'},
                        ],
                        discount: '5折优惠',
                        nowCount: '2300',
                        oldCount: '3500'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2019/05/27a594dc2a2715f38d4e44318adef142.jpg',
                        title: '中小企业网站高端定制',
                        liList: [
                            {info: '全网适配：响应式布局PC+移动+Pad+TV'},
                            {info: '强收录：新一代智能SEO，收录才计费'},
                            {info: '开放接口：免费对接三方ERP、OA等'},
                            {info: '全能型：H5展示、获客、电商、营销'},
                        ],
                        discount: '15天上线',
                        nowCount: '999',
                        oldCount: '1500'
                    },
                    {
                        img: '//market-10039692.file.myqcloud.com/images/2020/05/48216b6df0cb6f8a6203a42134349776.jpg',
                        title: '云速官网|网站定制|网站建设',
                        liList: [
                            {info: '全网适配：响应式布局PC+移动+Pad+TV'},
                            {info: '强收录：新一代智能SEO，收录才计费'},
                            {info: '开放接口：免费对接三方ERP、OA等'},
                            {info: '全能型：H5展示、获客、电商、营销'},
                        ],
                        discount: '8折优惠',
                        nowCount: '1209',
                        oldCount: '1500'
                    }
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
    .header {
        height: 400px;
        background-image: url('https://imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/banner2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        min-width: 1200px;
        text-align: center;
        line-height: 400px;
    }
    .header p {
        color: #fff;
        font-size: 50px;
    }
    .header_mobile {
        height: 200px;
        background-image: url('https://imgcache.qq.com/open_proj/proj_qcloud_v2/event/2019/pc/website2/css/img/banner2x-mobile.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 200px;
    }
    .header_mobile p {
        color: #fff;
        font-size: 20px;
    }
    .bgc {
        background: #fff;
    }
    .text_info {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
        background: #fff;
        text-align: center;
        /* border-bottom: 3px solid #eee; */
    }
    .title , .bottom_info{
        /* min-width: 1000px; */
        text-align: center;
    }
    .content {
        display: flex;
        margin-top: 50px;
        padding: 20px;
    }
    .content_info {
        flex-grow: 1;
        width: 50%;
    }
    h1 {
        font-weight: normal;
        margin: 20px 0 40px 0;
    }
    .bgc_other, .bgc_other .text_info_other {
        background: #f7f8fa;
    }
    .bottom {
        text-align: center;
        padding: 30px 20px;
    }
    .bottom_content {
        margin-top: 30px;
        display: flex;
    }
    .b_content_info {
        flex-grow: 1;
        background: #fff;
        border: 1px solid #e5e5e5;
        width: 200px;
        padding: 25px 15px;
        text-align: left;
        margin-right: 20px;
    }
    .top  {
        display: flex;
        /* height: 200px; */
    }
    .top_content {
        flex-grow: 1;
        text-align: center;
        padding: 30px;
    }
    .top_content .content_title {
        margin: 15px 0;
        font-size: 18px;
    }
    .top_content .content_text {
        font-size: 14px;
        color: #666;
    }

    .content_menu, .sm_content_menu{
        margin-top: 20px;
    } 
    .con_menu_info {
        background: #fff;
        border: 1px solid #e5e5e5;
        width: 20%;
        display: inline-block;
        padding: 1%;
        text-align: left;
        margin-bottom: 20px;
        margin-right: 2%;
        vertical-align: top;
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
    .sec_content {
        display: flex;
    }
    .sec_info {
        flex-flow: 1;
        text-align: left;
        width: 24%;
        border: 1px solid #e5e5e5;
        margin-right: 1%;
    }
    .noR {
        margin-right: 0;
    }
    .sec_info ul li {
        list-style: none;
        color: #666;
        font-size: 12px;
        margin-bottom: 5px;
    }
    .sec_info .top_img {
        width: 100%;
    }
    .sec_info_title {
        margin: 15px 0 10px 0;
    }
    .bottom_padding {
        padding: 0 10px 20px;
    }
    
    .discount span {
        border: 1px solid #FF9D00;
        color: #FF9D00;
        padding: 2px 5px;
        font-size: 12px;
    }
    .money {
        text-align: center;
        padding-top: 15px;
        border-top: 1px dotted #e5e5e5;
        margin: 20px 0;
    }
    .nowMoney {
        color: #f60;
        font-size: 14px;
        margin-right: 15px;
    }
    .nowMoney span {
        font-size: 18px;
    }
    .lastMoney {
        font-size: 14px;
        color: #666;
        text-decoration:line-through;
    }
    .btnList {
        text-align: center;
    }
    /* 响应式 */
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
    .sm_top_content {
        display: inline-block;
        width: 50%;
        margin-bottom: 30px;
    }
    .sm_top_content img {
        width: 40px;
        margin-bottom: 10px;
    }
    .sm_top_content .content_title {
        font-size: 14px;
        color: #666;
    }
    .sm_content_menu {
        padding: 0 10px;
    }
    .sm_con_menu_info {
        background: #fff;
        border: 1px solid #e5e5e5;
        width: 87%;
        display: inline-block;
        padding: 20px;
        text-align: left;
        margin-bottom: 20px;
        vertical-align: top;
    }
    .sm_sec_content {
        padding: 0 20px;
    }
    .sm_sec_info {
        text-align: left;
        width: 100%;
        border: 1px solid #e5e5e5;
        margin-bottom: 20px;
    }
    .sm_sec_info ul li {
        list-style: none;
        color: #666;
        font-size: 12px;
        margin-bottom: 5px;
    }
    .sm_sec_info .top_img {
        width: 100%;
    }
    .sec_info_title {
        margin: 15px 0 10px 0;
    }
</style>
<style>
    .index_fir_tabs {
        box-shadow: none;
        border: none;
        position: relative;
    }
    .index_fir_tabs .el-tabs__header {
        position: absolute;
        width: 100%;
        top: -20px;
        height: 40px;
        line-height: 40px;
    }
    .index_fir_tabs .el-tabs__nav{
        float: none;
        /* display: flex; */
        justify-content: space-between;
        text-align: center;
        background: #383e4e;
        /* position: absolute; */
    }
    .index_fir_tabs .el-tabs__item {
        /* flex-grow: 1; */
        width: 250px;
        /* margin: 0 20px; */
        border: none;
        font-size: 18px;
        color: #fff!important;
    }
    .sm_index_fir_tabs .el-tabs__item{
        width: 50%;
    }
    .index_fir_tabs .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
     .index_fir_tabs.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
         color: #fff;
        background-color: #409EFF;
        border: none;
     }
   .index_fir_tabs .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
   }
   .index_fir_tabs .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-left: none;
   }
   .index_fir_tabs .el-tabs__content {
       background: #f7f8fa;
   }
</style>
