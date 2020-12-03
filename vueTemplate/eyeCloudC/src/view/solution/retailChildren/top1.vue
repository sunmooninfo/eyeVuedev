<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="header">
                <p>智慧电商解决方案</p>
            </div>
            <div class="bgc">
                <div class="text_info">
                    <div class="top">
                        <div class="top_content" v-for="(list,key) in imgList" :key="key">
                            <img :src="list.img" alt="">
                            <p class="content_title">{{list.title}} </p>
                            <p class="content_text">{{list.text}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgc_other">
                <div class="text_info text_info_other">
                    <div class="bottom">
                        <h2>电商方案全景图</h2>
                        <p>根据电商行业特点，腾讯云提供多种方案，满足电商行业的客户需求</p>
                        <div class="bottom_content">
                            <div class="b_left">
                                <img src="https://main.qcloudimg.com/raw/0f9b5f72b2ce28ca27e73fd82e74083b.svg" alt="">
                            </div>
                            <div class="b_right">
                                <div class="right_content">
                                    <p class="right_content_p">基础方案</p>
                                    <ul>
                                        <li>依托腾讯云的基础设施和服务能力，为各种规模的电商客户快速构建基础平台。</li>
                                        <li>针对大促、秒杀等活动对电商业务系统带来的挑战，腾讯云提供弹性，可扩展的基础设施和护航服务，帮助电商客户从容应对挑战。</li>
                                        <li>通过腾讯多地网络专线接入能力，帮助客户快速将业务扩展到腾讯云构建混合云的能力；基于腾讯云的迁移服务能力，快速将业务迁移到腾讯云。</li>
                                    </ul>
                                    <p class="right_content_p">场景化方案</p>
                                    <p class="right_content_text">腾讯云提供丰富的场景化方案能力，快速满足客户对多场景的业务需求，例如大量图片的智能处理，直播/短视频获客，精准推荐来提升用户复购率等诉求。</p>
                                    <p class="right_content_p">安全方案</p>
                                    <p class="right_content_text">通过腾讯内部的安全能力积累，腾讯云为电商客户提供从基础安全，网络安全到业务安全等全系列的安全能力，为电商客户保驾护航。/短视频获客，精准推荐来提升用户复购率等诉求。</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="header_mobile">
                <p>智慧电商解决方案</p>
            </div>
            <div class="out_shadow_white out_shadow">
                <div class="bottom_info">
                    <div class="sm_top">
                        <div class="sm_top_content" v-for="(list,key) in imgList" :key="key">
                            <img :src="list.img" alt="">
                            <p class="sm_content_title">{{list.title}} </p>
                            <p class="sm_content_text">{{list.text}} </p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="out_shadow_gray out_shadow">
                <div class="bottom_info">
                    <div class="sm_bottom">
                        <h2>电商方案全景图</h2>
                        <p style="color:#666">根据电商行业特点，腾讯云提供多种方案，满足电商行业的客户需求</p>
                        <div class="sm_bottom_content">
                            <img src="https://main.qcloudimg.com/raw/0f9b5f72b2ce28ca27e73fd82e74083b.svg" alt="">
                            <div class="sm_right_content">
                                <p class="sm_right_content_p">基础方案</p>
                                <ul>
                                    <li>依托腾讯云的基础设施和服务能力，为各种规模的电商客户快速构建基础平台。</li>
                                    <li>针对大促、秒杀等活动对电商业务系统带来的挑战，腾讯云提供弹性，可扩展的基础设施和护航服务，帮助电商客户从容应对挑战。</li>
                                    <li>通过腾讯多地网络专线接入能力，帮助客户快速将业务扩展到腾讯云构建混合云的能力；基于腾讯云的迁移服务能力，快速将业务迁移到腾讯云。</li>
                                </ul>
                                <p class="sm_right_content_p">场景化方案</p>
                                <p class="sm_right_content_text">腾讯云提供丰富的场景化方案能力，快速满足客户对多场景的业务需求，例如大量图片的智能处理，直播/短视频获客，精准推荐来提升用户复购率等诉求。</p>
                                <p class="sm_right_content_p">安全方案</p>
                                <p class="sm_right_content_text">通过腾讯内部的安全能力积累，腾讯云为电商客户提供从基础安全，网络安全到业务安全等全系列的安全能力，为电商客户保驾护航。/短视频获客，精准推荐来提升用户复购率等诉求。</p>
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
                        img: 'https://main.qcloudimg.com/raw/434f3db1eb373cda888f934ffc6606a1.svg',
                        title: '弹性扩缩架构',
                        text: '快速实现应用容器化部署，弹性扩缩；高可用，高性能，开发友好，降低人员成本。',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/1e9b91bc7a2541ed49b7503f7ed2f0a0.svg',
                        title: '灵活应对大促',
                        text: '100T 储备带宽、全球 1300+ CDN 节点、高达 T 级的防护服务，从容应对促销活动的超大流量',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/616859c380627df425811b97879155df.svg',
                        title: '精准用户画像',
                        text: '通过 EMR 快速构建 Hadoop 集群，结合多样化工具，轻松实现低成本高效率的大数据处理。',
                    },
                    {
                        img: 'https://main.qcloudimg.com/raw/4d311fce60fab3ffbe84f680205755de.svg',
                        title: '打击恶意刷单',
                        text: '依托腾讯安全大数据和防刷引擎，高效识别恶意刷取等行为，避免企业被刷带来的巨大经济损失。',
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
        background-image: url('https://main.qcloudimg.com/raw/34d3dd8c3223a0461d4843445f2907b9.jpg');
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
        background-image: url('https://main.qcloudimg.com/raw/34d3dd8c3223a0461d4843445f2907b9.jpg');
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
        /* border-bottom: 3px solid #eee; */
    }
    .title , .bottom_info{
        /* min-width: 1000px; */
        text-align: center;
    }
    .title {
        padding-top: 40px;
    }
    .top  {
        display: flex;
        /* height: 200px; */
        padding-top: 40px;
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
    }
    .bottom_content .b_left,.bottom_content .b_right {
        display: inline-block;
    }
    .bottom_content .b_left {
        width: 70%;
        /* float: left; */
        margin-right: 5%;
    }
    .b_left img {
        display: inline-block;
        width: 100%;
    }
    .bottom_content .b_right {
        width: 25%;
        float: right;
        text-align: left;
    }
    .right_content_p,.sm_right_content_p {
        font-size: 18px;
        margin-bottom: 20px;
    }
    .right_content_text,.sm_right_content_text {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;
    }
    .right_content ul , .sm_right_content ul{
        color: #666;
        font-size: 14px;
        padding-left: 15px;
        margin-bottom: 20px;
    }
    .right_content ul li,.sm_right_content ul li {
        margin-bottom: 20px;
    }
    .bottom_info {
        padding: 30px 15px;
    }
    /* 响应式 */
    .sm_top .sm_top_content {
        margin-bottom: 30px;
    }
    .sm_top .sm_top_content .sm_content_title {
        font-size: 18px;
        margin: 15px 0;
    }
    .sm_top .sm_top_content .sm_content_text {
        font-size: 14px;
        color: #666;
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
    .sm_right_content {
        margin-top: 30px;
    }
    .sm_bottom_content {
        margin-top: 30px;
        text-align: left;
    }
    .sm_bottom_content img {
        display: inline-block;    
        width: 100%;
    }
     
</style>

