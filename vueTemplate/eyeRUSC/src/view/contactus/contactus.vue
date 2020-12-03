<template>
  <div>
    <div class="nav">
      <img :src="imgB" alt="" />
    </div>
    <div class="content title last_content">
      <div class="child left">
        <div class="frame">
          <i>contact&nbsp;us</i>
        </div>
        <div class="detail">
          <p>{{ this.left.title }}</p>
          <p>{{ this.left.url }}</p>
          <p>{{ this.left.address }}</p>
          <p>{{ this.left.mail }}</p>
          <p>{{ this.left.tel }}</p>
        </div>
      </div>
      <div class="right">
        <div class="header">
          <!-- <div class="top1">
            <span>当前位置</span>: <span>首页</span>>
            <span>联系我们</span>
          </div> -->
           <div class="topBreadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>联系我们</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="top2">
            <h4>联系我们</h4>
            <div class="hrr"></div>
          </div>
        </div>
        <div class="form">
          <div>
            <el-input v-model="send.name" placeholder="名称"></el-input>
            <el-input
              v-model="send.telephone"
              placeholder="电话号码"
            ></el-input>
          </div>
          <div>
            <el-input v-model="send.email" placeholder="电子邮箱"></el-input>
            <el-input v-model="send.company" placeholder="公司"></el-input>
          </div>
          <el-input
            type="textarea"
            :rows="5"
            resize="none"
            placeholder="详细信息"
            v-model="send.message"
          >
          </el-input>
          <!-- <textarea cols="80" rows="11" placeholder="MECCAGE" style="padding: 15px">
                </textarea> -->
          <div>
            <!-- <input type="text">
                    <div class="s-canvas" @click="duanxin">
                        <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
                    </div> -->
            <el-button type="warning" @click="sendMessage">SEND</el-button>
          </div>
        </div>
        <div class="mapbox">
          <baidu-map
            class="map"
            :center="map.center"
            :zoom="map.zoom"
            @ready="handler"
          >
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation
              anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
              :showAddressBar="true"
              :autoLocation="true"
            ></bm-geolocation>
            <!--点-->
            <bm-marker
              :position="map.center"
              :dragging="map.dragging"
              animation="BMAP_ANIMATION_DROP"
            >
              <!--提示信息-->
              <bm-info-window :show="map.show"
                >河南浪博科技有限公司</bm-info-window
              >
            </bm-marker>
          </baidu-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validateMobilePhoneNum, validateEmail } from "@/utils/validate";
