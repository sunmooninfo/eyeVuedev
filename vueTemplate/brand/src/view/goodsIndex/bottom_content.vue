<template>
    <el-row :gutter="10">
        <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24" >
            <div class="PC_text_info">
                <div class="top">
                    <div class="top_content">
                      <el-tabs type="border-card">
                        <el-tab-pane label="品牌动态">
                            <ul class="top_content_ul">
                              <li v-for="(item,index) in list" :key="index">
                                <span class="liLeft_span">
                                  {{item.name}}
                                </span>
                                <span class="liRight_span">
                                  {{item.date}}
                                </span>
                              </li>
                            </ul>
                        </el-tab-pane>
                      </el-tabs>
                      <el-tabs type="border-card">
                        <el-tab-pane label="相关新闻">
                            <ul class="top_content_ul">
                              <li v-for="(item,index) in listR" :key="index">
                                <span class="liLeft_span">
                                  {{item.name}}
                                </span>
                                <span class="liRight_span">
                                  {{item.date}}
                                </span>
                              </li>
                            </ul>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                </div>
                <!-- <div class="middle">
                  <div class="middle_con_one middle_con">
                    <div class="border_top">
                        <span>品牌招商</span>
                    </div>
                    <div>
                      <el-table
                        height="240"
                        :data="tableDataL"
                        style="width: 100%">
                        <el-table-column
                          prop="name"
                          label="所属行业">
                        </el-table-column>
                        <el-table-column
                          prop="brand"
                          label="品牌名">
                        </el-table-column>
                        <el-table-column
                          label="优选榜">
                          <template slot-scope="scope">
                            <div v-if="scope.row.optimization != '未上榜'" class="table_red">
                              第 <span>{{scope.row.optimization}}</span> 名
                            </div>
                            <div v-else>
                                {{scope.row.optimization}}
                            </div>
                          </template>
                        </el-table-column>
                        <el-table-column
                          prop="new"
                          label="新锐榜">
                          <template slot-scope="scope">
                            <div v-if="scope.row.new != '未上榜'" class="table_red">
                              第 <span>{{scope.row.new}}</span> 名
                            </div>
                            <div v-else>
                                {{scope.row.new}}
                            </div>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>
                  <div class="middle_con_two middle_con">
                    <div class="border_top">
                        <span>品牌投票</span>
                    </div>
                    <div>
                      <el-table
                        :data="tableDataR"
                        height="240"
                        style="width: 100%">
                        <el-table-column
                          prop="name"
                          label="所属行业">
                        </el-table-column>
                        <el-table-column
                          prop="num"
                          label="得票数">
                        </el-table-column>
                        <el-table-column
                          prop="ranking"
                          label="行业排名">
                        </el-table-column>
                        <el-table-column
                          label="投票">
                          <template>
                            <span>去投票</span>
                          </template>
                        </el-table-column>
                      </el-table>
                    </div>
                  </div>

                </div> -->
                <div class="bottom">
                  <div class="bottom_top">
                    <span>3M品牌介绍页</span>
                  </div>
                  <div class="bottom_content">
                    <div class="con_top">
                      <p>手机打开微信，将品牌介绍页分享至朋友圈</p>
                      <canvas id="canvas"></canvas>
                    </div>
                  </div>
                </div>
            </div>
        </el-col>

    </el-row>

</template>

