<template>
  <div class="app-container">
    <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-width="300px">
      <el-form-item label="系统名称" prop="eye_mall_name">
        <el-input v-model="dataForm.eye_mall_name" />
      </el-form-item>
      <el-form-item label="线下地址" prop="eye_mall_address">
        <el-input v-model="dataForm.eye_mall_address" />
      </el-form-item>
      <el-form-item label="地理坐标">
        <el-col :span="11">
          <el-input v-model="dataForm.eye_mall_longitude" placeholder="经度" />
        </el-col>
        <el-col :span="2" style="text-align: center;">-</el-col>
        <el-col :span="11">
          <el-input v-model="dataForm.eye_mall_latitude" placeholder="纬度" />
        </el-col>
      </el-form-item>
      <el-form-item label="联系电话" prop="eye_mall_phone">
        <el-input v-model="dataForm.eye_mall_phone" />
      </el-form-item>
      <el-form-item label="联系邮箱" prop="eye_mall_email">
        <el-input v-model="dataForm.eye_mall_email" />
      </el-form-item>
      <el-form-item label="联系QQ" prop="eye_mall_qq">
        <!-- <el-input v-model="dataForm.eye_mall_qq" /> -->
        <el-table
          :data="dataForm.eye_mall_qq"
          size="mini"
          style="wdith:50%"
        >
          <el-table-column
            prop="qq"
            label="客服"
            width="300"
            align="center"
          />
          <el-table-column
            label="操作"
            width="300"
            align="center"
          >
            <template slot="header" slot-scope="">
              <el-button type="primary" @click="add">+添加</el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                type="danger"
                plain
                align="center"
                size="small"
                @click.native.prevent="deleteRow(scope.$index, dataForm.eye_mall_qq)"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="添加证书" prop="eye_mall_certificate">
        <el-table
          :data="dataForm.eye_mall_certificate"
          size="mini"
          style="wdith:50%"
        >
          <el-table-column
            prop="name"
            label="证书名称"
            width="300"
            align="center"
          />
          <!-- <el-table-column
            prop="url"
            label="证书图片"
            width="300"
            align="center"
          /> -->

          <el-table-column align="center" property="iconUrl" label="证书图片" prop="url">
            <template slot-scope="scope">
              <img :src="scope.row.url" width="40">
            </template>
          </el-table-column>

          <el-table-column
            label="操作"
            width="300"
            align="center"
          >
            <template slot="header" slot-scope="">
              <el-button type="primary" @click="add2">+添加</el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                type="danger"
                plain
                align="center"
                size="small"
                @click.native.prevent="deleteRow(scope.$index, dataForm.eye_mall_certificate)"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="联系微信" prop="eye_mall_wx">
        <el-input v-model="dataForm.eye_mall_wx" />
      </el-form-item>
      <el-form-item label="微信二维码" prop="eye_mall_wx_code">
        <el-upload
          :action="uploadPath"
          :show-file-list="false"
          :headers="headers"
          :on-success="uploadPicUrl"
          class="avatar-uploader"
          accept=".jpg,.jpeg,.png,.gif"
        >
          <img v-if="dataForm.eye_mall_wx_code" :src="dataForm.eye_mall_wx_code" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="系统大图标" prop="eye_mall_big_logo">
        <el-upload
          :action="uploadPath"
          :show-file-list="false"
          :headers="headers"
          :on-success="uploadPicUrlBigLogo"
          class="avatar-uploader"
          accept=".jpg,.jpeg,.png,.gif"
        >
          <div slot="tip" class="el-upload__tip" style="margin-left: 1rem">建议像素比180*180</div>
          <img v-if="dataForm.eye_mall_big_logo" :src="dataForm.eye_mall_big_logo" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="系统小图标" prop="eye_mall_small_logo">
        <el-upload
          :action="uploadPath"
          :show-file-list="false"
          :headers="headers"
          :on-success="uploadPicUrlSmallLogo"
          class="avatar-uploader"
          accept=".jpg,.jpeg,.png,.gif"
        >
          <div slot="tip" class="el-upload__tip" style="margin-left: 1rem">建议像素比24*24</div>
          <img v-if="dataForm.eye_mall_small_logo" :src="dataForm.eye_mall_small_logo" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="版权信息" prop="eye_mall_copyright">
        <el-input v-model="dataForm.eye_mall_copyright" />
      </el-form-item>
      <el-form-item label="系统备案号" prop="eye_mall_records">
        <el-input v-model="dataForm.eye_mall_records" />
      </el-form-item>
      <el-form-item>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="update">确定</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="添加客服QQ"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-input v-model="qqNum" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addService">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="添加证书信息"
      :visible.sync="centerDialogVisible2"
      width="30%"
      center
    >
      <el-input v-model="certificate.name" placeholder="请输入证书名称" />
      <div style="margin-top: 2rem;text-align: center;font-size: 16px;">添加证书图片</div>
      <el-upload
        :action="uploadPath"
        :show-file-list="false"
        :headers="headers"
        :on-success="uploadCertificate"
        class="avatar-uploader"
        accept=".jpg,.jpeg,.png,.gif"
        style="text-align: center;margin-top: 1rem"
      >
        <div slot="tip" class="el-upload__tip" style="margin-left: 1rem">建议像素比300*200</div>
        <img v-if="certificate.url" :src="certificate.url" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="addCertificate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style scoped>
