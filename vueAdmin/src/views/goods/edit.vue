<template>
  <div class="app-container">

    <el-card class="box-card">
      <h3>商品介绍</h3>
      <el-form ref="goods" :rules="rules" :model="goods" label-width="150px">
        <el-form-item label="商品ID" prop="id">
          <el-input v-model="goods.id" disabled />
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="goods.name" />
        </el-form-item>
        <el-form-item label="佣金比例" prop="commissionRate">
          <el-input v-model="goods.commissionRate">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item label="排列序号" prop="sortOrder">
          <el-input v-model="goods.sortOrder">
            <template slot="append">填数字</template>
          </el-input>
        </el-form-item>
        <el-form-item label="市场售价" prop="counterPrice">
          <el-input v-model="goods.counterPrice" placeholder="0.00">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="上线小程序" prop="isShown">
          <el-radio-group v-model="goods.isShown">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否新品" prop="isNew">
          <el-radio-group v-model="goods.isNew">
            <el-radio :label="true">新品</el-radio>
            <el-radio :label="false">非新品</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否热卖" prop="isHot">
          <el-radio-group v-model="goods.isHot">
            <el-radio :label="false">普通</el-radio>
            <el-radio :label="true">热卖</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否在售" prop="isOnSale">
          <el-radio-group v-model="goods.isOnSale">
            <el-radio :label="true">在售</el-radio>
            <el-radio :label="false">未售</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="商品图片">
          <el-upload
            :headers="headers"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="uploadPicUrl"
            class="avatar-uploader"
            accept=".jpg,.jpeg,.png,.gif"
          >
            <img v-if="goods.picUrl" :src="goods.picUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>

        <el-form-item label="宣传画廊">
          <el-upload
            :action="uploadPath"
            :headers="headers"
            :limit="5"
            :file-list="galleryFileList"
            :on-exceed="uploadOverrun"
            :on-success="handleGalleryUrl"
            :on-remove="handleRemove"
            multiple
            accept=".jpg,.jpeg,.png,.gif"
            list-type="picture-card"
          >
            <i class="el-icon-plus" />
          </el-upload>
        </el-form-item>

        <el-form-item label="商品单位">
          <el-input v-model="goods.unit" placeholder="件 / 个 / 盒" />
        </el-form-item>

        <el-form-item label="关键字">
          <el-tag v-for="tag in keywords" :key="tag" closable type="primary" @close="handleClose(tag)">
            {{ tag }}
          </el-tag>
          <el-input v-if="newKeywordVisible" ref="newKeywordInput" v-model="newKeyword" class="input-new-keyword" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" />
          <el-button v-else class="button-new-keyword" type="primary" @click="showInput">+ 增加</el-button>
        </el-form-item>

        <el-form-item label="所属分类">
          <el-cascader v-model="categoryIds" :options="categoryList" clearable expand-trigger="hover" @change="handleCategoryChange" />
        </el-form-item>

        <el-form-item label="所属品牌商">
          <el-select v-model="goods.brandId" clearable>
            <el-option v-for="item in brandList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="商品简介">
          <el-input v-model="goods.brief" />
        </el-form-item>

        <el-form-item label="商品详细介绍">
          <editor v-model="goods.detail" :init="editorInit" />
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <h3>是否秒杀</h3>
      <el-form ref="goodsKill" :model="goodsKill" label-width="80px">
        <el-form-item label="是否秒杀" prop="isKill">
          <el-radio-group v-model="goodsKill.isKill">
            <el-radio :label="true">秒杀</el-radio>
            <el-radio :label="false">非秒杀</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item v-show="goodsKill.isKill" label="秒杀时间" prop="killDate">
          <el-date-picker
            v-model="goodsKill.killDate"
            :picker-options="pickerOptions"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item v-show="goodsKill.isKill" placeholder="0.00" label="秒杀价格" prop="killPrice">
          <el-input v-model="goodsKill.killPrice">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item v-show="goodsKill.isKill" label="秒杀库存" prop="stockCount">
          <el-input v-model="goodsKill.stockCount">
            <template slot="append">件</template>
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <h3>上传附件</h3>
      <el-form ref="enclosure" :model="enclosure" label-width="80px">
        <el-form-item label="上传附件" prop="isUpload">
          <el-radio-group v-model="enclosure.isUpload">
            <el-radio :label="true">对象存储</el-radio>
            <el-radio :label="false">百度云</el-radio>
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
          <el-input v-model="accessory.accessoryLink" />
        </el-form-item>
        <el-form-item v-show="enclosure.isUpload == false" label="提取码" prop="BaiDuurl">
          <el-input v-model="accessory.accessoryCode" />
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <h3>商品规格</h3>
      <el-table :data="specifications">
        <el-table-column property="specification" label="规格名" />
        <el-table-column property="value" label="规格值">
          <template slot-scope="scope">
            <el-tag type="primary">
              {{ scope.row.value }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column property="picUrl" label="规格图片">
          <template slot-scope="scope">
            <img v-if="scope.row.picUrl" :src="scope.row.picUrl" width="40">
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleSpecificationShow(scope.row)">设置</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="specVisiable" title="设置规格">
        <el-form ref="specForm" :rules="rules" :model="specForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="规格名" prop="specification">
            <el-input v-model="specForm.specification" disabled />
          </el-form-item>
          <el-form-item label="规格值" prop="value">
            <el-input v-model="specForm.value" disabled />
          </el-form-item>
          <el-form-item label="规格图片" prop="picUrl">
            <el-upload
              :headers="headers"
              :action="uploadPath"
              :show-file-list="false"
              :on-success="uploadSpecPicUrl"
              class="avatar-uploader"
              accept=".jpg,.jpeg,.png,.gif"
            >
              <img v-if="specForm.picUrl" :src="specForm.picUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="specVisiable = false">取消</el-button>
          <el-button type="primary" @click="handleSpecificationEdit">确定</el-button>
        </div>
      </el-dialog>
    </el-card>

    <el-card class="box-card">
      <h3>商品库存</h3>
      <el-table :data="products">
        <el-table-column property="value" label="货品规格">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row.specifications" :key="tag">
              {{ tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column property="price" label="货品售价" />
        <el-table-column property="number" label="货品数量" />
        <el-table-column property="url" label="货品图片">
          <template slot-scope="scope">
            <img v-if="scope.row.url" :src="scope.row.url" width="40">
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleProductShow(scope.row)">设置</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="productVisiable" title="编辑货品">
        <el-form ref="productForm" :model="productForm" :rules="priceRules" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="货品规格列" prop="specifications">
            <el-tag v-for="tag in productForm.specifications" :key="tag">
              {{ tag }}
            </el-tag>
          </el-form-item>
          <el-form-item label="货品售价" prop="price">
            <el-input v-model="productForm.price" />
          </el-form-item>
          <el-form-item label="货品数量" prop="number">
            <el-input v-model="productForm.number" />
          </el-form-item>
          <el-form-item label="货品图片" prop="url">
            <el-upload
              :headers="headers"
              :action="uploadPath"
              :show-file-list="false"
              :on-success="uploadProductUrl"
              class="avatar-uploader"
              accept=".jpg,.jpeg,.png,.gif"
            >
              <img v-if="productForm.url" :src="productForm.url" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="productVisiable = false">取消</el-button>
          <el-button type="primary" @click="handleProductEdit">确定</el-button>
        </div>
      </el-dialog>
    </el-card>

    <el-card class="box-card">
      <h3>商品参数</h3>
      <el-button type="primary" @click="handleAttributeShow">添加</el-button>
      <el-table :data="attributesData">
        <el-table-column property="attribute" label="商品参数名称" />
        <el-table-column property="value" label="商品参数值" />
        <el-table-column align="center" label="操作" width="200" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleAttributeShow(scope.row)">设置</el-button>
            <el-button type="danger" size="mini" @click="handleAttributeDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="attributeVisiable" :title="attributeAdd ? '添加商品参数' : '编辑商品参数'">
        <el-form ref="attributeForm" :model="attributeForm" status-icon label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="商品参数名称" prop="attribute">
            <el-input v-model="attributeForm.attribute" />
          </el-form-item>
          <el-form-item label="商品参数值" prop="value">
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

    <div class="op-container">
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleEdit">更新商品</el-button>
    </div>

  </div>
</template>

<style>
.el-card {
  margin-bottom: 10px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.input-new-keyword {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
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
.op-container {
  display: flex;
  justify-content: center;
}
</style>

<script>
import { detailGoods, editGoods, listCatAndBrand } from '@/api/goods'
import { createStorage, uploadPath } from '@/api/storage'
import Editor from '@tinymce/tinymce-vue'
import { MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'

export default {
  name: 'GoodsEdit',
  components: { Editor },
  data() {
    const isPrice = (rule, value, callback) => {
      if (value <= 0) {
        return callback(new Error('价格不能小于或等于0'))
      } else {
        callback()
      }
    }
    return {
      uploadPath,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      enclosure: {
        isUpload: undefined
      },
      accessory: {},
      newKeywordVisible: false,
      newKeyword: '',
      isAccessory: undefined,
      keywords: [],
      galleryFileList: [],
      goodsKill: {},
      categoryList: [],
      brandList: [],
      categoryIds: [],
      cloneKill: {},
      accfileList: [],
      priceRules: {
        price: [{ required: true, validator: isPrice, message: '价格不能小于或等于0', trigger: 'blur' }]
      },
      goods: { gallery: [], date: [undefined, undefined] },
      specVisiable: false,
      specForm: { specification: '', value: '', picUrl: '' },
      specifications: [{ specification: '规格', value: '标准', picUrl: '' }],
      productVisiable: false,
      productForm: {
        id: 0,
        specifications: [],
        price: 0.0,
        number: 0,
        url: ''
      },
      accId: '',
      products: [
        { id: 0, specifications: ['标准'], price: 0.0, number: 0, url: '' }
      ],
      attributeVisiable: false,
      attributeAdd: true,
      attributeForm: { attribute: '', value: '' },
      attributes: [],
      rules: {
        name: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        counterPrice: [{ required: true, validator: isPrice, message: '价格不能小于或等于0', trigger: 'blur' }]
      },
      editorInit: {
        language: 'zh_CN',
        height: '400px',
        convert_urls: false,
        plugins: [
          'advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
        ],
        toolbar: [
          'searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample',
          'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'
        ],
        images_upload_handler: function(blobInfo, success, failure) {
          const formData = new FormData()
          formData.append('file', blobInfo.blob())
          createStorage(formData)
            .then(res => {
              success(res.data.data.url)
            })
            .catch(() => {
              failure('上传失败，请重新上传')
            })
          // start = ['2020-07-20 10:08:34', '2020-07-21 10:08:38']
        }
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
  watch: {
    'goodsKill.isKill': {
      handler(newName, oldName) {
        if (newName) {
          // eslint-disable-next-line eqeqeq
          // console.log(this.goodsKill.killDate)
          if (this.goodsKill.killDate[0] === null) {
            this.goodsKill.killDate = [new Date(), new Date()]
          } else {
            this.goodsKill.killDate = this.cloneKill.killDate
          }
        } else {
          // delete this.rules.date
          // delete this.goods.date
          // delete this.goods.killPrice
          // delete this.goods.killStock
          if (this.goodsKill.date) {
            delete this.rules.date
          }
          if (this.goodsKill.killPricee) {
            delete this.goods.killPrice
          }
          if (this.goodsKill.killStock) {
            delete this.goods.stockCount
          }
        }
      },
      immediate: true
    }
  },
  created() {
    this.init()
  },
  methods: {
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
    handleExceedBfile(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemoveBfile(file, fileList) {
      this.fileList = fileList
      // return this.$confirm(`确定移除 ${file.name}？`)
    },
    init: function() {
      if (this.$route.query.id == null) {
        return
      }

      const goodsId = this.$route.query.id
      detailGoods(goodsId).then(response => {
        this.goods = response.data.data.goods
        // console.log(this.goods)
        // 稍微调整一下前后端不一致
        if (this.goods.brandId === 0) {
          this.goods.brandId = null
        }
        if (this.goods.keywords === '') {
          this.goods.keywords = null
        }
        this.specifications = response.data.data.specifications
        this.products = response.data.data.products
        this.attributes = response.data.data.attributes
        this.categoryIds = response.data.data.categoryIds
        this.goodsKill = response.data.data.goodsKill
        this.cloneKill = { ...response.data.data.goodsKill }
        if (response.data.data.accessory === undefined) {
          this.isAccessory = false
        } else if (response.data.data.accessory.accessoryCode) {
          this.enclosure.isUpload = false
          this.accId = response.data.data.accessory.id
          this.accessory = response.data.data.accessory
        } else {
          this.isAccessory = true
          this.accId = response.data.data.accessory.id
          this.accfileList.push(response.data.data.accessory)
          console.log(this.accfileList)
          this.enclosure.isUpload = true
        }

        this.galleryFileList = []
        for (var i = 0; i < this.goods.gallery.length; i++) {
          this.galleryFileList.push({
            url: this.goods.gallery[i]
          })
        }
        const keywords = response.data.data.goods.keywords
        if (keywords !== null) {
          this.keywords = keywords.split(',')
        }
      })

      listCatAndBrand().then(response => {
        this.categoryList = response.data.data.categoryList
        this.brandList = response.data.data.brandList
      })
    },
    handleCategoryChange(value) {
      this.goods.categoryId = value[value.length - 1]
    },
    handleCancel: function() {
      this.$router.push({ path: '/goods/list' })
    },
    getDate(time) {
      var date = time
      var seperator1 = '-'
      var seperator2 = ':'
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (day >= 0 && day <= 9) {
        day = '0' + day
      }
      if (hours >= 0 && hours <= 9) {
        hours = '0' + hours
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = '0' + seconds
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + day + ' ' + hours + seperator2 + minutes + seperator2 + seconds
      return currentdate
    },
    handleEdit: function() {
      const clonegoodsKill = { ...this.goodsKill }
      if (!clonegoodsKill.isKill) {
        clonegoodsKill.isKill = false
      }
      if (this.cloneKill.killDate[0] !== clonegoodsKill.killDate[0] && this.cloneKill.killDate[1] !== clonegoodsKill.killDate[1]) {
        clonegoodsKill.killDate[0] = this.getDate(clonegoodsKill.killDate[0])
        clonegoodsKill.killDate[1] = this.getDate(clonegoodsKill.killDate[1])
      }
      let uploadList = { id: this.accId }
      if (this.accfileList.length === 0 && this.isAccessory === true) {
        // eslint-disable-next-line no-const-assign
        uploadList.deleted = true
      } else if (this.enclosure.isUpload === true && this.accfileList[0]) {
        if (this.accfileList[0].response) {
          uploadList = this.accfileList[0].response.data
          uploadList.deleted = false
        } else {
          uploadList.deleted = false
          uploadList = this.accfileList[0]
        }
      } else if (this.enclosure.isUpload === false && this.accessory.accessoryCode && this.accessory.accessoryLink) {
        uploadList.deleted = false
        uploadList.accessoryLink = this.accessory.accessoryLink
        uploadList.accessoryCode = this.accessory.accessoryCode
      }
      const finalGoods = {
        goods: this.goods,
        specifications: this.specifications,
        products: this.products,
        attributes: this.attributes,
        goodsKill: clonegoodsKill,
        accessory: uploadList
      }
      editGoods(finalGoods)
        .then(response => {
          this.$notify.success({
            title: '成功',
            message: '更新成功'
          })
          this.$router.push({ path: '/goods/list' })
        })
        .catch(response => {
          MessageBox.alert('业务错误：' + response.data.errmsg, '警告', {
            confirmButtonText: '确定',
            type: 'error'
          })
        })
    },
    handleClose(tag) {
      this.keywords.splice(this.keywords.indexOf(tag), 1)
      this.goods.keywords = this.keywords.toString()
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
        this.goods.keywords = this.keywords.toString()
      }
      this.newKeywordVisible = false
      this.newKeyword = ''
    },
    uploadPicUrl: function(response) {
      this.goods.picUrl = response.data.url
    },
    uploadOverrun: function() {
      this.$message({
        type: 'error',
        message: '上传文件个数超出限制!最多上传5张图片!'
      })
    },
    handleGalleryUrl(response, file, fileList) {
      if (response.errno === 0) {
        this.goods.gallery.push(response.data.url)
      }
    },
    handleRemove: function(file, fileList) {
      for (var i = 0; i < this.goods.gallery.length; i++) {
        // 这里存在两种情况
        // 1. 如果所删除图片是刚刚上传的图片，那么图片地址是file.response.data.url
        //    此时的file.url虽然存在，但是是本机地址，而不是远程地址。
        // 2. 如果所删除图片是后台返回的已有图片，那么图片地址是file.url
        var url
        if (file.response === undefined) {
          url = file.url
        } else {
          url = file.response.data.url
        }

        if (this.goods.gallery[i] === url) {
          this.goods.gallery.splice(i, 1)
        }
      }
    },
    specChanged: function(label) {
      if (label === false) {
        this.specifications = [
          { specification: '规格', value: '标准', picUrl: '' }
        ]
        this.products = [
          { id: 0, specifications: ['标准'], price: 0.0, number: 0, url: '' }
        ]
      } else {
        this.specifications = []
        this.products = []
      }
    },
    uploadSpecPicUrl: function(response) {
      this.specForm.picUrl = response.data.url
    },
    handleSpecificationShow(row) {
      this.specForm = Object.assign({}, row)
      this.specVisiable = true
    },
    handleSpecificationEdit() {
      this.specForm.updateTime = ''
      for (var i = 0; i < this.specifications.length; i++) {
        const v = this.specifications[i]
        if (v.id === this.specForm.id) {
          this.specifications.splice(i, 1, this.specForm)
          break
        }
      }
      this.specVisiable = false
    },
    handleProductShow(row) {
      this.productForm = Object.assign({}, row)
      this.productVisiable = true
    },
    uploadProductUrl: function(response) {
      this.productForm.url = response.data.url
    },
    handleProductEdit() {
      this.productForm.updateTime = ''
      if (this.productForm.price <= 0) {
        return false
      }
      for (var i = 0; i < this.products.length; i++) {
        const v = this.products[i]
        if (v.id === this.productForm.id) {
          this.products.splice(i, 1, this.productForm)
          break
        }
      }
      this.productVisiable = false
    },
    handleAttributeShow(row) {
      if (row.id) {
        this.attributeForm = Object.assign({}, row)
        this.attributeAdd = false
      } else {
        this.attributeForm = {}
        this.attributeAdd = true
      }
      this.attributeVisiable = true
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
    }
  }
}
</script>
