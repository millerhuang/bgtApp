(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/task/task"],{"44eb":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.p_list,function(e,n){var o=t.deliveryPeriod(e.deliveryPeriod),r=t.deliveryPeriod(e.createdTime);return{$orig:t.__get_orig(e),m0:o,m1:r}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},"5fba":function(t,e,n){"use strict";n.r(e);var o=n("f9af"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"840d":function(t,e,n){"use strict";(function(t){n("ac93"),n("921b");o(n("66fd"));var e=o(n("d2b2"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c503:function(t,e,n){},d2b2:function(t,e,n){"use strict";n.r(e);var o=n("44eb"),r=n("5fba");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("f85d");var a=n("2877"),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,"5290f0ac",null);e["default"]=s.exports},f85d:function(t,e,n){"use strict";var o=n("c503"),r=n.n(o);r.a},f9af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"a08f"))},s=function(){return n.e("pages/tabbar/task/taskArtisan").then(n.bind(null,"88f7"))},c={data:function(){return{tab_list:[{name:"当前任务",id:"dcrw",data:[],y:0},{name:"已完成",id:"ywc",data:[],y:0}],current_tab:{id:"dcrw",index:0},loading:!0,show_artisan:!1,mescroll:null,upOption:{onScroll:!0,isLock:!0,auto:!1},downOption:{auto:!1},preIndex:0}},onLoad:function(){var e=this;console.log("onLoad");try{var n=t.getStorageSync("version");if(console.log("version",n),"1.1.7"!==n)return t.clearStorageSync(),this.show_artisan=!1,void t.reLaunch({url:"/pages/welcome/welcome"});var o=t.getStorageSync("user_info");console.log(o),o?"head"===this.user_role?this.init():this.show_artisan=!0:(this.show_artisan=!1,t.reLaunch({url:"/pages/welcome/welcome"}))}catch(r){console.log(r)}t.$on("refreshList",function(){console.log("refreshList"),"head"===e.user_role?e.init():e.show_artisan=!0}),t.$on("refreshJwt",function(t){console.log("refreshJwt",t),"head"===e.user_role?e.init():e.show_artisan=!0})},onShow:function(){console.log("show")},onReady:function(){console.log("ready")},onUnload:function(){t.$off("refreshList"),t.$off("refreshJwt")},components:{taskArtisan:s,MescrollUni:a},watch:{user_role:function(t){console.log(t),"head"===t&&this.init()},refresh_num:function(t){console.log("task_refresh_num",t)}},computed:r({},(0,o.mapState)(["refresh_num"]),(0,o.mapGetters)(["user_role"]),{has_task:function(){return this.tab_list.some(function(t,e){return t.data.length>0})},p_list:function(){return this.tab_list[this.current_tab.index].data},c_CustomBar:function(){return this.CustomBar},workbench_id_list:function(){var t=[];return this.tab_list[0].data.forEach(function(e){"2"!=e.status&&"3"!=e.status||t.push(e)}),t}}),methods:{init:function(){var t=this;Promise.all([this.get_dcrw_list(),this.get_ywc_list()]).then(function(e){console.log(e),t.tab_list[0].data=t.$utils._get(e[0],"data.data",[]),t.tab_list[1].data=t.$utils._get(e[1],"data.data",[]),t.loading=!1})},get_dcrw_list:function(){return this.$http.get("personwx.projectinfolist/1.0/",{isFinish:"0"})},get_ywc_list:function(){return this.$http.get("personwx.projectinfolist/1.0/",{isFinish:"1"})},up_get_data:function(){var t=this;this.$http.get("personwx.projectinfolist/1.0/",{isFinish:JSON.stringify(this.current_tab.index)}).then(function(e){console.log(e),t.tab_list[t.current_tab.index].data=t.$utils._get(e,"data.data",[]),t.mescroll.endSuccess()})},select_tab:function(t,e){this.current_tab.id=t,this.current_tab.index=e;var n=this.tab_list[this.preIndex];n.y=this.mescroll.getScrollTop(),this.preIndex=e},ontabchange:function(t){console.log(t);var e=t.detail.current;this.current_tab.index=e,this.current_tab.id=this.tab_list[e].id},loadMore:function(t){console.log(t)},go_detail:function(e){console.log(e);var n=this.$utils._get(e,"status","0");switch(this.$store.commit("setCurrentTask",e),n){case"0":case"1":t.navigateTo({url:"/pages/tabbar/task/createTask/createTask?id=".concat(e.id)});break;case"2":case"3":this.$store.commit("set_bgt_c_task",this.workbench_id_list),this.$store.commit("set_bgt_ct_id",e.id),t.switchTab({url:"/pages/tabbar/workbench/workbench"});break;default:break}},goto_add:function(){t.navigateTo({url:"/pages/tabbar/task/createTask/createTask"})},deliveryPeriod:function(t){return this.$utils.format_date(t)},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){var e=this;setTimeout(function(){e.up_get_data()},300)},scroll:function(t){console.log("滚动条位置 = "+t.getScrollTop()+", navTop = "+this.navTop),t.getScrollTop()>=this.navTop?this.isShowSticky=!0:this.isShowSticky=!1}}};e.default=c}).call(this,n("543d")["default"])}},[["840d","common/runtime","common/vendor"]]]);