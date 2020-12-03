<template>
  <div>
    <!-- <el-row>
      <el-col :span="12">
        <img width="100%" :src="imageUrl" alt="">
      </el-col>
      <el-col :span="12">
        <el-collapse v-model="activeName"  @change="handleChange" accordion>
          <el-collapse-item v-for="(item,index) in collList" :key="index" :title="item.title" :name="item.id">
            <div>{{item.txt}}</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            <el-progress :percentage="percentage" ></el-progress>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      percentage: 0,
      customColor: '#409eff',
      activeName: 1,
      imageUrl: 'https://imgcache.qq.com/open_proj/proj_qcloud_v2/rocket_images/1576503412718_e2kazkmdrrf2h85mi.jpg',
      collList: [
        {
          id: 1,
          title: '一致性 Consistency',
          txt: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
        },
        {
          id: 2,
          title: '一致性 Consistency',
          txt: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
        },
        {
          id: 3,
          title: '一致性 Consistency',
          txt: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
        },
        {
          id: 4,
          title: '一致性 Consistency',
          txt: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
        },
        {
          id: 5,
          title: '一致性 Consistency',
          txt: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
        },
      ]
      
    }
  },
  methods:{
     handleChange(val) {
        this.percentage = 0;
        var timer = setInterval(() => {
          this.percentage += 1;
          // console.log(this.percentage)
          if (this.percentage > 100) {
            this.activeName += 1;
            if( this.activeName > this.collList.length){
              this.activeName = 1
              // this.handleChange()
            }
            this.percentage = 0;
            clearInterval(timer)
            this.handleChange()
          }   
        }, 150);
      },
      
  },
  mounted(){
    // this.handleChange()
  }
  
}
</script>
<style  scoped>

</style>