import {
	createSSRApp
} from 'vue'
import App from './App'
// vuex
// import store from './store'
// 引入全局uView
import uView from '@/uni_modules/uview-ui'
// import mixin from './common/mixin'

export function createApp() {
	const app = createSSRApp(App)

	// #ifdef MP
	// 引入uView对小程序分享的mixin封装
	// const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
	// app.mixin(mpShare)
	// #endif

	// app.config.globalProperties.$store = store

	app.mpType = 'app'
	app.use(uView)
	// app.mixin(mixin)

	// 引入请求封装
	// require('./util/request/index')(app)

	return {
		app,
	}
}