.avatar-uploader .el-upload {
    width: 145px;
    height: 145px;
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
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar{
    width: 145px;
    height: 145px;
    border-radius: 5px;
    border: 1px solid #e9e9e9;
  }
</style>
<script>
import { listMall, updateMall } from '@/api/config'
import { uploadPath } from '@/api/storage'
import { getToken } from '@/utils/auth'
export default {
  name: 'ConfigMail',
  data() {
    return {
      uploadPath,
      centerDialogVisible: false,
      centerDialogVisible2: false,
      qqNum: '',
      certificate: {
        name: '',
        url: ''
      },
      qqlist: [
        { qq: 123456 },
        { qq: 123456 }
      ],
      dataForm: {
        eye_mall_name: '',
        eye_mall_address: '',
        eye_mall_phone: '',
        eye_mall_qq: [],
        eye_mall_certificate: [],
        eye_mall_longitude: '',
        eye_mall_latitude: '',
        eye_mall_wx_code: '',
        eye_mall_big_logo: '',
        eye_mall_small_logo: '',
        eye_mall_records: '',
        eye_mall_copyright: '',
        eye_mall_wx: ''
      },
      rules: {
        eye_mall_name: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        eye_mall_address: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        eye_mall_phone: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        eye_mall_qq: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        eye_mall_records: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        eye_mall_copyright: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
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
  created() {
    this.init()
  },
  methods: {
    add2() {
      this.centerDialogVisible2 = true
      this.certificate = {
        name: '',
        url: ''
      }
    },
    add() {
      this.centerDialogVisible = true
      this.qqNum = ''
    },
    addService() {
      this.centerDialogVisible = false
      this.dataForm.eye_mall_qq.push({ qq: this.qqNum })
    },
    addCertificate() {
      this.centerDialogVisible2 = false
      this.dataForm.eye_mall_certificate.push(this.certificate)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    uploadPicUrl: function(response) {
      this.dataForm.eye_mall_wx_code = response.data.url
      console.log(this.dataForm)
    },
    uploadPicUrlBigLogo(response) {
      this.dataForm.eye_mall_big_logo = response.data.url
    },
    uploadPicUrlSmallLogo(response) {
      this.dataForm.eye_mall_small_logo = response.data.url
    },
    uploadCertificate(res) {
      this.certificate.url = res.data.url
      console.log(res.data.url)
    },
    init: function() {
      listMall().then(response => {
        this.dataForm = response.data.data
        this.dataForm.eye_mall_qq = JSON.parse(response.data.data.eye_mall_qq)
        this.dataForm.eye_mall_certificate = JSON.parse(response.data.data.eye_mall_certificate)
        console.log(this.dataForm)
      })
    },
    cancel() {
      this.init()
    },
    update() {
      this.$refs['dataForm'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.doUpdate()
      })
    },
    doUpdate() {
      // let data = {
      //   data: this.dataForm,
      //   eye_mall_qq1: this.dataForm.eye_mall_qq
      // }
      // console.log(data)
      const data = { ...this.dataForm }
      const arr = this.dataForm.eye_mall_qq
      const arr2 = this.dataForm.eye_mall_certificate
      // console.log()
      data.eye_mall_qq = JSON.stringify(arr)
      data.eye_mall_certificate = JSON.stringify(arr2)
      updateMall(data)
        .then(response => {
          this.$notify.success({
            title: '成功',
            message: '商场配置成功'
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
