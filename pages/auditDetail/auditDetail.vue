<template>
	<view>
		<view class="bg-gradual-blue">
			<cu-custom :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">申请个人详情</block>
			</cu-custom>
			<view class="plh-height"></view>
		</view>
		<mescroll-uni :down="downOption" :up="upOption" @down="downCallback" @up="upCallback" :bottom="isWork?0:128" :top="c_CustomBar">
			<view class="padding detail-main" v-if="!loading">
				<view class="people-main bg-white">
					<view class="info">
						<view class="name">
							<text class="text-red">
								<text class="cuIcon-female  sex-icon"></text>{{personinfo.age}}岁
							</text>
							<text class="text-bold text-black text-xl margin-left">{{personinfo.name}}</text>
							
							<text class="margin-left text-df text-xxl text-red">{{personinfo.rating}}分</text>
						</view>
						<view class="limit margin-top-sm text-grey text-df">
							{{personinfo.workYear}}年工作年限<text class="text-xl margin-left-sm margin-right-sm">/</text>{{personinfo.homeAddress}}
						</view>
						<!-- <view class="price margin-top-sm text-red text-xl margin-bottom-sm">28/时</view> -->
						<!-- <sunui-star iconName="cuIcon-favorfill" :disabledStar="true"></sunui-star> -->
						<view class="addr text-gray margin-top-sm ">
							<text class="cuIcon-locationfill margin-right-xs"></text>
							<text>{{personinfo.address}}</text>
						</view>
					</view>
					<view class="avatar bg-white"><view class="cu-avatar xl round bg-red" :style="{backgroundImage: avatarUrl(personinfo.avatarUrl)}"></view></view>
				</view>
				<view class="margin-top-lg bg-white padding skills-card">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>
						证件信息
					</view>
					<view class="no-data" v-if="files.length<=0">
						<image src="https://boboyun.oss-cn-hangzhou.aliyuncs.com/bgt/noData.png" mode="aspectFit" class="no-data-img"></image>
					</view>
					<view class="grid col-3" v-else>
						<view class="padding-sm radius text-center" v-for="item in files" :key="item.id">
							<image :src="'https://zzy.zwch.ltd'+item.filePath" mode="aspectFill" style="width: 100%; height: 140rpx;background-color: #eeeeee;"></image>
							<text class="text-grey text-df">{{item.fileName}}</text>
						</view>
					</view>
				</view>
				<view class="margin-top-lg bg-white padding skills-card">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>
						最近工作情况
					</view>
					<view class="no-data" v-if="works.length<=0">
						<image src="https://boboyun.oss-cn-hangzhou.aliyuncs.com/bgt/noData.png" mode="aspectFit" class="no-data-img"></image>
					</view>
					<view class="work-list" v-else>
						<view class="item solid-bottom" v-for="item in works" :key="item.id">
							<view class="work-info flex">
								<view class="padding-xs work-item">
									<text class="text-grey">行业</text>
									<text class="text-black margin-left-sm">{{item.scompany}}</text>
								</view>
								<view class="padding-xs work-item">
									<text class="text-grey">设备</text>
									<text class="text-black margin-left-sm">{{item.deviceName}}</text>
								</view>
								<view class="padding-xs work-item">
									<text class="text-grey">职位</text>
									<text class="text-black margin-left-sm">{{item.typeLevelName}}</text>
								</view>
								<view class="padding-xs work-item">
									<text class="text-grey">工作周期</text>
									<text class="text-black margin-left-sm">{{item.limit === 0?'不详':item.limit+'天'}}</text>
								</view>
								<view class="padding-xs work-item work-date">
									<text class="text-gray">工作日期</text>
									<text class="text-gray margin-left-sm">{{get_work_time(item)}}</text>
								</view>
							</view>
							<view class="grade-box">
								<view class="grade bg-gradual-blue text-xxl text-white">
									{{item.tating?item.tating:'无'}}
								</view>
								<view class="text-df text-gray">评分</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</mescroll-uni>
		<view class="bottom-btn bg-white" v-if="!isWork">
			<view class="main">
				<button class="bg-gradual-blue cu-btn lg" @tap="go_back('5')">录用</button>
				<button class="bg-gradual-red cu-btn lg"  @tap="go_back('6')">不录用</button>
			</view>
		</view>
	</view>
</template>

