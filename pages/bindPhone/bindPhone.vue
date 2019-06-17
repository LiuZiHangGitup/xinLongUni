<template>
	<view id="bindPhone">
		<view id="topBar" @tap="$goBack()">
			<image src="../../static/goBack.png" mode=""></image>
		</view>
		<view id="viewCenter">
			<view class="viewCenter-Top">
				请绑定手机号
			</view>
			<view class=".viewCenter-Body">
				<view class="viewCenter-Body-Item">
					<input type="number" placeholder="请输入手机号" v-model="phoneNumber" :disabled="phoneState" maxlength="11" />
				</view>
				<view class="viewCenter-Body-Item">
					<input type="number" placeholder="请输入验证码" v-model="smsCode" maxlength="4" />
					<text class="getCode" @click="getCode()" :style="textColor">{{ getCodeText }}</text>
				</view>
			</view>
			<view class="viewCenter-Foot" :style="bgColor" @tap="bindPhone()">下一步</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber:'',
				smsCode:'',
				getCodeText: '获取验证码',
				bgColor:'background-color: rgba(255,153,51,0.7);',
				textColor: 'color: rgba(255,153,51,0.7);',
				phoneState:false
			}
		},
		watch:{
			smsCode(val){
				if(val.length == 4&&/^1[34578]\d{9}$/.test(this.phoneNumber)){
					this.bgColor = 'background-color: rgba(255,153,51,1);';
				}else{
					this.bgColor = 'background-color: rgba(255,153,51,0.7);';
				}
			},
			phoneNumber(val){
				if(/^1[34578]\d{9}$/.test(val)){
					this.textColor = 'color: rgba(255,153,51,1);';
				}else if(/^1[34578]\d{9}$/.test(val)&&this.smsCode.length == 4){
					this.bgColor = 'background-color: rgba(255,153,51,1);';
				}else{
					this.bgColor = 'background-color: rgba(255,153,51,0.7);';
					this.textColor = 'color: rgba(255,153,51,0.7);';
				}
			}
		},
		methods: {
			bindPhone(){
				if(this.bgColor == 'background-color: rgba(255,153,51,1);'){
					const uuid = uni.getStorageSync('uuid');
					const userImg = uni.getStorageSync('userImg');
					const nickName = uni.getStorageSync('nickName');
					this.$postRequest('/other/binding',{
						info:{
							nickName:nickName,
							headImg:userImg,
						},
						wxUnionId:uuid,
						phoneNumber:this.phoneNumber,
						smsCode:this.smsCode
					},(resData) => {
						if(resData.data.code == 200){
							uni.setStorage({
								key:'token',
								data:resData.data.result.token,
								success:() => {
									uni.switchTab({
										url: '../index/index'
									})
								},
								fail: () => {
									this.$toast('网络错误请重试。')
								}
							})
						}else{
							this.$toast(resData.data.message)
						}
					})
				}else{
					return;
				}
			},
			getCode(){
				if(!/^1[34578]\d{9}$/.test(this.phoneNumber)){
					this.$toast('手机号格式不正确');
				}else if(this.getCodeText != '获取验证码'){
					return;
				}else{
					let time = 60;
					let getCodeTime = setInterval( () => {
						time--;
						if(time == 0){
							this.getCodeText = '获取验证码';
							clearInterval(getCodeTime);
						}else{
							this.getCodeText = time + '秒';
						}
					},1000)
					this.$postRequest('/other/other_sms_code',{phoneNumber:this.phoneNumber}, (resData) => {
						if(resData.data.code == 200){
							this.$toast('获取验证码成功');
							this.phoneState = true;
						}else{
							this.$toast(res.data.message);
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
#bindPhone{
	width: 750upx;
}
#topBar{
	width: 750upx;
	position: fixed;
	top: 0upx;
	left: 0upx;
	right: 0upx;
	height: 140upx;
	border-bottom: 1upx solid #E8E8E8;
	line-height: 170upx;
	padding-left: 20upx;
}
#topBar>image{
	width: 50upx;
	height: 50upx;
}
#viewCenter{
	width: 750upx;
	margin-top: 140upx;
}
.viewCenter-Top{
	width: 750upx;
	text-align: center;
	height: 200upx;
	line-height: 140upx;
	font-size: 36upx;
	letter-spacing: 5upx;
}
.viewCenter-Body{
	width: 750upx;
	margin-top: 40upx;
}
.viewCenter-Body-Item{
	width: 750upx;
	display: flex;
	padding: 0upx 20upx;
	box-sizing: border-box;
	height: 100upx;
	border-bottom: 1upx solid #E3E3E3;
	line-height: 100upx;
}
.viewCenter-Body-Item>input{
	flex: 0.75;
	height: 100upx;
}
.getCode{
	flex: 0.25;
	text-align: center;
}
.viewCenter-Foot{
	margin-top: 40upx;
	width: 750upx;
	height: 100upx;
	text-align: center;
	line-height: 100upx;
	font-size: 30upx;
	color: #FFFFFF;
	letter-spacing: 6upx;
}
</style>
