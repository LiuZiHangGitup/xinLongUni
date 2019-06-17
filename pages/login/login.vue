<template>
	<view id="login">
		<view id="topBar">
			<!-- <text @tap="$goWindow('../register/register')">注册</text> -->
		</view>
		<view id="logo">
			<image :src="imgUrl+'logo.jpg'" mode=""></image>
		</view>
		<view class="login">
			<view class="login-top">
				<text :class="[loginState == 1?'active':'','chooseLogin']" @tap="changeLogin(1)">手机快捷登陆</text>
				<!-- |
				<text :class="[loginState == 0?'active':'','chooseLogin']" @tap="changeLogin(0)">账号密码登陆</text> -->
			</view>
		</view>
		<view class="phoneLogin" :class="[loginState == 1?'loginActive':'']">
			<view class="phoneLogin-item">
				<text class="phone">
					<!-- <image class="phoneImg" :src="imgUrl+'phone.png'" mode=""></image> -->
				</text>
				<input class="align-left" type="number" v-model="phoneNumber" placeholder="手机号(无需注册)" :placeholder-style="inputPlaceholer" maxlength="11" />
				<text @tap="getCode()">|&nbsp;{{ getCodeText }}</text>
			</view>
			<view class="phoneLogin-item">
				<text class="phone">
					<!-- <image class="phoneImg" :src="imgUrl+'sms.png'" mode=""></image> -->
				</text>
				<input class="align-left" type="number" v-model="smsCode" placeholder="短信验证码" :placeholder-style="inputPlaceholer" maxlength="4" />
			</view>
			<view class="phoneSub">
				<button @tap="goLogin()">登录</button>
			</view>
			<!-- <view class="onlyLogin">
				<text class="xian"></text>
				<text class="onlyLogin-item">一键登录</text>
				<text class="xian"></text>
			</view>
			<view class="chooseLoginMode"> -->
				<!-- <image class="chooseLoginModeImage" src="../../static/login/wblogo.png" mode=""></image> -->
				<!-- <image class="chooseLoginModeImage" src="../../static/login/wxlogo.png" mode="" @tap="diSanFang()"></image> -->
				<!-- <button class="wxBut" open-type="getUserInfo" @tap="diSanFang()"></button> -->
				<!-- <image class="chooseLoginModeImage" src="../../static/login/qqlogo.png" mode=""></image> -->
			<!-- </view> -->
		</view>
		<view class="phoneLogin" :class="[loginState == 0?'loginActive':'']">
			<view class="phoneLogin-item">
				<text class="phone">
					<image class="phoneImg" :src="imgUrl+'phone.png'" mode=""></image>
				</text>
				<input class="align-left" type="text" value="" placeholder="手机号/邮箱/用户名" :placeholder-style="inputPlaceholer" />
			</view>
			<view class="phoneLogin-item">
				<text class="phone">
					<image class="phoneImg" :src="imgUrl+'password.png'" mode=""></image>
				</text>
				<input class="align-left" :type="passwordState" value="" placeholder="密码" :placeholder-style="inputPlaceholer" />
				<image class="changePassword" :src="passWordImage" mode="" @tap="changePassword"></image>
			</view>
			<view class="phoneSub">
				<button>登录</button>
			</view>
			<view class="forget" @tap="this.$goWindow('../forgetPassword/forgetPassword')">
				忘记密码
			</view>
			<view class="onlyLogin">
				<text class="xian"></text>
				<text class="onlyLogin-item">一键登录</text>
				<text class="xian"></text>
			</view>
			<view class="chooseLoginMode">
				<image class="chooseLoginModeImage" :src="imgUrl+'login/wblogo.png'" mode="" @tap="diSanFang()"></image>
				<image class="chooseLoginModeImage" :src="imgUrl+'login/wxlogo.png'" mode=""></image>
				<image class="chooseLoginModeImage" :src="imgUrl+'login/qqlogo.png'" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginState:1,
				inputPlaceholer:'text-align:left;',
				passwordState:'password',
				passWordImage:'https://static.xinlongjiance.com/img/login/eye.png',
				phoneNumber:'',
				getCodeText:'获取验证码',
				getCodeState:true,
				smsCode:'',
				imgUrl:'https://static.xinlongjiance.com/img/'
			}
		},
		methods: {
			diSanFang(){
				this.$toast('敬请期待暂未开放');
				// this.$loadIng();
				// new Promise( (reslove,reject) => {
				// 	uni.getProvider({
				// 		service: 'oauth',
				// 		success: (resData) => {
				// 			uni.login({
				// 				provider: resData.provider[0],
				// 				timeout:100000,
				// 				success: (loginData) => {
				// 					console.log(loginData.code);
				// 					uni.getUserInfo({
				// 						provider:'weixin',
				// 						withCredentials: true,
				// 						lang:'zh_CN',
				// 						success: (resDataInfo) => {
				// 							let encryptedData = resDataInfo.encryptedData;
				// 							let iv = resDataInfo.iv;
				// 							console.log(encryptedData);
				// 							console.log(iv)
				// 							debugger;
				// 							this.$postRequest('/WeChat/wechat',{code:loginData.code,encryptedData:encryptedData,iv:iv},(loginResData) => {
				// 								console.log(loginResData);
				// 							})
				// 						}
				// 					})
				// 				},
				// 				fail: (loginErrorData) => {
				// 					reject('网络错误');
				// 				}
				// 			})
				// 		},
				// 		fail: (resData) => {
				// 			reject('网络错误');
				// 		}
				// 	})
				// }).then( (data) => {
				// 	this.$postRequest('/other/uid',{wxUnionId:data}, (resData) => {
				// 		if(resData.data.code == 1001){
				// 			uni.setStorageSync('uuid',data)
				// 			this.$goWindow('../bindPhone/bindPhone');
				// 			uni.hideLoading();
				// 		}else if(resData.data.code == 200){
				// 			uni.setStorage({
				// 				key:'token',
				// 				data: resData.data.result.token,
				// 				success: () => {
				// 					uni.switchTab({
				// 						url: '../index/index'
				// 					})
				// 					uni.hideLoading();
				// 				},
				// 				fail: () => {
				// 					uni.hideLoading();
				// 					this.$toast('网络错误，请重试。')
				// 				}
				// 			})
				// 		}
				// 	})
				// }).catch( (errData) => {
				// 	uni.hideLoading();
				// 	this.$toast(errData)
				// })
			},
			goLogin(){
				if(!/^1[34578]\d{9}$/.test(this.phoneNumber)){
					this.$toast('请输入正确的手机号');
				}else if(this.smsCode == ''){
					this.$toast('请输入验证码');
				}else{
					let params = {phoneNumber:this.phoneNumber,smsCode:this.smsCode};
					this.$postRequest('/auth/auth_fast_login',params, (resData) => {
						if(resData.data.code == 200){
							uni.setStorageSync('token',resData.data.result.token);
							uni.switchTab({
								url: '../index/index'
							})
						}else{
							this.$toast(resData.data.message);
						}
					})
				}
			},
			getCode(){
				if(/^1[34578]\d{9}$/.test(this.phoneNumber)){
					let params = {phoneNumber:this.phoneNumber};
					let daoTime = 60;
					let changeGetCodeState = setInterval(() => {
						--daoTime;
						if(daoTime == 0){
							this.getCodeText = '获取验证码';
							this.getCodeState = true;
							clearInterval(changeGetCodeState);
						}else{
							this.getCodeText = '倒计时'+`${daoTime}`+'秒';
						}
					},1000)
					this.$postRequest('/other/other_sms_code',params,(resData) => {
						if(resData.data.code == 200){
							this.$toast('获取验证码成功');
							this.getCodeState = false;
						}else{
							this.$toast(resData.data.message)
						}
					})	
				}else if(this.getCodeState == false){
					return;
				}else{
					this.$toast('请输入正确的手机号');
				}
			},
			changeLogin(index){
				this.loginState = index;
			},
			changePassword(){
				if(this.passWordImage == 'https://static.xinlongjiance.com/img/login/eye.png'){
					this.passWordImage = 'https://static.xinlongjiance.com/img/login/eyeopen.png';
					this.passwordState = 'text';
				}else{
					this.passWordImage = 'https://static.xinlongjiance.com/img/login/eye.png'
					this.passwordState = 'password';
				}
			}
		}
	}
