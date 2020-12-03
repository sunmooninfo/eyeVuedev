(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-283e88b3"],{"0b34":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入管理员名称"},model:{value:t.listQuery.username,callback:function(e){t.$set(t.listQuery,"username",e)},expression:"listQuery.username"}}),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/admin/list"],expression:"['GET /admin/admin/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/create"],expression:"['POST /admin/admin/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"管理员ID",prop:"id",sortable:""}}),a("el-table-column",{attrs:{align:"center",label:"管理员名称",prop:"username"}}),a("el-table-column",{attrs:{align:"center",label:"管理员手机号",prop:"managerMobile"}}),a("el-table-column",{attrs:{align:"center",label:"管理员头像",prop:"avatar"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.avatar?a("img",{attrs:{src:e.row.avatar,width:"40"}}):t._e()]}}])}),a("el-table-column",{attrs:{align:"center",label:"管理员角色",prop:"roleIds"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.roleIds,(function(e){return a("el-tag",{key:e,staticStyle:{"margin-right":"20px"},attrs:{type:"primary"}},[t._v(" "+t._s(t.formatRole(e))+" ")])}))}}])}),a("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/update"],expression:"['POST /admin/admin/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("编辑")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/admin/delete"],expression:"['POST /admin/admin/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"管理员名称",prop:"username"}},[a("el-input",{model:{value:t.dataForm.username,callback:function(e){t.$set(t.dataForm,"username",e)},expression:"dataForm.username"}})],1),a("el-form-item",{attrs:{label:"管理员密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.dataForm.password,callback:function(e){t.$set(t.dataForm,"password",e)},expression:"dataForm.password"}})],1),a("el-form-item",{attrs:{label:"管理员手机",prop:"managerMobile"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.dataForm.managerMobile,callback:function(e){t.$set(t.dataForm,"managerMobile",e)},expression:"dataForm.managerMobile"}})],1),a("el-form-item",{attrs:{label:"管理员头像",prop:"avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.headers,action:t.uploadPath,"show-file-list":!1,"on-success":t.uploadAvatar,accept:".jpg,.jpeg,.png,.gif"}},[t.dataForm.avatar?a("img",{staticClass:"avatar",attrs:{src:t.dataForm.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"管理员角色",prop:"roleIds"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.dataForm.roleIds,callback:function(e){t.$set(t.dataForm,"roleIds",e)},expression:"dataForm.roleIds"}},t._l(t.roleOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},i=[],n=(a("c975"),a("a434"),a("d3b7"),a("0402")),o=a("b775");function l(t){return Object(o["a"])({url:"/admin/list",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/admin/create",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/admin/update",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/admin/delete",method:"post",data:t})}var c=a("61f7"),m=a("cc5e"),p=a("aecd"),f=a("5f87"),g=a("333d"),b={name:"Admin",components:{Pagination:g["a"]},data:function(){return{uploadPath:p["e"],list:null,total:0,roleOptions:[],listLoading:!0,listQuery:{page:1,limit:20,username:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,username:void 0,password:void 0,avatar:void 0,roleIds:[],managerMobile:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{username:[{required:!0,message:"管理员名称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],managerMobile:[{required:!0,message:"手机号不能为空",trigger:"blur"}]},downloadLoading:!1}},computed:{headers:function(){return{"X-eye-Admin-Token":Object(f["a"])()}}},created:function(){var t=this;this.getList(),Object(m["e"])().then((function(e){t.roleOptions=e.data.data.list}))},methods:{formatRole:function(t){for(var e=0;e<this.roleOptions.length;e++)if(t===this.roleOptions[e].value)return this.roleOptions[e].label;return""},getList:function(){var t=this;this.listLoading=!0,l(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,username:void 0,password:void 0,avatar:void 0,roleIds:[],managerMobile:""}},uploadAvatar:function(t){this.dataForm.avatar=t.data.url},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){if(!Object(c["b"])(t.dataForm.managerMobile))return t.$message.error("请输入正确的手机号码"),!1;s(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"添加管理员成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&d(t.dataForm).then((function(){var e,a=Object(n["a"])(t.list);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(r.id===t.dataForm.id){var i=t.list.indexOf(r);t.list.splice(i,1,t.dataForm);break}}}catch(o){a.e(o)}finally{a.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新管理员成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;u(t).then((function(a){e.$notify.success({title:"成功",message:"删除管理员成功"});var r=e.list.indexOf(t);e.list.splice(r,1)})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-09753331"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(e){var a=["管理员ID","管理员名称","管理员头像"],r=["id","username","avatar"];e.export_json_to_excel2(a,t.list,r,"管理员信息"),t.downloadLoading=!1}))}}},h=b,v=(a("f71f"),a("0c7c")),w=Object(v["a"])(h,r,i,!1,null,null,null);e["default"]=w.exports},"33a2":function(t,e,a){},6396:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,a,r){return t/=r/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var o=n(),l=t-o,s=20,d=0;e="undefined"===typeof e?500:e;var u=function t(){d+=s;var n=Math.easeInOutQuad(d,o,l,e);i(n),d<e?r(t):a&&"function"===typeof a&&a()};u()}},aecd:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return s}));var r=a("b775");function i(t){return Object(r["a"])({url:"/storage/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/storage/create",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/storage/update",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/storage/delete",method:"post",data:t})}var s="https://indexapi.ilovelearning.cn/admin/storage/create"},cc5e:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"g",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"f",(function(){return d})),a.d(e,"e",(function(){return u}));var r=a("b775");function i(t){return Object(r["a"])({url:"/role/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/role/create",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/role/update",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/role/delete",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/role/permissions",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/role/permissions",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/role/options",method:"get",params:t})}},f71f:function(t,e,a){"use strict";var r=a("33a2"),i=a.n(r);i.a}}]);