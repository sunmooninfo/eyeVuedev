<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <!-- <el-input v-model="listQuery.userId" clearable class="filter-item" style="width: 200px;" placeholder="请输入用户ID"/> -->
      <el-input v-model="listQuery.name" clearable class="filter-item" style="width: 200px;" placeholder="请输入门店名称" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <!-- <el-button v-permission="['POST /admin/address/save']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button> -->
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>
      <!-- <el-table-column align="center" width="100px" label="地址ID" prop="id" sortable/> -->

      <!-- <el-table-column align="center" min-width="100px" label="用户ID" prop="userId"/> -->

      <el-table-column align="center" min-width="100px" label="用户名称" prop="name" />

      <el-table-column align="center" min-width="100px" label="手机号码" prop="tel" />

      <el-table-column align="center" min-width="200px" label="区域地址">
        <template slot-scope="scope">
          {{ scope.row.province + scope.row.city + scope.row.county }}
        </template>
      </el-table-column>

      <el-table-column align="center" min-width="200px" label="详细地址" prop="addressDetail" />

      <!-- <el-table-column align="center" min-width="80px" label="默认" prop="isDefault">
        <template slot-scope="scope">
          {{ scope.row.isDefault ? '是' : '否' }}
        </template>
      </el-table-column> -->
      <!-- <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/address/save']" type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-permission="['POST /admin/address/delete']" type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column> -->

    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="收货人名称" prop="name">
          <el-input v-model="dataForm.name" />
        </el-form-item>
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="dataForm.userId" />
        </el-form-item>
        <el-form-item label="详细地址" prop="addressDetail">
          <el-input v-model="dataForm.addressDetail" />
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input v-model="dataForm.tel" />
        </el-form-item>
        <el-form-item label="区域地址" prop="areaDetail">
          <el-cascader ref="cascader" v-model="areaDetail" style="width:100%" :options="areaList" @change="handleChange" />
        </el-form-item>
        <el-form-item label="邮政编码" prop="postalCode">
          <el-input v-model="dataForm.postalCode" />
        </el-form-item>
        <el-form-item label="区域码" prop="areaCode">
          <el-input v-model="dataForm.areaCode" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false,resetForm()">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listAddress, cityList, addAdress, updateAdress, deleteAdress } from '@/api/user'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { validatePhone } from '@/utils/validate'

export default {
  name: 'UserAddress',
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined,
        userId: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      downloadLoading: false,
      dialogFormVisible: false,
      dataForm: {
        id: undefined,
        name: '',
        userId: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        areaCode: '',
        postalCode: '',
        // areaDetail: '',
        tel: ''
      },
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        name: [{ required: true, message: '收货人名称不能为空', trigger: 'blur' }],
        userId: [{ required: true, message: '用户ID不能为空', trigger: 'blur' }],
        addressDetail: [{ required: true, message: '详细地址不能为空', trigger: 'blur' }],
        tel: [{ required: true, message: '手机号不能为空' }]
        // areaDetail: [{ required: true, message: '区域地址不能为空', trigger: 'change' }],
      },
      dialogStatus: '',
      areaList: '',
      areaDetail: []
    }
  },
  created() {
    this.getCityList()
    this.getList()
  },
  methods: {
    handleChange() {
      console.log(this.areaDetail)
    },
    getList() {
      this.listLoading = true
      listAddress(this.listQuery).then(response => {
        this.list = response.data.data.list
        this.total = response.data.data.total
        this.listLoading = false
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['地址ID', '用户ID', '收货人', '手机号', '省', '市', '区', '地址', '是否默认']
        const filterVal = ['id', 'userId', 'name', 'tel', 'province', 'city', 'county', 'addressDetail', 'isDefault']
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '用户地址信息')
        this.downloadLoading = false
      })
    },
    resetForm() {
      this.dataForm = {
        id: undefined,
        name: '',
        userId: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        areaCode: '',
        postalCode: '',
        tel: ''
      }
      this.areaDetail = []
    },
    handleCreate() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      // let obj = {}
      // obj.stopPropagation = () => {}
      // try{
      //     this.$refs.cascader.clearValue(obj)
      // }catch(err){
      //     this.$refs.cascader.handleClear(obj)
      // }
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          if (!validatePhone(this.dataForm.tel)) {
            this.$message.error('请输入正确的手机号码')
            return false
          }
          // eslint-disable-next-line eqeqeq
          if (this.areaDetail.length == 0) {
            this.$message.error('请选择区域地址')
            return false
          } else {
            this.splitArea()
            addAdress(this.dataForm)
              .then(response => {
                this.getList()
                // this.list.unshift(response.data.data)
                this.dialogFormVisible = false
                this.$notify.success({
                  title: '成功',
                  message: '创建成功'
                })
              })
              .catch(response => {
                this.$notify.error({
                  title: '失败',
                  message: response.data.errmsg
                })
              })
          }
        }
      })
    },
    handleUpdate(row) {
      console.log(row)
      this.dataForm = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      // let obj = {}
      // obj.stopPropagation = () => {}
      // try{
      //     this.$refs.cascader.clearValue(obj)
      // }catch(err){
      //     this.$refs.cascader.handleClear(obj)
      // }
      console.log(this.areaDetail)
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
        this.concatArea()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          if (!validatePhone(this.dataForm.tel)) {
            this.$message.error('请输入正确的手机号码')
            return false
          }
          // eslint-disable-next-line eqeqeq
          if (this.areaDetail.length == 0) {
            this.$message.error('请选择区域地址')
            return false
          } else {
            this.splitArea()
            addAdress(this.dataForm)
            updateAdress(this.dataForm).then(() => {
              // for (const v of this.list) {
              //   if (v.id === this.dataForm.id) {
              //     const index = this.list.indexOf(v)
              //     this.list.splice(index, 1, this.dataForm)
              //     break
              //   }
              // }
              this.getList()
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '更新成功'
              })
            })
              .catch(response => {
                this.$notify.error({
                  title: '失败',
                  message: response.data.errmsg
                })
              })
          }
        }
      })
    },
    handleDelete(row) {
      deleteAdress(row)
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
    },
    // 获取城市接口
    getCityList() {
      cityList().then(response => {
        this.areaList = response.data.data.list
        this.changeData()
      }).catch(() => {
        this.areaList = []
        // eslint-disable-next-line no-undef
        this.$message.error(response.data.errmsg)
      })
    },
    // 转换城市接口字段
    changeData() {
      for (var key in this.areaList) {
        this.areaList[key].label = this.areaList[key].name
        this.areaList[key].value = this.areaList[key].name
        if (this.areaList[key].children && this.areaList[key].children.length > 0) {
          for (var index in this.areaList[key].children) {
            this.areaList[key].children[index].label = this.areaList[key].children[index].name
            this.areaList[key].children[index].value = this.areaList[key].children[index].name
            if (this.areaList[key].children[index].children && this.areaList[key].children[index].children.length > 0) {
              for (var eq in this.areaList[key].children[index].children) {
                this.areaList[key].children[index].children[eq].label = this.areaList[key].children[index].children[eq].name
                this.areaList[key].children[index].children[eq].value = this.areaList[key].children[index].children[eq].name
              }
            }
          }
        }
      }
    },
    // 省市区拆分
    splitArea() {
      this.dataForm.province = this.areaDetail[0]
      this.dataForm.city = this.areaDetail[1]
      this.dataForm.county = this.areaDetail[2]
    },
    // 省市区合并
    concatArea() {
      this.areaDetail = []
      this.areaDetail.push(this.dataForm.province, this.dataForm.city, this.dataForm.county)
    }
  }
}
</script>
