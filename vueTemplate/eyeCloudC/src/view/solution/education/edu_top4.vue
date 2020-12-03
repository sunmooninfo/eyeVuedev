<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="bgc">
                <div class="text_info">
                    <h2>生态建设</h2>
                    <div class="content">
                        <div class="content_info" v-for="(list, key) in list" :key="key" :class="[key==3 ? 'noR': '']">
                            <img :src="list.img" alt="">
                            <p class="content_title">{{list.name}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgc_other">
                <div class="text_info text_info_gray">
                    <h2>客户案例</h2>
                    <div class="bottom_content">
                        <div class="b_info" v-for="(list,key) in listBottom" :key="key">
                            <div class="info_left">
                                <img :src="list.img" alt="">
                            </div>
                            <div class="info_right">
                                <p class="right_title">{{list.name}} </p>
                                <p class="right_content">{{list.info}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="out_shadow out_shadow_white">
                <div class="bottom_info ">
                    <h2>生态建设</h2>
                    <div class="sm_content">
                        <div class="sm_content_info" v-for="(list, key) in list" :key="key">
                            <img :src="list.img" alt="">
                            <p class="content_title">{{list.name}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="out_shadow out_shadow_gray">
                <div class="bottom_info ">
                    <h2>客户案例</h2>
                    <div class="sm_bottom_content">
                        <div class="sm_b_info" v-for="(list,key) in listBottom" :key="key">
                            <img :src="list.img" alt="">
                            <p class="sm_right_title">{{list.name}} </p>
                            <p class="sm_right_content">{{list.info}} </p>
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
                 list: [
                    {
                        name: '轻软实训',
                        img: 'https://main.qcloudimg.com/raw/b2b5345a5d4cb1d574ac930c1dff191c.png',
                    },
                    {
                        name: '墨桐花开',
                        img: 'https://main.qcloudimg.com/raw/6ac5cb50d3845ad232c6ecc27e30c0ab.png',
                    },
                    {
                        name: '五十五所',
                        img: 'https://main.qcloudimg.com/raw/e1181ab0f8ec6ab2e9d43be87073624c.png',
                    },
                    {
                        name: '慧科',
                        img: 'https://main.qcloudimg.com/raw/3303666370a5f8ed3b3c6c3ed7d04de8.png',
                    },
                ], 
                listBottom: [
                    {
                        name: 'VIPKID',
                        img: 'https://main.qcloudimg.com/raw/38c7fe29057d97e469362c789d0f6467.png',
                        info: 'VIPKID 专注为小朋友提供专业的北美外教在线1对1英语学习体验。依托腾讯云服务器、数据库、互动视频等产品，助力 Vipkid 实现',
                    },
                    {
                        name: '青岛大学',
                        img: 'https://main.qcloudimg.com/raw/f936ac708221dd5de3c424f8239d48e1.png',
                        info: '青岛大学是山东省属重点综合大学，有教职工3842人，在校生46000人，腾讯云新工科助力青岛大学教学',
                    },
                    {
                        name: '新东方在线',
                        img: 'https://main.qcloudimg.com/raw/a8667acaeaa2b9847d3f6f97362dd909.png',
                        info: '新东方是规模大的综合性教育集团，同时也是教育培训集团。依托于腾讯云安全可靠的云服务器等产品，新东方可以放心的为客户提供各种稳定的教育产品',
                    },
                    {
                        name: '神州鹰',
                        img: 'https://main.qcloudimg.com/raw/c335511c63da7b21a5b2c0a41dcfdd8d.png',
                        info: '神州鹰采用腾讯云直播产品，为幼教行业精心打造实时视频监控，家长可以实时了解孩子学习成长动态，让孩子更开心，让家长更放心，让学校更省心',
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
        margin: 20px 0;
        font-size: 28px;
    }
    .content {
        display: flex;
        margin-top: 40px;
    }
    .content_info {
        flex-grow: 1;
        padding: 40px;
        text-align: left;
        border: 1px solid #e5e5e5;
        margin-right: 25px;
        text-align: center;
    }
    .content_info img {
        display: block;
        width: 180px;
    }
    .content_title {
        margin-top: 30px;
        font-size: 18px;
    }
    .b_content_info {
        flex-grow: 1;
        width: 33%;
        margin-right: 40px;
    }
    .content_num {
        display: inline-block;
        color: #00a4ff;
        border: 2px solid #00a4ff;
        padding: 5px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
    .content_name {
        font-size: 18px;
        margin: 15px 0;
    }
    .content_text {
        color: #666;
        font-size: 14px;
        text-align: left;
    }
    .noR {
        margin-right: 0;
    }
        .bottom_content {
        text-align: left;
        margin-top: 30px;
    }
    .b_info {
        width: 44%;
        display: inline-block;
        background: #fff;
        padding: 2%;
        margin: 0 20px 26px 0;
        height: 128px;
        vertical-align: top;
        border: 1px solid #e5e5e5;
    }
    .b_info .info_left {
        display: inline-block;
        width: 100px;
        vertical-align: top;
    }
    .b_info .info_left img {
        display: inline-block;
        width: 80px;
    }
    .b_info .info_right {
        display: inline-block;
        width: calc(100% - 120px);
    }
    .right_title {
        margin-bottom: 15px;
        font-size: 18px;
    }
    .right_content {
        color: #666;
        font-size: 14px;
    }
     /* 响应式 */
    .bottom_info {
        padding: 30px 0px;
        text-align: center;
    }
    .out_shadow {
        box-shadow: 0 4px 4px 0 rgba(3,27,78,.06);
        padding-bottom: 1px;
        /* margin-bottom: 20px; */
    }
    .out_shadow_white {
        background: #fff;
        padding: 0 20px;
    }
    .out_shadow_gray {
        background-color: #f7f8fa;
        padding: 0 20px;
    }
    .sm_content {
        margin-top: 20px;
    }

    .sm_content_info {
        padding: 40px;
        border: 1px solid #e5e5e5;
        text-align: center;
        margin-bottom: 20px;
    }
    .sm_content_info img {
        width: 180px;
    }
    .sm_bottom_content {
        margin-top: 40px;
    }
    .sm_b_content_info {
        margin-bottom: 40px;
    }
     .sm_content {
        margin-top: 20px;
    }
    .sm_content img{
        display: inline-block;
        width: 100%;
        margin-top: 30px;
    }
    .sm_bottom_content {
        margin-top: 20px;
    }
    .sm_b_info {
        padding: 20px 30px;
        background: #fff;
        border: 1px solid #e5e5e5;
        margin-bottom: 20px;
    }
    .sm_b_info img {
        width: 80px;
        margin-bottom: 10px;
    }
    .sm_right_title {
        margin-bottom: 10px;
        font-size: 18px;
    }
    .sm_right_content {
        color: #666;
        font-size: 14px;
        text-align: left;
    }
</style>

