<template>
    <div class="outFooter">
      <div class="footer">
        <span>版权所有@ {{copyright}}</span>
        <span>支持者：
          <a class="linkTo" target="_blank" href="https://www.hotwp.net/">浪博科技</a>
        </span>
      </div>
    </div>
</template>

<script>
import { searchhomeAbout } from '@/api/api'

export default {
  data(){
    return{
      copyright: ''
    } 
  },
  created(){
        this.getAbout()

  },
  methods:{
    getAbout() {
            searchhomeAbout().then(res => {
                if (res.data.errno == 0) {
                    this.copyright = res.data.data.copyright
                } else {
                    this.$message.error(res.data.errmsg)
                }
            })
        },
  }
  
}
</script>

<style scoped>
.outFooter {
    background: rgb(25, 32, 38);
  padding: 0 40px;
}
  .footer {
    height: 40px;
    line-height: 40px;
    color: #fff;
    margin: 0 auto;
  }
  .footer span {
    font-size: 14px;
  }
  .footer span:nth-child(2) {
    float: right;
  }
  .linkTo {
    color: #fff;
    
  }
</style>