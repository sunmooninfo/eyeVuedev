<template>
  <div>
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="套餐ID" prop="id" />

      <el-table-column align="center" min-width="100px" label="套餐名称" prop="name" />

      <el-table-column align="center" min-width="100px" label="套餐时间" prop="months" />

      <el-table-column align="center" min-width="100px" label="套餐价格" prop="price" />

      <el-table-column align="center" min-width="100px" label="推出时间" prop="updateTime" />

    </el-table>
  </div>
</template>
<script>
import { getVipDetails } from '@/api/vippackagedetails'
export default {

  data() {
    return {
      listQuery: {
        id: undefined
      },
      list: [],
      listLoading: false
    }
  },
  mounted() {
    // console.log(this.$route.query.id)
    this.listQuery.id = this.$route.query.id
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getVipDetails(this.listQuery).then(res => {
        console.log(res.data.data)
        this.list = [{ ...res.data.data }]
        console.log(this.list)
        this.listLoading = false
      })
    },
    packageUser(row) {
      console.log(row)
    }
  }
}
</script>
