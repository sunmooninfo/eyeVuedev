<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="bgc">
                <div class="text_info">
                    <h2>电商方案全景图</h2>
                    <p>根据电商行业特点，腾讯云提供多种方案，满足电商行业的客户需求</p>
                    <div class="content">
                        <div class="content_info" v-for="(list, key) in list" :key="key">
                            <img :src="list.img" alt="">
                            <div style="position:relative; margin-top: 20px;">
                                <p class="content_title">{{list.name}} </p>
                                <p class="content_text">{{list.info}} </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="bgc_other">
                <div class="text_info text_info_gray">
                    <h2>客户案例</h2>
                    <p>腾讯云助力电商快速发展，是电商上云的第一选择</p>
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
                    <h2>电商方案全景图</h2>
                    <p style="color:#666">根据电商行业特点，腾讯云提供多种方案，满足电商行业的客户需求</p>
                    <div class="sm_content">
                        <div class="sm_content_info" v-for="(list, key) in list" :key="key">
                            <img :src="list.img" alt="">
                            <div style="position:relative; margin-top: 20px;">
                                <p class="content_title">{{list.name}} </p>
                                <p class="content_text">{{list.info}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="out_shadow out_shadow_gray">
                <div class="bottom_info ">
                    <h2>客户案例</h2>
                    <p style="color:#666">腾讯云助力电商快速发展，是电商上云的第一选择</p>
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
                activeName: 'first',
                list: [
                    {
                        name: '上云迁移',
                        img: 'https://main.qcloudimg.com/raw/43acc3279bffad2b2a33e62e6898d543.jpg',
                        info: '支持从本地数据中心或其他公有云迁移至腾讯云。',
                    },
                    {
                        name: '数据灾备',
                        img: 'https://main.qcloudimg.com/raw/400cf9d25a951ecb4d4ccaf681f15746.jpg',
                        info: '实现从IDC/其它公有云到腾讯云的数据灾备，同时支持在云上跨区域灾备',
                    },
                    {
                        name: '跨地域部署',
                        img: 'https://main.qcloudimg.com/raw/f4eb9885bc4a5fd73be171b7aded8d2c.jpg',
                        info: '复制一份数据到多点，实现就近访问，优化用户体验。',
                    },
                                        {
                        name: '快速扩张',
                        img: 'https://main.qcloudimg.com/raw/c7a757557a9e33aecb4fcd35bea29ae9.jpg',
                        info: '使用混合云，将原有环境和云环境相结合，统一管理，支持业务快速扩张',
                    },
                ], 
                listBottom: [
                    {
                        name: '小红书',
                        img: 'https://main.qcloudimg.com/raw/06bd16aff15804c0fc27ab408224688f.png',
                        info: '小红书在短短4年成长为全球最大的消费类口碑库和社区电商平台，成为200多个国家和地区、5000多万年轻消费者必备的“购物神器”。 腾讯云帮助小红书支撑起其庞大的基础设施，便捷的服务交付速度，使的小红书能够更加专注业务成长。',
                    },
                    {
                        name: '微店',
                        img: 'https://main.qcloudimg.com/raw/3b8cba3128affce4c95592b109eaf517.png',
                        info: '微店至今已吸引了近7000万的商家，平均每秒钟新增2家店铺，遍布全球211个国家，是全球增长速度最快的电商公司。通过腾讯云稳定高效的计算能力、快速的CDN加速能力，可靠的安全保障能力等，构建起完善的客户开店体验。',
                    },
                    {
                        name: '蘑菇街',
                        img: 'https://main.qcloudimg.com/raw/083ab8ee1b3a0008b8f450671859dae1.png',
                        info: '蘑菇街是女性时尚媒体和时尚消费平台 ，围绕“内容+社区+电商“这一核心策略，蘑菇街使用腾讯云快速搭建起了包括买手直播在内的各种上层业务，以更年轻化的形式，为用户带来了最潮流的产品，更时尚的消费生活体验。',
                    },
                    {
                        name: '有货',
                        img: 'https://main.qcloudimg.com/raw/221b6eb3382ff5d4dfdc0e5bdc37b60b.png',
                        info: 'YOHO.CN是中国最大的潮流分享社区，全球潮流风向标！ 有货选择腾讯云，是基于详细考察和比较，针对灵活度、扩展性、响应时间、平台服务器性能和价格等因素综合评判之后做出的决策，腾讯云团队表现出了极高的专业性和技术性。',
                    },
                    {
                        name: '贝贝网',
                        img: 'https://main.qcloudimg.com/raw/0d969cfef9437c7e5c59e814add18219.png',
                        info: '创立于2014年4月，是国内领先的母婴特卖平台。贝贝网以品牌正品、独家折扣、限时抢购为特色，主要提供童装、童鞋、玩具、用品等商品的特卖服务。通过腾讯云的技术，提供稳定和可扩展的弹性架构，支撑贝店快速增长的电商业务，助力其新业务发展。',
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
        margin-top: 30px;
    }
    .content_info {
        flex-grow: 1;
        padding: 0 10px;
        text-align: left;
    }
    .content_info img {
        display: block;
        width: 100%;
    }
    .content_title {
        color: #fff;
        position: absolute;
        top: -60px;
        left: 15px;
        font-size: 18px;
    }
    .content_text {
        color: #666;
        font-size: 14px;
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

