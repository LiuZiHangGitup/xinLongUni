<template>
	<view id="index">
		<view class="topBar" :style="topBarStyle">
			<view class="topBarLeft">
				<view class="topBarLeftAddress">
					石家庄
				</view>
				<view class="topBarLeftInput">
					<input :disabled="true" type="text" value="" placeholder="搜索您需要的服务" :placeholder-style="placeholder_style" @tap="$lxkf"/>
				</view>
			</view>
			<view class="topBarRight">
				<!-- #ifdef APP-PLUS -->  
				<image :src="imgUrl+'index/indexTop.png'"></image>
				<!-- #endif -->  
			</view>
		</view>
		<swiper id="swiper" circular="true" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#9999ff">
			<swiper-item v-for="(item,index) in banner" :key="index">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="choose">
			<view class="choose-item" @tap="$goWindow('../repair/repair?parentId=1&title=实验室服务')">
				<image :src="imgUrl+'index/sysfu.png'" mode=""></image><br>
				<text>实验室服务</text>
			</view>
			<view class="choose-item" @tap="$goWindow('../repair/repair?parentId=16&title=维修维保')">
				<image :src="imgUrl+'index/wbfu.png'" mode=""></image><br>
				<text>维修维保</text>
			</view>
			<view class="choose-item" @tap="$goWindow('../repair/repair?parentId=46&title=培训开发')">
				<image :src="imgUrl+'index/pekf.png'" mode=""></image><br>
				<text>培训开发</text>
			</view>
			<view class="choose-item" @tap="$goWindow('../repair/repair?parentId=40&title=认证咨询')">
				<image :src="imgUrl+'index/ezzx.png'" mode="" style="width: 68upx; height: 55upx;"></image><br>
				<text>认证咨询</text>
			</view>
			<view class="choose-item" @tap="$goWindow('../repair/repair?parentId=34&title=计量校准')">
				<image :src="imgUrl+'index/jlzz.png'" mode=""></image><br>
				<text>计量校准</text>
			</view>
			<view class="choose-item">
				<image :src="imgUrl+'index/hcsc.png'" mode="" @tap="$goWindow('../market/market')"></image><br>
				<text>耗材商城</text>
			</view>
			<view class="choose-item" @tap="zwkf()">
				<image :src="imgUrl+'index/more.png'" mode=""></image><br>
				<text>更多</text>
			</view>
		</view>
		<swiper id="swiperCenter" circular="true" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#9999ff">
			<swiper-item v-for="(item,index) in banner2" :key="index">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- xuQiu -->
		<view class="xuQiu">
			<view class="xuQiuBox">
				<view class="xuQiuBoxTitle">-&nbsp;发需求&nbsp;我们将尽快为您解决问题&nbsp;-</view>
				<view class="xuQiuBoxTop">
					<text class="blackBg">0</text>
					<text class="blackBg">5</text>
					<text class="blackBg">9</text>
					<text class="blackBg">9</text>
					<text class="blackBg">5</text>
					<text>人今日已找到满意的解决方案</text>
				</view>
				<view class="xuQiuBoxBody">
					<view class="woXuYao">
						<text class="left-item">我需要</text>
						<input class="item-input" v-model="content" type="text" placeholder="如:实验室整体移机" maxlength="20" />
					</view>
					<view class="woXuYao">
						<text class="left-item">手机号</text>
						<input class="item-input" v-model="phoneNumber" type="number" placeholder="信息保护中,仅官方可见" maxlength="11" />
					</view>
				</view>
				<view class="xuQiuSub">
					<button @tap="subForm()">马上为您解决</button>
				</view>
			</view>
		</view>
		<view class="jykb">
			<view class="jybkBox">
				<view class="jykbLeft">
					<image :src="imgUrl+'index/jykb.png'" mode=""></image>
				</view>
				<view class="jykbRight">
					<text>恭喜【风中的**】河北启新工程公司</text><br>
					<text>于09:01签订<text>"仪器升级"</text>的服务订单，2019..."</text>
				</view>
				<view class="jykbEnd">
					| &nbsp;更多
				</view>
			</view>
		</view>
		<view class="indexEnd">
			<view class="indexEndTop">
				<text>发布流程</text>
			</view>
			<view class="indexEndBody">
				<view class="endTop endBody-item">
					<image :src="imgUrl+'index/1.png'" mode=""></image>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<image :src="imgUrl+'index/2.png'" mode=""></image>
				</view>
				<view class="liuChengWenZi end1">
					<view class="liuChengWenZiLeft">
						<text class="liuChengWenZiTitle">发布需求</text><br>
						<text class="liuChengWenZiSpan">告诉我们您需要解决什么问题</text>
					</view>
					<view class="liuChengWenZiRight">
						<text class="liuChengWenZiTitle">客服电话联系</text><br>
						<text class="liuChengWenZiSpan">为您梳理完善需求</text>
					</view>
				</view>
				<view class="endTop endBody-item">
					<image :src="imgUrl+'index/4.png'" mode=""></image>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<image :src="imgUrl+'index/3.png'" mode=""></image>
				</view>
				<view class="liuChengWenZi">
					<view class="liuChengWenZiLeft">
						<text class="liuChengWenZiTitle">设计解决方案</text><br>
						<text class="liuChengWenZiSpan">为您量身设计方案</text>
					</view>
					<view class="liuChengWenZiRight">
						<text class="liuChengWenZiTitle">客服和您沟通</text><br>
						<text class="liuChengWenZiSpan">根据您的需求调整方案</text>
					</view>
				</view>
				<view class="endTop endBody-item">
					<image :src="imgUrl+'index/5.png'" mode=""></image>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<text class="dian"></text>
					<image :src="imgUrl+'index/6.png'" mode=""></image>
				</view>
				<view class="liuChengWenZi end3">
					<view class="liuChengWenZiLeft">
						<text class="liuChengWenZiTitle">上门服务</text><br>
						<text class="liuChengWenZiSpan">上门为您提供服务</text>
					</view>
					<view class="liuChengWenZiRight">
						<text class="liuChengWenZiTitle">完美解决您的问题</text><br>
						<text class="liuChengWenZiSpan">结束愉快的合作</text>
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
				topBarStyle:'background-color: rgba(255,153,0,0);',
				banner:['https://static.xinlongjiance.com/img/index/indexBanner1.jpg','https://static.xinlongjiance.com/img/index/indexBanner2.jpg','https://static.xinlongjiance.com/img/index/indexBanner3.jpg'],
				placeholder_style:'color:#FFFFFF',
				banner2:['https://static.xinlongjiance.com/img/index/bannerCenter.jpg'],
				content:'',
				phoneNumber:''
			}
		},
		onShow() {
			// this.$getToken();
		},
		onLoad() {
				
		},
		// 监听滚动条滚动事件
		onPageScroll(val){
			let bgIndex = 0;
			if(val.scrollTop <= 183){
				bgIndex = parseFloat(val.scrollTop*0.0054644808743169).toFixed(2);
			}else{
				bgIndex = 1
			}
			this.topBarStyle = 'background-color: rgba(255,153,0,' + bgIndex + ');';
		},
		methods: {
			subForm(){
				if(this.content == ''){
					this.$toast('请填写您的需求');
				}else if(!/^1[34578]\d{9}$/.test(this.phoneNumber)){
					this.$toast('请填写正确的手机号');
				}else{
					this.$postRequest('/user_demand/demand_submit', {content:this.content,phoneNumber:this.phoneNumber}, (resData) => {
						console.log(resData)
						if(resData.data.code == 200){
							this.content = '';
							this.phoneNumber = '';
							this.$toast('提交需求成功,请等待客服联系您');
						}else{
							this.$toast(resData.data.message);
						}
					})
				}
			},
			zwkf(){
				this.$toast('请拨打客服热线：400-350-1103');
			},
			goWindow(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}

#index{
	width: 750upx;
	background-color: #E8E8E8;
	overflow-x: hidden;
	box-sizing: border-box;
}
#index #swiper{
	width: 100%;
	height: 425upx;
}
/* 设置顶部导航条 */
.topBar{
	width: 100%;
	height: 135upx;
	padding-top: 55upx;
	position: fixed;
	top: 0upx;
	left: 0upx;
	right: 0upx;
	z-index: 2;
	padding-left: 35upx;
	padding-right: 35upx;
	padding-bottom: 15upx;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
@media only screen and (max-width: 375px) and (max-height:812px){
	.topBar{
		height: 180upx;
		padding-top: 100upx;
	}
}
.topBarLeft{
	width: 550upx;
	height: 60upx;
	display: flex;
	vertical-align: middle;
}
.topBarLeftAddress{
	width: 150upx;
	text-align: center;
	color: #FFFFFF;
	height: 100%;
	font-size: 26upx;
	line-height: 60upx;
	border: 1upx solid rgba(255,255,255,0.3);
	border-top-left-radius: 35upx;
	border-bottom-left-radius: 35upx;
	border-right: none;
	box-sizing: border-box;
}
.topBarLeftInput{
	width: 350upx;
	border-top-right-radius: 35upx;
	border-bottom-right-radius: 35upx;
	background-color: rgba(255,255,255,0.3);
	height: 100%;
	padding-left: 15upx;
	vertical-align: middle;
}
.topBarLeftInput input{
	height: 100%;
	display: inline-block;
	width: 100%;
}
.topBarRight{
	width: 60upx;
	height: 60upx;
}
.topBarRight image{
	width: 100%;
	height: 100%;
}
/* 小菜单 */
.choose{
	width: 750upx;
	padding: 0upx 35upx 35upx 35upx;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	background-color: #FFFFFF;
}
.choose-item{
	width: 170upx;
	text-align: center;
	margin-top: 35upx;
}
.choose-item image{
	width: 55upx;
	height: 55upx;
}
.choose-item text{
	color: #666666;
}
/* 二级轮播图 */
#swiperCenter{
	height: 145upx;
	margin: 20upx 0upx;
}
/* 需求 */
.xuQiu{
	width: 750upx;
	margin-top: 20upx;
	background: #FFFFFF;
	padding: 20upx;
	box-sizing: border-box;
}
.xuQiuBox{
	width: 710upx;
	background: #FFFFFF;
	box-shadow: 0px 0px 10px 0px #E0E0E0;
	padding-top: 30upx;
	box-sizing: border-box;
	z-index: 9;
}
.xuQiuBoxTitle{
	text-align: center;
	font-size: 35upx;
	font-weight: 600;
}
.xuQiuBoxTop{
	text-align: center;
	transform: scale(0.9);
}
.blackBg{
	display: inline-block;
	width: 40upx;
	height: 50upx;
	border-radius: 10upx;
	background-color: #333333;
	margin-right: 5upx;
	color: #FFFFFF;
	text-align: center;
}
.xuQiuBoxBody{
	width: 640upx;
	margin: 0 auto;
}
.woXuYao{
	background-color: #F4F4F4;
	height: 80upx;
	width: 100%;
	margin-top: 20upx;
	line-height: 80upx;
	display: flex;
}
.left-item{
	flex: 0.35;
	text-align: center;
	color: #333333;
	box-sizing: border-box;
	font-size: 30upx;
}
.item-input{
	flex: 1;
	margin-top: 17upx;
}
.xuQiuSub{
	width: 640upx;
	margin: 20upx auto;
	padding-bottom: 40upx;
}
.xuQiuSub button{
	color: #FFFFFF;
	background: -webkit-linear-gradient(left top, #f2a53b , #ee732f); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(bottom right, #f2a53b, #ee732f); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(bottom right, #f2a53b, #ee732f); /* Firefox 3.6 - 15 */
	background: linear-gradient(to bottom right, #f2a53b , #ee732f); /* 标准的语法 */
}
.jykb{
	width: 750upx;
	height: 150upx;
	background: #F7F7F7;
	margin-top: 20upx;
	padding: 20upx;
	box-sizing: border-box;
}
.jybkBox{
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
	border: 1upx solid #EEEEEE;
	border-radius: 20upx;
	padding: 0upx 30upx;
	box-sizing: border-box;
	display: flex;
}
.jykbLeft{
	flex: 0.125;
	margin: 25upx 20upx 25upx 0upx;
    padding-right: 20upx;
	border-right: 5upx solid #EEEEEE;
}
.jykbLeft image{
	width: 100%;
	height: 100%;
}
.jykbRight{
	flex: 1;
	color: #585858;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-left: 20upx;
	font-size: 25upx;
	margin-top: 15upx;
}
.jykbEnd{
	flex: 0.25;
	margin-top: 25upx;
	font-size: 30upx;
	padding-left: 20upx;
	vertical-align: middle;
}
.indexEnd{
	width: 100%;
	background-color: #FFFFFF;
	margin-top: 20upx;
	padding: 20upx;
	box-sizing: border-box;
}
.indexEndTop{
	height: 60upx;
	font-size: 30upx;
	display: flex;
    align-items:Center
}
.indexEndTop:before{
	content: "";
	display: inline-block;
	width: 10upx;
	height: 40upx;
	background-color: #f39801;
	border-radius: 5upx;
	margin-right: 20upx;
}
.indexEndBody{
	width: 750upx;
}
.endBody-item{
	margin-top: 40upx;
	text-align: center;
}
.dian{
	display: inline-block;
	width: 10upx;
	height: 10upx;
	border-radius: 5upx;
	background-color: #FFAF00;
	margin-right: 10upx;
}
.endBody-item image{
	width: 45upx;
	height: 40upx;
	vertical-align: middle;
	margin-right: 10upx;
}
.liuChengWenZi{
	width: 750upx;
	display: flex;
	justify-content: space-around;
	text-align: center;
}
.liuChengWenZiTitle{
	font-size: 26upx;
	font-weight: 600;
}
.liuChengWenZiSpan{
	font-size: 20upx;
	color: #929292;
}
.end1{
	padding-right: 70upx;
	box-sizing: border-box;
}
.liuChengWenZiRight{
	margin-top: 20upx;
	line-height: 35upx;
}
.end1 > .liuChengWenZiRight{
	margin-left: 60upx;
}
.end3{
	padding-left: 10upx;
	box-sizing: border-box;
}
.liuChengWenZiLeft{
	margin-top: 20upx;
	line-height: 35upx;
}
.end3 > .liuChengWenZiLeft{
	padding-right: 80upx;
	box-sizing: border-box;
}
</style>
