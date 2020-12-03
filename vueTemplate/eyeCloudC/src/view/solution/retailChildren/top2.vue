<template>
    <el-row :gutter="10" >
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
             <div class="bgc">
                <div class="text_info">
                    <div class="content">
                        <h2>基础方案</h2>
                        <p>基于腾讯海量业务积累的丰富经验，为电商行业客户量身定制专属产品与服务</p>
                        <div class="tabs_sec">
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                    <el-tab-pane v-for="(list, index) in list" :key="index" :label="list.name" :name="(index + 1).toString()">
                                        <div class="bottom_content">
                                            <div class="b_left">
                                                <img :src="list.img" alt="">
                                            </div>
                                            <div class="b_right">
                                                <div class="right_content">
                                                    <p class="right_content_p" v-if="list.info"> {{list.info}} </p>
                                                    <ul>
                                                        <li v-for="(item,key) in list.liMenu" :key="key">{{item.text}}</li>
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
                        <h2>电商场景化&安全方案</h2>
                        <p>提供多维度场景化平台和最佳实践方案，助力电商客户快速构建相应产品能力</p>
                        <div class="tabs_sec tabs_sec_lg">
                                <el-tabs v-model="activeName_sec" type="card" @tab-click="handleClick">
                                    <el-tab-pane v-for="(list, index) in listSec" :key="index" :label="list.name" :name="(index + 1).toString()">
                                        <div class="bottom_content">
                                            <div class="b_left">
                                                <img :src="list.img" alt="">
                                            </div>
                                            <div class="b_right">
                                                <div class="right_content">
                                                    <p class="right_content_p" v-if="list.info"> {{list.info}} </p>
                                                    <ul>
                                                        <li v-for="(item,key) in list.liMenu" :key="key">{{item.text}}</li>
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
                    <h2>基础方案</h2>
                    <p style="color:#666">基于腾讯海量业务积累的丰富经验，为电商行业客户量身定制专属产品与服务</p>
                    <el-collapse style="margin-top:30px" v-model="sm_activeName" accordion>
                        <el-collapse-item v-for="(list,key) in list" :key="key" :title="list.name" :name="(key + 1).toString()">
                            <div class="sm_bottom_content">
                                <img :src="list.img" alt="">
                                <div class="sm_right_content">
                                    <p class="sm_right_content_p" v-if="list.info"> {{list.info}} </p>
                                    <ul>
                                        <li v-for="(item,key) in list.liMenu" :key="key">{{item.text}}</li>
                                    </ul>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="out_shadow out_shadow_gray">
                <div class="bottom_info bom_Fir">
                    <h2>基础方案</h2>
                    <p style="color:#666">基于腾讯海量业务积累的丰富经验，为电商行业客户量身定制专属产品与服务</p>
                    <el-collapse style="margin-top:30px" v-model="sm_activeName1" accordion>
                        <el-collapse-item v-for="(list,key) in listSec" :key="key" :title="list.name" :name="(key + 1).toString()">
                            <div class="sm_bottom_content">
                                <img :src="list.img" alt="">
                                <div class="sm_right_content">
                                    <p class="sm_right_content_p" v-if="list.info"> {{list.info}} </p>
                                    <ul>
                                        <li v-for="(item,key) in list.liMenu" :key="key">{{item.text}}</li>
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
                        name: '电商上云',
                        img: 'https://main.qcloudimg.com/raw/b8824065782fb3773e0a90bd26a76357.svg',
                        info: '基于腾讯海量业务积累的丰富经验，支持客户自建电商业务系统，提供从前端的域名解析、安全防护，到后端的业务系统，以及大数据分析等一整套的解决方案；同时支持客户从IDC以及其它云厂商迁移到腾讯云，支持业务系统迁移，对象数据迁移，数据库迁移等全套方案能力。',
                        liMenu: [
                           { text: '广泛的DNSPod节点提供稳定、安全、高效的域名解析服务。'},
                           { text: 'CDN全球调度系统降低用户访问延迟，提升服务体验。'},
                           { text: '任意数量和形式的图片、视频等资料存入COS，实现低成本、高性能、高稳定的数据管理与存储。'},
                           { text: '通过EMR快速构建大数据平台，结合多样化工具，轻松实现低成本高效率的大数据处理。'},
                        ]
                    },
                    {
                        name: '电商容灾',
                        img: 'https://main.qcloudimg.com/raw/9fa0715bc2521d88d6475cd55fda42e1.svg',
                        info: '在当前国内互联网的大环境下，如果服务器宕机造成业务的不可用，所引起的连锁反应和损失是不可估量的。腾讯云将从多个层级为客户提供高可用解决方案。',
                        liMenu: [
                           { text: '客户端接入高可用：云解析、HttpDNS以及IP直连。腾讯云云解析在国内以及海外均部署了大量集群，通过DNS智能调度，任意节点发生故障均能无缝切换到其他节点，保证服务的高可用性，同时防止域名劫持'},
                           { text: '外网接入高可用：腾讯云当前支持 40+BGP 线路，可实现对故障的快速调度切换，防止因为骨干网故障导致业务的长时间不可用。同时，腾讯云提供跨地域的 LB 接入和 anycast LB 能力，帮助业务实现跨地域跨区接入，避免因为机房故障导致业务中断'},
                           { text: '基础设施层的高可用，通过全球多区域，多可用区架构，以及全球部署超 1300 个加速节点以及超 100T 的带宽储备，能够将服务内容分发到全网加速节点，支持千万级用户并发，有效解决跨运营商、跨地域不稳定、高延迟访问等问题'},
                           { text: 'CDB 数据库支持实时热备、读写分离，且实现了同城多可用区、异地灾备和两地三中心等满足金融级跨地域容灾需求；系统将于业务低峰期自动冷备，不影响现网业务，每份冷备数据保存 3 份副本，保证数完整性，同时保留 5 天 binlog 日志供数据无损恢复，支持 5 天内库、表粒度的任意时间点回档，最大限度保障数据准确性，可靠性。'},
                        ]
                    },
                    {
                        name: '电商混合云',
                        img: 'https://main.qcloudimg.com/raw/1a3c2acbbe5200bbfd660b1fc53d819e.svg',
                        info: '通过网络专线连接IDC或者其它厂商公有云到腾讯云，为客户构建混合云架构，降低大促场景下的成本投入，构建弹性灵活的系统架构，支持客户的业务大促，业务高可用需求:',
                        liMenu: [
                           { text: 'IDC无法支持弹性的资源供给，为了降低成本，实现按需购买，将大促弹性的部分业务部署到腾讯云。'},
                           { text: '网络出口容灾和优化，客户的业务前端部署在腾讯云。当IDC网络出口出现故障时，流量切换到腾讯云，通过腾讯云优质的BGP网络，实现网络容灾和优质的网络接入'},
                           { text: '在腾讯云上构建业务的容灾/备份环境，当部署在IDC/其它云上的业务系统遇到灾难故障后，业务切换到腾讯云，降低灾难对业务的冲击。'},
                        ]
                    },
                    {
                        name: '弹性大促',
                        img: 'https://main.qcloudimg.com/raw/76bec2996b2928947fe66a8dee4ef5a5.svg',
                        info: '',
                        liMenu: [
                           { text: '腾讯云CDN超大的带宽储备，腾讯云CDN足以应对应对促销活动时爆发性的用户访问请求。'},
                           { text: '快速伸缩的负载均衡CLB可以实时调整集群规模以自适应促销流量的增长，无需人工介入。'},
                           { text: '弹性伸缩AS动态检测当前主机集群的负载，自动根据后端负载以调节集群大小，确保服务工作正常'},
                           { text: '弹性缓存与数据库集群无缝衔接，确保每个用户的会话数据高速返回，保障销量正常'},
                           { text: '对象存储COS提供不限容量的存储空间，用于存储商品图片及用户日志，分离CVM主机在促销进行中的磁盘压力'},
                        ]
                    },
                ],
                listSec: [
                    {
                        name: '电商直播方案',
                        img: 'https://main.qcloudimg.com/raw/8ee721c41c637599ef0ef7fa219d07c4.svg',
                        info: '视频直播已成为很多电商平台的标配功能，腾讯云一站式直播方案依托于腾讯多年来在音视频领域的技术沉淀，为开发者提供专业、稳定的直播推流、转码、分发、播放等服务，全面满足超低延迟、超高画质、超大并发访问量的要求',
                        liMenu: [
                           { text: '为用户提供专业稳定快速的直播接入和分发服务，全面满足超低延迟和超大并发量的苛刻要求。'},
                           { text: '提供极速高清、X-P2P、美视优享、移动直播等增值功能/方案。'},
                           { text: '支持电商App和小程序中实现直播功能。'},
                        ]
                    },
                    {
                        name: '云见电商数据平台',
                        img: 'https://main.qcloudimg.com/raw/c3cdd99cacea937ce243011b9a48d12a.svg',
                        info: '腾讯云云见电商数据平台依托腾讯人脸识别技术，对线下场所的消费者行为进行分析，与线上系统结合，并提供相关直播功能，实现线上线下多渠道精细化运营',
                        liMenu: [
                           { text: '人脸对比：基于人脸识别的用户访问情况，多区域密度和周边人流量统计'},
                           { text: '多渠道数据分析：用户区域内行为轨迹追踪，用户画像功能。'},
                           { text: '定制化接口服务：提供客户所需的各类定制化API以及推送服务。'},
                           { text: '设备管理：自定义设置各个区域拍摄设备属性与信息。'},
                           { text: '视频直播：利用直播功能随时检查、巡逻店铺状况'},
                        ]
                    },  
                    {
                        name: '电商智能客服',
                        img: 'https://main.qcloudimg.com/raw/967799aeaed7cadb8040fab46c49e596.svg',
                        info: '电商平台上，在用户购买商品的过程中，以及用户完成商品购买以后，经常会提出关于商品功能，价格，物流等多方面的问题。其中很多是一些共性问题，传统场景下，需要在客服上投入较多人力。因此针对电商常见问题，提供标准化答复，降低客服上的成本投入，提升客服效率，智能客服是一个合适的选择',
                        liMenu: [
                           { text: '营销导购：在导购过程中及时响应用户咨询，避免用户流失，提高用户留存率和转化率。'},
                           { text: '在线咨询：快速的问题咨询，规范化答复，成本降为人工成本的几分之一。'},
                        ]
                    }, 
                    {
                        name: '电商智能推荐',
                        img: 'https://main.qcloudimg.com/raw/09ce3223714823e356f139439716a21c.svg',
                        info: '电商行业经过多年高速发展后，也面临着移动互联网用户数增长放缓，拓新用户成本不断增加等挑战。因此如何提升用户留存率，提高用户的粘性、提升转化率变得越来越重要。 电商商品种类以万，十万甚至百万计，即使同一类型的商品根据功能，颜色，厂商等也有多种选择，如何帮助用户快速找到自己喜欢的商品？通过腾讯云智能推荐平台和腾讯云大数据平台，帮助用户构建智能推荐系统，实现商品的精准推荐。',
                        liMenu: [
                           { text: '智能推荐：依托于腾讯海量用户行为和广泛产品覆盖，以数据 + 算法 + 系统为核心，结合腾讯在多领域深厚的大数据技术积累，为客户提供基于海量用户画像 + 实时大数据机器学习的内容个性化推荐 PaaS 服务。您只需进行简单的 API 调用，即可快速拥有业界顶尖的大数据应用能力。'},
                           { text: '弹性MapReduce：弹性MapReduce是构架于云端海量存储、计算基础设施之上的云端Hadoop 框架，用户可在十分钟获得一个安全、低成本、高可靠、高弹性扩展、架构可持续演进的专属大数据集群。'},
                        ]
                    }, 
                    {
                        name: '电商智能图片处理',
                        img: 'https://main.qcloudimg.com/raw/b17dbcf243fc10d3075472e025990a62.svg',
                        info: '电商平台上，每天都会有大量商品图片的查询/更新请求。高峰情况下，每天有千万级甚至亿级的图片，腾讯云提供图片加速，处理以及存储多种能力，满足电商平台的图片处理诉求。同时针对图片处理，存储的高可用要求，可以支持对象存储的跨区域高可用部署。 ',
                        liMenu: [
                           { text: '提供多种图片处理功能，同时支持在上传时直接实现图片处理，也可以对已存放在 COS 的图片资源进行处理，并将处理结果持久化保存。'},
                           { text: '支持提供图片文件或者下载地址，自动获取图片进行智能识别，高效识别色情图片和性感图片，对高置信度图片可直接打击。'},
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
        margin-bottom: 20px;
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
    .tabs_sec .el-tabs__nav{
        float: none;
        /* display: flex; */
        justify-content: space-between;
        text-align: center;
    }
    .tabs_sec .el-tabs__item {
        /* flex-grow: 1; */
        width: 120px;
        /* margin: 0 20px; */
        border: none;
        font-size: 18px;
    }
    .tabs_sec_lg  .el-tabs__item {
        width: 180px;
    }
    .tabs_sec .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
   .tabs_sec .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
   }
   .tabs_sec .el-tabs--card>.el-tabs__header .el-tabs__item {
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

