<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
             <div class="bgc">
                <div class="text_info">
                    <div class="content">
                        <h2>高校教育</h2>
                        <div class="tabs_thir_edu">
                            <el-tabs v-model="activeName" type="card" class="out_tabs">
                                <el-tab-pane v-for="(list, index) in list" :key="index" :label="list.name" :name="(index + 1).toString()">
                                    <el-tabs v-model="activeName_inner" type="card" class="inner_tabs">
                                        <el-tab-pane v-for="(tar, eq) in list.menuInfo" :key="eq" :label="tar.name" :name="(eq + 1).toString()">
                                            <div class="bottom_content">
                                                <div class="b_left">
                                                    <img :src="tar.img" alt="">
                                                </div>
                                                <div class="b_right">
                                                    <div class="right_content" v-for="(item,key) in tar.MenuList" :key="key">
                                                        <p class="right_content_p"> {{item.title}} </p>
                                                        <ul>
                                                            <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-tab-pane>
                                    </el-tabs>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>
            </div>
             <div class="bgc_other">
                <div class="text_info text_info_gray">
                    <div class="content">
                        <h2>K12教育</h2>
                        <div class="tabs_thir_edu">
                            <el-tabs v-model="activeName_sec" type="card" class="out_tabs">
                                <el-tab-pane v-for="(list, index) in listSec" :key="index" :label="list.name" :name="(index + 1).toString()">
                                    <el-tabs v-model="activeName_inner_sec" type="card" class="inner_tabs">
                                        <el-tab-pane v-for="(tar, eq) in list.menuInfo" :key="eq" :label="tar.name" :name="(eq + 1).toString()">
                                            <div class="bottom_content">
                                                <div class="b_left">
                                                    <img :src="tar.img" alt="">
                                                </div>
                                                <div class="b_right">
                                                    <div class="right_content" v-for="(item,key) in tar.MenuList" :key="key">
                                                        <p class="right_content_p"> {{item.title}} </p>
                                                        <ul>
                                                            <li v-for="(ele,num) in item.liList" :key="num">{{ele.text}}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-tab-pane>
                                    </el-tabs>
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
                    <h2>高校教育</h2>
                    <el-collapse style="margin-top:30px" v-model="sm_activeName" accordion>
                        <el-collapse-item v-for="(list,key) in list" :key="key" :title="list.name" :name="(key + 1).toString()">
                            <div class="sm_bottom_content" v-for="(tar, eq) in list.menuInfo" :key="eq">
                                <p class="sm_top_title">{{tar.name}}</p>
                                <img :src="tar.img" alt="">
                                <div class="sm_right_content" v-for="(item,key) in tar.MenuList" :key="key">
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
                            <div class="sm_bottom_content"  v-for="(tar, eq) in list.menuInfo" :key="eq">
                                <p class="sm_top_title">{{tar.name}}</p>
                                <img :src="tar.img" alt="">
                                <div class="sm_right_content" v-for="(item,key) in tar.MenuList" :key="key">
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
                activeName_inner: '1',
                activeName_sec : '1' ,
                activeName_inner_sec: '1',
                sm_activeName: '1',
                sm_activeName1: '1',
                list: [
                    {
                        name: '校企合作',
                        menuInfo: [
                            {
                                name: '教学管理',
                                img: 'https://main.qcloudimg.com/raw/cf51eab464bb76cce5e92d747e4a8fc6.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '高校人才培养与产业发展对人才的需求不同步'},
                                            { text: '传统“单科制”的院系设置，使得交叉学科办学难'},
                                            { text: '教师无法在线进行方便统一的教学管理'},
                                            { text: '学生无法进行课程学习和实验训练一体化的学习活动'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '教学管理平台基于高校实际教学场景搭建，提供智能在线实训数据分析能力，构建教、学、练、训、管一站式服务体系'},
                                            { text: '为学校管理员和教师提供课程管理、排课管理、学院/班级管理、老师/学员管理等功能'},
                                            { text: '学员不仅能随时随地查看课程内容，还能与腾讯云线上沙箱实验平台在线实时联动。通过教学与实训一体化的新模式，快速提高自主学习能力和创新实践能力'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '实验实训',
                                img: 'https://main.qcloudimg.com/raw/d0b3bf1eb7bed9472c0c76c269242b78.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '高校实验课时设置偏少，实践性不足'},
                                            { text: '高校实验资源受限，难以仿真企业真实开发环境'},
                                            { text: '高校教师自己准备实验环境和回收云资源的过程复杂'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '实验平台基于真实的腾讯云资源和主流的腾讯云产品进行搭建，并基于理论课程内容，为学员自动配置实验操作环境'},
                                            { text: '实验平台可以提高授课教师对实体实验环境的管理效率，免去了教师创建课前实验环境、回收课后实验环境等复杂重复的工作。'},
                                            { text: '实验平台可以帮助教学机构搭建更贴近企业实际应用的实验实训平台'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '专业认证',
                                img: 'https://main.qcloudimg.com/raw/9a6e5f1572f9e769bfd5df1306b55ff9.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '高校学生所学知识与企业招聘人才所需的能力发生断层'},
                                            { text: '在就业竞争中，高校学生缺乏核心竞争力'},
                                            { text: '学生掌握的技能缺乏权威的认证和证明以供招聘企业参考'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '提供丰富的认证体系，包括云计算技术认证体系和大数据开发工程师、人工智能应用工程师等专项技术认证'},
                                        ]
                                    },
                                
                                ]
                            },
                        ],

                    },
                    {
                        name: '腾讯微校',
                        menuInfo: [
                            {
                                name: '数字校园服务',
                                img: 'https://main.qcloudimg.com/raw/9e5ea1ebb8a9419273b2090dc755bab7.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '传统线下服务存在一校多卡 / 安全管理漏洞 / 体验滞后等问题'},
                                            { text: '传统线上应用分散在不同的系统，缺少统一的入口和身份认证体系'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '电子校园卡/校园码：通过微信校园卡/校园码连接线上线下全场景，包括消费 、门禁 、签到等'},
                                            { text: '一站式服务大厅：基于微信平台，微校提供统一身份认证服务，支持不同业务系统对接和单点登录，打造一站式线上服务大厅'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '数字校园管理',
                                img: 'https://main.qcloudimg.com/raw/11e437c083cb1e19497a474222eafe2d.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '不同业务系统数据接口和标准不同'},
                                            { text: '业务系统仍基于 PC 平台，体验滞后'},
                                            { text: '业务系统开发厂商无法迅速响应学校定制需求'},
                                            { text: '校园存在安全隐患'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '数字工具箱：腾讯做为连接器，提供标准的接口规范和数据标准，与行业伙伴合作打造校园数字化工具箱'},
                                            { text: '应用支撑平台：微校应用支撑平台提供工作流引擎，包括表单 / 流程等，支持学校快速灵活构建微服务应用'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '数字校园环境',
                                img: 'https://main.qcloudimg.com/raw/8aee81f7324e1999880ec6836a4147a8.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '课前签到等环节效率较低，且数据利用度低'},
                                            { text: '课中无法有效追踪学生表现'},
                                            { text: '教师备课和授课内容无法高效同步给学生'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '智慧教学环境：通过物联网和 AI 技术，实现教学终端智能管理 / 双师教学 / 云课堂等'},
                                            { text: '智慧生活环境：通过物联网、人脸识别和移动支付等技术，实现平安校园等'},
                                        ]
                                    },
                                
                                ]
                            },
                        ],

                    },
                ],
                listSec: [
                    {
                        name: '智慧校园',
                        menuInfo: [
                            {
                                name: '智慧管理',
                                img: 'https://main.qcloudimg.com/raw/90d24a222b67ac3668d99918475e8d2e.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '学校信息化产品较多，形成信息孤岛，无法统一管理'},
                                            { text: '校内人员、资产、课程等信息难以监管，数据滞后'},
                                            { text: '公文流转、重要通知等内容触达效果无法监控，反馈速度慢'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '灵活设置成员权限管理、身份管理；内部架构便捷设置，校内各项信息一目了然'},
                                            { text: '轻松处理校内各消息的流转，让消息数量不再受限、消息触达不再滞后'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '智慧教学',
                                img: 'https://main.qcloudimg.com/raw/af997db7d804dd1ce23bae60c5fc37ac.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '备课、排课、阅卷等教学工作繁琐，占用老师太多精力'},
                                            { text: '传统教学形式单一，互动性较差，难以生动形象展示教学内容'},
                                            { text: '传统教学无法了解班内学生的知识掌握情况，难以帮助老师有针对性的教学'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '提供智能排课、选课报名、在线作业、在线组卷等应用功能，提高教学管理效率'},
                                            { text: '提供课堂直播/录播设备、学情分析系统、智能阅卷等软硬件系统，提供覆盖教学各环节的一站式服务，为个性化教学提供服务'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '智慧安防',
                                img: 'https://main.qcloudimg.com/raw/526b495673f6a0eb1387072d63c9c43b.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '老师及家长无法实时掌握学生考勤信息'},
                                            { text: '难以发觉校内可疑人员并进行预警'},
                                            { text: '校内能源无法及时监控和管理，容易造成校内能源使用损耗'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '在学校主要出入口部署人脸识别门禁，学生进出校门通知可及时发送家长端与老师端，便于考勤统计，加强学生安全管理'},
                                            { text: '校内轨迹分析、远程视频同步功能帮助校园人群热区预警，保障校园安全'},
                                            { text: '智能温控设备可对教室、办公区域的温度、湿度、能源使用等情况进行自动调控，给学生提供舒适的学习生活空间'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '智慧家教',
                                img: 'https://main.qcloudimg.com/raw/3d2ab685ed4b63d7e5a07f3e2141e703.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '家长无法及时了解孩子在校学习状态和校园生活等情况'},
                                            { text: '家长和老师不能便捷沟通，家校共育难'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '提供班主任信箱、请假条、班级圈等功能，帮助学校、家长、学生间建立全方位互动'},
                                            { text: '提供家长助手、家长课堂等功能、加强家校互动及分享、推动家长深度参与学生教育各环节'},
                                        ]
                                    },
                                
                                ]
                            },
                            {
                                name: '智慧办公',
                                img: 'https://main.qcloudimg.com/raw/e39f330dceb0a451d7757b1fd664caba.png',
                                MenuList: [
                                    {
                                        title: '面临的问题与挑战',
                                        liList: [
                                            { text: '传统办公流程繁琐，线下签字找领导难，纸质文件留存不便'},
                                            { text: '无法实时掌握校内职工到校情况，职工考勤、请假等统计不便'},
                                        ]
                                    },
                                    {
                                        title: '场景解决方案',
                                        liList: [
                                            { text: '帮助学校在请假、出差、财务报销等环节实现移动化申请及审批，提升工作效率，实现无纸化办公'},
                                            { text: '老师手机端完成考勤打卡，随时随地发起请假申请，管理者可及时掌握老师请假和缺勤的情况'},
                                        ]
                                    },
                                
                                ]
                            },
                        ],

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
        margin-top: 10px;
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
    .sm_top_title {
        font-size: 18px;
        margin-bottom: 20px;
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
    .tabs_thir_edu .el-tabs__item {
        /* flex-grow: 1; */
        /* margin: 0 20px; */
        border: none;
    }
    .tabs_sec_edu_sm  .el-tabs__item {
        width: 120px;
    }
    .tabs_thir_edu .out_tabs.el-tabs--card>.el-tabs__header .el-tabs__item {
        font-size: 18px;
    }
    .tabs_thir_edu .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
   .tabs_thir_edu .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
   }
   .tabs_thir_edu .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-left: none;
   }
   .inner_tabs.el-tabs--card>.el-tabs__header {
       border-bottom: none;
   } 
    .tabs_thir_edu .inner_tabs.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom:none;
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