<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
      list: [
        {name: '为什么3M可以独霸中国市场？', date: '04-12'},
        {name: '股价崩塌，大幅度裁员，期待3M重振旗鼓破局而立', date: '04-11'}
      ],
      listR: [
        {name: '家用电器十大品牌', date: '02-12'},
        {name: '什么牌子的家用电器好', date: '02-16'},
        {name: '家用电器十大品牌', date: '12-12'},
        {name: '什么牌子的家用电器好', date: '05-12'},
        {name: '家用电器十大品牌', date: '03-12'}
      ],
      tableDataL: [
        {
          name: '家用电器',
          brand: '未上榜',
          optimization: '未上榜',
          new: '未上榜'
        },
        {
          name: '生活电器',
          brand: '未上榜',
          optimization: '6',
          new: '未上榜'
        },
        {
          name: '净水器',
          brand: '未上榜',
          optimization: '未上榜',
          new: '2'
        }
      ],
      tableDataR: [
        {
          name: '家用电器',
          num: '46',
          ranking: '2'
        },
        {
          name: '护肤品',
          num: '21',
          ranking: '3'
        },
        {
          name: '净水器',
          num: '46',
          ranking: '4'
        },
        {
          name: '地板',
          num: '11',
          ranking: '5'
        },
        {
          name: '牙膏',
          num: '33',
          ranking: '6'
        },
        {
          name: '纸巾',
          num: '12',
          ranking: '7'
        },
        {
          name: '洁厕灵',
          num: '56',
          ranking: '28'
        }
      ],
      value: null,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      textarea: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted () {
    this.useqrcode()
  },
  methods: {
    handleClick () {

    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    useqrcode () {
      var canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, 'https://blog.csdn.net/weixin_42890953/article/details/82776760', function (error) {
        if (error) console.error(error)
        console.log('QRCode success!')
      })
    }
  },
  components: {
    QRCode: QRCode
  }
}
</script>

<style scoped>
    .PC_text_info {
        /* width: 100%; */
        width: 1200px;
        margin: 0 auto;
    }
    .top {
        background: #fff;
        padding: 15px;
        margin-top: 15px;
    }
    /deep/ .top_content .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
      color: #e00b0b;
    }
    .top_content_ul li {
      font-size: 14px;
      margin-bottom: 10px;
      color: #e00b0b;
    }
    .liRight_span {
      float: right;
    }
    /deep/ .top_content .el-tabs--border-card {
      display: inline-block;
      width: 49%;
      vertical-align: top;
    }
    .top_content_ul {
      padding-left: 20px;
      height: 165px;
      overflow-y: auto;
    }
    .liLeft_span {
      display: inline-block;
      width: 85%;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      color: #333;
    }
    .liRight_span {
      color: #999;
    }

    /* ~~~~~~~ */
    .middle {
        background: #f5f5f5;
        /* padding: 15px; */
        margin-top: 15px;
    }
    .border_top {
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        border-left: 5px solid #E00B0B;
    }
    .border_top span:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
    }
    .border_top span:nth-child(2) {
        float: right;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }
    .middle_con {
      display: inline-block;
      width: 47%;
      background: #fff;
      padding: 1%;
      vertical-align: top;
    }
    .middle_con_two {
      margin-left: 1%;
    }
    .table_red {
     color: #e00b0b;
    }
    .table_red span {
      background-color: #e00b0b;
      color: #fff;
      padding: 2px;
      width: 10px;
      display: inline-block;
      height: 10px;
      vertical-align: middle;
      line-height: 11px;
      text-align: center;
      font-size: 12px;
    }

    /* ~~~~~~~~~~~~~~~~ */
    .bottom {
      background: #fff;
      margin-top: 15px;
    }
    .bottom_top {
      height: 50px;
      line-height: 50px;
      background: #f7893f;
      color: #fff;
      padding: 0 20px;
    }
    .bottom_top span:nth-child(1) {
      font-size: 20px;
      font-weight: bold;
    }
    .bottom_top span:nth-child(2) {
      float: right;
    }

    .bottom_content {
      padding: 15px;
    }
    .con_top .el-rate {
      display: inline-block;
      margin-left: 15px;
    }
    .textareaRate {
      margin-top: 10px;
    }
    .up_img {
      height: 80px;
      line-height: 80px;
    }
    .up_icon {
      display: inline-block;
      margin-left: 10px;
    }
    /deep/ .up_icon .el-upload--picture-card {
          width: 50px;
        height: 50px;
        line-height: 60px;
        vertical-align: middle;
    }

    /* ~~~~~~~~~~~ */
    .con_top {
      text-align: center;
    }
</style>
