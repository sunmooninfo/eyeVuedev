<template>
    <el-row :gutter="10" style="margin:0">
        <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" style="padding:0">
            <div class="top">
                <div class="content_top">
                    <img src="https://img.chinapp.com/uploadfile/Pinpai/2015-06-15/14343389487302.jpg" alt="">
                    <div class="right_text">
                        <p>3M</p>
                        <p>
                            <span>认证</span>
                            <span>诚信</span>
                            <span>优质</span>
                        </p>
                        <p>3M中国有限公司</p>
                    </div>
                </div>
                <div class="content_bottom">
                    <ul>
                        <li>
                            <span class="li_name">法定代表人:</span>
                            <span class="li_content">aaa</span>
                        </li>
                    </ul>
                </div>
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
    .top {
        margin-top: 50px;
        padding: 5px;
        background-color: #fff;
    }
    .content_top img {
        width: 100px;
        height: 60px;
        border: 1px solid #e5e5e5;
    }
    .right_text {
        display: inline-block;
        vertical-align: top ;
    }
    .right_text p {
        margin: 0;
    }
    .right_text p:nth-child(1) {
        font-size: 14px;
    }
    .right_text p:nth-child(2) span{
        font-size: 12px;
        color: #fff;
        padding: 0 2px;
    }
    .right_text p:nth-child(2) span:nth-child(1){
        background-color: rgb(74, 170, 81);
    }
    .right_text p:nth-child(2) span:nth-child(2){
        background-color: rgb(224, 11, 11);
    }
    .right_text p:nth-child(2) span:nth-child(3){
        background-color: rgb(30, 159, 255);
    }
    .right_text p:nth-child(3) {
        font-size: 12px;
        color: #999;
        margin-top: 5px;
    }
</style>
