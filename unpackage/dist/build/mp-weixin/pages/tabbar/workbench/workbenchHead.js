(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/workbench/workbenchHead"],{"56b6":function(t,e,n){"use strict";var i=n("e2b1"),o=n.n(i);o.a},"6e1f":function(t,e,n){"use strict";n.r(e);var i=n("be15"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},ae05:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.bgt_c_task,function(e,n){var i=t.deliveryPeriod(e.deliveryPeriod);return{$orig:t.__get_orig(e),m0:i}})),i=t.__map(t.person_list,function(e,n){var i=t.status_class(e.status),o=t.status_text(e.status),a=t.expectedPlace(e.expectedPlace);return{$orig:t.__get_orig(e),m1:i,m2:o,m3:a}});t.$mp.data=Object.assign({},{$root:{l0:n,l1:i}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},be15:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){return n.e("pages/tabbar/workbench/headTodo").then(n.bind(null,"ff40"))},r=function(){return n.e("pages/tabbar/workbench/peopleList").then(n.bind(null,"d655"))},c=function(){return n.e("pages/tabbar/workbench/plan").then(n.bind(null,"4a11"))},u=function(){return n.e("pages/tabbar/workbench/errManage").then(n.bind(null,"11e3"))},d={data:function(){return{is_unfold:!1,list:[{name:"李小吧",age:"22",tag:["电工学徒"],address:"深圳市龙华区大浪街",status:"准备中",status_no:2},{name:"李小吧",age:"22",tag:["电工学徒"],address:"深圳市龙华区大浪街",status:"确认能来",status_no:1},{name:"李小吧",age:"22",tag:["电工学徒"],address:"深圳市龙华区大浪街",status:"确认不来",status_no:0},{name:"李小吧",age:"22",tag:["电工学徒"],address:"深圳市龙华区大浪街",status:"等待确认",status_no:3}],swiperHeight:"",project_detail:{},downOption:{auto:!1},upOption:{auto:!1,isLock:!0},current_swiper:0,form_data:{startTime:"",address:"",points:"",description:""},tab_list:[{name:"待办事项",data:[],is_rquest:!1},{name:"人员列表",data:[],is_rquest:!1},{name:"生产计划",data:[],is_rquest:!1},{name:"异常管理",data:[],is_rquest:!1}],TabCur:0,scrollLeft:0}},props:{location:{default:null}},components:{headTodo:s,peopleList:r,plan:c,errManage:u},mounted:function(){this.init()},computed:o({},(0,i.mapState)(["bgt_c_task","bgt_ct_id"]),(0,i.mapGetters)(["user_role","id"]),{person_list:function(){return this.$utils._get(this.project_detail,"personList",[])},project:function(){return this.$utils._get(this.project_detail,"project",{})},c_CustomBar:function(){return this.CustomBar},current_bgt_c_task:function(){var t=this;return this.bgt_c_task.find(function(e){return e.id==t.bgt_ct_id})}}),watch:{bgt_ct_id:function(t){console.log(t),this.current_swiper=this.bgt_c_task.findIndex(function(e){return e.id==t}),this.init()},location:{handler:function(t){console.log("wlocation",t),t&&(this.form_data.address=t.address,this.form_data.points="[".concat(t.latitude,",").concat(t.longitude,"]"),console.log(this.form_data))},deep:!0}},methods:{init:function(){console.log(this.bgt_c_task,this.bgt_ct_id),""==this.bgt_ct_id?this.get_head_project():this.get_project_detail()},set_form_data:function(){var t=this,e=this.bgt_c_task.findIndex(function(e){return e.id==t.bgt_ct_id});this.current_swiper=e,this.form_data.startTime=this.$utils.format_date(this.bgt_c_task[e].startTime),this.form_data.address=this.$utils._get(this.bgt_c_task[e],"address",""),this.form_data.points=this.$utils._get(this.bgt_c_task[e],"points",""),this.form_data.description=this.bgt_c_task[e].description},get_head_project:function(){var t=this;this.$http.get("personwx.headproject/1.0/",{pid:this.id,isFinish:"0"}).then(function(e){console.log(e),"0"===t.$utils._get(e,"data.code")&&(t.$store.commit("set_bgt_c_task",t.$utils._get(e,"data.data",[])),""==t.bgt_ct_id&&t.$store.commit("set_bgt_ct_id",t.$utils._get(e,"data.data[0].id","")),t.get_project_detail())})},get_project_detail:function(t){var e=this;this.set_form_data(),this.$http.get("personwx.projectDetail/1.0/",{id:this.bgt_ct_id}).then(function(n){"0"===e.$utils._get(n,"data.code")&&(console.log(n),e.project_detail=e.$utils._get(n,"data.data",{}),"function"===typeof t&&t(),e.$nextTick(function(){e.get_swiper_c_height()}))})},get_swiper_c_height:function(){var e=this,n=t.createSelectorQuery().in(this);console.log(n.select("#content"+this.current_swiper)),n.select("#content"+this.current_swiper).boundingClientRect(function(t){console.log("得到布局位置信息"+JSON.stringify(t)),console.log("节点离页面顶部的距离为"+t.top),e.swiperHeight=t.height+"px"}).exec()},status_class:function(t){return 1===t?"text-green":2===t?"text-blue":3===t?"text-orange":"text-grey"},status_text:function(t){return 1===t?"确认能来":2===t?"准备中":3===t?"等待确认":"确认不来"},expectedPlace:function(t){return JSON.parse(t).join("")},goto_detail:function(e){t.navigateTo({url:"/pages/auditDetail/auditDetail?id=".concat(this.project.id,"&pid=").concat(e.id)})},deliveryPeriod:function(t){return this.$utils.format_date(t)},case_more:function(){var t=this;this.is_unfold=!this.is_unfold,this.$nextTick(function(){t.get_swiper_c_height()})},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){var e=this;setTimeout(function(){e.get_project_detail(function(){t.endSuccess(e.person_list.length,!1)})},300)},goto_recruiting:function(){this.show_modal=!1,t.navigateTo({url:"/pages/personList/personList?recId=".concat(this.project.id,"&proId=").concat(this.project.pid)})},swiperChange:function(t){var e=this;console.log(t),this.current_swiper=t.detail.current;var n=this.$utils._get(this.bgt_c_task[this.current_swiper],"id","");this.$store.commit("set_bgt_ct_id",n),this.$nextTick(function(){e.get_project_detail()})},send_start:function(){var e=this;t.showModal({title:"提示",content:"确认输入的开工信息是否有误",success:function(t){t.confirm?(console.log("用户点击确定"),e.$http.post("personwx.updateprojectinfo/1.0/",{startTime:e.form_data.startTime,address:e.form_data.address,points:e.form_data.points,description:e.form_data.description,id:e.bgt_ct_id}).then(function(t){console.log(t);var n={id:e.bgt_ct_id,address:e.form_data.address,points:e.form_data.points,startTime:e.form_data.startTime};console.log(n),e.$http.post("personwx.startproject/1.0/",n).then(function(t){console.log(t),"0"==t.data.code&&e.get_head_project()})})):t.cancel&&console.log("用户点击取消")}})},dpDateChange:function(t){this.form_data.startTime=t.detail.value},chooseLocation:function(){var t,e="CLABZ-JECLX-JDZ43-TAZKO-FNNM7-NVF2G",n="智造劳务";if(""==this.form_data.points)t="";else{var i=JSON.parse(this.form_data.points);t=JSON.stringify({latitude:i[0],longitude:i[1]})}wx.navigateTo({url:"plugin://chooseLocation/index?key=".concat(e,"&referer=").concat(n,"&location=").concat(t)})},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},goto_log:function(){t.navigateTo({url:"/pages/tabbar/workbench/logReport/logReport"})}}};e.default=d}).call(this,n("543d")["default"])},e2b1:function(t,e,n){},e574:function(t,e,n){"use strict";n.r(e);var i=n("ae05"),o=n("6e1f");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("56b6");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"02f6b89c",null);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabbar/workbench/workbenchHead-create-component',
    {
        'pages/tabbar/workbench/workbenchHead-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e574"))
        })
    },
    [['pages/tabbar/workbench/workbenchHead-create-component']]
]);                
