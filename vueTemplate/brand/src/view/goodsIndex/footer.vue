<template>
    <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="PC_text_info">
                <div class="top">
                    <span v-for="(item,index) in list" :key="index">
                        {{item}}
                    </span>
                </div>
                <div class="bottom">
                    <p>投诉邮箱：web@chinapp.com, 我们将会在48小时内给与处理。</p>
                    <p>CopyRight 2005-2020 品牌网（www.chinapp.com）版权所有，未经授权，禁止复制转载。ICP证号： 粤ICP备17136434号-4</p>
                </div>
            </div>
        </el-col>

    </el-row>

</template>

<script>
export default {
  data () {
    return {
      list: [
        '关于我们', '服务介绍', '认证查询', '服务声明', '联系我们', '加入我们'
      ]
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style scoped>
    .PC_text_info {
        width: 100%;
        /* width: 1200px;
        margin: 0 auto; */
        background: #434343;
        color: #fff;
        padding: 5px 0;
        margin-top: 20px;
    }
    .top {
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px #4a4a4a solid
    }
    .top span {
        margin: 0 20px;
        font-size: 15px;
    }
    .bottom {
        text-align: center;
        font-size: 15px;
    }
    .bottom p {
        margin: 0;
    }
</style>
