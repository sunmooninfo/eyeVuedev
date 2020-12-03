<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-button v-permission="['POST /admin/category/create']" class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row row-key="id">

      <el-table-column align="center" label="类目ID" prop="id" />

      <el-table-column align="center" label="类目名" prop="name" />

      <el-table-column align="center" label="链接" prop="link" />

      <el-table-column align="center" property="iconUrl" label="类目图标">
        <template slot-scope="scope">
          <img v-if="scope.row.iconUrl" :src="scope.row.iconUrl" width="40">
        </template>
      </el-table-column>

      <el-table-column align="center" property="picUrl" label="类目图片">
        <template slot-scope="scope">
          <img v-if="scope.row.picUrl" :src="scope.row.picUrl" width="80">
        </template>
      </el-table-column>

      <el-table-column align="center" label="关键字" prop="keywords" />

      <el-table-column align="center" min-width="100" label="简介" prop="desc" />

      <el-table-column align="center" label="级别" prop="level">
        <template slot-scope="scope">
          <el-tag :type="scope.row.level === 'L1' ? 'primary' : 'info' ">{{ scope.row.level === 'L1' ? '一级类目' : '二级类目' }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/category/update']" type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-permission="['POST /admin/category/delete']" type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="类目名称" prop="name">
          <el-input v-model="dataForm.name" />
        </el-form-item>
        <el-form-item label="关键字" prop="keywords">
          <el-input v-model="dataForm.keywords" />
        </el-form-item>

        <!-- <el-form-item label="链接方式" prop="linkValue">
          <el-radio-group v-model="dataForm.linkValue">
            <el-radio :label="0">内部链接</el-radio>
            <el-radio :label="1">外部链接</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item prop="linkValue">
          <el-radio-group v-model="dataForm.linkValue" style="margin-left: -6.9rem">
            <el-radio :label="0">内部链接<el-input v-model="dataForm.inLink" style="margin-left:1.9rem" /></el-radio>
            <el-radio :label="1" style="margin-top: 1.6rem">外部链接<el-input v-model="dataForm.outLink" style="margin-left:1.9rem" /></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="链接" prop="link">
          <el-input v-model="dataForm.link" :disabled="isdisabled" />
        </el-form-item> -->
        <el-form-item label="级别" prop="level">
          <el-select v-model="dataForm.level" @change="onLevelChange">
            <el-option label="一级类目" value="L1" />
            <el-option label="二级类目" value="L2" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="dataForm.level === 'L2'" label="父类目" prop="pid">
          <el-select v-model="dataForm.pid">
            <el-option v-for="item in catL1" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="类目图标" prop="iconUrl">
          <el-upload
            :headers="headers"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="uploadIconUrl"
            class="avatar-uploader"
            accept=".jpg,.jpeg,.png,.gif"
          >
            <img v-if="dataForm.iconUrl" :src="dataForm.iconUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="类目图片" prop="picUrl">
          <el-upload
            :headers="headers"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="uploadPicUrl"
            class="avatar-uploader"
            accept=".jpg,.jpeg,.png,.gif"
          >
            <img v-if="dataForm.picUrl" :src="dataForm.picUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="类目简介" prop="desc">
          <el-input v-model="dataForm.desc" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确定</el-button>
        <el-button v-else type="primary" @click="updateData">确定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<style scoped>
.filter-item{
  margin-left: 100px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 145px;
  height: 145px;
  display: block;
}
</style>

<script>
// import { listCategory, listCatL1, createCategory, updateCategory, deleteCategory } from '@/api/category'
// eslint-disable-next-line no-unused-vars
import { categoryx, categoryxCreate, categoryxRead, categoryxUpdate, categoryxDelete, categoryxList } from '@/api/article'
import { uploadPath } from '@/api/storage'
import { getToken } from '@/utils/auth'
// import { format } from 'url'

export default {
  name: 'Category',
  data() {
    const isNumTest2 = /^(0|-?[1-9]\d*)\b/
    const isNum2 = (rule, value, callback) => {
      const changeIsNum2 = isNumTest2.test(value)
      if (!changeIsNum2) {
        return callback(new Error('序列号必须为数字'))
      } else {
        callback()
      }
    }
    return {
      uploadPath,
      isLink: undefined,
      // isdisabled: true,
      list: [],
      listLoading: true,
      catL1: {},
      dataForm: {
        id: undefined,
        name: '',
        keywords: '',
        level: 'L2',
        pid: 0,
        desc: '',
        iconUrl: '',
        picUrl: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        name: [{ required: true, message: '类目名不能为空', trigger: 'blur' }],
        link: [{ required: true, message: '链接不能为空', trigger: 'blur' }],
        sortOrder: [{ required: true, message: '序列号必须为数字' }, { validator: isNum2, trigger: 'blur' }]
      }
    }
  },
  computed: {
    headers() {
      return {
        'X-eye-Admin-Token': getToken()
      }
    }
  },
  // watch: {
  //   'dataForm.linkValue': function(newValue) {
  //     if (newValue === 1 || newValue === 0) {
  //       this.isdisabled = false
  //     }
  //   }
  // },
  created() {
    this.getList()
    this.getCatL1()
  },
  methods: {
    getList() {
      this.listLoading = true
      categoryx()
        .then(response => {
          this.list = response.data.data.list
          this.listLoading = false
        })
        .catch(() => {
          this.list = []
          this.listLoading = false
        })
    },
    getCatL1() {
      categoryxList().then(response => {
        this.catL1 = response.data.data.list
        // console.log(this.catL1)
      })
    },
    resetForm() {
      this.dataForm = {
        id: undefined,
        name: '',
        keywords: '',
        level: 'L2',
        pid: 0,
        desc: '',
        iconUrl: '',
        picUrl: ''
      }
    },
    onLevelChange: function(value) {
      if (value === 'L1') {
        this.dataForm.pid = 0
      }
    },
    handleCreate() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    uploadIconUrl: function(response) {
      this.dataForm.iconUrl = response.data.url
    },
    uploadPicUrl: function(response) {
      this.dataForm.picUrl = response.data.url
    },
    createData() {
      console.log(this.isLink)
      console.log(this.dataForm)
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          categoryxCreate(this.dataForm)
            .then(response => {
              this.getList()
              // 更新L1目录
              this.getCatL1()
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
      })
    },
    handleUpdate(row) {
      this.dataForm = Object.assign({}, row)
      console.log(this.dataForm)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          categoryxUpdate(this.dataForm)
            .then(() => {
              this.getList()
              // 更新L1目录
              this.getCatL1()
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
      })
    },
    handleDelete(row) {
      categoryxDelete(row)
        .then(response => {
          this.getList()
          // 更新L1目录
          this.getCatL1()
          this.$notify.success({
            title: '成功',
            message: '删除成功'
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
}
</script>
