<template>
            <el-row :gutter="10" >
                <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="bgi">
                        <div class="text_info">
                            <div class="title">
                                <h1>打造云计算技术形态</h1>
                            </div>
                            <div class="content">
                                <div class="content_main" v-for="(list, index) in listAll" :key="index" :class="[index!=2 ? 'marginR': '']">
                                    <div class="main_top">
                                        <p class="top_title">{{list.name}}</p>
                                        <p class="top_text"> {{list.text}} </p>
                                        <p class="top_menu" v-if="list.menu">
                                            <span v-for="(item,key) in list.menu" :key="key"><a href="">{{item.name}}</a></span>
                                        </p>
                                    </div>
                                    <div class="b_link">
                                        <a href="">{{list.hrefName}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                    <div class="out_shadow">
                        <div class="title">
                            <h2>浪博云技术生态</h2>
                        </div>
                        <div class="sm_content">
                            <div class="sm_menu" v-for="(list, index) in listAll" :key="index">
                                <p class="top_title">{{list.name}}  <a class="sm_toLink" href="">前往</a></p>
                                <p class="top_text"> {{list.text}} </p>
                                <p class="top_menu" v-if="list.menu">
                                    <span v-for="(item,key) in list.menu" :key="key"><a href="">{{item.name}}</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

</template>

<script>
    export default {
        data () {
            return {
                listAll: [
                    {
                        name : '浪博云大学',
                        text: '浪博云旗下面向云生态用户的一站式学习成长平台。提供多样化，体系化的线上、线下学习资源。',
                        menu: [
                            {name: '大咖分享'},
                            {name: '学习路径'},
                            {name: '开发者实验室'},
                        ],
                        hrefName:'前往浪博云大学'
                    },
                    {
                        name : '云社区',
                        text: ' 浪博云官方开发者社区，大量专家，全方位互动，共探云计算、大数据、AI、物联网、5G等技术。 ',
                        menu: [
                            { name: '大咖专栏'},
                            { name: '技术问答'},
                            { name: '技术沙龙'},
                            { name: '开发手册'},
                        ],
                        hrefName:'前往云社区'

                    },
                    {
                        name : '浪博TVP ',
                        text: ' TVP，即浪博云最具价值专家（Tencent Cloud Valuable Professional），是浪博云授予云计算领域技术专家的一个奖项。TVP 计划致力打造与行业技术专家的交流平台，构建云计算技术生态，实现“用科技影响世界”的美好愿景。 ',
                        // menu: [
                        //     { name: '大咖专栏'},
                        //     { name: '大咖专栏'},
                        //     { name: '大咖专栏'},
                        //     { name: '大咖专栏'},
                        // ]
                        hrefName:'前往浪博TVP'
                    }
                ],
                activeName: '',
            }
        }
    }
</script>

<style scoped>
    .bgi {
        background-image: url(../../assets/bgi.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .text_info {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
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
        margin-bottom: 20px;
    }
    .content .content_main {
        width: 388px;
        /* height: 200px; */
        border: 1px solid #E5E8ED;
        background-color: #fff;
        display: inline-block;
        cursor: pointer;
        /* padding: 30px 30px 0 30px; */
    }
    .main_top {
        padding: 30px 30px 0 30px;
        min-height: 180px;
    }
    .top_title {
        font-size: 24px;
        /* font-weight: bold; */
    }
    .top_text {
        margin-top: 15px;
        color: #666;
        font-size: 14px;
    }
    .top_menu {
        margin-top: 15px;
    }
    .top_menu span { 
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 140px;
        font-size: 14px;
        cursor: pointer;
        height: 25px;
        line-height: 25px;
        margin-bottom: 5px;
    }
    .top_menu span a {
        text-decoration: none;
        color:#666;
    }
    .top_menu span::before {
        content: '';
        width: 2px;
        height: 2px;
        background-color: #666;
        display: inline-block;
        vertical-align: 4px;
        margin-left: 2px;
        margin-right: 8px;
    }
    .b_link {
        text-align: left;
        border-top: 1px solid #E5E8ED;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        margin-top: 20px;
    }
    .b_link a {
        text-decoration: none;
        font-size: 14px;
        color: #00a4ff;
    }
    .marginR {
        margin-right: 15px;
    }

    /* 响应式 */
    .sm_content {
        margin-top: 30px;
    }
    .sm_content .sm_menu {
        border-top: 1px solid #E5E8ED;
        min-height: 150px;
        padding: 15px 20px;
        
    }
    .top_title .sm_toLink {
        float: right;
        font-size: 14px;
        text-decoration: none;
        color: #00a4ff;
        margin-top: 5px;
    }
    .out_shadow {
        box-shadow: 0 4px 4px 0 rgba(3,27,78,.06);
        background: #fff;
        margin-bottom: 20px;

    }
</style>
<style >
   .sm_content .el-collapse-item__header {
       padding:0 1rem ;
   }
   .sm_content .el-collapse-item__wrap {
       background: #F5F7FA;
       padding: 20px 20px 0 20px;
       border-top: 1px solid #EBEEF5;
   }
</style>