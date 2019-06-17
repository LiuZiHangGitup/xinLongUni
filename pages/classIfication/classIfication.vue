<template>
	<view id="classIfication">
		<view id="topBar">
			<text class="nullImg">分类</text>
		</view>
		<view class="viewBody">
			<view class="viewBodyTop">
				<view class="viewBodyTopLeft">
					<image :src="imgUrl+'class/search.png'" mode=""></image>
				</view>
				<view class="viewBodyTopCenter">
					<input :disabled="true" type="text" value="" placeholder="商品搜索" :placeholder-style="searchStyle" @tap="lxkf()" />
				</view>
				<view class="viewBodyTopRight">
					<image :src="imgUrl+'class/blueLingDang.png'" mode=""></image>
				</view>
			</view>
			<view class="viewBodyBodyLeft">
				<scroll-view :scroll-y="true" :scroll-into-view="scrollViewId" :style="{height:winHeight+'px'}">
					<view :class="[borderState == 1?'active':'','viewBodyBodyLeft-item']" @tap="changeBorder(1)">
						<view>
							<text>实验室</text><br>
							<text>服务</text>
						</view>
					</view>
					<view :class="[borderState == 2?'active':'','viewBodyBodyLeft-item']" @tap="changeBorder(2)">
						<view>
							<text>维修和维保</text><br>
							<text>服务</text>
						</view>
					</view>
					<view :class="[borderState == 3?'active':'','viewBodyBodyLeft-item']" @tap="changeBorder(3)">
						<view>
							<text>认证咨询及</text><br>
							<text>计量校准服务</text>
						</view>
					</view>
					<view :class="[borderState == 4?'active':'','viewBodyBodyLeft-item']" @tap="changeBorder(4)">
						<view>
							<text>备件耗材</text><br>
							<text>商城</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view :class="[borderState == 1?'activeBox':'','viewBodyBodyRight']" @tap="$goWindow('../repair/repair?parentId=1&title=实验室服务')">
				<scroll-view :scroll-y="true" :style="{height:winHeight+'px'}">
					<view class="viewBodyBodyRightTop">
						实验室整体托管
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/tuoGuan.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>整体托管</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						实验室整体搬迁和移机服务
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/banJia.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>整体搬迁</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/sysztbqhyj.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>精密仪器移机</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						培训和方法开发服务
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/yqczpx.png'" mode=""></image><br>
								<text>仪器</text><br>
								<text>操作培训</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/yqwxpx.png'" mode=""></image><br>
								<text>仪器</text><br>
								<text>维修培训</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/gjwxpx.png'" mode=""></image><br>
								<text>高级</text><br>
								<text>维修培训</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/gjfxpx.png'" mode=""></image><br>
								<text>国际</text><br>
								<text>方法培训</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/jcffpx.png'" mode=""></image><br>
								<text>检测</text><br>
								<text>方法开发</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/khdzpx.png'" mode=""></image><br>
								<text>客户</text><br>
								<text>定制培训</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						实验室改造
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/syssdgz.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>水电改造</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/systfxtgz.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>通风系统改造</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/sysgngz.png'" mode=""></image><br>
								<text>实验室</text><br>
								<text>功能改造</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view :class="[borderState == 2?'activeBox':'','viewBodyBodyRight']" @tap="$goWindow('../repair/repair?parentId=16&title=维修维保')">
				<scroll-view :scroll-y="true" :style="{height:winHeight+'px'}">
					<view class="viewBodyBodyRightTop">
						仪器维护及保养
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/sdwhby.png'" mode=""></image><br>
								<text>深度</text><br>
								<text>维护保养</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/ybwhby.png'" mode=""></image><br>
								<text>一般</text><br>
								<text>维护保养</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/ndwhby.png'" mode=""></image><br>
								<text>年度</text><br>
								<text>维护保养</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						仪器故障维修
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/yjwhby.png'" mode=""></image><br>
								<text>硬件</text><br>
								<text>故障维修</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/rjwhby.png'" mode=""></image><br>
								<text>软件</text><br>
								<text>故障维修</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/xtgzwx.png'" mode=""></image><br>
								<text>系统</text><br>
								<text>故障维修</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						仪器升级服务
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/xyyqsjgz.png'" mode=""></image><br>
								<text>现有仪器</text><br>
								<text>升级改造</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/yqrjxtsj.png'" mode=""></image><br>
								<text>仪器软件</text><br>
								<text>系统升级</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/sjwlb.png'" mode=""></image><br>
								<text>升级</text><br>
								<text>网络版</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image":src="imgUrl+'class/yqkhdzfw.png'" mode=""></image><br>
								<text>仪器客户</text><br>
								<text>定制服务</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view :class="[borderState == 3?'activeBox':'','viewBodyBodyRight']" @tap="$goWindow('../repair/repair?parentId=34&title=计量校准')">
				<scroll-view :scroll-y="true" :style="{height:winHeight+'px'}">
					<view class="viewBodyBodyRightTop">
						实验室认证咨询
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/cmarz.jpg'" mode=""></image><br>
								<text>CMA</text><br>
								<text>认证</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/cnasrj.jpg'" mode=""></image><br>
								<text>CNAS</text><br>
								<text>认证</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/nyxtsrz.png'" mode=""></image><br>
								<text>农业系统</text><br>
								<text>双认证</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/sc42x.png'" mode=""></image><br>
								<text>水厂</text><br>
								<text>42项</text>
							</view>
						</view>
					</view>
					<view class="viewBodyBodyRightTop">
						仪器计量校准服务
					</view>
					<view class="tuBiao">
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/blqml.png'" mode=""></image><br>
								<text>玻璃</text><br>
								<text>器皿类</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/jmyql.png'" mode=""></image><br>
								<text>精密</text><br>
								<text>仪器类</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/cgyql.png'" mode=""></image><br>
								<text>常规</text><br>
								<text>仪器类</text>
							</view>
						</view>
						<view class="tuBiao-item">
							<view>
								<image class="tuBiao-item-image" :src="imgUrl+'class/yqdzs.png'" mode=""></image><br>
								<text>仪器</text><br>
								<text>带证书销售</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view :class="[borderState == 4?'activeBox':'','viewBodyBodyRight']">
				<scroll-view :scroll-y="true" :style="{height:winHeight+'px'}">
					<view class="shangChengTop" @tap="this.$goWindow('../market/market')">
						<image src="https://static.xinlongjiance.com/img/class/shangChengLogo.jpg"></image>
					</view>
					<view class="shangChengBody">
						<view class="shangChengBody-Top">找耗材上新隆检测</view>
						<view class="shangChengBody-Body">
							<text>专业团队为您服务</text><br>
							<text>一站式实验室服务供应商</text>
						</view>
						<view class="shangChengBtn">
							<button @tap="this.$goWindow('../market/market')">点击进入商城</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:'https://static.xinlongjiance.com/img/',
				searchStyle:'text-align:left;',
				winHeight:0,
				scrollViewId:'A',
				borderState:1
			}
		},
		onLoad(){
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.winHeight = winHeight-130;
		},
		methods: {
			lxkf(){
				this.$toast('请拨打客服热线:0311-89897890')
			},
			changeBorder(index){
				this.borderState = index;
			}
		}
	}
