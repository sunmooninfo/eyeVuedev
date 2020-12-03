<template>
  <div class="container">
    <div>文档内容是否对您有帮助？</div>
    <div style="margin-top:1rem">
      <el-button type="primary" icon="el-icon-check" round>
        有帮助
      </el-button>
      <el-button type="primary" icon="el-icon-close" round>
        没帮助
      </el-button>
    </div>
    <div style="margin-top:1rem">
      如果遇到产品相关问题，您可以咨询 <span style="color:#00A4FF">智能客服 </span>或 <span style="color:#00A4FF">提交工单 </span>寻求帮助。
    </div>
  </div>
</template>
<script>
export default {
  
  data(){
    return{

    }
  }
}
</script>
<style  scoped>
  .container{
    margin-top: 3rem;
  }
</style>