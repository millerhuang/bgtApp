<template>
	<view class="forget">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">重置密码</block>
		</cu-custom>
		<view class="content">
			<view class="header"><image src="../../static/login.png"></image></view>
			<!-- 主体 -->
			<view class="main">
				<view class="tips">若你忘记了密码，可在此重置新密码。</view>
				<lInput v-model="phoneData" type="text" maxlength="11" placeholder="请输入手机号码"></lInput>
				<lInput v-model="passData" type="password" maxlength="11" placeholder="请输入新密码" isShowPass></lInput>

				<lInput
					v-model="verCode"
					type="number"
					maxlength="4"
					placeholder="验证码"
					isShowCode
					codeText="获取重置码"
					setTime="30"
					ref="runCode"
					@setCode="getVerCode()"
				></lInput>
			</view>

			<lButton text="重置密码" :rotate="isRotate" @bClick="startRePass()"></lButton>
			<view class="footer">
				<navigator url="login" open-type="navigate">登录</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
			</view>
		</view>
	</view>
</template>

<script>
let _this;
import lInput from '../../components/login-comp/login-input.vue'; //input
import lButton from '../../components/login-comp/login-button.vue'; //button
export default {
	data() {
		return {
			phoneData: '', //电话
			passData: '', //密码
			verCode: '', //验证码
			isRotate: false //是否加载旋转
		};
	},
	components: {
		lInput,
		lButton
	},
	mounted() {
		_this = this;
	},
	methods: {
		getVerCode() {
			//获取验证码
			if (_this.phoneData.length != 11) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '手机号不正确'
				});
				return false;
			}
			console.log('获取验证码');
			this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
			uni.showToast({
				icon: 'none',
				position: 'bottom',
				title: '模拟倒计时触发'
			});

			setTimeout(function() {
				_this.$refs.runCode.$emit('runCode', 0); //假装模拟下需要 终止倒计时
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '模拟倒计时终止'
				});
			}, 3000);
		},
		startRePass() {
			//重置密码
			if (this.isRotate) {
				//判断是否加载中，避免重复点击请求
				return false;
			}
			if (this.phoneData.length != 11) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '手机号不正确'
				});
				return false;
			}
			if (this.passData.length < 6) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '密码不正确'
				});
				return false;
			}
			if (this.verCode.length != 4) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '验证码不正确'
				});
				return false;
			}
			console.log('重置密码成功');
			_this.isRotate = true;
			setTimeout(function() {
				_this.isRotate = false;
			}, 3000);
		}
	}
};
</script>

<style scoped>
@import url('./css/main.css');
</style>
