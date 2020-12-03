<template>
  <div class="Home-root">
    <div class="top_car">
      <el-carousel height="550px">
        <el-carousel-item v-for="(item, key) in imgListCra" :key="key">
          <img class="car_img" :src="item.pcUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mid_text">
      <img
        src="../../assets/img/one.jpg"
        alt=""
      />
    </div>
    <div class="content">
      <div class="imgListCon">
        <div
          class="cont_info"
          v-for="(item, key) in imgListCon"
          :key="key"
          :class="key == imgListCon.length - 1 ? 'noR' : ''"
          @click="getCurrent(item)"
        >
          <img :src="item.picUrl" alt="" />
          <p class="title">{{ item.categoryName }}</p>
          <p class="text">{{ item.title }}</p>
        </div>
      </div>
      <div class="last_content">
        <img
          src="../../assets/img/home.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getHome, getCurrent } from "@/api/api";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      imgListCra: [],
      imgListCon: [],
    };
  },
  created() {
    this.getHome();
  },
  methods: {
    getHome() {
      var _that = this;
      getHome().then((res) => {
        if (res.data.errno == 0) {
          this.imgListCra = res.data.data.litemallAds;
          this.imgListCon = res.data.data.articles;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    // 获取一级value
    getCurrent(item) {
      getCurrent({ id: item.categoryL1Id }).then((res) => {
        if (res.data.errno == 0) {
          let list = res.data.data.categoryList
          for (var key in list) {
              if (item.categoryId == list[key].id) {
                this.$router.push({
                  path: '/productDetail',
                  query:{id: item.id,categoryId:item.categoryL1Id,index:key}
              })
            }
          }
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
  },
};
</script>
<style scoped>
.Home-root {
  background: rgb(249, 248, 246);
}
.car_img {
  height: 550px;
  width: 100%;
  min-width: 1200px;
}
.mid_text {
  height: 100px;
  text-align: center;
  padding-top: 20px;
  background-color: rgb(249, 248, 246);
  border-bottom: 1px solid #e9e9e9;
}
.imgListCon {
  display: flex;
  margin-top: 20px;
}
.cont_info {
  flex-grow: 1;
  width: 25%;
  padding: 2%;
  background: #fff;
  margin-right: 15px;
  border: 1px solid #e9e9e9;
  cursor: pointer;
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
}
.text {
  font-size: 12px;
}
.last_content {
  height: 350px;
  width: 100%;
  margin-top: 20px;
}
.last_content img {
  width: 100%;
  height: 350px;
}
</style>
