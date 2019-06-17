<template>
	<view id="login">
		<view id="topBar">
			<text class="nullImg">关于我们</text>
		</view>
		<view id="logo">
			<image class="logo" :src="imgUrl+'logo.jpg'" mode=""></image>
		</view>
		<view class="aboutLogo">
			<image :src="imgUrl+'about/guanYu.png'" mode=""></image>
		</view>
		<view class="aboutTitle">
			<text>河北新隆检测技术服务有限责任公司</text>
		</view>
		<view class="about-content">
			河北新隆检测技术服务有限责任公司是一家以客户为中心以技术为导向的全方位实验室综合服务公司,致力于为客户提供标准规范的实验室全面管理服务。
		</view>
		<view class="about-orange">
			我们提供实验室一站式服务平台
		</view>
		<view class="about-content">
			实验室设计、规划、改造,整体实验室的运营,整体实验室搬迁,各类实验室耗材和辅助设备,分析仪器管理与技术支持,高级培训及方法开发, CMA/CNAS/CATL认证咨询及计量业务,科学仪器与新技术研发,以及仪器定制服务等。凭借丰富的经验、技术力量雄厚的售后服务团队,为广大客户提供最完美的实验室解决方案。得到广大用户的一致认可和好评。
		</view>
		<view class="about-images">
			<view class="about-images-item">
				<image :src="imgUrl+'about/syszttg.png'" mode=""></image><br>
				<text>实验室</text><br>
				<text>整体托管</text>
			</view>
			<view class="about-images-item">
				<image :src="imgUrl+'about/wxwblfw.png'" mode=""></image><br>
				<text>维修</text><br>
				<text>维保类服务</text>
			</view>
			<view class="about-images-item">
				<image :src="imgUrl+'about/rzzxjljzfw.png'" mode=""></image><br>
				<text>认证咨询</text><br>
				<text>计量校准服务</text>
			</view>
			<view class="about-images-item">
				<image :src="imgUrl+'about/sysztbqyjfw.png'" mode=""></image><br>
				<text>实验室整体搬</text><br>
				<text>迁移机服务</text>
			</view>
			<view class="about-images-item">
				<image :src="imgUrl+'about/pxffkffu.png'" mode=""></image><br>
				<text>培训</text><br>
				<text>方法开发服务</text>
			</view>
			<view class="about-images-item">
				<image :src="imgUrl+'about/bjhc.png'" mode=""></image><br>
				<text>备件耗材</text>
			</view>
			<view class="about-foot">
				<text>电话: 0311-89897890</text><br>
				<text>传真: 0311-89897890</text><br>
				<text>地址:石家庄市长安区丰收路122号泽润大厦2411室</text><br>
				<text>网址: www.xinlongjiance.com</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				imgUrl:'https://static.xinlongjiance.com/img/'
			}
		}
	}
</script>

<style scoped>
@import url("./../../common/topBar.css");
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1203938_lv0g3lbykeg.css');
}
#login{
	padding-top: 150upx;
	text-align: center;
}
.logo{
	width: 264upx;
	height: 122upx;
}
.aboutLogo{
	width: 750upx;
	height: 400upx;
	text-align: center;
}
.aboutLogo image{
	width: 85%;
	height: 85%;
}
.aboutTitle{
	font-size: 35upx;
	font-weight: 600;
	margin-top: -50upx;
}
.about-content{
	width: 750upx;
	padding: 2% 7.5%;
	text-indent: 2em;
	font-size: 26upx;
	text-align: left;
	box-sizing: border-box;
}
.about-orange{
	font-size: 30upx;
	font-weight: 900;
	color: #F0AD4E;
	text-align: left;
	width: 750upx;
	padding: 0upx 7.5%;
	text-indent: 2em;
	box-sizing: border-box;
}
.about-images{
	width: 750upx;
	display: flex;
	flex-wrap: wrap;
	margin-top: 10upx;
}
.about-images-item{
	width: 250upx;
	text-align: center;
	margin-top: 30upx;
}
.about-images-item image{
	width: 130upx;
	height: 140upx;
}
.about-images-item text{
	font-weight: bold;
}
.about-foot{
	margin-top: 60upx;
	width: 750upx;
	text-align: center;
	font-size: 26upx;
	margin-bottom: 20upx;
}
</style>
