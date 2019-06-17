export const loadIng = (msg) => {
	uni.showLoading({
		title: '加载中...',
		mask:true
	})
}

export const toast = (msg) => {
	uni.showToast({
		title:msg,
		icon:'none',
		mask:true,
		position: 'bottom'
	})
}

export const goWindow = (url) => {
	uni.navigateTo({
		url: url
	});
}

export const goBack = () => {
	uni.navigateBack({});
}

export const getToken = () => {
	if(!uni.getStorageSync('token')){
		return false;
	}else{
		return true;
	}
}

export const getHeadImg = () => {
	return uni.getStorageSync('userImg');
}

export const getNickName = () => {
	return uni.getStorageSync('nickName');
}

export const lxkf = () => {
	uni.makePhoneCall({
		phoneNumber:'0311-89897890'
	})
}