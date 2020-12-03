<template>
  <div>
    <!-- <TopNav :header="header"></TopNav> -->
    <TopFir></TopFir>
    <TopSec></TopSec>
    <TopThir></TopThir>
    <TopFor></TopFor>
  </div>
</template>

<script>
    import TopNav from "./ceiling";

    import TopFir from "./education/edu_top1";
    import TopSec from "./education/edu_top2";
    import TopThir from "./education/edu_top3";
    import TopFor from "./education/edu_top4";
export default {
  data() {
    return {
      header: [
        {}
      ]
    };
  },
  components: {
    TopNav,
        TopFir,
      TopSec,
      TopThir,
      TopFor,
  }
};
</script>
<style scoped>
    .bgc {
        background: #fff;
    }
    .text_info {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
        background: #fff;
        /* border-bottom: 3px solid #eee; */
    }
    .title , .bottom_info{
        /* min-width: 1000px; */
        text-align: center;
    }
    .title {
        padding-top: 40px;
    }
    .title h1,.title h2 {
        font-weight: normal;
        margin-bottom: 20px;
    }
</style>