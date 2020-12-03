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
              <!-- <el-breadcrumb-item>商品列表</el-breadcrumb-item> -->
              <el-breadcrumb-item>{{detail.title}} </el-breadcrumb-item>
            </el-breadcrumb>
            <span class="nowLocation">{{detail.title}}</span>
          </div>
          <div class="rightList">
              <div class="topDetail">
                <div class="left_info_detail">
                  <img :src="detail.picUrl" alt="">
                  <p>大图: {{detail.title}}</p>
                </div>
                <div class="right_info_detail">
                  <p>产品参数</p>
                  <ul class="parameter">
                    <li class="parameter_li" v-for="(list,key) in parameter" :key="key">
                      <span class="parameter_name">{{list.attribute}}:</span>
                      <span class="parameter_value">{{list.value}}</span>
                    </li>
                    <!-- <li class="parameter_li">
                      <span class="parameter_name">原产地:</span>
                      <span class="parameter_value">英格兰</span>
                    </li>
                    <li class="parameter_li">
                      <span class="parameter_name">型号:</span>
                      <span class="parameter_value">TES-202</span>
                    </li> -->
                  </ul>
                  <div class="imgList">
                    <img @click="toContact" src="http://www.stainless-steel-pipe-factory.com/images/cont.jpg" alt="">
                    <img src="http://www.stainless-steel-pipe-factory.com/images/facebook.png" alt="">
                    <img src="http://www.stainless-steel-pipe-factory.com/images/linkedin.png" alt="">
                    <img src="http://www.stainless-steel-pipe-factory.com/images/twitter.png" alt="">
                    <img src="http://www.stainless-steel-pipe-factory.com/images/google_plusone_share.png" alt="">
                  </div>
                </div>
              </div>
              <div class="artical">
                  <div class="d_html" v-html="detail.context"></div>
                  <!-- <img src="./img/demo1.jpg" alt=""> -->
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrent,getDetail } from '@/api/api'

export default {
  name: "productDetail",
  components: {},
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.id = val.query.id
        this.categoryId = val.query.categoryId
        this.isActive = val.query.index
        this.getList()
        this.getDetail()
      },
      // 深度观察监听
      deep: true
    }
  },
  data() {
    return {
      id: this.$route.query.id,
      categoryId: this.$route.query.categoryId,
      imgB: '',
      detail:'',
      parameter: '',
      productList: [
      
      ],
      isActive: this.$route.query.index ? this.$route.query.index : -1,

    };
  },
  created() {
    this.getList()
    this.getDetail()
  },
  methods: {
    routerTo(item,index) {
      this.$router.push({path:'/product',query: {id:item.id,categoryId: this.categoryId,index:index}})
    },
    toContact() {
      this.$router.push({path:'/contactus'})
    },
    // 获取列表接口
    getList() {
      getCurrent({id:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.productList = res.data.data.categoryList;
          this.imgB = res.data.data.category.picUrl;

        // this.getLastArtical()
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取详情
    getDetail() {
      getDetail({id:this.id}).then((res) => {
        if (res.data.errno == 0) {
          this.detail = res.data.data.article;
          this.parameter = res.data.data.attributes;
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
.topDetail {
  display: flex;
  margin-top: 20px;
  border-bottom: 1px dotted #A2A2A2 ;
  padding-bottom: 10px;
}
.left_info_detail {
  width: 50%;
}
.left_info_detail img {
  width: 100%;
}
.left_info_detail p {
  font-size: 14px;
}
.right_info_detail {
  width: 50%;
  margin-left: 30px;
}
.right_info_detail p {
  font-size: 14px;
}
.parameter {
  padding: 5px;
}
.parameter_li {
  list-style: none;
  display: flex;
  font-size: 14px;
  border-bottom:1px dotted #A2A2A2 ;
  padding: 10px 0;
}
.parameter_name{
  width: 30%;
}
.parameter_value  {
  width: 70%;
  font-weight: bold;
  padding-left: 10px;
}
.imgList {
  margin-top: 5px;
}
.imgList img:nth-child(1) {
  margin-right: 10px;
  cursor: pointer;
}
.imgList img{
  height: 24px;
}
.artical {
  margin-top: 10px;
}
.d_html {
  font-size: 15px;
}
</style>
