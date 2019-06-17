<template>
	<view id="repair">
		<view id="topBar">
			<image class="goBackImage" :src="imgUrl+'goBackWhite.png'" @tap="$goBack()"></image>
			<text>{{ title }}</text>
		</view>
		<view id="viewBody">
			<view class="viewBody-top">
				<view :class="[topActive == index?'viewBody-top-item-active':'','viewBody-top-item']" @tap="changeTopActive(index,item.children == null?item:item.children)" v-for="(item,index) in yiJiArray" :key="index">
					<view>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<view class="viewBody-center" v-if="erJiArray != null">
				<view :class="[centerActive == index?'viewBody-center-item-active':'','viewBody-center-item']" v-for="(item,index) in erJiArray" :key="index" @tap="changeViewCenter(index,item)">{{ item.name }}</view>
			</view>
			<view class="viewBody-bottom">
				<view class="viewBody-bottom-Top" v-html="sanJiArray.content">
				</view>
				<view class="viewBody-bottom-Bottom">
					<view class="viewBody-bottom-Bottom-Item" v-if="siJiArray.length != 0">
						<view class="viewBody-bottom-Bottom-Item-Left"></view>
						<view class="viewBody-bottom-Bottom-Item-Right" v-if="siJiArray.length != 0">
							<view v-for="(item,index) in siJiArray" :key="index" :class="[siJiActive==index?'sysfw-active':'','sysfw']" @tap="changSiJi(index,item.id)">
								{{ item.name }}
							</view>
						</view>
					</view>
					<view class="viewBody-bottom-Bottom-Item" v-for="(item, index) in moRenBiaoDan" :key="index">
						<view class="viewBody-bottom-Bottom-Item-Left">{{ item.name }}</view>
						<view class="viewBody-bottom-Bottom-Item-Right" v-if="xianShi">
							<view v-for="(is,ind) in morenArray" :key="ind" v-if="is == item.module">
								<input class="viewBody-bottom-Bottom-Item-Right-Item" type="text" :placeholder="item.placeholder" @change="changeMoRenJson(ind,item.cc)" v-model="item.cc"/>
							</view>
						</view>
					</view>
					<view class="viewBody-bottom-Bottom-Item" v-for="(item,index) in sanJiArray.inputArray" :key="index" v-if="sanJiArray.inputArray.length != 0">
						<view class="viewBody-bottom-Bottom-Item-Left">{{ item.title }}</view>
						<view v-if="xianShi" class="viewBody-bottom-Bottom-Item-Right">
							<view v-for="(iss,inds) in centerArray" :key="inds" v-if="iss === item.name">
								<input class="viewBody-bottom-Bottom-Item-Right-Item" type="text" :placeholder="item.placeholder" @change="changeCenterJson(inds,item.cc)" v-model="item.cc"/>
							</view>
							
							<!-- <view class="viewBody-bottom-Bottom-Item-Right-Item select"  v-if="item.type == 'select'">
								<view class="select-Top" @tap="changeSelect">
									<text>{{ item.placeholder }}</text>
									<image :style="selectImageStyle" src="../../static/repair/selectJianTou.png"></image>
								</view>
								<view class="select-Body" :style="selectStyle">
									<view class="select-Body-Item" v-for="(items,indexs) in item.selectArray" :key="indexs">{{ items }}</view>
								</view>
							</view>
							<textarea v-if="item.type == 'textarea'" adjust-position="true" class="viewBody-bottom-Bottom-Item-Right-Item text-area" :placeholder="item.placeholder" /> -->
						</view>
					</view>
					<view class="viewBody-bottom-Bottom-Item">
						<view class="viewBody-bottom-Bottom-Item-Left">备注信息</view>
						<view class="viewBody-bottom-Bottom-Item-Right">
							<textarea adjust-position="true" class="viewBody-bottom-Bottom-Item-Right-Item text-area" placeholder="请输入详细信息" v-model="morenJson.remark" maxlength="200" />
						</view>
					</view>
					<view class="viewBody-bottom-Bottom-Item">
						<view class="viewBody-bottom-Bottom-Item-Left"></view>
						<view class="viewBody-bottom-Bottom-Item-Right">
							<button @click="subMitForm" class="viewBody-bottom-Bottom-Item-Right-Item subBtn" >提交表单</button>
						</view>
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
				topActive:1,
				yiJiArray:[],
				erJiArray:[],
				centerActive:0,
				moRenBiaoDan:[
					{type:'text',placeholder:'请输入联系人姓名',name:'联系人',module:'linkName',cc:''},
					{type:'text',placeholder:'请输入从事职务',name:'从事职务',module:'job',cc:''},
					{type:'text',placeholder:'请输入联系地址',name:'联系地址',module:'linkAdd',cc:''},
					{type:'number',placeholder:'请输入联系电话',name:'联系电话',module:'linkPhone',cc:''}
				],
				morenJson:{
					remark:'',
					serviceId:'',
					extend:{}
				},
				morenArray:['linkName','job','linkAdd','linkPhone'],
				centerJson:{},
				centerArray:[],
				sanJiArray:{
					content:'',
					inputArray:[]
				},
				selectState: false,
				selectStyle:'transform: scaleY(0);',
				selectImageStyle:'transform: rotate(180deg)',
				formData:'',
				parentId:0,
				message:'',
				title:'',
				xianShi:false,
				siJiArray:[],
				siJiActive:0,
				viewCenterParams:{}
			}
		},
		onLoad(params){
			this.parentId = params.parentId;
			this.title = params.title;
			this.getTopMsg();
		},
		methods: {
			moRenBiaoDanClear(){
				for(let i in this.moRenBiaoDan){
					this.moRenBiaoDan[i].cc = '';
				}
				this.morenJson.remark = '';
			},
			changSiJi(index,id){
				this.siJiActive = index;
				this.morenJson.serviceId = id;
			},
			changeMoRenJson(key,params){
				this.morenJson[this.morenArray[key]] = params;
			},
			changeCenterJson(key,params){
				this.centerJson[this.centerArray[key]] = params;
			},
			subMitForm(){
				if(!this.$getToken()){
					this.$goWindow('../login/login');
					this.$toast('请先进行登陆');
				}else{
					let xinJson = Object.assign({},this.centerJson,this.morenJson);
					new Promise( (reslove,reject) => {
						if(JSON.stringify(this.morenJson) == '{}' || this.centerJson == '{}'){
							reject('请填写全部表单信息');
							return;
						}else{
							for(let  i in xinJson){
								if(xinJson[i] == ''){
									reject('请填写全部表单信息');
									break;
								}else {
									let arr = Object.keys(xinJson);
									if(arr[arr.length - 1] == i){
										let length = this.morenArray.length + this.centerArray.length;
										if(arr.length < length){
											reject('请填写全部表单信息');
										}else{
											reslove('成功')
										}
									}
								}
							}
						}
					}).then( (data) => {
						if(this.centerJson != {} && this.centerJson != '{}' && this.centerJson != null && this.centerJson != undefined && this.centerJson != ''){
							this.morenJson.extend = this.centerJson;
						}
						this.$postRequest('/service/service_submit',this.morenJson, (resData) => {
							if(resData.data.code == 200){
								this.$toast(resData.data.message);
								setTimeout( () => {
									uni.navigateBack({});
								},2000)
							}else{
								this.$toast(resData.data.message)
							}
						})
					}).catch( ( error ) => {
						this.$toast(error)
					})
				}
			},
			// 获取一级菜单信息
			getTopMsg(){
				this.$loadIng();
				this.$postRequest('/service/service_list',{parentId:this.parentId},(resData) => {
					if(resData.data.code == 200){
						this.yiJiArray = resData.data.result;
						this.sanJiArray.content = resData.data.result[0].explains;
						let chuShiYiJiChildren = this.yiJiArray[0].children;
						if(chuShiYiJiChildren == null){
							chuShiYiJiChildren = this.yiJiArray[0];
						}
						this.changeTopActive(0,chuShiYiJiChildren);
						uni.hideLoading()
					}else{
						this.$toast(resData.data.message);
					}
					
				})
			},
			// 获取内容信息
			getCenterMsg(id){
				this.$loadIng();
				this.xianShi = false;
				this.centerArray = [];
				this.centerJson = {};
				this.$postRequest('/service/service_form',{serviceCateId: id}, (resData) => {
					if(resData.data.code == 200){
						let inputArray = resData.data.result.extend;
						if(this.parentId == 1){
							
						}else{
							if(!resData.data.result.explains){
								this.sanJiArray.content = '暂无介绍';
							}else{
								this.sanJiArray.content = resData.data.result.explains;
							}
						}
						if(inputArray.length == 0){
							this.sanJiArray.inputArray = resData.data.result.extend;	
							this.xianShi = true;
							uni.hideLoading();
						}else{
							for(let i in inputArray){
								inputArray[i].cc = '';
								this.centerArray.push(inputArray[i].name);
								if(i == 0){
									this.centerJson = '{ "'+inputArray[i].name+'":"",';
								}else if(i == inputArray.length - 1){
									this.centerJson += '"'+inputArray[i].name+'":""}';
									new Promise( (reslove,reject) => {
										this.centerJson = JSON.parse(this.centerJson);
										this.sanJiArray.inputArray = inputArray;
										reslove();
									}).then( () => {
										this.xianShi = true;
									}).catch( () => {
										this.xianShi = false;
									})
									uni.hideLoading();
								}else{
									this.centerJson += '"'+inputArray[i].name+'":"",';
								}
							}
						}
					}else{
						this.$loadIng(resData.data.message)
					}
				})
			},
			changeSelect(){
				if(this.selectState == false){
					this.selectState = true;
					this.selectStyle = 'transform: scaleY(1);';
					this.selectImageStyle = 'transform: rotate(0deg)';
				}else{
					this.selectState = false;
					this.selectStyle = 'transform: scaleY(0);';
					this.selectImageStyle = 'transform: rotate(180deg)';
				}
			},
			changeTopActive(index,params){
				if(this.topActive == index){
					return;
				}else{
					this.sanJiArray.inputArray = []
					this.topActive = index;
					this.siJiArray = [];
					let indexId;
					if(params.length === undefined){
						indexId = params.id;
						this.erJiArray = null;
						this.morenJson.serviceId = params.id;
						this.changeViewCenter(0,params)
						this.getCenterMsg(indexId)
					}else{
						this.erJiArray = params;
						indexId = this.erJiArray[0].id;
						this.morenJson.serviceId = this.erJiArray[0].id;
						if(params[0].children != null){
							this.siJiArray = this.erJiArray[0].children;
							indexId = this.erJiArray[0].children[0].id;
							this.morenJson.serviceId = this.erJiArray[0].children[0].id;
						}
						this.changeViewCenter(0,params[0])
					}
					this.centerActive = 0;
					this.moRenBiaoDanClear();
				}
			},
			changeViewCenter(index,params){
				this.sanJiArray.content = params.explains;
				if(this.centerActive == index && this.viewCenterParams == params){
					return;
				}else{
					this.viewCenterParams = params;
					this.centerActive = index;
					let indexId = params.id;
					this.siJiArray = [];
					this.morenJson.serviceId = params.id;
					if(params.children != null){
						indexId = params.children[0].id;
						this.siJiArray = params.children;
						this.morenJson.serviceId = params.children[0].id;
					}else{
					}
					this.moRenBiaoDanClear();
					this.getCenterMsg(indexId);
				}
				
			}
		}
	}
