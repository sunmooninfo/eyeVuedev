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
            <li  v-for="(item,index) in newsList" :class="{'active' : isActive == index}" :key="index" @click="linkTo(item.id,index)">
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="right_info">
          <div class="topBreadcrumb">
            <p class="p_title">{{detail.title}} </p>
            <p class="p_date">
              <span> 日期: {{detail.addTime}} </span>
              <span> 来源: {{detail.addUser}} </span>
            </p>
            <div class="p_html" v-html="detail.context"></div>
            <!-- <div>
              <img src="./img/demo.jpg" alt="">
            </div> -->
            <p class="last_text">
              上一篇: <span class="toDetail" @click="linkTo(lastID)">{{lastText}}</span> 
            </p>
             <p class="next_text">
              下一篇: <span class="toDetail" @click="linkTo(NextID)">{{NextText}}</span> 
             </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory,getDetail,getCurrent } from '@/api/api'

export default {
  name: "newsDetail",
  components: {},
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.id = val.query.id
        this.isActive = val.query.index
        this.getDetail()
        this.getLastArtical()
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    this.getList()
    this.getDetail()
    this.getimgB()
  },
  mounted() {
  },
  data() {
    return {
      isActive: this.$route.query.index,
      id: this.$route.query.id,
      imgB: '',
      categoryId: this.$route.query.newsList,
      lastText:'',
      lastID: '',
      NextText:'',
      NextID: '',
      page:1,
      detail:'',
      newsList: [
      ],
    };
  },
  methods: {
    // 获取列表接口
    getList() {
      getCategory({categoryId:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.newsList = res.data.data.list;
        this.getLastArtical()
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
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
    // 获取详情
    getDetail() {
      getDetail({id:this.id}).then((res) => {
        if (res.data.errno == 0) {
          this.detail = res.data.data.article;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取上一篇文章
    getLastArtical() {
      for (var key in this.newsList) {
        if (this.id == this.newsList[key].id) {
          if (key == 0) {
            this.lastText = '没有文章'
            this.lastID = ''
          } else {
            this.lastText = this.newsList[ Number(key) - 1].title
            this.lastID = this.newsList[ Number(key) - 1].id
         }
          if (key == (this.newsList.length - 1)) {
            this.NextText = '没有文章'
            this.NextID = ''
          } else {
            this.NextText = this.newsList[Number(key) + 1].title
            this.NextID = this.newsList[Number(key) + 1].id
          }
        }
      }
      console.log(this.id)
    },
    linkTo(id,index) {
      if (!id) {
        return
      } else {
        this.$router.push({path:'/newsDetail',query: {id:id,newsList: this.categoryId,index:index}})
      }
    }
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
}
.li_right_info p:nth-child(1) {
  font-weight: bold;
}
.last_text {
  margin: 10px 0;
}
.last_text,.next_text {
  font-size: 12px;
}
.toDetail {
  cursor: pointer;
}
.topBreadcrumb {
  font-size: 15px;
}
.p_title {
  text-align: center;
  font-weight: bold;
}
.p_date {
  text-align: center;
  margin: 5px 0;
}
.p_html {
  margin: 30px 0;
}
</style>
