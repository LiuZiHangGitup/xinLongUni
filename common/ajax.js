import { toast }  from './uitl.js'
let token;
export const postRequest = (url,params,callback) => {
	// 123.56.130.232
	// https://api.xinlongjiance.com/xinlong/home
	const baseUrl = 'https://api.xinlongjiance.com/xinlong/home'
	let leiXing = 'POST';
	if(url == '/member/member_check_token'){
		leiXing = 'GET'
	}
	new Promise( (reslove,reject) => {
		uni.getStorage({
			key:'token',
			success: (res) => {
				token = {'token' : res.data};
				reslove(token);
			},
			fail: () => {
				token = {};
				reslove(token);
			}
		})
	}).then((token) => {
		uni.request({
			url: baseUrl + url,
			data:params,
			header:token,
			dataType:'json',
			method: leiXing,
			success: (resData) => {
				let code = resData.data.code;
				if(code == 400 || code == 404 || code == 405 || code == 501 || code == 502){
					uni.navigateTo({
						url:'../login/login'
					})
					toast('网络错误');
				}else{
					callback(resData);
				}
			},
			fail: (errData) => {
				toast('请求失败。');
			}
		})
	})
}