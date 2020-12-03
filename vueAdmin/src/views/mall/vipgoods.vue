<template>
  <div>
    <div class="filter-container" style="padding-left: 3rem;padding-top: 1.5rem">
      <!-- <el-input v-model="listQuery.userId" clearable class="filter-item" style="width: 200px;" placeholder="请输入用户ID"/> -->
      <el-input v-model="listQuery.goodsId" clearable class="filter-item" style="width: 200px;" placeholder="请输入会员商品ID  " />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <el-button v-permission="['POST /admin/signstore/create']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" min-width="100px" label="ID" prop="id" />

      <el-table-column align="center" min-width="100px" label="会员商品ID" prop="goodsId" />

      <el-table-column align="center" min-width="100px" label="商品名称" prop="goodsName" />

      <el-table-column align="center" min-width="100px" label="折扣系数" prop="discount" />

      <el-table-column align="center" min-width="100px" label="折扣价" prop="discountPrice" />

      <el-table-column align="center" min-width="100px" label="原价" prop="retailPrice" />

      <el-table-column align="center" property="iconUrl" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" width="40">
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="dialogFormVisible = true,handleUpdate(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="dataForm"
        status-icon
        label-position="left"
        label-width="120px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="商品ID" prop="goodsId">
          <el-input v-model="dataForm.goodsId" :disabled="isId" />
        </el-form-item>
        <el-form-item label="过期时间" prop="expireTime">
          <el-date-picker
            v-model="dataForm.expireTime"
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item label="商品折扣" prop="discount">
          <el-input v-model="dataForm.discount">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>
<script>
import { getVipGoods, createVipGoods, updateVipGoods, deleteVipGoods } from '@/api/vipgoods'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      GoodId: '',
      isId: undefined,
      dialogImageUrl: '',
      upnum: 1,
      total: 0,
      dialogVisible: false,
      list: [],
      downloadLoading: false,
      listLoading: true,
      gridData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      listQuery: {
        page: 1,
        limit: 20,
        goodsId: undefined
      },
      dataForm: {
        addTime: '',
        days: '',
        deleted: undefined,
        discount: '',
        expireTime: '',
        id: undefined,
        goodsId: 0,
        name: '',
        price: undefined,
        updateTime: ''
      },
      rules: {
        goodsId: [{ required: true, message: '商品ID不能为空', trigger: 'blur' }],
        discount: [{ required: true, message: '商品折扣不能为空', trigger: 'blur' }],
        expireTime: [{ required: true, message: '过期时间不能为空', trigger: 'blur' }]
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          updateVipGoods(this.dataForm).then(() => {
            for (const v of this.list) {
              if (v.id === this.dataForm.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.dataForm)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify.success({
              title: '成功',
              message: '更新会员套餐成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createVipGoods(this.dataForm).then(response => {
            // this.list.unshift(response.data.data.list)
            this.getList()
            this.dialogFormVisible = false
            this.$notify.success({
              title: '成功',
              message: '创建会员套餐成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    },
    resetForm() {
      this.dataForm = {
        id: undefined,
        goodsId: '',
        expireTime: undefined
      }
    },
    handleCreate() {
      this.resetForm()
      this.isId = false
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    getList() {
      this.listLoading = true
      getVipGoods(this.listQuery).then(res => {
        this.listLoading = false
        this.total = res.data.data.total
        this.list = res.data.data.list
        console.log(this.list)
      })
    },
    handleUpdate(row) {
      this.isId = true
      this.dataForm = Object.assign({}, row)
      console.log(row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['会员商品ID', '商品名称', '套餐时间', '套餐价格']
        const filterVal = ['goodsId', 'name', '', 'price']
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '会员商品信息表')
        this.downloadLoading = false
      })
    },
    handleDelete(row) {
      this.$confirm('此操作将会删除该门店所有信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteVipGoods(row)
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
<style scoped>

</style>
