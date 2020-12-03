<template>
  <div class="Home-root">
    <div class="top_car">
      <img
        :src="imgB"
        alt=""
      />
    </div>
    <div class="content">
      <div class="content_info">
        <div class="left_info">
          <img
            src="http://www.stainless-steel-pipe-factory.com/images/leftfactorytitle.jpg"
            alt=""
          />
          <ul class="leftUL">
            <li :class="{'active' : isActive == index}" v-for="(item,index) in list" :key="index" @click="linkTo(item.id,index)">
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="right_info">
          <div class="topBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>关于我们</el-breadcrumb-item>
              <el-breadcrumb-item>{{detail.title}}</el-breadcrumb-item>
            </el-breadcrumb>
            <span class="nowLocation">{{detail.title}}</span>
          </div>
          <div class="rightList">
            <div class="ctext" v-html="detail.context"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory,getDetail, getCurrent } from '@/api/api'
export default {
  components: {},
    watch: {
    $route: {
      handler: function(val, oldVal){
        this.categoryId = val.query.id
        this.id = val.query.detailID
        this.isActive = val.query.index
        this.getList()
      },
      // 深度观察监听
      deep: true
    }
  },
  data() {
    return {
      isActive: 0,
      imgB: '',
      categoryId: this.$route.query.id,
      id:this.$route.query.detailID,
      detail: '',
      list: [{
          name: "生产线",
          id: 1
        },
        {
          name: "OEM/ODM",
          id: 2
        },
        {
          name: "研发部",
          id: 3
        }],
    };
  },
  created() {
    this.getList() 
    this.getimgB()
  },
  methods: {
    showDetail(index) {
      this.isActive = index;
      this.detail = this.list[index].name
      return
      const data = { id: index }
      getDetail().then(res => {
        console.log(res)
        this.content = res.data.data.detail
      })
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
      getCategory({categoryId:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.list = res.data.data.list;
          this.getDetail()
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取详情
    getDetail() {
      if (!this.id) {
        this.id = this.list[0].id
      }
      getDetail({id: this.id}).then((res) => {
        if (res.data.errno == 0) {
          this.detail = res.data.data.article;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
      linkTo(id,index) {
        this.$router.push({
          path:'/about',
          query: {id:this.categoryId,detailID:id,index:index}
        })
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
.rightList>.ctext p{
  font-size: 12px;
  vertical-align: inherit;
  line-height: 24px;
  color: #616161
}
.rightList>.ctext img{
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  margin-bottom: 5rem;
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
</style>
