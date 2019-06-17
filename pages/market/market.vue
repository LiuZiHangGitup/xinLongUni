<template>
	<view id="market">
		<view id="topBar">
			<image class="goBackImage" :src="imgUrl+'goBackWhite.png'" @tap="$goBack()"></image>
			<text>耗材商城</text>
		</view>
		<view id="body">
			<view class="viewBody-center">
				<view :class="[centerActive == index?'viewBody-center-item-active':'','viewBody-center-item']" v-for="(item,index) in erJiArray" :key="index">{{ item.name }}</view>
			</view>
			<view class="bodyCenter">
				<view class="bodyCenter-item" v-for="(item,index) in goodList" :key="index" @click="goWindow(item)">
					<view class="bodyCenter-item-top">
						<image :src="item.imgSrc"></image>
					</view>
					<view class="bodyCenter-item-body">
						{{ item.msg }}
					</view>
					<view class="meBody-Center-item-foot">
						<text class="yjf">￥</text>
						<text>{{ item.price }}</text>
					</view>
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
				erJiArray:[
					{id:1,name:'色谱柱'},
					{id:2,name:'固相萃取小柱'},
					{id:3,name:'过滤产品'}
				],
				goodList:[
					{imgSrc:'https://static.xinlongjiance.com/img/market/good1.jpg',title:'衬管',price:1360,msg:'衬管 货号:S221-75193',imgList:['https://static.xinlongjiance.com/img/market/good1.jpg'],huoHao:'S221-75193'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good2.jpg',title:'衬管',price:1360,msg:'衬管 货号:S221-75197',imgList:['https://static.xinlongjiance.com/img/market/good2.jpg'],huoHao:'S221-75197'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good3.jpg',title:'进样口隔垫',price:84,msg:'进样口隔垫 货号:201-35584',imgList:['https://static.xinlongjiance.com/img/market/good3.jpg'],huoHao:'201-35584'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good4.jpg',title:'O型圈',price:320,msg:'O型圈 货号:S227-35005-01',imgList:['https://static.xinlongjiance.com/img/market/good4.jpg'],huoHao:'S227-35005-01'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good5.jpg',title:'石墨压环',price:565,msg:'石墨压环 货号:S227-35006-01',imgList:['https://static.xinlongjiance.com/img/market/good5.jpg'],huoHao:'S227-35006-01'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good6.jpg',title:'石墨压环',price:565,msg:'石墨压环 货号:S227-35009-01',imgList:['https://static.xinlongjiance.com/img/market/good6.jpg'],huoHao:'S227-35009-01'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good7.jpg',title:'进样针',price:617,msg:'进样针 货号:S221-34618',imgList:['https://static.xinlongjiance.com/img/market/good7.jpg'],huoHao:'S221-34618'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good8.jpg',title:'柱塞密封垫',price:892,msg:'柱塞密封垫 货号:228-35145',imgList:['https://static.xinlongjiance.com/img/market/good8.jpg'],huoHao:'228-35145'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good9.jpg',title:'柱塞密封垫',price:667,msg:'柱塞密封垫 货号:228-35146',imgList:['https://static.xinlongjiance.com/img/market/good9.jpg'],huoHao:'228-35146'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good10.jpg',title:'单向阀',price:2061,msg:'单向阀 货号:228-48249-96',imgList:['https://static.xinlongjiance.com/img/market/good10.jpg'],huoHao:'228-48249-96'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good11.jpg',title:'单向阀',price:2055,msg:'单向阀 货号:228-48249-42',imgList:['https://static.xinlongjiance.com/img/market/good11.jpg'],huoHao:'228-48249-42'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good12.jpg',title:'单向阀',price:2102,msg:'单向阀 货号:228-45705-91',imgList:['https://static.xinlongjiance.com/img/market/good12.jpg'],huoHao:'228-45705-91'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good13.jpg',title:'清洗密封',price:96,msg:'清洗密封 货号:228-35935',imgList:['https://static.xinlongjiance.com/img/market/good13.jpg'],huoHao:'228-35935'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good14.jpg',title:'吸滤头',price:482,msg:'吸滤头 货号:228-45707-91',imgList:['https://static.xinlongjiance.com/img/market/good14.jpg'],huoHao:'228-45707-91'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good15.jpg',title:'进样针',price:466,msg:'进样针 货号:670-12554-01',imgList:['https://static.xinlongjiance.com/img/market/good15.jpg'],huoHao:'670-12554-01'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good16.jpg',title:'氘灯',price:4738,msg:'氘灯 货号:228-34016',imgList:['https://static.xinlongjiance.com/img/market/good16.jpg'],huoHao:'228-34016'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good17.jpg',title:'氘灯',price:4512,msg:'氘灯 货号:228-34016-02',imgList:['https://static.xinlongjiance.com/img/market/good17.jpg'],huoHao:'228-34016-02'},
					{imgSrc:'https://static.xinlongjiance.com/img/market/good18.jpg',title:'钨灯',price:400,msg:'钨灯 货号:228-34410-91',imgList:['https://static.xinlongjiance.com/img/market/good18.jpg'],huoHao:'228-34410-91'}
				]
			}
		},
		methods: {
			goWindow(params){
				uni.navigateTo({
					url:'../goodInformation/goodInformation?info='+JSON.stringify(params)
				})
			}
		}
	}
</script>

<style scoped>
/* 导航条 */
@import url("./../../common/topBar.css");
#market{
	width: 750upx;
}
#body{
	width: 750upx;
	margin-top: 150upx;
}
.viewBody-center{
	width: 750upx;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	height: 100upx;
	align-items: center;
	position: fixed;
	top: 150upx;
	left: 0upx;
	right: 0upx;
	background-color: #FFFFFF;
	z-index: 2;
}
.viewBody-center-item{
	flex: 1;
	text-align: center;
	min-width: 33%;
	height: 60upx;
}
.viewBody-center-item-active{
	color: #F49800 !important;
}
.bodyCenter{
	width: 750upx;
	display: flex;
	flex-wrap: wrap;
	padding: 0upx 25upx;
	box-sizing: border-box;
	overflow: hidden;
	margin-top: 250upx;
}
.bodyCenter-item{
	height: 495upx;
	box-shadow: 10upx 0upx 20upx #E8E8E8;
	border-radius: 20upx;
	width: 325upx;
	margin-top: 20upx;
	margin-left: 12.5upx;
	margin-right: 12.5upx;
}
.bodyCenter-item-top{
	width: 100%;
	height: 300upx;
}
.bodyCenter-item-top>image{
	width: 100%;
	height: 100%;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
}
.bodyCenter-item-body{
	box-sizing: border-box;
	font-size: 26upx;
	padding: 10upx;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.meBody-Center-item-foot>text{
	font-size: 26upx;
}
.meBody-Center-item-foot{
	color: #ea4136;
	font-weight: 900;
	padding-top: 20upx;
	padding-left: 10upx;
	box-sizing: border-box;
}
.meBody-Center-item-foot>.yjf{
	font-size: 20upx !important;
}
</style>
