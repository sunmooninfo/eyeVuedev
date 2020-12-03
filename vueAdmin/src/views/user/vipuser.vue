
<template>
  <div>
    <div class="filter-container" style="padding-left: 3rem;padding-top: 1.5rem">
      <el-input v-model="listQuery.memberPackageId" clearable class="filter-item" style="width: 200px;" placeholder="请输入会员套餐ID" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <!-- <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button> -->
    </div>
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="会员ID" prop="userId" />

      <el-table-column align="center" min-width="100px" label="会员名称" prop="consignee" />

      <el-table-column align="center" min-width="100px" label="订单编号" prop="orderSn" />

      <el-table-column align="center" min-width="100px" label="套餐价格" prop="price" />

      <el-table-column align="center" min-width="100px" label="推出时间" prop="addTime" />

      <el-table-column align="center" min-width="100px" label="结束时间" prop="endTime" />

    </el-table>
  </div>
</template>
<script>
import { getVipUserDetails } from '@/api/vippackagedetails'
export default {

  data() {
    return {
      listQuery: {
        id: undefined,
        memberPackageId: undefined
      },
      list: [],
      listLoading: false
    }
  },
  mounted() {
    // console.log(this.$route.query)
    this.getList()
    this.listQuery.id = this.$route.query.id
  },
  methods: {
    getList() {
      this.listLoading = true
      getVipUserDetails(this.listQuery).then(res => {
        this.list = res.data.data.list
        console.log(this.list)
        this.listLoading = false
      })
    },
    handleFilter() {
      this.getList()
    }
  }
}
</script>
