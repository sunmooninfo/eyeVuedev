<template>
  <div class="p-navigation">
    <div class="p-navigation-left">
      <div class="p-navigation-left-menu">
        <!-- <img
          class="p-navigation-left-menu-icon span-hover"
          :src="menu"
        > -->
        <i class="el-icon-s-unfold p-navigation-left-menu-icon span-hover" />
        <span class="span-hover">菜单</span>
      </div>
      <el-divider direction="vertical" />
      <div class="p-navigation-left-logo">
        <img
          class="p-navigation-left-logo-icon"
          :src="logo"
        >
        <span>浪博云</span>
      </div>
    </div>
    <div class="p-navigation-right">
      <el-input
        placeholder="云服务器CVM"
        prefix-icon="el-icon-search"
        @click="inputClick"
      />
      <span class="span-hover right-span">备案</span>
      <span class="span-hover right-span">控制台</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: `PNavigationBar`,
    data () {
      return {
        menu: require(`@assets/images/menu.png`),
        logo: require(`@assets/logo.png`),
      }
    },
    mounted () {

    },
    methods: {
      inputClick: function () {

      },
    },
  }
 </script>

<style scoped lang="less">
.p-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #2b303b;
  padding: 0 20px;
  color: #fff;
  &-left {
    display: flex;
    align-items: center;
    &-menu {
      display: flex;
      align-items: center;
      font-size: 16px;
      &-icon {
        font-size: 22px;
        margin-right: 10px;
      }
    }
    &-logo {
      display: flex;
      align-items: center;
      &-icon {
        height: 30px;
        margin-right: 5px;
      }
    }
  }
  &-right {
    display: flex;
    font-size: 14px;
    /deep/ .el-input__inner {
      background-color: #383e4d;
      border: 1px solid #383e4d;
    }
    .right-span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
    }
  }
}

.span-hover:hover {
  cursor: pointer;
  color: #00a4ff;
}
</style>
