<template>
<el-row :gutter="10" class="banner_row">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="content">
            <div class="banner_top">
                <!-- <span class="menu" @mousemove='showDraw'>
                <i class="el-icon-s-unfold"></i>
                菜单
              </span> -->
                <div class="banner_img" @click="linkToHome">
                    <img :src="logo" alt="">
                    <!-- <span>浪博科技</span> -->
                </div>
                <div class="right_content">
                    <span class="search_span">
                        <el-input size="mini" v-model="search" placeholder="请输入搜索内容" @keypress.native.enter="searchProduct()"></el-input>
                    </span>
                    <el-button size="mini" class="search_button" icon="el-icon-search" @click="searchProduct">搜索</el-button>
                    <span class="change_language">
                        <span>中文</span>
                        |
                        <span>英文</span>
                    </span>
                </div>
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#7b776b" text-color="#fff" active-text-color="#f7b545">
                <!-- <el-menu-item v-for="(item,index) in liList" :key="index" v-if="!item.child" :index="(index + 1).toString()" @click="routerTo(item.url)">{{item.name}}</el-menu-item>
                <el-submenu v-for="(item,index) in liList" :key="index" v-if="item.child" :index="(index + 1).toString()" @click="routerTo(item.url)">
                    <template slot="title">{{item.name}}</template>
                    <el-menu-item v-for="(list,key) in item.child" :key="key" @click="routerTo(list.url)" :index="(index + 1) + '-' + (key + 1)">{{list.name}}</el-menu-item>
                </el-submenu> -->
                <el-menu-item v-for="(item,index) in bannerList" :key="index" v-if="item.children.length == 0" :index="(index + 1).toString()" @click="routerTo(item,index)">{{item.label}}</el-menu-item>
                <el-submenu v-for="(item,index) in bannerList" :key="index" v-if="item.children.length>0" :index="(index + 1).toString()" @click.native="routerTo(item,index)">
                    <template slot="title" @click="routerTo(item)">{{item.label}}</template>
                    <!-- <el-menu-item v-for="(list,key) in item.children"  v-if="list.articleList.length == 0" :key="key" :index="(index + 1) + '-' + (key + 1)">
                        {{list.label}}
                    </el-menu-item> -->
                    <el-submenu v-for="(list,key) in item.children" :key="key" v-if="list.articleList.length>0" :index="((index + 1) + '-' + (key + 1)).toString()" @click.native="routerTo(list,index,item.value,key)">
                        <template slot="title">{{list.label}}</template>
                        <el-menu-item v-for="(value,sim) in list.articleList" :key="sim" @click="routerToDetail(value,item.value)" :index="(index + 1) + '-' + (key + 1) + '-' + (sim + 1)">
                            {{value.title}}
                        </el-menu-item>  
                    </el-submenu>
                </el-submenu>
            </el-menu>
            <!-- <div class="banner_bottom">
              <ul class="bottom_ul">
                <li v-for="(item,index) in liList" :key="index" @click="routerTo(item.url)">
                  {{item.name}}
                </li>
              </ul>
            </div> -->
        </div>
    </el-col>

</el-row>
</template>

<script>
import { getBannerList,searchList,searchhomeAbout } from '@/api/api'

