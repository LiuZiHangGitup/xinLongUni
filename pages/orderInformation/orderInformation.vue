<template>
	<view id="me">
		<view id="topBar">
			<image class="goBackImage" :src="imgUrl+'goBackWhite.png'" @tap="$goBack()"></image>
			<text>订单详情</text>
		</view>
		<view class="meTop">
			<image class="meTopBg" :src="imgUrl+'me/topBg.jpg'"></image>
			<view class="meTopLeft">
				<view class="meTopLeftLeft">
					<image :src="userHeadImg" mode=""></image>
				</view>
				<view class="meTopLeftRight">
					<view class="meTopLeftRightTopLeft">
						{{ userName }}
					</view>
					<view class="meTopLeftRightTopRight">
						注册用户
					</view>
					<view class="meTopLeftRightBottom">
						<!-- 积分：500分 -->
					</view>
				</view>
			</view>
			<view class="meTopRight">
				<!-- <image :src="imgUrl+'me/lingDang.png'" mode=""></image>
				<image :src="imgUrl+'me/sheZhi.png'" mode=""></image> -->
			</view>
		</view>
		<view class="meBody">
			<view class="meBody-item">
				<view class="meBody-item-left">
					<text>订单详情</text>
				</view>
				<view class="meBody-item-right">
				</view>
			</view>
		</view>
		<view class="orderInfo">
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">服务订单号</view>
				<view class="orderInfo-Item-Right">{{ serviceSn }}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">联系人</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.linkName || '' }}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">联系电话</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.linkPhone || '' }}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">联系地址</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.linkAdd || '' }}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">职位</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.job || ''}}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">所属服务</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.serviceCateName || ''}}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">下单时间</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.createAt || ''}}</view>
			</view>
			<view class="orderInfo-Item">
				<view class="orderInfo-Item-Left">备注</view>
				<view class="orderInfo-Item-Right">{{ orderInfo.remark || ''}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:'https://static.xinlongjiance.com/img/',
				userName: ' ',
				userHeadImg: 'https://static.xinlongjiance.com/img/me/head.jpg',
				serviceSn:'',
				orderInfo:{}
			}
		},
		onLoad(params){
			this.serviceSn = params.serviceSn;
			this.getOrderInfo();
			// this.$postRequest('/member/member_check_token','', (resData) => {
			// 	if(resData.data.code == 200){
			// 		this.userName = resData.data.result.account;
			// 	}else{
			// 		uni.showToast({
			// 			title: '网络错误',
			// 			icon:'none',
			// 			mask:false
			// 		});
			// 	}
			// })
		},
		onShow(){
			this.$getToken();
			if(this.$getHeadImg()){
				this.userHeadImg = this.$getHeadImg();
			}
			if(this.$getNickName()){
				this.userName = this.$getNickName()
			}
		},
		methods: {
			getOrderInfo(){
				this.$loadIng();
				this.$postRequest('/member/member_service_order_detail',{serviceSn: this.serviceSn},(resData) => {
					let dd = resData.data;
					if(dd.code == 200){
						this.orderInfo = dd.result;
						uni.hideLoading();
					}else{
						uni.hideLoading();
						this.$toast('网络错误');
					}
				})
			}
		}
	}
</script>

<style scoped>
@import url("./../../common/topBar.css");
#me{
	width: 750upx;
	background-color: #E8E8E8;
}
.meTop{
	width: 750upx;
	height: 177upx;
	position: relative;
	margin-top: 150upx;
	z-index:2;
}
.meTopBg{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 750upx;
	height: 177upx;
	z-index: -1;
}
.meTopLeft{
	float: left;
	margin-top: 50upx;
	margin-left: 50upx;
	display: flex;
}
.meTopRight{
	float: right;
	margin-top: 40upx;
	margin-right: 50upx;
}
.meTopRight image{
	width: 50upx;
	height: 50upx;
	margin: 0upx 5upx;
}
.meTopLeftLeft{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	border: 10upx solid rgba(255,255,255,0.5);
}
.meTopLeftLeft image{
	width: 100%;
	height: 100%;
	vertical-align: middle;
	border-radius: 50%;
}
.meBody-item-left{
	padding-left: 30upx;
	box-sizing: border-box;
}
.meTopLeftRight{
	margin-left: 20upx;
	margin-top: 10upx;
	color: #FFFFFF;
}
.meTopLeftRightTopLeft{
	display: inline-block;
	height: 50upx;
	line-height: 50upx;
	margin-right: 10upx;
}
.meTopLeftRightTopRight{
	display: inline-block;
	font-size: 26upx;
	width: 144upx;
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	background-color: #ea3323;
	color: #FFFFFF;
	border-radius: 10upx;
}
.meTopLeftRightBottom{
	font-size: 26upx;
}
.meBody{
	width: 750upx;
	background-color: #E8E8E8;
}
.meBody-item{
	width: 750upx;
	height: 100upx;
	background-color: #FFFFFF;
	border-bottom: 1upx solid #E8E8E8;
	padding: 0upx 15upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
image{
	vertical-align: middle;
}
.marginTop{
	margin-top: 30upx;
}
.orderInfo{
	width: 750upx;
	background-color: #FFFFFF;
}
.orderInfo-Item{
	width: 750upx;
	padding: 30upx 100upx;
	height: 100upx;
	line-height: 100upx;
	box-sizing: border-box;
}
.orderInfo-Item-Left{
	width: 150upx;
	height: 100%;
	float: left;
}
.orderInfo-Item-Right{
	width: 382upx;
	height: 100%;
	float: right;
	text-align: right;
	text-indent: 2em;
}
</style>
