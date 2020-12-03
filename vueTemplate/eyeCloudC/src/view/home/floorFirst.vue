<template>
        <el-row :gutter="10" >
            <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="bgc">
                    <div class="text_info">
                        <div class="title">
                            <h1>满足最苛刻软件和服务需求的云市场</h1>
                            <div class="info">围绕中小企业初创、发展、成长周期，精选行业优质服务商，提供一站式经营服务</div>
                        </div>
                        <div class="bottom_info">
                            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                <el-tab-pane label="初创期" name="first">
                                    <span slot="label"> 
                                        <span class="tab_header">初创期</span>
                                        <span>高效省心创立公司</span>
                                    </span>
                                    <div class="content">
                                        <div class="left_show">
                                            <p class="showP1">初创期</p>
                                            <p class="showP2">
                                                专家1v1咨询与服务，为您提供定制化解决方案，助力新手高效完成公司创立第一步。
                                            </p>
                                        </div>
                                        <div class="right_show">
                                        <div class="rs_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList" :key="index"  :class="[index == 0 || index == 1 ? 'marB': '', {'active':list.active}]">
                                            <p>
                                                <span class="l_title">{{list.name}}</span>
                                                <span class="r_span">{{list.title}}</span>
                                            </p>
                                            <p class="con_text"> {{list.text}} </p>
                                            <p class="con_money">¥<span> {{list.pay}} </span></p>
                                        </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane  label="发展期" name="second">
                                    <span slot="label"> 
                                        <span class="tab_header">发展期</span>
                                        <span>精准定位企业展示</span>
                                    </span>
                                    <div class="content">
                                        <div class="left_show">
                                            <p class="showP1">发展期</p>
                                            <p class="showP2">
                                                精选高性价比网站建设、小程序开发等配套服务，无需编程即可快速拥有企业专属官网。
                                            </p>
                                        </div>
                                        <div class="right_show">
                                        <div class="rs_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList1" :key="index"  :class="[index == 0 || index == 1 ? 'marB': '', {'active':list.active}]">
                                            <p>
                                                <span class="l_title">{{list.name}}</span>
                                                <span class="r_span">{{list.title}}</span>
                                            </p>
                                            <p class="con_text"> {{list.text}} </p>
                                            <p class="con_money">¥<span> {{list.pay}} </span></p>
                                        </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="成长期" name="third">
                                    <span slot="label"> 
                                        <span class="tab_header">成长期</span>
                                        <span>数据驱动营销推广</span>
                                    </span>
                                    <div class="content">
                                        <div class="left_show">
                                            <p class="showP1">成长期</p>
                                            <p class="showP2">
                                                企业数字化运营必备，提供用户触达、内容制作等丰富营销工具，精准定位目标客群，轻松玩转自营销。
                                            </p>
                                        </div>
                                        <div class="right_show">
                                        <div class="rs_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList2" :key="index"  :class="[index == 0 || index == 1 ? 'marB': '', {'active':list.active}]">
                                        <p>
                                            <span class="l_title">{{list.name}}</span>
                                            <span class="r_span">{{list.title}}</span>
                                        </p>
                                        <p class="con_text"> {{list.text}} </p>
                                        <p class="con_money">¥<span> {{list.pay}} </span></p>
                                        </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                        <div class="bottom_text">
                            <p>与云市场众多优秀第三方服务供应商合作，
                                <br>
                                为您提供 <span>50+</span> 品类，超过 <span>6.7K+</span>商品，以更多的选择满足不同的业务需求
                            </p>
                            <div class="b_imageList">
                                <div v-for="(list, index) in imgList" :key="index" >
                                    <span class="b_imageList_d" @mouseover="selectSpan(list)"  @mouseout="outSpan(list)" :class="{'active':list.active}">
                                        <img :src="list.img" alt="">
                                        <span class="img_text">{{list.text}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p class="bottom_a">
                            <a href="">查看所有市场服务</a> 
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col  :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                <div class="out_shadow">
                    <div class="title">
                        <h2>丰富的第三方服务</h2>
                    </div>
                    <div class="sm_content_tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="初创期" name="first">
                                <div class="sm_tab_info">
                                    <div class="sm_tab_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList" :key="index"  :class="[{'active':list.active}]">
                                        <p>
                                            <span class="l_title">{{list.name}}</span>
                                            <span class="r_span">{{list.title}}</span>
                                        </p>
                                        <p class="con_text"> {{list.text}} </p>
                                        <p class="con_money">¥<span> {{list.pay}} </span></p>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="发展期" name="second">
                                <div class="sm_tab_info">
                                    <div class="sm_tab_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList1" :key="index"  :class="[{'active':list.active}]">
                                        <p>
                                            <span class="l_title">{{list.name}}</span>
                                            <span class="r_span">{{list.title}}</span>
                                        </p>
                                        <p class="con_text"> {{list.text}} </p>
                                        <p class="con_money">¥<span> {{list.pay}} </span></p>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="成长期" name="third">
                                <div class="sm_tab_info">
                                    <div class="sm_tab_content" @mouseover="selectStyle(list)" @mouseout="outStyle(list)" v-for="(list, index) in itemList2" :key="index"  :class="[{'active':list.active}]">
                                        <p>
                                            <span class="l_title">{{list.name}}</span>
                                            <span class="r_span">{{list.title}}</span>
                                        </p>
                                        <p class="con_text"> {{list.text}} </p>
                                        <p class="con_money">¥<span> {{list.pay}} </span></p>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-col>
        </el-row>
</template>

<script>
    export default {
        data() {
            return {
                'itemList': [
                    {
                        'name': '新手创业顾问',
                        'title' : '专业顾问',
                        'text' : '助力新手0基础创业，让企业快速起步。含创业核名1次、创业咨询1次、初创企业资料包1套。',
                        'pay': 1
                    },
                    {
                        'name': '特惠logo设计',
                        'title' : '提供源文件',
                        'text' : ' 有效提升企业品牌形象，提供1款设计方案及设计源文件，若不满意可修改一次。 ',
                        'pay': 500
                    },
                    {
                        'name': '浪博云智服',
                        'title' : '免费用一年',
                        'text' : ' 浪博官方推出的专业云客服 SaaS 系统，致力于帮助企业/团队一键搭建自己的客服平台。 ',
                        'pay': 0
                    },
                    {
                        'name': '企业法律咨询',
                        'title' : '法律顾问',
                        'text' : ' 专业解决各类企业相关法律疑难杂症，完善的线上服务体系，快速响应、快速跟进。 ',
                        'pay': 199
                    },
                ],
                'itemList1': [
                    {
                        'name': '智能速成网站',
                        'title' : '会PPT就会建站',
                        'text' : ' PC+手机+公众号+小程序，满足全行业建站需求，超大网页空间，预置千套精美建站模板。 ',
                        'pay': 1
                    },
                    {
                        'name': '企业官网小程序',
                        'title' : '无序代码',
                        'text' : ' 后台行业模板自由选择，一键安装即可使用，快速上线企业专属形象展示小程序。  ',
                        'pay': 49
                    },
                    {
                        'name': '零售门店小程序',
                        'title' : '新零售',
                        'text' : '覆盖周边五公里，有效拓展销售渠道。平台统一管理聚集流量，门店独立管理个性化经营。  ',
                        'pay': 199
                    },
                    {
                        'name': '电商首页设计',
                        'title' : '专业顾问1v1',
                        'text' : '千款首页模版选择，分类任选，当日下单当日完成，最快一小时出稿。',
                        'pay': 500
                    },
                ],
                'itemList2': [
                    {
                        'name': '企业400电话',
                        'title' : '返券',
                        'text' : '  限时特惠，包含来电欢迎词、一号多线、通话录音、IVR 智能语音导航等丰富增值功能。 ',
                        'pay': 12
                    },
                    {
                        'name': '短信营销平台',
                        'title' : '群发短信',
                        'text' : ' 为您提供极速触达的短信服务：群发短信+触发短信，双管齐下；营销/通知短信一键发送。 ',
                        'pay': 129
                    },
                    {
                        'name': 'H5营销自动化平台',
                        'title' : '显示免费',
                        'text' : '  包括翻页长页 H5、短视频、小程序等，助力企业开展数字化精准营销。  ',
                        'pay': 0
                    },
                    {
                        'name': '企业400电话',
                        'title' : '在线操作',
                        'text' : ' 提供企业介绍短视频制作等视频营销服务，软件小白也能快速完成视频制作。  ',
                        'pay': 1
                    },
                ],
                imgList: [
                    {
                        img: 'https://main.qcloudimg.com/raw/e0d02d6cfa8b46c4bab9bdb6db0252a5.svg',
                        text: '小程序'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/a42444ea8caf92e13944c7fc435fe607.svg',
                        text: '网站建设'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/f6a2caf590c18c5d04306260c5185273.svg',
                        text: '基础软件'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/4f90e9e60812bbc8ed75ce3e12cdccf3.svg',
                        text: '专家服务'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/a8fc23089537147b136403b687557cec.svg',
                        text: '企业应用'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/5e60c656bca78f795dfc506cdb4d0f5f.svg',
                        text: '安全'
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/ffdef33c968329749533cbd2221f7f51.svg',
                        text: 'API服务'
                    },
                ],
                activeName: 'first'
                
            }
        },
        methods: {
            handleClick() {

            },
            selectStyle (item) {
                this.$set(item,'active',true);
            },
            outStyle (item) {
                this.$set(item,'active',false);
            },
            selectSpan (item) {
                this.$set(item,'active',true);
            },
            outSpan (item) {
                this.$set(item,'active',false);
            },
        }
    }
</script>

<style scoped>
.bgc {
    background: #fff;
}
.text_info {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    padding-bottom: 20px;
}
.title , .bottom_info{
    /* min-width: 1000px; */
    text-align: center;
}
.title {
    padding-top: 40px;
}
.title h1,.title h2 {
    font-weight: normal;
}
.title .info {
    margin-top: 20px;
    font-size: 18px;
}
.bottom_info {
    /* padding: 0 15%; */
    /* width: 70%;
    margin: 0 auto; */
    margin-top: 50px;
}
.tab_header {
    display:block;
    font-size: 20px;
}
.bottom_info .content {
    /* display: flex; */
    height: 310px;
    text-align: left;
}
.bottom_info .content .left_show {
    /* flex-grow: 1; */
    display: inline-block;
    width: 250px;
    height: 100%;
    background-image: url(../../assets/left_bg.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 20px;
    margin-right: 15px;
    vertical-align: top;
}
.bottom_info .content .left_show .showP1 {
    text-align: left;
    font-size: 30px;
    margin-bottom: 15px;
}
.bottom_info .content .right_show {
    display: inline-block;
    /* width: 70%; */
    width: 890px;
    height: 100%;
}
.bottom_info .content .right_show .rs_content {
    /* width: 46%; */
    width: 405px;
    border: 1px solid #E5E8ED;
    border-radius: 2px;
    padding: 20px 15px;
    display: inline-block;
    cursor: pointer;
}
.bottom_info .content .right_show .rs_content.active {
    box-shadow: 2px 2px 8px 0px #E5E8ED;
}
.bottom_info .content .right_show .rs_content.active .l_title {
    color: #00a4ff
}
.bottom_info .content .right_show .rs_content.marB {
    margin-bottom: 15px;
} 
.bottom_info .content .right_show .rs_content .r_span {
    float: right;
    font-size: 12px;
    border: 1px solid #e5e8ed;
    padding: 2px 6px;
    color: #999;
}
.bottom_info .content .right_show .rs_content .con_text {
    font-size: 14px;
    color: #666;
    margin: 10px 0;
}
.bottom_info .content .right_show .rs_content .con_money {
    font-size: 20px;
    color: #FF7800;

}
.bottom_info .content .right_show .rs_content:nth-child(2n) {
    margin-left: 15px;
}
.bottom_text {
    text-align: center;
    margin-top: 20px;
}
.bottom_text p {
    line-height: 30px;
    color: #4A4A4A;
}
.bottom_text p span {
    color: #00A4FF;
    font-size: 22px;
    font-weight: bold;
}
.b_imageList {
    display: flex;
    margin-top: 20px;
}
.b_imageList>div {
    flex-grow: 1;
    display: inline-block;
    height: 100px;
}
.b_imageList>div>span {
    width: 100px;
    display: inline-block;
    height: 80px;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 5px;
    padding: 15px;
}
.b_imageList>div span img {
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
}
.img_text {
    display: block;
}
.bottom_text .b_imageList .b_imageList_d.active {
    box-shadow: 2px 2px 8px 0px #E5E8ED;
}
.bottom_text .b_imageList .b_imageList_d.active .img_text {
    color: #00a4ff
}
.bottom_a {
    text-align: center;
    margin: 40px 0;
}
.bottom_a a {
    text-decoration: none;
    font-size: 14px;
    color: #00a4ff;
}

/*  响应式样式 */
.sm_content_tab {
    margin-top: 30px;
}
.sm_tab_content {
    cursor: pointer;
    border-bottom: 1px solid #e5e8ed;
    padding: 15px 20px;
}
.sm_content_tab .sm_tab_content.active .l_title {
    color: #00a4ff
}
.sm_content_tab .sm_tab_content .r_span {
    float: right;
    font-size: 12px;
    border: 1px solid #e5e8ed;
    padding: 2px 6px;
    color: #999;
}
.sm_content_tab .sm_tab_content .con_text {
    font-size: 14px;
    color: #666;
    margin: 10px 0;
}
.sm_content_tab .sm_tab_content .con_money {
    font-size: 20px;
    color: #FF7800;

}
.out_shadow {
    box-shadow: 0 4px 4px 0 rgba(3,27,78,.06);
    background: #fff;
    margin-bottom: 20px;
}
</style>
<style >
    .bottom_info .el-tabs__nav{
        float: none;
        /* display: flex; */
        justify-content: space-between;
        text-align: center;
    }
    .bottom_info .el-tabs__item {
        /* flex-grow: 1; */
        width: 200px;
        border: none;
        margin: 0 100px;
    }
    .bottom_info .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
   .bottom_info .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
        height: 80px;
   }
   .bottom_info .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-left: none;
        height: 80px;
   }

   /* 响应式 */
    .sm_content_tab .el-tabs__nav{
        float: none;
        text-align: center;
        background: #F5F7FA;
        height: 60px;
        line-height: 60px;
    }
    .sm_content_tab .el-tabs__item {
        width:33%;
        border: none;
        font-size: 15px;
    }
</style>