</script>

<style scoped>
.goBack{
	width: 30upx;
	height: 30upx;
	display: inline-block;
}
.goBackImage{
	width: 30upx !important;
	height: 30upx !important;
	vertical-align: middle;
}
#topBar{
	width: 750upx;
	height: 100upx;
	background-color: #FFFFFF;
	position: fixed;
	top: 0upx;
	left: 0upx;
	right: 0upx;
	display: flex;
	justify-content: space-between;
	padding: 55upx 30upx 0upx 30upx;
	box-sizing: border-box;
}
#topBar text:last-child{
	font-size: 30upx;
}
#login{
	padding-top: 150upx;
	text-align: center;
}
#login image{
	width: 264upx;
	height: 122upx;
}
.login{
	widows: 750upx;
}
.login-top{
	width:750upx;
	height: 120upx;
}
.chooseLogin{
	display: inline-block;
	width: 371.5upx;
	height: 120upx;
	line-height: 120upx;
	border-bottom:1upx solid #929292;
	text-align: center;
	transition: 0.3s all ease; 
}
.active{
	color: #EE732F;
	border-bottom-color: #EE732F;
}
.phoneLogin{
	width: 750upx;
	margin-top: 50upx;
	transition: 0.3s all ease;
	transform: scaleY(0);
	position: absolute;
}
.loginActive{
	transform: scaleY(1);
}
.phoneLogin-item{
	width: 750upx;
	height: 100upx;
	background-color: #F8f8f8;
	border-bottom: 1upx solid #Ececec;
	line-height: 100upx;
	display: flex;
	justify-content: flex-start;
}
.phoneLogin-item input{
	height: 100upx;
	width: 500upx;
	display: inline-block;
}
.forget{
	text-align: right;
	color: #ec722f;
	font-size: 26upx;
	font-weight: 600;
	padding: 30upx 50upx 0upx 0upx;
	box-sizing: border-box;
}
.changePassword{
	width: 50upx !important;
	height: 40upx !important;
	vertical-align: middle;
	margin-top: 30upx;
	margin-left: 60upx;
	z-index: 10;
}
.phoneLogin-item text:first-child{
	display: inline-block;
	width: 60upx;
	font-size: 30upx;
}
.phoneLogin-item text:last-child{
	color: #8a8a8a;
	display: block;
	text-align: center;
	z-index: 9;
}
.phoneLogin-item:last-child{
	border-bottom: none;
}
.align-left{
	text-align: left !important;
}
.phoneSub{
	width: 750upx;
	margin-top: 40upx;
}
.phoneSub button{
	background-color: #F39801;
	color: #FFFFFF;
	border: none;
}
.onlyLogin{
	display: flex;
	justify-content: space-between;
	height: 50upx;
	margin-top: 150upx;
}
.onlyLogin-item{
	font-size: 26upx;
	color: #929292;
	letter-spacing: 5upx;
}
.xian{
	width: 305upx;
}
.xian:before{
	content: "";
	display: inline-block;
	width: 100%;
	height: 1upx;
	border-top: 1upx solid #D8D8D8;
	vertical-align: middle;
	margin-top: -6upx;
}
.chooseLoginMode{
	width: 750upx;
	margin-top: 40upx;
	display: flex;
	justify-content: space-around;
}
.chooseLoginModeImage{
	width: 100upx !important;
	height: 100upx !important;
}
.wxBut{
	width: 100upx;
	height: 100upx;
	background-image: url('https://static.xinlongjiance.com/img/login/wxlogo.png');
	background-size: 100% 100%;
	border: none;
	border-radius: 50%;
}
.wxBut:before{
	
}
</style>
