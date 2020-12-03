<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="bgc">
                <div class="text_info">
                    <h2>腾讯电商生态</h2>
                    <p>基于腾讯海量业务积累的丰富经验，为电商行业客户量身定制专属产品与服务</p>
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
                    <h2>VIP客户服务</h2>
                    <p>用云量达到一定规模即可享受腾讯云技术保障团队一对一服务</p>
                    <div class="content">
                        <div class="b_content_info" v-for="(list, key) in listBottom" :key="key" :class="[key==2 ? 'noR': '']">
                            <p class="content_num">{{ key + 1}}</p>
                            <p class="content_name">{{list.name}} </p>
                            <p class="content_text">{{list.info}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="out_shadow out_shadow_white">
                <div class="bottom_info ">
                    <h2>腾讯电商生态</h2>
                    <p style="color:#666">基于腾讯海量业务积累的丰富经验，为电商行业客户量身定制专属产品与服务</p>
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
                    <h2>VIP客户服务</h2>
                    <p style="color:#666">用云量达到一定规模即可享受腾讯云技术保障团队一对一服务</p>
                    <div class="sm_bottom_content">
                        <div class="sm_b_content_info" v-for="(list, key) in listBottom" :key="key">
                            <p class="content_num">{{ key + 1}}</p>
                            <p class="content_name">{{list.name}} </p>
                            <p class="content_text">{{list.info}} </p>
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
                        name: '腾讯社交广告',
                        img: 'https://main.qcloudimg.com/raw/c2c9de3c8cabed12126b6699b0c9dc3d.png',
                    },
                    {
                        name: '微信支付',
                        img: 'https://main.qcloudimg.com/raw/8c95b52c90cca28926de162d7561dc51.png',
                    },
                    {
                        name: '微信小程序',
                        img: 'https://main.qcloudimg.com/raw/1cc38af6a284dceb5fda60ba861473b4.png',
                    },
                                        {
                        name: '腾讯企点',
                        img: 'https://main.qcloudimg.com/raw/ef39d1387469b6e2e031734c36b1c51c.png',
                    },
                ], 
                listBottom: [
                    {
                        name: '护航服务',
                        info: '专属服务保障团队，为腾讯云相关的云产品提供7x24小时的远程服务支持保障',
                    },
                    {
                        name: '驻场服务',
                        info: '驻场协助客户做业务架构梳理和优化，重大事件驻场保障，安全应急响应',
                    },
                    {
                        name: '蘑菇街',
                        info: '蘑菇街是女性时尚媒体和时尚消费平台 ，围绕“内容+社区+根据客户业务情况定制化业务迁移上云方案，做业务迁移测试验证，协助客户完成迁移',
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
</style>

