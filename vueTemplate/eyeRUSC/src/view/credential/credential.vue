<template>
  <div>
    <div class="nav">
      <img :src="imgB" alt="" />
    </div>
    <div class="content last_content">
      <div class="title">
        <div class="left">
          <div class="frame">
            <i>Certificate</i>
          </div>
        </div>
        <div class="right">
          <div class="header">
            <!-- <div class="top1">
              <span>当前位置</span>:
              <span>证书</span>
            </div> -->
            <div class="topBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>证书</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
            <div class="top2">
              <h4>证书</h4>
              <div class="hrr"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="items" v-for="(item, index) in imgList" :key="index">
          <img :src="item.url" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <!-- <el-pagination
          style="text-align:center"
          @size-change="handleSizeChange"
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          layout="total, prev, pager, next"
          :total="total"
        >
        </el-pagination> -->
    </div>
  </div>
</template>

<script>
import { getCategory,getCurrent,certificateteGet } from "@/api/api";

export default {
  data() {
    return {
      imgList: [],
      page: 1,
      total: null,
      id: this.$route.query.id,
      categoryId: this.$route.query.id,
      imgB: ''
    };
  },
  methods: {
    // 获取图片
    getimgB() {
      getCurrent({id:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.imgB = res.data.data.category.picUrl;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取证书
    getList() {
      certificateteGet().then((res) => {
        if (res.data.errno == 0) {
          this.imgList = JSON.parse(res.data.data.certificate) 
          console.log(this.imgList)
          // this.imgList = res.data.data.list;
          // this.total = res.data.data.total;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    handleCurrentChange(val) {
      console.log(val);
      this.page = val;
      this.getList();
    },
  },
  created() {
    this.getimgB()
    this.getList(); 
  },
};
</script>

<style scoped>
.nav {
  margin-bottom: 20px;
}

.nav img {
  position: relative;
  top: -1px;
  width: 100%;
  height: 300px;
  min-width: 1200px;
}

.title {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.right {
  width: 80%;
}

/** 左边 */
.left {
  padding-right: 40px;
  width: 25%;
}

.frame {
  border: 5px solid #d6d6d6;
  height: 130px;
  line-height: 130px;
  color: #f8b33c;
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
  text-align: center;
}

/**you边 */
.header {
  margin-bottom: 20px;
}

.top1 {
  font-size: 12px;
}

.top1 span:nth-last-child(1) {
  color: #f8b33c;
}

.top2 h4 {
  font-size: 20px;
  margin: 10px 0;
}

.top2 .hrr {
  border: 2px solid #c7c7c7;
}

/** main */
.main {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}

.items {
width: 17%;
    margin-left: 1%;
    background: #f9f9f9;
    padding: 1%;
    height: 310px;
    margin-bottom: 1%;
}

.items img {
  width: 100%;
  /* height: 310px; */
}

.items div {
  height: 40px;
  text-align: center;
  color: #616161;
  font-size: 12px;
}
</style>
