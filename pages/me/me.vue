<template>
	<view id="me">
		<view id="topBar">
			<text class="nullImg">用户中心</text>
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
				<!-- <image :src="imgUrl+'me/lingDang.png'" mode=""></image> -->
				<!-- <image :src="imgUrl+'me/sheZhi.png'" mode=""></image> -->
			</view>
		</view>
		<view class="meBody">
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image :src="imgUrl+'me/order.png'" mode=""></image>
					<text>我的订单</text>
				</view>
				<view class="meBody-item-right">
					<image :src="imgUrl+'me/goIn.png'" mode=""></image>
				</view>
			</view>
			<!-- <view class="meBody-Center">
				<view class="meBody-Center-item">
					<image :src="imgUrl+'me/daiFuKuan.png'" mode=""></image><br>
					<text>待付款</text>
				</view>
				<view class="meBody-Center-item">
					<image :src="imgUrl+'me/daiFuKuan.png'" mode=""></image><br>
					<text>待付款</text>
				</view>
				<view class="meBody-Center-item">
					<image :src="imgUrl+'me/daiFuKuan.png'" mode=""></image><br>
					<text>待付款</text>
				</view>
				<view class="meBody-Center-item">
					<image src="../../static/me/daiFuKuan.png" mode=""></image><br>
					<text>待付款</text>
				</view>
			</view>
			<view class="meBody-item marginTop">
				<view class="meBody-item-left">
					<image src="../../static/me/weiXiuOrder.png" mode=""></image>
					<text>我的维修维保订单</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/say.png" mode=""></image>
					<text>我的评价</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/collection.png" mode=""></image>
					<text>我的收藏</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/faPiao.png" mode=""></image>
					<text>我的发票</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/address.png" mode=""></image>
					<text>收货地址</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item marginTop">
				<view class="meBody-item-left">
					<image src="../../static/me/tongZhi.png" mode=""></image>
					<text>消息通知</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/sheZhi_2.png" mode=""></image>
					<text>账号设置</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view>
			<view class="meBody-item">
				<view class="meBody-item-left">
					<image src="../../static/me/fenXiang.png" mode=""></image>
					<text>推荐好友</text>
				</view>
				<view class="meBody-item-right">
					<image src="../../static/me/goIn.png" mode=""></image>
				</view>
			</view> -->
		</view>
		<view class="haveNoOrder" v-if="orderList.length == 0">暂无订单</view>
		<view class="meOrder" v-if="orderList.length != 0">
			<view class="meOrder-Item" v-for="(item,index) in orderList" :key="index" @tap="$goWindow('../orderInformation/orderInformation?serviceSn='+item.serviceSn)">
				<view class="meOrder-Item-Left">
					<view>服务订单号:{{ item.serviceSn }}</view>
					<view>联系人:{{ item.linkName }}</view>
					<view>联系电话:{{ item.linkPhone }}</view>
					<view>所属服务:{{ item.serviceCateName }}</view>
				</view>
				<view class="meOrder-Item-Right">下单时间:{{ item.createAt }}</view>
			</view>
		</view>
		<view class="ifJiaZai" v-if="orderList.length != 0">
			{{ ifJiaZai }}
		</view>
		<view class="but">
			<button class="loginOut" @tap="removeUser()">{{ dengLuText }}</button>
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
				orderList:[],
				page:1,
				hasNext:true,
				ifJiaZai:'上划加载',
				dengLuText:'退出登录'
			}
		},
		onShow(){
			// this.$getToken();
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
			this.page = 1;
			this.hasNext = true;
			this.getOrders();
			if(this.$getToken()){
				this.dengLuText = '退出登录';
			}else{
				this.dengLuText = '立即登录';
			}
		},
		onLoad(){
			if(this.$getHeadImg()){
				this.userHeadImg = this.$getHeadImg();
			}
			if(this.$getNickName()){
				this.userName = this.$getNickName();
			}
		},
		onReachBottom(){
			this.page++;
			this.getOrders();
		},
		methods: {
			getOrders(){
				if(this.$getToken()){
					if(this.hasNext){
						this.$loadIng();
						this.ifJiaZai = '正在加载...'
						this.$postRequest('/member/member_service_order',{currentPage:this.page,pageSize:5},(resData) => {
							let dd = resData.data;
							if(dd.code == 200){
								this.hasNext = dd.result.hasNextPage;
								if(this.page == 1){
									this.orderList = dd.result.list;
								}else{
									this.orderList = this.orderList.concat(dd.result.list);
								}
								if(this.hasNext == false){
									this.ifJiaZai = '已加载全部';
								}else{
									this.ifJiaZai = '上划加载'
								}
								uni.hideLoading();
							}else{
								this.$toast('网络错误');
							}
						})
					}
				}else{
					this.$toast('您还未进行登陆，暂时无法查看订单');
				}
			},
			removeUser(){
				uni.removeStorageSync('token');
				this.$goWindow('../login/login')
			}
		}
	}
</script>

<style scoped>
@import url("./../../common/topBar.css");
#me{
	width: 750upx;
	background-color: #E8E8E8;
	z-index: -2;
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
.meBody-item-left>image{
	width: 40upx;
	height: 40upx;
	margin-right: 10upx;
}
.meBody-item-right>image{
	width: 35upx;
	height: 35upx;
}
.meBody-Center{
	width: 750upx;
	display: flex;
	justify-content: space-around;
	background-color: #FFFFFF;
	padding-top: 30upx;
}
.meBody-Center-item{
	width: 187.5upx;
	text-align: center;
}
.meBody-Center-item image{
	width: 60upx;
	height: 60upx;
	
}
.marginTop{
	margin-top: 30upx;
}
.meOrder{
	width: 750upx;
}
.meOrder-Item{
	width: 100%;
	margin-bottom: 20upx;
	background-color: #FFFFFF;
	padding: 20upx 40upx;
	position: relative;
	height: 300upx;
	box-sizing: border-box;
}
.meOrder-Item:last-child{
	margin-bottom: 0upx !important;
}
.meOrder-Item-Left{
	font-size: 26upx;
}
.meOrder-Item-Left>view{
	height: 50upx;
	line-height: 50upx;
}
.meOrder-Item-Left>view:first-child{
	color: #D68739;
}
.meOrder-Item-Right{
	position: absolute;
	right: 30upx;
	bottom: 20upx;
}
.ifJiaZai{
	width: 750upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	color: #333333;
	font-size: 30upx;
	background-color: #FFFFFF;
	margin-bottom: 100upx;
	border-top: 1upx solid #E8E8E8;
	box-sizing: border-box;
}
.but{
	margin-top: 20upx;
	height: 100upx;
	position: fixed;
	bottom: 0upx;
	left: 0upx;
	right: 0upx;
}
.loginOut{
	background-color: #F0AD4E;
	color: #FFFFFF;
}
.haveNoOrder{
	width: 750upx;
	height: 150upx;
	line-height: 150upx;
	font-size: 30upx;
	letter-spacing: 5upx;
	color: #333333;
	text-align: center;
	background-color: #FFFFFF;
}
</style>