export default {
    data() {
        return {
            activeIndex: localStorage.getItem('activeIndex') ? localStorage.getItem('activeIndex') : '1',
            search: '',
            drawerLeft: false,
            direction: 'ltr',
            casValue: '',
            options: [],
            ifHiden: false,
            dialogVisible: false,
            liList: [
            ],
            bannerList: [],
            index: '',
            search_categoryId:'',
            logo:''
        }
    },
    created() {
        // this.resetOption()
        this.getAll()
        this.getAbout()
    },
    mounted() {
        console.log('111')
    },
    methods: {
        routerTo(item,index,Lvalue,key) { 
            if (item.linkValue == 1) {
                window.location.href = item.outLink
            } else {
                if (item.inLink == '/product') {
                    let id = item.children[0].value
                    this.activeIndex = (index + 1).toString()
                    this.$router.push({
                        path: item.inLink,
                        query:{id : id,categoryId:item.value,index:0}
                    })
                } else if (item.level == 'L2') {
                    this.activeIndex = (index + 1).toString()
                    this.$router.push({
                        path: '/product',
                        query:{id : item.value,categoryId:Lvalue,index:key}
                    })
                } else {
                    this.activeIndex = (index + 1).toString()
                    this.$router.push({
                        path: item.inLink,
                        query:{id : item.value}
                    })
                }
            }
        },
        routerToDetail(item,categoryId) {
            this.$router.push({
                path: item.link,
                query:{id : item.id, categoryId:categoryId,index:this.index}
            })
        },
        linkToHome() {
            this.$router.push({
                path: '/'
            })
        },
        sm_routerTo(url) {
            this.$router.push({
                path: '/' + url
            })
        },
        showDraw() {
            this.drawerLeft = true
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.activeIndex = key
            localStorage.setItem('activeIndex', this.activeIndex)
            console.log(this.activeIndex)
            this.index = Number(key.split('-')[1]) - 1
        },
        getAll() {
            var _that = this
            getBannerList().then(res => {
                if (res.data.errno == 0) {
                    this.bannerList = res.data.data
                // this.imgListCra = res.data.data.categorys;
                // this.imgListCon = res.data.data.articles
                } else {
                    this.$message.error(res.data.errmsg)
                }
            }) 
        },
        getAbout() {
            var _that = this
            searchhomeAbout().then(res => {
                if (res.data.errno == 0) {
                    this.logo = res.data.data.bigLogo
               
                } else {
                    this.$message.error(res.data.errmsg)
                }
            })
        },
        searchProduct() {
            let para = window.location.search.split('&').length
            searchList({query:this.search}).then((res) => {
            if (res.data.errno == 0) {
                this.search_categoryId = res.data.data.categoryId
                localStorage.setItem('search_key', this.search)
                this.search = ''
                if (window.location.pathname == '/product' && para < 3) {
                    location.reload() 
                } else {
                    this.$router.push({path:'/product',query: {categoryId: this.search_categoryId}})
                }
                
                // this.detail = res.data.data.article;
            } else {
                this.$message.error(res.data.errmsg);
            }
      });
        }
    }
}
</script>

<style scoped>
.hiden {
    display: none;
}

.content {
    width: 100%;
    min-width: 1200px;
    background: rgba(33, 34, 39, 1);
}

.banner_top {
    height: 100px;
    /* line-height: 100px; */
    background: rgba(33, 34, 39, 1);
    color: #fff;
    padding: 0 20px;
        width: 1200px;
    margin: 0 auto;
}

.menu {
    font-size: 14px;
    padding-right: 20px;
    border-right: 1px solid gray;
    cursor: pointer;
}

.menu:hover,
.right_link:hover,
.bottom_ul li:hover,
.login_in:hover {
    color: #00a4ff;
}

.menu i {
    font-size: 20px;
    vertical-align: middle;
}

.banner_img {
    margin-left: 20px;
    cursor: pointer;
    font-size: 15px;
    display: inline-block;
}

.banner_img img {
    vertical-align: middle;
    height: 80px;
    margin-top: 10px;
}

.right_content {
    float: right;
    margin-top: 40px;
}

.search_span {
    position: relative;
}

.search_btn {
    position: absolute;
    right: 5px;
    top: 5px;
}

.search_button {
    background-color: rgba(31, 44, 52, 1);
    border-color: rgba(31, 44, 52, 1);
    color: #fff;
}

.right_link {
    font-size: 12px;
    cursor: pointer;
    margin-left: 15px;
}

.change_language {
    margin-left: 10px;
    font-size: 14px;
    color: #8f9094;
    ;
}

.change_language span {
    margin: 0 10px;
    cursor: pointer;
}

.banner_bottom {
    position: absolute;
    width: 100%;
    top: 100px;
    z-index: 999;
    min-width: 1200px;
    height: 50px;
    line-height: 50px;
    background-color: rgba(0, 0, 0, .3);
    padding: 0 40px;
}

.bottom_ul {
    display: flex;
    width: 60%;
}

.bottom_ul li {
    list-style: none;
    cursor: pointer;
    color: #fff;
    flex-grow: 1;
    font-size: 14px;
}

.bottom_right {
    position: absolute;
    right: 70px;
    top: -1px;
    color: #fff;
    font-size: 15px;
}

.login_in {
    margin-right: 15px;
    cursor: pointer;
}

/deep/ .el-menu {
    text-align: center;
    padding: 0 20px;
}


/deep/ .el-menu--horizontal>.el-menu-item,
.el-menu--horizontal>.el-submenu {
    float: none;
    display: inline-block;
}

/deep/ .el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
}
/deep/ .el-menu--popup-right-start .el-menu-item {
    text-align: left;
    max-width: 280px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
/deep/ .el-menu--popup-right-start {
    padding: 0;
}
</style><style>
.diago_bottom .el-collapse {
    border-color: #999;
}

.content .banner_top .el-input--mini .el-input__inner {
    background: #383e4d;
    border: none;
    color: #999;
    padding-right: 20px;

}

.search_span .el-input {
    display: inline-block;
    width: 200px;
}
</style>
