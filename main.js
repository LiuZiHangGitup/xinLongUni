import Vue from 'vue';
import App from './App';
import { postRequest } from './common/ajax';
import { loadIng, toast, goWindow, goBack, getToken, getHeadImg, getNickName, lxkf } from './common/uitl';

let commonUrl = 'https://testapi.xinlongjiance.com/img/'

Vue.config.productionTip = true;

Vue.prototype.$postRequest = postRequest;
Vue.prototype.$loadIng = loadIng;
Vue.prototype.$toast = toast;
Vue.prototype.$goWindow = goWindow;
Vue.prototype.$goBack = goBack;
Vue.prototype.$getToken = getToken;
// getHeadImg
Vue.prototype.$getHeadImg = getHeadImg;
Vue.prototype.$getNickName = getNickName;
Vue.prototype.$lxkf = lxkf;
Vue.prototype.$imgUrl = commonUrl;

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount();