</script>

<style scoped>
/* 导航条 */
@import url("./../../common/topBar.css");
#classIfication{
	width: 750upx;
}
.viewBody{
	width: 750upx;
	padding-top: 150upx;
	box-sizing: border-box;
}
.viewBodyTop{
	width: 750upx;
	height: 90upx;
	background-color: #FAFAFA;
	padding: 0upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 0;
	position: fixed;
	top: 150upx;
	left: 0upx;
	right: 0upx;
}
.viewBodyTopLeft{
	width: 50upx;
	text-align: center;
	background-color: #FFFFFF;
	height: 50upx;
}
.viewBodyTopCenter{
	width: 660upx;
	background-color: #FFFFFF;
	height: 50upx;
}
.viewBodyTopRight image{
	width: 50upx;
	height: 50upx;
}
.viewBodyTopLeft>image{
	width: 30upx;
	height: 30upx;
}
.viewBodyBodyLeft{
	width: 180upx;
	position: fixed;
	top: 250upx;
	left: 0upx;
	bottom: 0upx;
	background-color: #FAFAFA;
	border-right: 1upx solid #DFDFDF;
	box-sizing: border-box;
	z-index: 10;
	overflow: hidden;
}
 /* for Chrome */
scroll-view::-webkit-scrollbar {
    display: none !important;
}
scroll-view{
	overflow-y: scroll;
}
.viewBodyBodyLeft-item{
	height: 260upx;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-left: 15upx;
	transition: 0.3s all ease;
}
.viewBodyBodyLeft-item>view>text{
	font-size: 26upx !important;
}
.active{
	/* border-left: 10upx solid #F49800; */
	padding-left: 5upx;
	color: #FFFFFF;
	background-color: #F49800 !important;
}
.viewBodyBodyRight{
	width: 570upx;
	position: fixed;
	top: 250upx;
	right: 0upx;
	bottom: 0upx;
	transform: scale(0);
	transition: 0.3s all ease;
	z-index: -1;
}
.activeBox{
	transform: scale(1);
	z-index: 10;
}
.viewBodyBodyRightTop{
	width: 100%;
	height: 80upx;
	background: #FFFFFF;
	border-bottom: 1upx solid #DFDFDF;
	color: #9C9C9C;
	font-size: 26upx;
	padding-left: 15upx;
	box-sizing: border-box;
	display: flex;	
	align-items: center;
}
.tuBiao{
	display: flex;
	flex-wrap: wrap;
}
.tuBiao-item{
	width: 33%;
	border-right: 1upx solid #DFDFDF;
	border-bottom: 1upx solid #DFDFDF;
	height: 200upx;
	display: flex;
	align-items: center;
	text-align: center;
	padding: 0upx 15upx;
	box-sizing: border-box;
}
.tuBiao-item:nth-child(3n){
	border-right: none;
}
.tuBiao-item-image{
	width: 48upx;
	height: 48upx;
	margin-bottom: 10upx;
}
.tuBiao-item>view{
	text-align: center;
	width: 100%;
	line-height: 25upx;
}
.tuBiao-item>view>text{
	font-size: 25upx;
}
.shangChengTop{
	width: 100%;
	height: 566upx;
}
.shangChengTop>image{
	width: 100%;
	height: 100%;
}
.shangChengBody{
	width: 100%;
}
.shangChengBody-Top{
	width: 100%;
	text-align: center;
	color: #F8B909;
	font-size: 46upx;
	font-weight: 600;
}
.shangChengBody-Body{
   width: 100%;
   height: 100upx;
   text-align: center;
   color: #929292;
   font-size: 26upx;
}
.shangChengBtn{
	width: 100%;
	height: 50upx;
}
.shangChengBtn>button{
	width: 60%;
	height: 50upx;
	color: #FFFFFF;
	line-height: 50upx;
	font-size: 20upx;
	border-radius: 25upx;
	background: -webkit-linear-gradient(bottom, #F8B301 , #EB8E00); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, #F8B301, #EB8E00); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, #F8B301, #EB8E00); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #F8B301 , #EB8E00); /* 标准的语法（必须放在最后） */
}
</style>
