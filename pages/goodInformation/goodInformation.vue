<template>
	<view id="goodInformation">
		<view id="topBar">
			<image class="goBackImage" :src="imgUrl+'goBackWhite.png'" @tap="$goBack()"></image>
			<text>商品详情</text>
		</view>
		<view id="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true" indicator-active-color="#F49800">
				<swiper-item v-for="(item,index) in goodParams.imgList" :key="index">
					<view class="swiper-item">
						<image :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view id="viewBody">
			<view class="viewBody-Top">
				<text class="viewBody-Top-Msg">{{ goodParams.title }}</text>
				<text class="viewBody-Top-Price">{{ goodParams.price }}</text>
			</view>
			<view class="viewBody-Item">
				<text>货号</text>
				<text>{{ goodParams.huoHao }}</text>
			</view>
			<view class="viewBody-Item">
				<text>详细介绍</text>
				<text></text>
			</view>
			<view class="viewBody-Msg">
				{{ goodParams.msg }}
			</view>
		</view>
		<view class="lxkf" @tap="lxkf()">
			联系客服购买
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:'https://static.xinlongjiance.com/img/',
				goodParams:{}
			}
		},
		onLoad(params){
			this.goodParams = JSON.parse(params.info);
		},
		methods: {
			lxkf(){
				this.$toast('请拨打客服热线：400-350-1103');
			}
		}
	}
</script>

<style>
/* 导航条 */
@import url("./../../common/topBar.css");
#banner{
	width: 750upx;
	height: 550upx;
	margin-top: 150upx;
}
#viewBody{
	width: 750upx;
	background-color: #E8E8E8;
}
.viewBody-Top{
	width: 750upx;
	padding: 10upx 15upx;
	box-sizing: border-box;
	background-color: #FFFFFF;
}
.viewBody-Top-Msg{
	font-size: 26upx;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.viewBody-Top-Price:before{
	content: "￥";
	font-size: 26upx;
	color: #F76260;
}
.viewBody-Top-Price{
	font-size: 30upx;
	color: #F76260;
}
.viewBody-Item{
	margin-top: 20upx;
	font-size: 30upx;
	display: flex;
	padding: 0upx 15upx;
	box-sizing: border-box;
	height: 80upx;
	align-items: center;
	justify-content: space-between;
	background-color: #FFFFFF;
}
.viewBody-Msg{
	padding: 0upx 15upx;
	box-sizing: border-box;
	font-size: 20upx;
	text-indent: 2em;
	background-color: #FFFFFF;
}
.lxkf{
	width: 750upx;
	height: 100upx;
	background: -webkit-linear-gradient(left top, #f2a53b , #ee732f); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(bottom right, #f2a53b, #ee732f); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(bottom right, #f2a53b, #ee732f); /* Firefox 3.6 - 15 */
	background: linear-gradient(to bottom right, #f2a53b , #ee732f); /* 标准的语法 */
	position: fixed;
	bottom: 0upx;
	color: #FFFFFF;
	line-height: 100upx;
	text-align: center;
}
</style>
