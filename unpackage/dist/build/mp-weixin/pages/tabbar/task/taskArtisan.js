(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/task/taskArtisan"],{"11c9":function(t,e,n){"use strict";var r=n("e0a1"),a=n.n(r);a.a},"208d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{tab_list:[{name:"待我回复",id:"dwhf",data:[]}],current_tab:{id:"zzzg",index:0}}},components:{},computed:a({},(0,r.mapState)(["user_info"]),(0,r.mapGetters)(["id","user_role","test_user"]),{test_user2:function(){return this.user_info}}),watch:{user_info:{handler:function(t){console.log(t)},deep:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{init:function(){var e=this;this.id||t.showModal({titel:"提示",content:"您的资料不完整，请先完善",cancelText:"去完善",cancelColor:"#007AFF",confirmText:"先看看",confirmColor:"#007AFF",success:function(e){e.confirm?console.log("用户点击先看看"):e.cancel&&(console.log("用户点击去完善"),t.navigateTo({url:"/pages/tabbar/my/myInfo/createInfo"}))}}),this.$http.get("personwx.personreclist/1.0/",{status:"0",rpStatus:"1"}).then(function(t){console.log("personreclist",t),"0"==t.data.code&&(e.tab_list[0].data=t.data.data)})},select_tab:function(t,e){this.current_tab.id=t,this.current_tab.index=e},ontabchange:function(t){console.log(t);var e=t.detail.current;this.current_tab.index=e,this.current_tab.id=this.tab_list[e].id},loadMore:function(t){console.log(t)},go_detail:function(e){t.navigateTo({url:"/pages/tabbar/task/taskMain/taskMainArtisan?item="+encodeURIComponent(JSON.stringify(e))})},item_price:function(t){console.log(t);var e=[];try{e=JSON.parse(t.requirementInfo)}catch(a){}var n=0,r=0;return e.forEach(function(t,e){var a=Number.parseFloat(t.price);0==e?(n=a,r=a):(n=a<n?a:n,r=a>r?a:r)}),"".concat(n," - ").concat(r,"元/时")},item_tag:function(t){try{var e=JSON.parse(t.welfareInfo),n=JSON.parse(t.workRequest);return e.concat(n)}catch(r){}},item_start_date:function(t){return this.$utils.format_date(t)},item_work_address:function(t){var e=JSON.parse(t);return Array.isArray(e)?e.join():e}}};e.default=i}).call(this,n("543d")["default"])},"6de6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.tab_list,function(e,n){var r=t.__map(e.data,function(e,n){var r=t.item_price(e),a=t.item_start_date(e.startData),o=t.item_work_address(e.workAddress);return{$orig:t.__get_orig(e),m0:r,m1:a,m2:o}});return{$orig:t.__get_orig(e),l0:r}}));t.$mp.data=Object.assign({},{$root:{l1:n}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"88f7":function(t,e,n){"use strict";n.r(e);var r=n("6de6"),a=n("cfbe");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("11c9");var i=n("2877"),c=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"a3e7aba0",null);e["default"]=c.exports},cfbe:function(t,e,n){"use strict";n.r(e);var r=n("208d"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},e0a1:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabbar/task/taskArtisan-create-component',
    {
        'pages/tabbar/task/taskArtisan-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("88f7"))
        })
    },
    [['pages/tabbar/task/taskArtisan-create-component']]
]);                