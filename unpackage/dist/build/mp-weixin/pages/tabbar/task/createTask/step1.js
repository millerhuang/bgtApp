(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/task/createTask/step1"],{"2e41":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r("2f62");function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){i(t,e,r[e])})}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r("d040"),s={data:function(){return{form_data:{industry:"请选择任务行业",equipment_name:"",task_no:"",company:"",budget:"",delivery:"请选择交期",remark:"",deviceNum:"",estimateHours:"",estimatePerson:"",startTime:"请选择开工时间",address:"",points:""},industry_list:[],industry_index:0,loading:!0}},props:{route_id:{type:String,default:""},location:{default:null}},computed:n({},(0,a.mapState)(["current_task"]),{currentDate:function(){return this.$utils.format_date(new Date)}}),onReady:function(){console.log("ready")},watch:{location:{handler:function(t){console.log("wlocation",t),t&&(this.form_data.address=t.address,this.form_data.points="[".concat(t.latitude,",").concat(t.longitude,"]"),console.log(this.form_data))},deep:!0}},mounted:function(){var e=this;console.log("mounted"),this.init(),console.log(this.route_id),t.$on("refreshJwt",function(t){e.init()})},beforeDestroy:function(){t.$off("refreshJwt")},methods:{init:function(){var e=this;t.showLoading({title:"加载中"}),this.loading=!0,this.$http.post("personwx.hyxx/1.0/",{dictId:"e7f70f44ebf3d55e2fac4af73e29ba36"}).then(function(r){if(console.log(r),"0"==r.data.code){if(e.industry_list=e.$utils._get(r,"data.data.data",[]),e.form_data.industry=e.$utils._get(e.industry_list[0],"description","请选择任务行业"),e.route_id){var a=e.industry_list.findIndex(function(t){return t.id==e.current_task.industry});e.industry_index=a<0?0:a,console.log(e.industry_index),e.form_data.industry=e.industry_list[e.industry_index].description,e.form_data.equipment_name=e.current_task.deviceName,e.form_data.deviceNum=e.current_task.deviceNum,e.form_data.task_no=e.current_task.proNumber,e.form_data.company=e.current_task.scompany,e.form_data.budget=e.current_task.budget,e.form_data.delivery=e.$utils.format_date(e.current_task.deliveryPeriod),e.form_data.remark=e.current_task.description,e.form_data.estimateHours=e.$utils._get(e.current_task,"estimateHours",""),e.form_data.estimatePerson=e.$utils._get(e.current_task,"estimatePerson",""),e.form_data.startTime=e.$utils.format_date(e.$utils._get(e.current_task,"startTime","")),e.form_data.address=e.$utils._get(e.current_task,"address",""),e.form_data.points=e.$utils._get(e.current_task,"points","")}t.hideLoading(),e.loading=!1}})},DateChange:function(t){this.form_data.delivery=t.detail.value},startDateChange:function(t){this.form_data.startTime=t.detail.value},formSubmit:function(e){var r=this;t.showLoading({title:""});var a=[{name:"industry",checkType:"notnull",checkRule:"",errorMsg:"任务行业不能为空"},{name:"equipment_name",checkType:"notnull",checkRule:"",errorMsg:"设备名称不能为空"},{name:"company",checkType:"notnull",checkRule:"",errorMsg:"服务公司不能为空"},{name:"deviceNum",checkType:"notnull",checkRule:"",errorMsg:"设备数量不能为空"},{name:"budget",checkType:"notnull",checkRule:"",errorMsg:"预算不能为空"},{name:"estimateHours",checkType:"notnull",checkRule:"",errorMsg:"预估工时不能为空"},{name:"estimatePerson",checkType:"notnull",checkRule:"",errorMsg:"预估人数不能为空"},{name:"address",checkType:"notnull",checkRule:"",errorMsg:"详细工作地不能为空"}],n=o.check(this.form_data,a);n?this.$http.post("personwx.projectinfo/1.0/",{industry:this.industry_list[this.industry_index].id,scompany:this.form_data.company,deviceName:this.form_data.equipment_name,deviceNum:this.form_data.deviceNum,proNumber:this.form_data.task_no,budget:this.form_data.budget,deliveryPeriod:this.form_data.delivery,description:this.form_data.remark,estimateHours:this.form_data.estimateHours,estimatePerson:this.form_data.estimatePerson,startTime:this.form_data.startTime,address:this.form_data.address,points:this.form_data.points,id:this.route_id?this.route_id:""}).then(function(a){console.log(a),t.showToast({title:"提交成功!",icon:"success"}),t.hideLoading(),e(a.data.data.id,r.form_data.startTime)}):t.showToast({title:o.error,icon:"none"})},industryChange:function(t){this.industry_index=t.detail.value,this.form_data.industry=this.industry_list[this.industry_index].description},chooseLocation:function(){var t,e="CLABZ-JECLX-JDZ43-TAZKO-FNNM7-NVF2G",r="智造劳务";if(""==this.form_data.points)t="";else{var a=JSON.parse(this.form_data.points);t=JSON.stringify({latitude:a[0],longitude:a[1]})}wx.navigateTo({url:"plugin://chooseLocation/index?key=".concat(e,"&referer=").concat(r,"&location=").concat(t)})}}};e.default=s}).call(this,r("543d")["default"])},"342e":function(t,e,r){"use strict";r.r(e);var a=r("f34d"),n=r("e0f2");for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);r("4fba");var o=r("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"996fff10",null);e["default"]=s.exports},"4d92":function(t,e,r){},"4fba":function(t,e,r){"use strict";var a=r("4d92"),n=r.n(a);n.a},e0f2:function(t,e,r){"use strict";r.r(e);var a=r("2e41"),n=r.n(a);for(var i in a)"default"!==i&&function(t){r.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},f34d:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabbar/task/createTask/step1-create-component',
    {
        'pages/tabbar/task/createTask/step1-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("342e"))
        })
    },
    [['pages/tabbar/task/createTask/step1-create-component']]
]);                
