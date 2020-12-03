<template>
  <div class="container">
    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.storeName" clearable class="filter-item" style="width: 160px;" placeholder="请输入门店名称" />
      <el-input v-model="listQuery.orderSn" clearable class="filter-item" style="width: 160px;" placeholder="请输入订单编号" />
      <el-date-picker v-model="listQuery.timeArray" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" class="filter-item" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
      <el-button v-permission="['GET /admin/commission/list']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
    </div>

    <!-- 表格 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="门店名称" prop="storeName" />

      <el-table-column align="center" min-width="100px" label="订单编号" prop="orderSn" />

      <el-table-column align="center" min-width="100px" label="订单总金额" prop="orderTotalPrice" />

      <el-table-column align="center" min-width="100px" label="佣金占比" prop="commissionRatio" />

      <el-table-column align="center" min-width="100px" label="订单佣金" prop="orderCommision" />

      <el-table-column align="center" min-width="100px" label="生成佣金时间" prop="addTime" />

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>
<script>
import { getCommission } from '@/api/commission'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      downloadLoading: false,
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        // id: undefined,
        // name: undefined,
        storeName: '',
        orderSn: '',
        timeArray: []
        // orderStatusArray: [],
        // sort: 'add_time',
        // order: 'desc'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getCommission(this.listQuery).then(res => {
        this.list = res.data.data.list
        this.total = res.data.data.total
        // console.log(this.list)
        this.listLoading = false
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      const query = {
        orderSn: this.listQuery.orderSn,
        storeName: this.listQuery.storeName,
        start: this.listQuery.timeArray[0],
        end: this.listQuery.timeArray[1]
      }
      // console.log(query)
      getCommission(query).then(res => {
        // console.log(res.data.data)
        this.list = res.data.data.list
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['门店名称', '订单编号', '订单总金额', '佣金占比', '订单佣金', '生成佣金时间']
        const filterVal = ['storeName', 'orderSn', 'orderTotalPrice', 'commissionRatio', 'orderCommision', 'addTime']
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '佣金详细信息')
        this.downloadLoading = false
      })
    }
  }
}
</script>
<style scoped>
.container{
  padding: 2rem;
}
</style>
