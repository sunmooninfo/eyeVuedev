<template>
  <div class="Home-root">
    <div class="top_car">
      <el-carousel height="500px">
        <el-carousel-item v-for="(item ,key) in imgListCra" :key="key">
          <img class="car_img" :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mid_text">
      <img src="http://www.stainless-steel-pipe-factory.com/images/productsinworld.jpg" alt="">
    </div>
    <div class="content">
      <div class="imgListCon" >
        <div class="cont_info" v-for="(item,key) in imgListCon" :key="key" :class="key == (imgListCon.length - 1) ? 'noR' : ''">
          <img :src="item.img" alt="">
          <p class="title">{{item.title}}</p>
          <p class="text">{{item.text}}</p>
        </div>
      </div>
      <div class="last_content">
        <img src="http://www.stainless-steel-pipe-factory.com/images/indexcompany.jpg" alt="">
      </div>
    </div>



  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
 
  },
  data() {
    return {
      imgListCra: [
        {img:'http://www.stainless-steel-pipe-factory.com/images/ibanner01.jpg'},
        {img:'http://www.stainless-steel-pipe-factory.com/images/ibanner02.jpg'},
        {img:'http://www.stainless-steel-pipe-factory.com/images/ibanner03.jpg'}
      ],
      imgListCon: [
        {
          img:'http://www.stainless-steel-pipe-factory.com/data/product/pl12160472-ferritic_martensitic_stainless_steel_seamless_pipe_astm_a268_tp430ti_heat_resisting.jpg',
          title: '不锈钢无缝管',
          text: '铁素体马氏体不锈钢无缝管ASTM A268 TP430Ti耐热',
        },{
          img:'http://www.stainless-steel-pipe-factory.com/data/product/pl3388036-astm_a213_a312_316ti_stainless_steel_seamless_pipe_uns_s31635_1_4571.jpg',
          title: '不锈钢无缝管',
          text: 'ASTM A213 A312 316Ti不锈钢无缝管UNS S31635 1.4571',
        },{
          img:'http://www.stainless-steel-pipe-factory.com/data/product/pl12886114-seamless_ss_tube_904l_astm_a312_asme_sa_312_length_5_0_5_8_meter_gost_9941_81.jpg',
          title: '不锈钢无缝管',
          text: '无缝SS管904L ASTM A312 / ASME SA 312，长度5.0〜5.8米GOST 9941-81',
        },{
          img:'http://www.stainless-steel-pipe-factory.com/data/product/pl12529898-tp409_stainless_steel_seamless_welded_pipe_square_tube_astm_a268.jpg',
          title: '不锈钢无缝管',
          text: 'TP409不锈钢无缝焊接方管ASTM A268',
        },
      ] 
    }
  }
} 
</script>
<style scoped>
.Home-root{
  background: #f3f6f9;
}
.car_img {
  height: 500px;
}
.mid_text {
  height: 100px;
  text-align: center;
  padding-top: 20px;
  background-color: rgb(249, 248, 246);
  border-bottom: 1px solid #e9e9e9;
}
.imgListCon {
  display: flex;
  margin-top: 20px;
}
.cont_info {
  flex-grow: 1;
  width: 25%;
  padding: 2%;
  background: #fff;
  margin-right: 15px;
  border: 1px solid #e9e9e9;
}
.noR {
  margin-right: 0;
}
.cont_info img {
  width: 100%;
  height: 250px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
}
.text {
  font-size: 12px;
}
.last_content {
  height: 350px;
  width: 100%;
  margin-top: 20px;
}
.last_content img {
  width: 100%;
  height: 350px;
}
</style>
