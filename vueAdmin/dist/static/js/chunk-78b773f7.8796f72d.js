(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78b773f7"],{4695:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.dataForm,"status-icon":"","label-width":"300px"}},[r("el-form-item",{attrs:{label:"用户下单后超时",prop:"eye_order_unpaid"}},[r("el-input",{staticClass:"input-width",model:{value:e.dataForm.eye_order_unpaid,callback:function(t){e.$set(e.dataForm,"eye_order_unpaid",t)},expression:"dataForm.eye_order_unpaid"}},[r("template",{slot:"append"},[e._v("分钟")])],2),r("span",{staticClass:"info"},[e._v("用户未付款，则订单自动取消")])],1),r("el-form-item",{attrs:{label:"订单发货后超期",prop:"eye_order_unconfirm"}},[r("el-input",{staticClass:"input-width",model:{value:e.dataForm.eye_order_unconfirm,callback:function(t){e.$set(e.dataForm,"eye_order_unconfirm",t)},expression:"dataForm.eye_order_unconfirm"}},[r("template",{slot:"append"},[e._v(" 天")])],2),r("span",{staticClass:"info"},[e._v("未确认收货，则订单自动确认收货")])],1),r("el-form-item",{attrs:{label:"确认收货后超期",prop:"eye_order_comment"}},[r("el-input",{staticClass:"input-width",model:{value:e.dataForm.eye_order_comment,callback:function(t){e.$set(e.dataForm,"eye_order_comment",t)},expression:"dataForm.eye_order_comment"}},[r("template",{slot:"append"},[e._v("天")])],2),r("span",{staticClass:"info"},[e._v("未评价商品，则取消评价资格")])],1),r("el-form-item",[r("el-button",{on:{click:e.cancel}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确定")])],1)],1)],1)},o=[],a=r("da71"),i={name:"ConfigOrder",data:function(){return{dataForm:{eye_order_unpaid:0,eye_order_unconfirm:0,eye_order_comment:0},rules:{eye_order_unpaid:[{required:!0,message:"不能为空",trigger:"blur"}],eye_order_unconfirm:[{required:!0,message:"不能为空",trigger:"blur"}],eye_order_comment:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var e=this;Object(a["c"])().then((function(t){e.dataForm=t.data.data}))},cancel:function(){this.init()},update:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(!t)return!1;e.doUpdate()}))},doUpdate:function(){var e=this;Object(a["g"])(this.dataForm).then((function(t){e.$notify.success({title:"成功",message:"订单参数配置成功"})})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))}}},c=i,u=(r("636d"),r("0c7c")),d=Object(u["a"])(c,n,o,!1,null,"6ee01598",null);t["default"]=d.exports},"636d":function(e,t,r){"use strict";var n=r("b500"),o=r.n(n);o.a},b500:function(e,t,r){},da71:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return l}));var n=r("b775");function o(){return Object(n["a"])({url:"/config/mall",method:"get"})}function a(e){return Object(n["a"])({url:"/config/mall",method:"post",data:e})}function i(){return Object(n["a"])({url:"/config/express",method:"get"})}function c(e){return Object(n["a"])({url:"/config/express",method:"post",data:e})}function u(){return Object(n["a"])({url:"/config/order",method:"get"})}function d(e){return Object(n["a"])({url:"/config/order",method:"post",data:e})}function s(){return Object(n["a"])({url:"/config/wx",method:"get"})}function l(e){return Object(n["a"])({url:"/config/wx",method:"post",data:e})}}}]);