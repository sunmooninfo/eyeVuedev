(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c32d"],{f1e1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center","min-width":"100px",label:"套餐ID",prop:"id"}}),i("el-table-column",{attrs:{align:"center","min-width":"100px",label:"套餐名称",prop:"name"}}),i("el-table-column",{attrs:{align:"center","min-width":"100px",label:"套餐时间",prop:"months"}}),i("el-table-column",{attrs:{align:"center","min-width":"100px",label:"套餐价格",prop:"price"}}),i("el-table-column",{attrs:{align:"center","min-width":"100px",label:"推出时间",prop:"updateTime"}})],1)],1)},a=[],l=i("b192"),o=i("b775");function r(t){return Object(o["a"])({url:"/member/package/read",method:"get",params:t})}var s={data:function(){return{listQuery:{id:void 0},list:[],listLoading:!1}},mounted:function(){this.listQuery.id=this.$route.query.id,this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,r(this.listQuery).then((function(e){console.log(e.data.data),t.list=[Object(l["a"])({},e.data.data)],console.log(t.list),t.listLoading=!1}))},packageUser:function(t){console.log(t)}}},c=s,d=i("0c7c"),u=Object(d["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports}}]);