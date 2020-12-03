<template>
<div class="class-envir">
  <p class="envir-tit">舒适的教学环境，提供良好的教学保障</p>
  <p class="envir-subtit">Comfortable teaching environment provides good teaching guarantee</p>
  <el-row >
    <el-col :xl="24">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <span><img src="../../assets/home/classEnvir/class01.png" ></span>
        </el-col>
        <el-col :span="5">
          <span><img src="../../assets/home/classEnvir/class02.png" ></span>
        </el-col>
        <el-col :span="5">
          <span><img src="../../assets/home/classEnvir/class03.png" ></span>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="5">
          <span><img src="../../assets/home/classEnvir/class04.png" ></span>
        </el-col>
        <el-col :span="5">
          <span><img src="../../assets/home/classEnvir/class05.png" ></span>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</div>
</template>

<script>
  export default {
    name: "ClassEnvironment"
  }
</script>

<style scoped>
.class-envir{
  height: 685px;
  padding-top: 85px;
  text-align: center;
  background: url("../../assets/home/classEnvir/back-img.png") no-repeat;
}
.class-envir img{
  width: 100%;
  height: 100%;
}
.class-envir >.envir-tit{
  font-size: 48px;
  color: #003bd3;
  line-height: 48px;
  letter-spacing: -2px;
}
.class-envir > .envir-subtit{
  font-size: 18px;
  line-height: 48px;
  letter-spacing: -1px;
  color: #000000;
  margin-bottom: 40px;
}
</style>
