<template>
    <el-row :gutter="10" style="margin:0">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
            <!-- <div class="PC_text_info">

            </div> -->
            <TopHeader></TopHeader>
            <TopMiddle :id="id"></TopMiddle>
            <!-- <div class="pc_content">
                <div class="pc_left">
                    <Content></Content>
                    <ContentBom></ContentBom>
                </div>
                <div class="pc_right">

                </div>
            </div> -->
            <Content :id="id"></Content>
            <ContentBom></ContentBom>
            <Footer></Footer>
        </el-col>
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" style="padding:0">
            <!-- <SMbanner></SMbanner> -->
            <SMcontent></SMcontent>
        </el-col>
    </el-row>
</template>

<script>
import { getDetail } from '@/api/api'
import TopHeader from './top_header'
import TopMiddle from './top_middle'
import Content from './content'
import ContentBom from './bottom_content'
import SMbanner from './sm_banner'
import SMcontent from './sm_content'
import Footer from './footer'

export default {
  data () {
    return {
      id: '1046006'
    }
  },
  methods: {
    handleClick () {

    },
    getDetail () {
      getDetail({ 'id': this.id }).then(res => {
        if (res.data.errno === 0) {
          this.brand = res.data.data.brand
          this.merchants = res.data.data.merchants
        } else {
          this.$message.error(res.data.errmsg)
        }
      })
    }
  },
  created () {
    this.id = this.$route.query.name
  },
  components: {
    TopHeader,
    TopMiddle,
    Content,
    ContentBom,
    SMbanner,
    SMcontent,
    Footer
  }
}
</script>

<style scoped>
    .PC_text_info {
        width: 1200px;
        background: #fff;
        text-align: center;
        /* border-bottom: 3px solid #eee; */
    }
    .pc_content {
        width: 1200px;
        margin: 0 auto;
        margin-top: 15px;
    }
    .pc_left {
        width: 70%;
        display: inline-block;
    }
    .pc_right {
        width: 28%;
        display: inline-block;
        vertical-align: top;
        margin-left: 1%;
    }
</style>
