<template>
            <el-row :gutter="10" >
                <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="bgc">
                        <div class="text_info">
                            <div class="title">
                                <h1>助力各行业客户成功上云的案例</h1>
                            </div>
                            <div class="content_info">
                                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                    <el-tab-pane label="大公司" name="first">
                                        <div class="imgList" v-for="(list,index) in imageList" :key="index">
                                            <img v-for="(item,key) in list" :src="item.img" alt="" :key="key">
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="初创公司" name="second">
                                        <div class="imgList" v-for="(list,index) in imageList_little" :key="index">
                                            <img v-for="(item,key) in list" :src="item.img" alt="" :key="key">
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                            <p class="bottom_a">
                                <a href="">查看所有客户案例</a> 
                            </p>
                        </div>
                    </div>
 
                </el-col>
                <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
                    <div class="out_shadow">
                        <div class="title">
                            <h2>行业标杆客户</h2>
                        </div>
                        <div class="sm_content">
                            <div class="sm_imgList">
                                <img v-for="(list,index) in smImgList" :key="index" :src="list.img" alt="">
                            </div>
                        </div>
                        <p class="sm_link"><a href="">查看所有客户案例</a></p>
                    </div>
                </el-col>
            </el-row>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
                imageList: [
                                [
                                    {img:'https://main.qcloudimg.com/raw/f3153850bdcc1132a59c3d6be68be8b4.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/9dc4aba20c6572a61e161da7c2588940.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/a9b2d044d9f6d772cd5c496cd4aa4f35.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/6619e53bfdbd90e0dcda4fe7271f51c7.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/bc1f8be0e5724c021c16d90c30592698.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/90fd7f05d708d946a88603c98bb7bf65.jpg'},
                                ],
                                [
                                    {img:'https://main.qcloudimg.com/raw/f3153850bdcc1132a59c3d6be68be8b4.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/e9e97dc5e64250304cee6542743440f4.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/c7966a84c67fd07af0d87214d7284ec7.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/d318dd367798d9b8add1ba9dfb0a3abe.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/08e9963de7c0424493b6f3eeb55560f9.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/43f115031808400de9136f0a379cfa31.jpg'},
                                ],
                                [
                                    {img:'https://main.qcloudimg.com/raw/bbc600736f958371626dcb04aa729a88.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/b0db5c0bf2effc8014e6ff232f7f65f9.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/d69afb1ecbfb63375d03831ce53a119c.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/74d4995dc092012359724bd7440fd912.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/8e6378de14925ff1323d73ce0117c6f3.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/ece88d1927b619b42ceabf1159889cfb.jpg'},
                                ],

                            ],
                imageList_little: [
                                [
                                    {img:'https://main.qcloudimg.com/raw/ade96b2de1bf02b5aa56981b81f97081.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/4899518a111a0e5025a9dadd9f1bfca5.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/87dd8f97ab56108d1d453f76774d0e8a.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/226a849f07e8390eae447b7d1c1b5978.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/c29e36f96901b9a629cabce49919080b.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/2db7131d0da97334c14d223c6fed6745.jpg'},
                                ],
                                [
                                    {img:'https://main.qcloudimg.com/raw/86ebb8e8d2c6b72d5e8889bb15d8ea9f.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/aff4d831bff9880196e38da3adab754f.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/4a7ed1fb8ac61689810889c789d74304.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/b6af7388bbff0dbbc5785b83a6610e0a.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/6d900357e5aa0adbb17c6d91cb9723ad.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/70e9f0c890eeeed5248791111715459c.jpg'},
                                ],
                                [
                                    {img:'https://main.qcloudimg.com/raw/885d8aeec058c5534b4dfb9c945eaf8c.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/b032f107268edbd3dff5e36b718ec079.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/cee4140ac1d4475034fbc7404db1e319.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/1f1ad3d23c40fce5fe5a011269a90661.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/c15bfde5237b7eb2d9596fbb9b744cb1.jpg'},
                                    {img:'https://main.qcloudimg.com/raw/46646e8a72ff8af1f79ffe68ba4f21f3.jpg'},
                                ],
                            ],
                smImgList: [
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/webank.png'},
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/bank-of-china.png'},
                    {img:'//main.qcloudimg.com/raw/340f3b3af1269749f30072cbf160444d.png'},
                    {img:'//main.qcloudimg.com/raw/1bd50de3a59460d76e8f5dd6d634266a/hxyh_mobile.png'},
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/state-grid.png'},
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/licaitong.png'},
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/unicom.png'},
                    {img:'//imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/img/home2017/cases/mobile/yhjy.png'},
                    {img:'//main.qcloudimg.com/raw/81c738eadb737260f1304a3c58c47976/dmbj_mobile.png'},
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
    .text_info {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
        background: #fff;
        border-bottom: 3px solid #eee;
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
    .imgList img {
        display: inline-block;
        width: 200px;
        cursor: pointer;
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
    .sm_content {
        margin-top: 30px;
    }
    .sm_content .sm_imgList img{
        width: 32%;
        display: inline-block;
        margin-bottom: 25px;
    }
    .sm_link {
        text-align: center;
        margin: 15px 0 30px 0;
    }
    .sm_link a {
        text-decoration: none;
        font-size: 15px;
        color: #00a4ff;
    }
    .out_shadow {
        box-shadow: 0 4px 4px 0 rgba(3,27,78,.06);
        background: #fff;
        padding-bottom: 1px;
        margin-bottom: 20px;
    }
</style>
<style >
    .content_info .el-tabs__nav{
        float: none;
        /* display: flex; */
        justify-content: space-between;
        text-align: center;
    }
    .content_info .el-tabs__item {
        /* flex-grow: 1; */
        width: 200px;
        margin: 0 50px;
        border: none;
        font-size: 18px;
    }
    .content_info .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #00a4ff;
    }
   .content_info .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
   }
   .content_info .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-left: none;
   }
</style>
