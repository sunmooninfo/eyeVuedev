<template>
  <div class="Home-root">
    <div class="top_car">
      <img
        :src="imgB"
        alt=""
      />
    </div>
    <div class="content last_content">
      <div class="content_info">
        <div class="left_info">
          <img
            src="http://www.stainless-steel-pipe-factory.com/images/leftproducttitle.jpg"
            alt=""
          />
          <ul class="leftUL">
            <li  v-for="(item,index) in productList" :class="{'active' : isActive == index}" :key="index" @click="routerTo(item,index)">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="right_info">
          <div class="topBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if="showSort"> {{showSort}} </el-breadcrumb-item>
              <el-breadcrumb-item v-else>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
            <span class="nowLocation" v-if="showSort">{{showSort}}</span>
            <span class="nowLocation" v-else>商品列表</span>
          </div>
          <div class="rightList">
            <div class="imgListCon" v-if="artList.length>0">
              <div class="cont_info" v-for="(item,key) in artList" :key="key" :class=" key % 3 == 2 ? 'noR' : ''" @click="routerToDetail(item)">
                <img :src="item.picUrl" alt="">
                <p class="title" v-if="showSort">{{showSort}}</p>
                <p class="title" v-else>{{item.categoryName}}</p>
                <p class="text" v-html="item.title">{{item.title}}</p>
              </div>
            </div>
            <p v-else class="no_product">暂时没有搜索到产品</p>
            <div class="pages">
              <el-pagination
                v-if="artList.length>0"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                layout="total, prev, pager, next"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory,getCurrent,searchList } from '@/api/api'

export default {
  name: "product",
  components: {},
    watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val)
        // let local = localStorage.getItem('search_key')
        this.isActive = val.query.index
        if (!this.isActive && this.isActive != 0) {
          this.categoryId = val.query.categoryId
          this.getList()
          this.getSearchList()
        } else {
          this.id = val.query.id
          this.isActive = val.query.index
          this.categoryId = val.query.categoryId
          this.getList()
          this.getArtList()
        }

      },
      // 深度观察监听
      deep: true
    }
  },
  data() {
    return {
      currentPage: 1,
      productList: [
      ],
      imgB: '',
      categoryId: this.$route.query.categoryId,
      id: this.$route.query.id?this.$route.query.id: '',
      page:1,
      total:null,
      artList: [],
      showSort:'',
      isActive: (this.$route.query.index || this.$route.query.index == 0) ? this.$route.query.index : -1,
    };
  },
  created() {
    this.getList()
    let local = localStorage.getItem('search_key')
    // debugger
    if (this.isActive == -1) {
      this.getSearchList()
    } else {
      this.getArtList()
    }
  },
  methods: {
    routerTo(item,index) {
      this.$router.push({path:'/product',query: {id:item.id,categoryId: this.categoryId,index:index}})
    },
    routerToDetail(item) {
      this.$router.push({path:'/productDetail',query: {id:item.id,categoryId: this.categoryId,index:this.isActive}})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val
      this.getArtList()
    },
    // 获取左侧列表接口
    getList() {
      getCurrent({id:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.productList = res.data.data.categoryList;
          this.imgB = res.data.data.category.picUrl;
          if (this.isActive >= 0) {
            this.showSort = this.productList[this.isActive].name
          }
        // this.getLastArtical()
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取文章接口
    getArtList() {
      let data = {
        categoryId: this.id,
        page: this.page
      }
      getCategory(data).then((res) => {
        if (res.data.errno == 0) {
          this.artList = res.data.data.list;
          this.total = res.data.data.total
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取文章接口
    getSearchList() {
      let data = localStorage.getItem('search_key')
      searchList({query:data}).then((res) => {
        if (res.data.errno == 0) {
          this.artList = res.data.data.queryResult;
          // localStorage.removeItem('search_key')
          this.showSort = ''
          this.total = res.data.data.total
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
  }
};
</script>
<style scoped>
/* .Home-root{
  background: #f3f6f9;
} */
.active{
  background: rgb(238, 238, 238);
  color: #1989fa;
}
.top_car,
.top_car img {
  height: 300px;
  width: 100%;
  min-width: 1200px;
}
.content {
  margin-top: 20px;
}
.content_info {
  display: flex;
}
.left_info {
  width: 300px;
}
.left_info img {
  width: 100%;
}
.right_info {
  width: 870px;
}
.leftUL li {
  /* list-style: none; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e1e1e1;
  padding-left: 20px;
  cursor: pointer;
}
.leftUL li:hover {
  background: rgb(238, 238, 238);
  border-left: 3px solid rgb(242, 185, 72);
  padding-left: 17px;
}
.right_info {
  margin-left: 30px;
}
.nowLocation {
  display: block;
  padding: 10px 0;
  font-weight: bold;
  border-bottom: 3px solid #c7c7c7;
}
.imgListCon {
  /* display: flex; */
  margin-top: 20px;
  /* flex-wrap: wrap; */
}
.cont_info {
  flex-grow: 1;
  width: 30%;
  padding: 1%;
  background: #fff;
  margin-right: 1%;
  border: 1px solid #e9e9e9;
  margin-bottom: 15px;
  cursor: pointer;
  display: inline-block;
}
.noR {
  margin-right: 0;
}
.cont_info img {
  width: 100%;
  height: 250px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
  width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.text {
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pages {
  margin: 10px 0;
}
.no_product {
  padding: 15px;
  font-size: 15px;
  color: red;
}
</style>
