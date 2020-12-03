<template>
  <div class="app-container">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title" />
      </el-form-item>
      <el-form-item label="副标题" prop="label">
        <el-input v-model="ruleForm.label" />
      </el-form-item>
      <el-form-item label="排列序号" prop="sortOrder">
        <el-input v-model="ruleForm.sortOrder" />
      </el-form-item>
      <el-form-item label="作者名称" prop="addUser">
        <el-input v-model="ruleForm.addUser" />
      </el-form-item>
      <el-form-item label="链接" prop="link">
        <el-input v-model="ruleForm.link" />
      </el-form-item>
      <el-form-item label="是可以被搜索" prop="isSearch">
        <el-radio-group v-model="ruleForm.isSearch">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="关键字">
        <el-tag v-for="tag in keywords" :key="tag" closable type="primary" @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
          v-if="newKeywordVisible"
          ref="newKeywordInput"
          v-model="newKeyword"
          class="input-new-keyword"

          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-keyword" type="primary" @click="showInput">+ 增加</el-button>
      </el-form-item>

      <el-card class="box-card" style="margin-top: 3rem;margin-bottom: 3rem;padding:1rem">
        <h3>文章参数</h3>
        <el-button type="primary" @click="handleAttributeShow">添加</el-button>
        <el-table :data="attributesData">
          <el-table-column property="attribute" label="文章参数名称" />
          <el-table-column property="value" label="文章参数值" />
          <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="handleAttributeShow(scope.row)">设置</el-button>
              <el-button type="danger" size="mini" @click="handleAttributeDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="attributeVisiable" :title="attributeAdd ? '添加文章参数' : '编辑文章参数'">
          <el-form ref="attributeForm" :model="attributeForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
            <el-form-item label="文章参数名称" prop="attribute">
              <el-input v-model="attributeForm.attribute" />
            </el-form-item>
            <el-form-item label="文章参数值" prop="value">
              <el-input v-model="attributeForm.value" />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="attributeVisiable = false">取消</el-button>
            <el-button v-if="attributeAdd" type="primary" @click="handleAttributeAdd">确定</el-button>
            <el-button v-else type="primary" @click="handleAttributeEdit">确定</el-button>
          </div>
        </el-dialog>
      </el-card>

      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <el-card style="margin-bottom: 3rem" class="box-card">
        <h3>上传附件</h3>
        <el-form ref="enclosure" :model="enclosure" label-width="80px">
          <el-form-item label="上传附件" prop="isUpload">
            <el-radio-group v-model="enclosure.isUpload">
              <el-radio :label="true">对象存储</el-radio>
              <!-- <el-radio :label="false">百度云</el-radio> -->
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="enclosure.isUpload == true" label="上传附件">
            <el-upload
              class="upload-demo"
              :action="uploadPath"
              :headers="headers"
              :on-success="uploadSuccess"
              :on-preview="handlePreviewBfile"
              :on-remove="handleRemoveBfile"
              :before-remove="beforeRemoveBfile"
              multiple
              :limit="1"
              :on-exceed="handleExceedBfile"
              :file-list="accfileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传文件，且不超过20M</div>
            </el-upload>
          </el-form-item>
          <el-form-item v-show="enclosure.isUpload == false" label="云盘网址" prop="BaiDuurl">
            <el-input v-model="enclosure.BaiDuurl" />
          </el-form-item>
          <el-form-item v-show="enclosure.isUpload == false" label="提取码" prop="BaiDuurl">
            <el-input v-model="enclosure.code" />
          </el-form-item>
        </el-form>
      </el-card>
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->
      <!-- 上传附件 -->

      <el-form-item label="文章分类" prop="categoryId">
        <el-cascader
          v-model="ruleForm.categoryId"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="文章图片" prop="picUrl">
        <el-upload
          :headers="headers"
          :action="uploadPath"
          :show-file-list="false"
          :on-success="uploadPicUrl"
          class="avatar-uploader"
          accept=".jpg,.jpeg,.png,.gif"
        >
          <img v-if="ruleForm.picUrl" :src="ruleForm.picUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="文章详细介绍" prop="context">
        <editor v-model="ruleForm.context" :init="editorInit" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即更新</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style  scoped>