<script>
// import sunuiStar from '../../../../components/sunui-star/sunui-star.vue';
export default {
	data() {
		return {
			downOption: {
				auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
			},
			upOption: {
				auto: false
			},
			detail_list:[
				{
					industry:'铝电行业',
					equipment:'全自动热压机',
					type:'电工',
					task_cycle:'20天',
					work_date:'2019-09-21 ~ 2019-10-21'
				},
				{
					industry:'铝电行业',
					equipment:'全自动热压机',
					type:'电工',
					task_cycle:'20天',
					work_date:'2019-09-21 ~ 2019-10-21'
				},
			],
			id:'',
			pid:'',
			detail_data:'',
			isWork:false,
			loading:true,
		};
	},
	components: {
		// sunuiStar
	},
	computed:{
		c_CustomBar(){
			return this.CustomBar
		},
		personinfo(){
			return this.$utils._get(this.detail_data,'personinfo',{})
		},
		files(){
			return this.$utils._get(this.detail_data,'files',[])
		},
		works(){
			return this.$utils._get(this.detail_data,'works',[])
		}
	},
	onLoad(option) {
		this.id = option.id
		this.pid = option.pid
		this.isWork = this.$_.get(option,'isWork',false)
		uni.$on('refreshList',() =>{
			console.log('refreshList')
			this.init()
		})
		this.init()
	},
	onUnload() {
		uni.$off('refreshJwt')
	},
	methods: {
		init(){
			this.$http.get('personwx.persondetail/1.0/',{
				id:this.pid
			}).then(res =>{
				console.log(res)
				if(res.data.code == 0){
					this.detail_data = res.data.data
				}
			}).finally(() =>{
				this.loading = false
			})
		},
		downCallback(mescroll) {
			// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
			// loadSwiper();
			// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
			mescroll.resetUpScroll();
		},
		/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
		upCallback(mescroll) {
			//联网加载数据
			mescroll.endErr();
			// setTimeout(() => {
			// 	mescroll.endErr();
			// }, 1000);
		},
		go_back(status){
			let pamars = {
				status:status,
				id:this.id
			}
			this.$http.post('personwx.checkrecruitperson/1.0/',pamars).then(res =>{
				console.log(res)
				if(res.data.code == '0'){
					uni.$emit('refreshzmList')
					uni.navigateBack({
					    delta: 1
					});
				}
				
			})
			
		},
		get_work_time(item){
			let start = '',
				end = '';
			if(this.$_.get(item,'sstartTime','') === ''){
				start = '不详'
			}else{
				start = this.$utils.format_date(item.sstartTime,'/')
			}
			if(this.$_.get(item,'sendTime','') === ''){
				end = '不详'
			}else{
				end = this.$utils.format_date(item.sendTime,'/')
			}
			if(start === '不详' && end === '不详'){
				return '不详'
			}else{
				return start +' - '+ end
			}
		},
		avatarUrl(avatarUrl){
			return `url(${avatarUrl})`
		},
	}
};
</script>

<style lang="less" scoped>
.plh-height {
	height: 208upx;
}
.detail-main {
	padding-top: 64upx;
}
.people-main {
	border-radius: 10upx;
	position: relative;
	padding: 84upx 0 30upx;
	box-shadow: 6upx 6upx 8upx rgba(0, 129, 255, 0.1);
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;

		.name {
			display: flex;
			align-items: center;
		}
		.limit{
			display: flex;
			align-items: center;
		}
	}
	.avatar {
		position: absolute;
		top: -64upx;
		left: 50%;
		transform: translateX(-50%);
		padding: 10upx;
		border-radius: 100%;
		align-items: center;
	}
}
.skills-card {
	border-radius: 10upx;
	box-shadow: 6upx 6upx 8upx rgba(0, 129, 255, 0.1);
}
.work-list {
	.item {
		display: flex;
		align-items: center;
		padding:20upx 0;
		&:after{
			border-color: #ddd;
		}
		&:last-child:after{
			border-color: transparent;
		}
		.cu-avatar {
			flex: 0 0 auto;
			margin-right: 20upx;
		}
		.work-info {
			flex: 1 1 auto;
			overflow: hidden;
			flex-wrap: wrap;
			.work-item{
				width: 50%;
				flex: 0 0 auto;
			}
			.work-date{
				width: 100%;
			}
		}
		.grade-box{
			flex: 0 0 auto;
			text-align: center;
			.grade{
				width: 100rpx;
				height: 100rpx;
				line-height: 100rpx;
				border-radius: 100%;
				margin-bottom: 8rpx;
				text-align: center;
			}
		}
	}
}
.bottom-btn{
	position: fixed;
	width: 100%;
	height: 128upx;
	bottom: 0;
	z-index: 1024;
	box-shadow: 6upx -6upx 8upx rgba(0, 129, 255, 0.1);
	.main{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100%;
		.cu-btn{
			min-width: 200upx;
		}
	}
}
.no-data{
	.no-data-img{
		width: 60%;
		height: 400rpx;
		margin: 0 auto;
		display: block;
	}
}
</style>