import { sendMessage,getCurrent } from '@/api/api'
export default {
  // data: () => ({


  // }),
  data() {
    return {
      left: {
        title:
          "河南浪博电子科技开发有限公司ISO / PED计算机软件开发；网页设计制作；设计、制作、代理、发布国内广告业务。",
        url: "www.stainless-steeltubes.com",
        address:
          "地位于河南自贸试验区开封片区七大街华侨大厦635-20号(生产经营地:开封市郑开大道与四大街交汇处西南角国际金融中心D座2003号)",
        mail: "  bwss@vip.163.com louisfangzj@gmail.com",
        tel: "ICQ：656106125 QQ：295409951",
      },
      map: {
        center: {
          lng: 114.261762,
          lat: 34.813585,
        },
        zoom: 15,
        show: true,
        dragging: true,
      },
      send: {
        name: "",
        telephone: "",
        email: "",
        company: "",
        message: "",
      },
      imgB: '',
      categoryId: this.$route.query.id,
    }
  },
  created() {
    this.getimgB()
  },
  props: {
    //默认注册码
    identifyCode: {
      type: String,
      default: "1234",
    },
    // 字体最小值
    fontSizeMin: {
      type: Number,
      default: 25,
    },
    // 字体最大值
    fontSizeMax: {
      type: Number,
      default: 35,
    },
    // 验证码图片背景色最小值
    backgroundColorMin: {
      type: Number,
      default: 200,
    },
    // 验证码图片背景色最大值
    backgroundColorMax: {
      type: Number,
      default: 220,
    },
    // 背景干扰点最小值
    dotColorMin: {
      type: Number,
      default: 60,
    },
    // 背景干扰点最大值
    dotColorMax: {
      type: Number,
      default: 120,
    },
    //容器宽度
    contentWidth: {
      type: Number,
      default: 116,
    },
    //容器高度
    contentHeight: {
      type: Number,
      default: 38,
    },
  },
  methods: {
    // 获取图片
    getimgB() {
      getCurrent({id:this.categoryId}).then((res) => {
        if (res.data.errno == 0) {
          this.imgB = res.data.data.category.picUrl;
        } else {
          this.$message.error(res.data.errmsg);
        }
      });
    },
    handler({ BMap, map }) {
      let me = this;
      console.log(BMap, map);
      // 鼠标缩放
      map.enableScrollWheelZoom(true);
      // 点击事件获取经纬度
      map.addEventListener("click", function (e) {
        console.log(e.point.lng, e.point.lat);
      });
    },
    // 生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成一个随机的颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    drawPic() {
      let canvas = document.getElementById("s-canvas");
      let ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";
      // 绘制背景
      ctx.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      );
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
      // 绘制文字
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i);
      }
      this.drawLine(ctx);
      this.drawDot(ctx);
    },
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(50, 160); //随机生成字体颜色
      ctx.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei"; //随机生成字体大小
      let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      var deg = this.randomNum(-30, 30);
      // 修改坐标原点和旋转角度
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      // 恢复坐标原点和旋转角度
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
    drawLine(ctx) {
      // 绘制干扰线
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(100, 200);
        ctx.beginPath();
        ctx.moveTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        );
        ctx.lineTo(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight)
        );
        ctx.stroke();
      }
    },
    drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
    duanxin() {
      this.drawPic();
    },
    sendMessage() {
      if (
        !this.send.name ||
        !this.send.telephone ||
        !this.send.email ||
        !this.send.company ||
        !this.send.message
      ) {
        this.$message.error("请将信息填写完整");
        return;
      } else if (!validateMobilePhoneNum(this.send.telephone)) {
        this.$message.error("请输入正确的手机号码");
        return;
      } else if (!validateEmail(this.send.email)) {
        this.$message.error("请输入正确的邮箱");
        return;
      } else {
        sendMessage(this.send).then((res) => {
          if (res.data.errno == 0) {
            this.$message.success("发送成功");
            this.send = {
              name: "",
              telephone: "",
              email: "",
              company: "", 
              message: "",
            };
          } else {
            this.$message.error(res.data.errmsg);
          }
        });
      }
    },
  },
  watch: {
    identifyCode() {
      this.drawPic();
    },
  },
  mounted() {
    this.drawPic();
  },
};
</script>

<style scoped>
.nav {
  margin-bottom: 20px;
}

.nav img {
  position: relative;
  top: -1px;
  width: 100%;
  height: 300px;
  min-width: 1200px;
}

.title {
  display: flex;
  justify-content: space-between;
}

.right {
  width: 80%;
}

/** 左边 */
.left {
  padding-right: 40px;
  width: 25%;
}

.frame {
  border: 5px solid #d6d6d6;
  height: 130px;
  line-height: 130px;
  color: #f8b33c;
  font-size: 40px;
  font-weight: bold;
  padding-left: 10px;
}

.detail {
  margin-top: 20px;
  font-size: 13px;
}

.detail p {
  margin-top: 5px;
  color: gray;
}

.detail p:nth-of-type(1) {
  font-weight: bold;
  color: #616161;
}

.detail p:nth-of-type(2) {
  font-weight: bold;
  color: #616161;
}

/**右边 */
.header {
  margin-bottom: 20px;
}

.top1 {
  font-size: 12px;
}

.top1 span:nth-last-child(1) {
  color: #f8b33c;
}

.top2 h4 {
  font-size: 20px;
  margin: 10px 0;
}

.top2 .hrr {
  border: 2px solid #c7c7c7;
}

.form {
}

.form > div {
  margin-bottom: 20px;
}

.form > div > input {
  width: 334px;
  height: 48px;
  padding-left: 10px;
  border: 1px solid #999999;
  background: #fafafa;
}
.el-input {
  width: auto;
}
/deep/ .el-input__inner {
  width: 334px;
  display: inline-block;
  height: 48px;
  padding-left: 10px;
  border: 1px solid #999999;
  background: #fafafa;
}
/deep/ .el-textarea__inner {
  background: #fafafa;
  color: #606266;
  font-size: 16px;
}
.form > div:nth-of-type(3) input {
  width: 100px;
}

.form > div:nth-of-type(3) button {
  padding: 15px 30px;
  background: #d49105;
  color: white;
  font-weight: bold;
  border: none;
}

.s-canvas {
  position: relative;
  top: 15px;
  display: inline-block;
}

.mapbox {
  padding: 80px 0 20px 0;
}

.map {
  height: 400px;
}
.el-textarea {
  width: 670px;
}
</style>
