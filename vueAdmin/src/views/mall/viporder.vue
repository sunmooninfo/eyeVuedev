<template>
  <div>
    <div class="filter-container" style="padding-top: 2rem;padding-left: 2rem">
      <el-input v-model="listQuery.userId" clearable class="filter-item" style="width: 160px;" placeholder="请输入用户ID" />
      <el-input v-model="listQuery.orderSn" clearable class="filter-item" style="width: 160px;" placeholder="请输入订单编号" />
      <!-- <el-date-picker v-model="listQuery.timeArray" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" class="filter-item" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" /> -->
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <!-- <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button> -->
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="套餐ID" prop="id" />

      <el-table-column align="center" min-width="100px" label="用户ID" prop="userId" />

      <el-table-column align="center" min-width="100px" label="收货人" prop="consignee" />

      <el-table-column align="center" min-width="100px" label="下单时间" prop="addTime" />

      <el-table-column align="center" min-width="100px" label="订单价格" prop="price" />

      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="centerDialogVisible = true,handleDetails(scope.row)">详情</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
    >
      <div style="text-align: center">
        <div><h3>订单状态:</h3>{{ details.orderStatusText }}</div>
        <div><h3>订单编号:</h3>{{ details.orderSn }}</div>
        <div><h3>用户名称:</h3>{{ details.consignee }}</div>
        <div><h3>会员天数（月）:</h3>{{ details.months }}</div>
        <div><h3>订单名称:</h3>{{ details.packageName }}</div>
        <div><h3>订单价格:</h3>{{ details.price }}</div>
        <div><h3>添加时间:</h3>{{ details.addTime }}</div>
        <div><h3>结束时间:</h3>{{ details.endTime }}</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>
<script>
import { getVipOrder, getOrderDetails, deleteVipOrder } from '@/api/viporder'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      list: [],
      listQuery: {
        page: 1,
        limit: 20,
        id: undefined,
        name: undefined,
        timeArray: [],
        orderStatusArray: [],
        sort: 'add_time',
        order: 'desc'
      },
      total: 0,
      listLoading: true,
      centerDialogVisible: false,
      details: {},
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getVipOrder(this.listQuery).then(res => {
        this.listLoading = false
        this.total = res.data.data.total
        this.list = res.data.data.list
        console.log(this.list)
      })
    },
    handleDetails(row) {
      // console.log(row)
      getOrderDetails({ id: row.id }).then(res => {
        this.details = res.data.data
        console.log(res.data.data)
        console.log(res)
      })
    },
    handleFilter() {
      this.getList()
    },
    handleDelete(row) {
      this.$confirm('此操作将会删除该门店所有信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteVipOrder({ id: row.id })
          .then(response => {
            this.$notify.success({
              title: '成功',
              message: '删除成功'
            })
            // const index = this.list.indexOf(row)
            // this.list.splice(index, 1)
            this.getList()
          })
          .catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
