(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-887fe002"],{"9e90":function(t,a,n){"use strict";n.d(a,"c",(function(){return r})),n.d(a,"b",(function(){return c})),n.d(a,"a",(function(){return s}));var e=n("b775");function r(t){return Object(e["a"])({url:"/stat/user",method:"get",params:t})}function c(t){return Object(e["a"])({url:"/stat/order",method:"get",params:t})}function s(t){return Object(e["a"])({url:"/stat/goods",method:"get",params:t})}},aba9:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"app-container"},[n("ve-histogram",{attrs:{extend:t.chartExtend,data:t.chartData,settings:t.chartSettings}})],1)},r=[],c=n("9e90"),s=n("7067"),u=n.n(s),o={components:{VeHistogram:u.a},data:function(){return{chartData:{},chartSettings:{},chartExtend:{}}},created:function(){var t=this;Object(c["c"])().then((function(a){t.chartData=a.data.data,t.chartSettings={labelMap:{users:"用户增长数"}},t.chartExtend={xAxis:{boundaryGap:!0},series:{label:{show:!0,position:"top"}}}}))}},i=o,d=n("0c7c"),h=Object(d["a"])(i,e,r,!1,null,null,null);a["default"]=h.exports}}]);