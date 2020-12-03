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
            src="http://www.stainless-steel-pipe-factory.com/images/leftnewstitle.jpg"
            alt=""
          />
          <ul class="leftUL">
            <li
              v-for="(item, index) in newsList"
              :key="index"
              :class="{'active' : isActive == index}"
              @click="routerTo(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="right_info">
          <div class="topBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
            </el-breadcrumb>
            <span class="nowLocation">新闻中心</span>
          </div>
          <div class="rightList">
            <ul class="rightUL">
              <li
                v-for="(item, index) in newsList"
                :key="index"
                @click="routerTo(item,index)"
              >
                <div class="li_left_time">
                  <span>{{ splDay(item.addTime) }}</span>
                  <span>{{ splDate(item.addTime) }}</span>
                </div>
                <div class="li_right_info">
                  <p>{{ item.title }}</p>
                  <p class="p_text" v-html="item.context">..</p>
                </div>
              </li>
            </ul>
            <el-pagination
              @size-change="handleSizeChange"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              layout="total, prev, pager, next"
              :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory,getCurrent } from '@/api/api'

export default {
  name: "news",
  components: {},
  data() {
    return {
      isActive: 0,
      newsList: [
       
      ],
      id: this.$route.query.id,
      imgB: '',
      categoryId: this.$route.query.id,
      currentPage1: '',
      page:1,
      total:0
    };
  },
  created() {
    this.getList()
    this.getimgB()
  },
  mounted() {
    console.log(this.id);
  },
  methods: {
    splDay(item) {
      return item.split(" ")[0].split("-")[2];
    },
    splDate(item) {
      return item.split(" ")[0].split("-")[0] + "-" + item.split("-")[1];
    },
    routerTo(item,index) {
      this.$router.push({ path: "/newsDetail", query: { id: item.id , newsList: item.categoryId,index:index} });
    },
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
    // 获取列表接口
    getList() {
      let data = {
        categoryId: this.id,
        page: this.page
      }
      getCategory(data).then((res) => {
        if (res.data.errno == 0) {
          this.newsList = res.data.data.list;
          this.total = res.data.data.total
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    handleSizeChange(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
      this.page = val
      this.getList()
    }
  },
};
</script>
<style scoped>
/* .Home-root{
  background: #f3f6f9;
} */
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
  list-style: none;
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
.rightUL {
  margin-bottom: 20px;

}
.rightUL li {
  list-style: none;
  height: 60px;
  margin-top: 10px;
}
.li_left_time {
  height: 60px;
  width: 60px;
  float: left;
  text-align: center;
  background: rgb(242, 185, 72);
  color: #fff;
}
.li_left_time span:nth-child(1) {
  font-size: 24px;
  margin: 5px 0 2px 0;
  display: block;
}
.li_left_time span:nth-child(2) {
  font-size: 12px;
}
.li_right_info {
  height: 60px;
  padding-left: 70px;
  padding-right: 20px;
  background: rgb(235, 235, 235);
  cursor: pointer;
}
.li_right_info:hover {
  background: rgb(242, 185, 72);
  color: #fff;
  border-left: 61px solid #fff;
  padding-left: 10px;
}
.li_right_info p {
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
.li_right_info p:nth-child(1) {
  font-weight: bold;
}
.p_text {
  height: 30px;

}
.p_text span {
  display: inline-block;
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.active{
  background: rgb(238, 238, 238);
  color: #1989fa;
}
</style>
