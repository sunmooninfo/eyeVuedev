<template>
  <div class="app-container">
    <div class="head">
      <div>管理员：{{ a }}</div>
      <div>手机号：{{ b }}</div>
    </div>
    <el-table v-loading="listLoading" style="margin-top: 2rem" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="账户名称" prop="accountName" />

      <el-table-column align="center" min-width="100px" label="账户密码" prop="accountPassword" />

      <el-table-column align="center" min-width="100px" label="手机号" prop="bindingMobile" />

      <!-- <el-table-column align="center" min-width="100px" label="佣金占比" prop="commissionRatio" /> -->

      <el-table-column align="center" min-width="100px" label="验证码" prop="verificationCode" />

      <el-table-column align="center" min-width="100px" label="加入时间" prop="addTime" />

    </el-table>
  </div>
</template>
<script>
import { getList } from '@/api/outerstation'
export default {
  data() {
    return {
      a: '',
      b: '',
      listLoading: true,
      list: []
    }
  },
  mounted() {
    getList().then(res => {
      this.listLoading = false
      this.list = res.data.data.list
      this.a = res.data.data.name
      this.b = res.data.data.mobile
    })
  }
}
</script>
<style scoped>
.head{
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  font-size: 20px;
  color: rgb(64, 158, 255);
}
</style>
