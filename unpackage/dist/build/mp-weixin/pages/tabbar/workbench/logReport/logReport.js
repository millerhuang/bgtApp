(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/workbench/logReport/logReport"],{"1dbf":function(t,e,o){"use strict";(function(t){o("ac93"),o("921b");n(o("66fd"));var e=n(o("2fe1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"2fe1":function(t,e,o){"use strict";o.r(e);var n=o("3e3d"),r=o("bcda");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("8824");var i=o("2877"),c=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"61d9a5ab",null);e["default"]=c.exports},"3e3d":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.proTaskList,function(e,o){var n=t.deliveryPeriod(e.createTime);return{$orig:t.__get_orig(e),m0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},5178:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62");function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i=function(){return o.e("components/dark-calendar/dark-calendar").then(o.bind(null,"a657"))},c={data:function(){return{proPersonList:[],proTaskList:[],projectInfo:[],work_log_data:[],person_log_data:[],all_progress:{id:"",type:"",value:""}}},components:{darkCalendar:i},computed:r({},(0,n.mapState)(["bgt_c_task","bgt_ct_id"])),onLoad:function(){this.get_day_log()},methods:{get_day_log:function(){var t=this;this.$http.get("/personwx.getdaylog/1.0/",{proId:this.bgt_ct_id,workDate:this.$utils.format_date(new Date)}).then(function(e){console.log(e);var o=[],n=[];t.proPersonList=e.data.proPersonList,t.proTaskList=e.data.proTaskList,t.projectInfo=e.data.projectInfo,t.proTaskList.forEach(function(t){var e={id:t.id,type:t.type,value:""};o.push(e)}),t.proPersonList.forEach(function(t){var e={id:t.id,type:t.type,value:""};n.push(e)}),t.work_log_data=o,t.person_log_data=n,t.all_progress.id=t.projectInfo.id,t.all_progress.type=t.projectInfo.type})},deliveryPeriod:function(t){return this.$utils.format_date(t)},back:function(){t.navigateBack({delta:1})},save_log:function(){var t=this.work_log_data.concat(this.person_log_data,this.all_progress);console.log(t),console.log(JSON.stringify(t)),this.$http.post("personwx.updatedaylog/1.0/",{workLogData:JSON.stringify(t)}).then(function(t){console.log(t)})}}};e.default=c}).call(this,o("543d")["default"])},8824:function(t,e,o){"use strict";var n=o("e04f"),r=o.n(n);r.a},bcda:function(t,e,o){"use strict";o.r(e);var n=o("5178"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},e04f:function(t,e,o){}},[["1dbf","common/runtime","common/vendor"]]]);