</script>

<style scoped>
/* 导航条 */
@import url("./../../common/topBar.css");
#viewBody{
	width: 750upx;
	padding-top: 156upx;
}
.viewBody-top{
	width: 750upx;
	height: 160upx;
	background-color: #FFFFFF;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
}
.viewBody-top-item{
	flex: 1;
	min-width: 25%;
	height: 160upx;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	border-bottom: 5upx solid #DFDFDF;
	transition: 0.3s all ease;
	font-size: 30upx;
}
.viewBody-top-item>view{
	width: 100%;
	text-align: center;
}
.viewBody-top-item>view>text{
	display: inline-block;
	font-size: 26upx;
	width: 168upx;
	margin: 0 auto;
	word-break:break-all;
	display:-webkit-box;
	-webkit-line-clamp:3;
	-webkit-box-orient:vertical;
	overflow:hidden;
	color: #272727;
}
.viewBody-top-item-active{
	border-bottom: 5upx solid #F49800 !important;
}
.viewBody-top-item-active>view>text{
	color: #F49800 !important;
}
.viewBody-center{
	width: 750upx;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
}
.viewBody-center-item{
	flex: 1;
	text-align: center;
	min-width: 33%;
	height: 60upx;
	background-color: #E8E8E8;
	color: #272727;
}
.viewBody-center-item-active{
	color: #F49800 !important;
}
.viewBody-bottom{
	width: 750upx;
	padding: 40upx 60upx;
	box-sizing: border-box;
	padding-bottom: 156upx;
}
.viewBody-bottom-Top{
	text-indent: 2em;
	font-size: 30upx;
}
.viewBody-bottom-Bottom{
	width: 100%;
	margin-top: 40upx;
	margin-bottom: 100upx;
}
.viewBody-bottom-Bottom-Item{
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 85upx;
	align-items: center;
	position: relative;
}
.viewBody-bottom-Bottom-Item-Left{
	flex: 0.3;
}
.viewBody-bottom-Bottom-Item-Right{
	flex: 0.7;
}
.viewBody-bottom-Bottom-Item-Right-Item{
	border: 1upx solid #DFDFDF;
	width: 100%;
	padding-left: 15upx;
	height: 70upx;
	box-sizing: border-box;
}
.select{
	background-color: #FFFFFF;
	position: relative;
}
.select-Top{
	height: 52.5upx;
	padding: 0upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.select-Top>text{
	color: #929292 !important;
	font-size: 26upx;
}
.select-Top image{
	width: 20upx;
	height: 20upx;
	transition: 0.3s all ease;
}
.select-Body{
	width: 100%;
	position: absolute;
	height: 200upx;
	top: 52.5upx;
	border: 1upx solid #DFDFDF;
	border-top: none;
	left: 0upx;
	right: 0upx;
	overflow-y: scroll;
	overflow-x: hidden;
	transition: 0.3s all ease;
	z-index: 2;
}
.select-Body-Item{
	width: 100%;
	padding-left: 20upx;
	box-sizing: border-box;
	border-bottom: 1upx solid #DFDFDF;
	height: 50upx;
	font-size: 20upx;
	display: flex;
	align-items: center;
	background-color: #FFFFFF;
}
.text-area{
	position: absolute;
	top: 15upx;
	width: 70%;
	font-size: 26upx;
	padding-left: 15upx;
	padding-top: 15upx;
	height: 270upx;
	box-sizing: border-box;
}
.subBtn{
	position: absolute; 
	bottom: -210upx; 
	right: 0upx; 
	width: 70%; 
	background-color: #F0AD4E; 
	color: #FFFFFF;
	height: 70upx;
	line-height: 70upx;
	font-size: 26upx;
	letter-spacing: 5upx;
}
.selectInput{
	height: 56upx !important;
	line-height: 56upx !important;
}
.sysfw{
	width: 200upx;
	height: 80upx;
	display: inline-block;
	line-height: 80upx;
	text-align: center;
	border: 1upx solid #929292;
	box-sizing: border-box;
}
.sysfw-active{
	background-color: #F2A53B;
	margin-bottom: 42upx;
}
.sysfw:nth-child(2){
	margin-left: 40upx;
}
</style>
