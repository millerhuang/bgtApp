(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/workHours/hoursSettle/hoursSettle"],{"199e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){i(t,n,e[n])})}return t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u={data:function(){return{personinfo:{},downOption:{auto:!1},upOption:{auto:!1},work_detail:[],loading:!0,wages:""}},onLoad:function(n){var e=this;this.personinfo=JSON.parse(decodeURIComponent(n.item)),t.$on("refreshList",function(){console.log("refreshList"),e.init()}),this.init()},onUnload:function(){t.$off("refreshJwt")},computed:r({c_CustomBar:function(){return this.CustomBar}},(0,o.mapGetters)(["id"]),{no_data:function(){return!this.loading&&0==this.work_detail.length},sum_work_tiem:function(){var t=this,n=0;return this.work_detail.forEach(function(e){n+=t.$_.toNumber(e.workTime)}),n},sum_price:function(){return this.sum_work_tiem*this.$_.toNumber(this.wages)}}),methods:{init:function(){this.get_work_time()},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){t.endErr()},get_work_time:function(){var t=this;this.$http.get("personwx.personproworktimedetail/1.0/",{pid:this.id}).then(function(n){console.log(n),t.work_detail=n.data.data}).finally(function(){t.loading=!1})},back:function(){t.navigateBack({delta:1})},sub_settle:function(){var n=this;t.showModal({title:"提示",content:"当前结算金额为1280元，确认是否结算",confirmText:"确认结算",success:function(t){t.confirm?(console.log("用户点击确定"),n.$http.post("personwx.personproworktimeseet/1.0/",{pid:n.id,proId:n.personinfo.id,wages:n.wages}).then(function(t){console.log(t),n.back()})):t.cancel&&console.log("用户点击取消")}})}}};n.default=u}).call(this,e("543d")["default"])},2421:function(t,n,e){"use strict";e.r(n);var o=e("b509"),r=e("32e9");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("f8e4");var u=e("2877"),a=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,"fb3c2664",null);n["default"]=a.exports},"32e9":function(t,n,e){"use strict";e.r(n);var o=e("199e"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=r.a},"3e5a":function(t,n,e){},"619f":function(t,n,e){"use strict";(function(t){e("ac93"),e("921b");o(e("66fd"));var n=o(e("2421"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},b509:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},f8e4:function(t,n,e){"use strict";var o=e("3e5a"),r=e.n(o);r.a}},[["619f","common/runtime","common/vendor"]]]);