(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8192a348"],{6396:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,i,a){return t/=a/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,i){var o=s(),r=t-o,l=20,d=0;e="undefined"===typeof e?500:e;var u=function t(){d+=l;var s=Math.easeInOutQuad(d,o,r,e);n(s),d<e?a(t):i&&"function"===typeof i&&i()};u()}},f641:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入问题"},model:{value:t.listQuery.question,callback:function(e){t.$set(t.listQuery,"question",e)},expression:"listQuery.question"}}),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/issue/list"],expression:"['GET /admin/issue/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/issue/create"],expression:"['POST /admin/issue/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),i("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",width:"100px",label:"问题ID",prop:"id",sortable:""}}),i("el-table-column",{attrs:{align:"center","min-width":"200px",label:"问题内容",prop:"question"}}),i("el-table-column",{attrs:{align:"center","min-width":"400px",label:"问题回复",prop:"answer"}}),i("el-table-column",{attrs:{align:"center",label:"操作",width:"250","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/issue/update"],expression:"['POST /admin/issue/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handleUpdate(e.row)}}},[t._v("编辑")]),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/issue/delete"],expression:"['POST /admin/issue/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"问题",prop:"question"}},[i("el-input",{model:{value:t.dataForm.question,callback:function(e){t.$set(t.dataForm,"question",e)},expression:"dataForm.question"}})],1),i("el-form-item",{attrs:{label:"回复",prop:"answer"}},[i("el-input",{attrs:{rows:8,type:"textarea",placeholder:"请输入内容"},model:{value:t.dataForm.answer,callback:function(e){t.$set(t.dataForm,"answer",e)},expression:"dataForm.answer"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"==t.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):i("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},n=[],s=(i("c975"),i("a434"),i("d3b7"),i("0402")),o=i("b775");function r(t){return Object(o["a"])({url:"/issue/list",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/issue/create",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/issue/update",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/issue/delete",method:"post",data:t})}var c=i("333d"),m={name:"Issue",components:{Pagination:c["a"]},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,question:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,question:"",answer:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{question:[{required:!0,message:"问题不能为空",trigger:"blur"}],answer:[{required:!0,message:"回复不能为空",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,r(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,question:"",answer:""}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&l(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&d(t.dataForm).then((function(){var e,i=Object(s["a"])(t.list);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(a.id===t.dataForm.id){var n=t.list.indexOf(a);t.list.splice(n,1,t.dataForm);break}}}catch(o){i.e(o)}finally{i.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;u(t).then((function(i){e.$notify.success({title:"成功",message:"删除成功"});var a=e.list.indexOf(t);e.list.splice(a,1)})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([i.e("chunk-09753331"),i.e("chunk-2133cd4f")]).then(i.bind(null,"4bf8")).then((function(e){var i=["问题ID","问题内容","问题回复"],a=["id","question","answer"];e.export_json_to_excel2(i,t.list,a,"常见问题信息"),t.downloadLoading=!1}))}}},p=m,f=i("0c7c"),h=Object(f["a"])(p,a,n,!1,null,null,null);e["default"]=h.exports}}]);