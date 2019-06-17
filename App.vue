<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/uni.css");
	*{
		margin: 0upx;
		padding: 0upx;
	}
	/* 设置轮播图样式 */
	swiper{
		width: 100%;
		height: 100%;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
	}
	image{
		vertical-align: middle;
	}
	.phone{
		width: 60upx !important;
		height: 60upx !important;
		display: inline-block !important;
		text-align: center;
	}
	.phoneImg{
		width: 30upx !important;
		height: 30upx !important;
		vertical-align: middle !important;
	}
</style>
