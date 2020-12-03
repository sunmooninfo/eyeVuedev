<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="header">
                <p>通用教育解决方案</p>
            </div>
            <div class="bgc">
                <div class="text_info">
                    <div class="top">
                        <h1>教育企业专属扶持礼包</h1>
                        <div class="content">
                            <div class="content_info content_left">
                                <p>腾讯云为使用通用教育解决方案的教育行业客户提供创业扶持计划，符合领取条件的企业可直接获得由腾讯云 <el-link :underline="false"  type="primary">『云+创业』</el-link> 计划提供的1万元扶持代金券，帮助企业轻松上云。</p>
                                <p style="line-height:24px;margin-top:15px">领取条件 :
                                    <br>
                                    1. 企业认证新用户（半年内注册且无消费
                                    <br>
                                    2. 从事教育行业
                                </p>
                                <el-button style="margin-top:15px;width: 130px;" type="primary">立即申请</el-button>
                            </div>
                            <div class="content_info content_right">
                                <img src="//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/solution/cloud-education/css/img/cloud-business@2x.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgc_other">
                <div class="text_info text_info_other">
                    <div class="bottom">
                        <h2>腾讯智慧教育全景</h2>
                        <div class="bottom_content">
                            <div class="b_content_info" v-for="(list,key) in infoList" :key="key" :class="[key==4?'noR':'']">
                                <p class="b_content_fir">
                                    <i :class="list.icon" style="color:#00a4ff;font-size: 20px;"></i>
                                    <span class="lg_span">{{list.title}} </span>
                                </p>
                                <p class="b_content_text"> {{list.text}}</p>
                                <ul>
                                    <li v-for="(item,index) in list.liList" :key="index">{{item.info}}</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="header_mobile">
                <p>通用教育解决方案</p>
            </div>
            <div class="out_shadow_white out_shadow">
                <div class="bottom_info">
                    <div class="sm_top">
                        <h2>教育企业专属扶持礼包</h2>
                        <div class="sm_content">
                            <div class="sm_content_info">
                                <p style="color:#666">腾讯云为使用通用教育解决方案的教育行业客户提供创业扶持计划，符合领取条件的企业可直接获得由腾讯云 <el-link :underline="false"  type="primary">『云+创业』</el-link> 计划提供的1万元扶持代金券，帮助企业轻松上云。</p>
                                <p style="line-height:30px;margin-top:15px">领取条件 :
                                    <br>
                                    1. 企业认证新用户（半年内注册且无消费
                                    <br>
                                    2. 从事教育行业
                                </p>
                                <el-button style="margin-top:15px;width: 160px;" type="primary">立即申请</el-button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="out_shadow_gray out_shadow">
                <div class="bottom_info">
                    <div class="sm_bottom">
                        <h2>腾讯智慧教育全景</h2>
                        <div class="sm_bottom_content">
                            <div class="sm_b_content_info" v-for="(list,key) in infoList" :key="key" >
                                <p class="b_content_fir">
                                    <i :class="list.icon" style="color:#00a4ff;font-size: 20px;"></i>
                                    <span class="lg_span">{{list.title}} </span>
                                </p>
                                <p class="b_content_text"> {{list.text}}</p>
                                <ul>
                                    <li v-for="(item,index) in list.liList" :key="index">{{item.info}}</li>
                                    
                                </ul>
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
                infoList: [
                    {
                        icon: 'el-icon-phone',
                        title: '在线教育',
                        text: '提供一站式在线教育平台搭建服务，包含直播点播课、互动白板等，覆盖“教、学、考、管、营销“等教学全流程',
                        liList: [
                            {info: '在线教育平台搭建'},
                            {info: '营销招生'},
                            {info: '个性化教学'},
                        ]
                    },
                    {
                        icon: 'el-icon-s-platform',
                        title: ' AI 教学',
                        text: '在“教、学、考、管、营销”等教学全流程中，基于AI技术提供课堂质量分析、智能阅卷与作业批改、口语评测等产品',
                        liList: [
                            {info: '教学辅助'},
                            {info: '考试测评'},
                            {info: '内容管控'},
                            {info: '营销招生'},
                        ]
                    },
                    {
                        icon: 'el-icon-s-flag',
                        title: ' 高校教育',
                        text: '校企合作，提供课程内容与实验实训、认证与实习就业等服务；微校以数据驱动，基于微信生态打造数字高校',
                        liList: [
                            {info: ' 教学管理/实验实训'},
                            {info: '认证与实习就业'},
                            {info: ' 数字校园服务与管理'},
                            {info: ' 数字校园环境与大数据'},
                        ]
                    },
                    {
                        icon: 'el-icon-s-cooperation',
                        title: '  K12教育',
                        text: '面向各级各类学校及各级教育主管部门，提供移动端校园智慧生态解决方案，覆盖智慧教学与安防、管理与办公等',
                        liList: [
                            {info: ' 智慧教学与安防'},
                            {info: '智慧管理与办公'},
                            {info: ' 智慧家校与媒宣'},
                        ]
                    },
                    {
                        icon: 'el-icon-picture-outline-round',
                        title: ' 生态建设',
                        text: '构建生态体系，致力于与教育类服务商、代理合作商和内容合作方等合作伙伴一起，共同服务教育行业客户',
                        liList: [
                            {info: ' 内容课程'},
                            {info: '服务商合作'},
                            {info: ' 代理商合作'},
                        ]
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
    .header {
        height: 400px;
        background-image: url('https://main.qcloudimg.com/raw/0f59d0e180cc27534b0932603fc39c06.jpg');
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
        background-image: url('https://main.qcloudimg.com/raw/0f59d0e180cc27534b0932603fc39c06.jpg');
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
    h1 {
        font-weight: normal;
        margin: 20px 0;
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
    .content_left {
        text-align: left;
    }
    .content_left p {
        font-size: 14px;
        color: #666;
    }
    /* .content_left,.content_right {
        display: inline-block;
        width: 50%;
    } */
    .content_right img{
        width: 300px;
    }



    .bgc_other, .bgc_other .text_info_other {
        background: #f7f8fa;
    }
    .bottom {
        text-align: center;
        padding: 30px 20px;
    }
    .bottom h2 {
        font-weight: normal;
        margin: 20px 0;
        font-size: 28px;
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
    .noR {
        margin-right: 0;
    }
    .lg_span {
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
    }
    .b_content_text {
        margin: 15px 0 30px 0;
        color: #666;
        font-size: 14px;
    }
    .b_content_info ul{
        color: #666;
        font-size: 14px;
        padding-left: 15px;
    }
    .b_content_info ul li {
        margin-bottom: 10px;
    }
    .bottom_info {
        padding: 30px 15px;
    }
    /* 响应式 */
    h2 {
        font-weight: normal;
    }
    .sm_top .sm_top_content {
        margin-bottom: 30px;
    }
    .sm_content {
        margin-top: 30px;
    }
    .sm_content_info {
        text-align: left;
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
    .sm_bottom_content {
        margin-top: 30px;
        text-align: left;
    }
    .sm_b_content_info {
        background: #fff;
        border: 1px solid #e5e5e5;
        padding: 25px 15px;
        text-align: left;
        margin-bottom: 15px;
    }
    .sm_b_content_info ul {
        color: #666;
        padding-left: 20px;
    }
     .sm_b_content_info ul li {
         margin-bottom: 15px;
     }
</style>

