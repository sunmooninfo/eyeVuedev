<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
             <div class="bgc">
                <div class="text_info">
                    <div class="content">
                        <h2>在线教育</h2>
                        <div class="tabs_sec_edu">
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                    <el-tab-pane v-for="(list, index) in list" :key="index" :label="list.name" :name="(index + 1).toString()">
                                        <div class="bottom_content">
                                            <div class="b_left">
                                                <img :src="list.img" alt="">
                                            </div>
                                            <div class="b_right">
                                                <div class="right_content" v-for="(item,key) in list.MenuList" :key="key">
                                                    <p class="right_content_p"> {{item.title}} </p>
                                                    <ul>
                                                        <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                        </div>
                    </div>
                </div>
            </div>
             <div class="bgc_other">
                <div class="text_info text_info_gray">
                    <div class="content">
                        <h2>AI 教学</h2>
                        <div class="tabs_sec_edu tabs_sec_edu_sm">
                                 <el-tabs v-model="activeName_sec" type="card" @tab-click="handleClick">
                                    <el-tab-pane v-for="(list, index) in listSec" :key="index" :label="list.name" :name="(index + 1).toString()">
                                        <div class="bottom_content">
                                            <div class="b_left">
                                                <img :src="list.img" alt="">
                                            </div>
                                            <div class="b_right">
                                                <div class="right_content" v-for="(item,key) in list.MenuList" :key="key">
                                                    <p class="right_content_p"> {{item.title}} </p>
                                                    <ul>
                                                        <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
            <div class="out_shadow out_shadow_white">
                <div class="bottom_info bom_Fir">
                    <h2>在线教育</h2>
                    <el-collapse style="margin-top:30px" v-model="sm_activeName" accordion>
                        <el-collapse-item v-for="(list,key) in list" :key="key" :title="list.name" :name="(key + 1).toString()">
                            <div class="sm_bottom_content">
                                <img :src="list.img" alt="">
                                <div class="sm_right_content" v-for="(item,key) in list.MenuList" :key="key">
                                    <p class="sm_right_content_p"> {{item.title}} </p>
                                    <ul>
                                        <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                    </ul>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="out_shadow out_shadow_gray">
                <div class="bottom_info bom_Fir">
                    <h2>AI 教学</h2>
                    <el-collapse style="margin-top:30px" v-model="sm_activeName1" accordion>
                        <el-collapse-item v-for="(list,key) in listSec" :key="key" :title="list.name" :name="(key + 1).toString()">
                            <div class="sm_bottom_content">
                                <img :src="list.img" alt="">
                                <div class="sm_right_content" v-for="(item,key) in list.MenuList" :key="key">
                                    <p class="sm_right_content_p" > {{item.title}} </p>
                                    <ul>
                                        <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                    </ul>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
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
                    {
                        name: '在线教育平台搭建',
                        img: 'https://main.qcloudimg.com/raw/754e2be3e47ff4a5915f5d7e7476de9c.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '服务器搭建及维护'},
                                    { text: '音视频直播课、白板教学、学员互动开发'},
                                    { text: '网络安全及课程版权。'},
                                    { text: '支付、AI 大数据分析用户行为等'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '提供一站式云计算基础资源，如服务器、数据库、云存储、带宽、大数据等服务，满足企业建立网站或 App、存储课件、存储录制的课程和图片等。'},
                                    { text: '提供互动课堂解决方案，包含直播、点播及交互式白板产品，多终端覆盖，支持高清实时视频通信，帮助企业快速搭建在线直播点播课程'},
                                    { text: '基于 DRM 加密技术，对直播、点播课程进行加密，防录制、防盗链，全方位护航课程版权内容'},
                                ]
                            },
                          
                        ]
                    },
                    {
                        name: '营销招生',
                        img: 'https://main.qcloudimg.com/raw/23132dcb23fac2153380b669b7b0d0bb.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '准确构建客户群画像'},
                                    { text: '低成本精准触达目标客户'},
                                    { text: '营销活动策划与效果追踪，提升转化，持续复购'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '流量商机获取，大数据+LBS+任务画像个性化精准营销 App、存储课件、存储录制的课程和图片等。'},
                                    { text: '在线试听，小程序在线试听课搭建服务'},
                                    { text: ' 客户/商机转化，提供小程序在线客服/智能客服、个性化用户数据圈'},
                                    { text: '服务环节，提供小程序视频接待中心、AI 智能客服、打卡、作业、答题等'},
                                ]
                            },
                          
                        ]
                    },
                    {
                        name: '个性化教学',
                        img: 'https://main.qcloudimg.com/raw/cfb3fa1a6a965a262d6a815c17e96141.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '口语教学依赖教师的“听“和”说”进行评分，效率低下'},
                                    { text: '传统课堂难以做到千人千面，教学效果评估依赖教师经验、考试分数、学习过程数据，难以及时调整'},
                                    { text: '教师需投入大量、重复的精力进行手动批改作业、试卷'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '提供中英文口语评测服务，支持普通话、英语口语测评'},
                                    { text: '提供课堂质量评估，依托腾讯 AI 的语音、图像技术，分析教学效果，提供教学辅助支持'},
                                    { text: ' 机器阅卷与自动化作业批改，支持数学等学科作业批改，支持机器阅卷批改'},
                                ]
                            },
                          
                        ]
                    },
                ],
                listSec: [
                    {
                        name: '教学辅助',
                        img: 'https://main.qcloudimg.com/raw/1d16b2193dfb491434124cd3442aaf5e.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '千人千面教学无法通过传统课堂实现'},
                                    { text: '缺乏教学工具，使得学习效率较低'},
                                    { text: '管理者无法对教学质量做到有效把控'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '基于人脸识别、情绪识别等 AI 能力，准确识别教学过程中老师的上课状态，如板书追踪、关键点识别等，帮助教师提升教学质量'},
                                    { text: '对学生上课的行为进行分析，帮助学生提升学习效率'},
                                ]
                            },
                          
                        ]
                    },
                    {
                        name: '考试测评',
                        img: 'https://main.qcloudimg.com/raw/2be7c1a1af19f35734b7c1f7e2faec50.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '教师需要投入大量的时间和精力到重复的批改'},
                                    { text: '基于教师的”听“进行的口语评分效率低下'},
                                    { text: '不同教师在批改上存在主观的差异'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '通过文字识别及速算功能，识别试卷以及学生作业文本，实现智能阅卷与作业批改'},
                                    { text: '通过 AI 教育技术深度学习，利用计算机自动对发音水平进行评价，纠错、缺陷定位和分析，目前支持中英文口语评测。'},
                                ]
                            },
                          
                        ]
                    },
                    {
                        name: '内容管控',
                        img: 'https://main.qcloudimg.com/raw/2e440ca04b34a9571e515b04bd98caa6.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '内容审查需要大量的人力成本'},
                                    { text: '人工审查具有主观性，易遗漏'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '利用深度神经网络，在十亿级图片库中进行训练，精准识别涉黄内容，支持视频和图片类的内容鉴别，用于在线教学监管场景'},
                                    { text: '支持不同场境准确识别政治或敏感人物，并提供相似度参考，可用于在线课堂教学管理、论坛监管等场景'},
                                    { text: ' 快速分析图片中的暴恐敏感信息，帮助客户降低涉政风险，可用于在线教育内容监管场景'},
                                ]
                            },
                          
                        ]
                    },
                    {
                        name: '营销招生',
                        img: 'https://main.qcloudimg.com/raw/15bf40323a38402cfc40b2e2bead2fda.png',
                        MenuList: [
                            {
                                title: '面临的问题与挑战',
                                liList: [
                                    { text: '准确构建客户群画像'},
                                    { text: '低成本精准触达目标客户'},
                                    { text: '营销活动策划与效果追踪，提升转化，持续复购'},
                                ]
                            },
                            {
                                title: '场景解决方案',
                                liList: [
                                    { text: '流量商机获取，大数据+LBS+任务画像个性化精准营销'},
                                    { text: '在线试听，小程序在线试听课搭建服务'},
                                    { text: ' 客户/商机转化，提供小程序在线客服/智能客服、个性化用户数据圈'},
                                    { text: ' 服务环节，提供小程序视频接待中心、AI 智能客服、打卡、作业、答题等'},
                                ]
                            },
                          
                        ]
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
    .tabs_sec {
        margin-top: 30px;
    }
    .bottom_content {
        margin-top: 30px;
    }
    .bottom_content .b_left,.bottom_content .b_right {
        display: inline-block;
    }
    .bottom_content .b_left {
        width: 30%;
        float: right;
    }
    .b_left img {
        display: inline-block;
        width: 100%;
    }
    .bottom_content .b_right {
        width: 65%;
        float: left;
        text-align: left;
    }
    .right_content_p,.sm_right_content_p {
        margin-bottom: 20px;
        font-size: 14px;
        color: #666;
    }

    .right_content ul, .sm_right_content ul{
        color: #666;
        font-size: 14px;
        padding-left: 20px;
        margin-bottom: 20px;
    }
    .right_content ul li,.sm_right_content ul li {
        margin-bottom: 10px;
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
<style>
    .tabs_sec_edu .el-tabs__nav{
        float: none;
        /* display: flex; */
        justify-content: space-between;
        text-align: center;
    }
    .tabs_sec_edu .el-tabs__item {
        /* flex-grow: 1; */
        width: 180px;
        /* margin: 0 20px; */
        border: none;
        font-size: 18px;
    }
    .tabs_sec_edu_sm  .el-tabs__item {
        width: 120px;
    }
    .tabs_sec_edu .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
   .tabs_sec_edu .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
   }
   .tabs_sec_edu .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-left: none;
   }
    .bottom_info.bom_Fir .el-collapse-item__header {
        font-size: 16px;
        padding: 0 10px;
    }
    .bottom_info.bom_Fir .el-collapse-item__wrap {
        padding: 0 10px;
        background: #f7f8fa;
    }
</style>