.avatar-uploader-icon {
    font-size: 28px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
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
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}
</style>
<script>
import Editor from '@tinymce/tinymce-vue'
import { updateArticle, categoryxList, detailArticle } from '@/api/article'
import { createStorage, uploadPath } from '@/api/storage'
import { MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'
export default {
  components: { Editor },
  data() {
    return {
      uploadPath,
      enclosure: {
        isUpload: undefined
      },
      fileList: [],
      newKeywordVisible: false,
      newKeyword: '',
      id: undefined,
      ruleForm: {
        title: '',
        isSearch: true,
        categoryId: [],
        picUrl: ''
      },
      options: [],
      attributeVisiable: false,
      attributeAdd: true,
      attributes: [],
      attributeForm: { attribute: '', value: '' },
      keywords: [],
      editorInit: {
        language: 'zh_CN',
        height: 500,
        convert_urls: false,
        plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'],
        toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
        images_upload_handler: function(blobInfo, success, failure) {
          const formData = new FormData()
          formData.append('file', blobInfo.blob())
          createStorage(formData).then(res => {
            success(res.data.data.url)
          }).catch(() => {
            failure('上传失败，请重新上传')
          })
        }
      },
      isAccessory: undefined,
      accessory: {},
      accfileList: [],
      accId: '',
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 1, max: 99, message: '长度最少 1 个字符', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请选择分类', trigger: 'change' }
        ],
        sortOrder: [
          { required: true, message: '请填写排列序号', trigger: 'blur' }
        ],
        categoryId: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    headers() {
      return {
        'X-eye-Admin-Token': getToken()
      }
    },
    attributesData() {
      var attributesData = []
      for (var i = 0; i < this.attributes.length; i++) {
        if (this.attributes[i].deleted) {
          continue
        }
        attributesData.push(this.attributes[i])
      }
      return attributesData
    }
  },
  mounted() {
    this.id = this.$route.query.id
    const data = { id: this.id }
    detailArticle(data).then(res => {
      console.log(res.data.data.article)
      this.ruleForm = res.data.data.article
      this.ruleForm.categoryId = res.data.data.categoryIds
      this.attributes = res.data.data.attributes
      if (res.data.data.accessory === undefined) {
        this.isAccessory = false
      } else if (res.data.data.accessory.accessoryCode) {
        this.enclosure.isUpload = false
        this.accId = res.data.data.accessory.id
        this.accessory = res.data.data.accessory
      } else {
        this.isAccessory = true
        this.accId = res.data.data.accessory.id
        this.accfileList.push(res.data.data.accessory)
        console.log(this.accfileList)
        this.enclosure.isUpload = true
      }
      if (this.ruleForm.keywords === '') {
        this.ruleForm.keywords = null
      }
      const keywords = res.data.data.article.keywords
      if (keywords !== null) {
        this.keywords = keywords.split(',')
      }
    })
    categoryxList().then(res => {
      this.options = res.data.data.list
    })
  },
  methods: {
    handleExceedBfile(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemoveBfile(file, fileList) {
      this.fileList = fileList
    },
    handleRemoveBfile(file, fileList) {
      this.accfileList = []
      console.log(file, fileList)
    },
    uploadSuccess(response, file, fileList) {
      this.accfileList = fileList
    },
    handlePreviewBfile(file) {
      console.log(file)
    },
    handleAttributeAdd() {
      this.attributes.unshift(this.attributeForm)
      this.attributeVisiable = false
    },
    handleAttributeEdit() {
      // 这是一个trick，设置updateTime的值为空，告诉后端这个记录已编辑需要更新。
      this.attributeForm.updateTime = ''
      for (var i = 0; i < this.attributes.length; i++) {
        const v = this.attributes[i]
        if (v.id === this.attributeForm.id) {
          this.attributes.splice(i, 1, this.attributeForm)
          break
        }
      }
      this.attributeVisiable = false
    },
    handleAttributeDelete(row) {
      row.deleted = true
    },
    handleAttributeShow(row) {
      console.log(row)
      if (row.value) {
        this.attributeForm = Object.assign({}, row)
        this.attributeAdd = false
      } else {
        this.attributeForm = {}
        this.attributeAdd = true
      }
      this.attributeVisiable = true
    },
    showInput() {
      this.newKeywordVisible = true
      this.$nextTick(_ => {
        this.$refs.newKeywordInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      const newKeyword = this.newKeyword
      if (newKeyword) {
        this.keywords.push(newKeyword)
        this.ruleForm.keywords = this.keywords.toString()
      }
      this.newKeywordVisible = false
      this.newKeyword = ''
    },
    handleClose(tag) {
      this.keywords.splice(this.keywords.indexOf(tag), 1)
      this.ruleForm.keywords = this.keywords.toString()
    },
    uploadPicUrl: function(response) {
      this.ruleForm.picUrl = response.data.url
    },
    handleChange(value) {
      console.log(value)
      console.log(this.ruleForm)
    },
    submitForm(formName) {
      let uploadList = { id: this.id }
      if (this.accfileList.length === 0 && this.isAccessory === true) {
        // eslint-disable-next-line no-const-assign
        uploadList.deleted = true
      } else if (this.enclosure.isUpload === true && this.accfileList[0]) {
        if (this.accfileList[0].response) {
          uploadList = this.accfileList[0].response.data
          uploadList.id = this.id
          uploadList.deleted = false
        } else {
          uploadList.deleted = false
          uploadList = this.accfileList[0]
          uploadList.id = this.id
        }
      } else if (this.enclosure.isUpload === false && this.accessory.accessoryCode && this.accessory.accessoryLink) {
        uploadList.id = this.id
        uploadList.deleted = false
        uploadList.accessoryLink = this.accessory.accessoryLink
        uploadList.accessoryCode = this.accessory.accessoryCode
      } else {
        uploadList.deleted = true
      }
      console.log(uploadList)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // if (this.ruleForm.categoryId.length < 2) {
          //   MessageBox.alert('请选择文章分类： 警告', {
          //     confirmButtonText: '确定',
          //     type: 'error'
          //   })
          //   return
          // }
          this.ruleForm.categoryId = this.ruleForm.categoryId[1]
          const data = {
            article: this.ruleForm,
            attributes: this.attributes,
            accessory: uploadList
          }
          updateArticle(data).then(response => {
            this.$notify.success({
              title: '成功',
              message: '更新成功'
            })
            this.$router.push({ path: '/article/articleList' })
          })
            .catch(response => {
              MessageBox.alert('业务错误：' + response.data.errmsg, '警告', {
                confirmButtonText: '确定',
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
