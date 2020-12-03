<template>
    <el-row :gutter="10" style="margin:0">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" style="padding:0">
            <div class="banner">
                <i class="el-icon-arrow-left back" ></i>
                <i class="el-icon-s-home home"></i>
                <span>3M</span>
                <i class="el-icon-s-operation menu"></i>
                <i class="el-icon-search search"></i>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style scoped>
    .banner {
        height: 50px;
        line-height: 50px;
        background: #d2191a;
        color: #fff;
        padding: 0 10px;
        text-align: center;
        position: fixed;
        width: 96%;
        top: 0;
    }
    .back,.home {
        font-size: 22px;
        float: left;
        margin-top: 15px;
        cursor: pointer;
    }
    .home {
        margin-left: 5px;
    }
    .menu,.search {
        font-size: 22px;
        float: right;
        margin-top: 15px;
        cursor: pointer;
    }
    .search {
        margin-right: 10px;
    }
</style>
