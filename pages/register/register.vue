<template>
	<view id="register">
		<view id="topBar">
			<text class="goBack" @tap="this.$goBack">
				<image class="goBackImage" :src="imgUrl+'goBack.png'" @tap="$goBack()"></image>
			</text>
			<text>手机注册</text>
		</view>
		<view id="center">
			<view class="content">
				<view class="content-item">
					<text class="phone">
						<image class="phoneImg" :src="imgUrl+'phone.png'" mode=""></image>
					</text>
					<input class="align-left" type="text" value="" placeholder="手机号" :placeholder-style="inputPlaceholer" />
					<text>|&nbsp;获取验证码</text>
				</view>
				<view class="content-item">
					<text class="phone">
						<image class="phoneImg" :src="imgUrl+'sms.png'" mode=""></image>
					</text>
					<input class="align-left" type="text" value="" placeholder="短信验证码" :placeholder-style="inputPlaceholer" />
				</view>
				<view class="content-item">
					<text class="phone">
						<image class="phoneImg" :src="imgUrl+'password.png'" mode=""></image>
					</text>
					<input class="align-left" :type="passwordState" value="" placeholder="设置密码,6~11位" :placeholder-style="inputPlaceholer" />
					<image class="changePassword" :src="passWordImage" mode="" @tap="changePassword"></image>
				</view>
				<view class="regBut">
					<button :loading="goReg">注册</button>
				</view>
				<view class="agreement">
					<checkbox-group @change="agreeChange">
						<label class="checkbox">
							<checkbox value="as" color="#F39801" /><text class="agreementText">我已阅读并同意《服务协议》《隐私保护政策》</text>
						</label>
					</checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:'https://static.xinlongjiance.com/img/',
				passwordState:'password',
				passWordImage:'../../static/login/eye.png',
				goReg:false,
				regState:true
			}
		},
		methods: {
			changePassword(){
				if(this.passWordImage == '../../static/login/eye.png'){
					this.passWordImage = '../../static/login/eyeopen.png';
					this.passwordState = 'text';
				}else{
					this.passWordImage = '../../static/login/eye.png'
					this.passwordState = 'password';
				}
			},
			agreeChange(val){
				if(mp.detail.value.length == 0){
					
				}else{
					
				}
			}
		}
	}
</script>

<style scoped>
#register{
	width: 750upx;
}
#topBar{
	width: 750upx;
	height: 100upx;
	padding-top: 55upx;
	background-color: #FFFFFF;
	color: #333333;
	text-align: center;
	border-bottom: 1upx solid #E8E8E8;
	line-height: 100upx;
	position: fixed;
	top: 0upx;
	left: 0upx;
	right: 0upx;
	z-index: 2;
}
#topBar>text:first-child{
	float: left;
	padding-left: 30upx;
	box-sizing: border-box;
}
#topBar>text:last-child{
	margin-left: -56upx;
	box-sizing: border-box;
	font-weight: 900;
	font-size: 30upx;
	letter-spacing: 5upx;
}
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
#center{
	width: 750upx;
	padding: 50upx;
	box-sizing: border-box;
	padding-top: 195upx;
}
.content{
	width: 100%;
	border-radius: 25upx;
	overflow: hidden;
}
.content-item{
	width: 100%;
	height: 100upx;
	background-color: #F7F7F7;
	border-bottom: 1upx solid #Ececec;
	line-height: 100upx;
	display: flex;
	justify-content: flex-start;
}
.content-item>text:first-child{
	display: inline-block;
	width: 60upx;
	text-align: center;
}
.content-item>text:last-child{
	color: #929292;
}
.content-item input{
	height: 100upx;
	flex: 0.95;
	display: inline-block;
}
.changePassword{
	width: 40upx !important;
	height: 30upx !important;
	vertical-align: middle;
	margin-top: 30upx;
	margin-left: 30upx;
	z-index: 10;
}
.regBut{
	margin-top: 40upx;
}
.regBut>button{
	background-color: #F39801;
	color: #FFFFFF;
	border: none;
}
.agreement{
	margin-top: 20upx;
}
checkbox{
	transform: scale(0.8);
}
.agreementText{
	font-size: 26upx;
}
</style>
