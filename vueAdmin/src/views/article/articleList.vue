<template>
  <div class="app-container">
    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.id" clearable class="filter-item" style="width: 160px;padding-top: .5rem;" placeholder="请输入文章ID" />
      <el-input v-model="listQuery.title" clearable class="filter-item" style="width: 160px;padding-top: .5rem;" placeholder="请输入文章标题" />
      <el-cascader
        v-model="listQuery.categoryId"
        placeholder="请选择分类"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      />
      <el-button class="filter-item" type="primary" style="margin-top: .5rem;margin-left: 1rem" icon="el-icon-search" @click="handleFilter">查找</el-button>
      <el-button class="filter-item" type="primary" style="margin-top: .5rem;" icon="el-icon-edit" @click="handleCreate">添加</el-button>
      <!-- <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button> -->
    </div>
    <el-table
      v-loading="listLoading"
      :data="tableData"
      style="width: 100%"
      fit
      highlight-current-row
      :border="true"
    >
      <el-table-column
        label="文章ID"
        min-width="40"
        prop="id"
        align="center"
      />
      <el-table-column align="center" label="排序号" min-width="40" prop="sortOrder" />

      <el-table-column
        label="文章标题"
        align="center"
        prop="title"
      />

      <el-table-column
        label="文章分类"
        align="center"
        prop="categoryName"
      />

      <el-table-column align="center" min-width="50" label="作者" prop="addUser" />

      <el-table-column align="center" min-width="50" property="iconUrl" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" width="40">
        </template>
      </el-table-column>
      <el-table-column
        label="添加时间"
        align="center"
        prop="updateTime"
      />
      <el-table-column align="center" min-width="40" label="详情" prop="context">
        <template slot-scope="scope">
          <el-dialog :visible.sync="detailDialogVisible" title="文章详情">
            <div class="goods-detail-box" v-html="articleDetail" />
          </el-dialog>
          <el-button type="primary" size="mini" @click="getDetails(scope.row.context)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { getArticleList, deleteArticle, categoryxList } from '@/api/article'

import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      tableData: [],
      search: '',
      options: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        id: undefined,
        title: undefined,
        categoryId: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      articleDetail: '',
      detailDialogVisible: false,
      total: 0
    }
  },
  mounted() {
    this.getList()
    categoryxList().then(res => {
      const value = { value: 0, label: '全部' }
      this.options = [value, ...res.data.data.list]
    })
  },
  methods: {
    handleChange(value) {
      console.log(value)
      if (value.length > 1) {
        this.listQuery.categoryId = value[1]
      } else {
        this.listQuery.categoryId = value[0]
      }
    },
    getList() {
      // console.log(this.listQuery)
      const query = { ...this.listQuery }
      if (this.listQuery.categoryId === 0) {
        delete query.categoryId
      }
      getArticleList(query).then(res => {
        console.log(res)
        this.tableData = res.data.data.list
        // this.list = res.data.data.list
        this.total = res.data.data.total
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
    handleCreate() {
      this.$router.push({ path: '/article/create' })
    },
    getDetails(context) {
      this.articleDetail = context
      console.log(this.articleDetail)
      this.detailDialogVisible = true
      // console.log(index, row)
    },
    handleEdit(index, row) {
      // console.log(index, row)
      this.$router.push({ path: '/article/update', query: { id: row.id }})
    },
    handleDelete(index, row) {
      console.log(row.id)
      const data = { id: row.id }
      deleteArticle(data).then(response => {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        const index = this.tableData.indexOf(row)
        this.tableData.splice(index, 1)
      }).catch(response => {
        this.$notify.error({
          title: '失败',
          message: response.data.errmsg
        })
      })
      this.getList()
    }
  }
}
</script>
