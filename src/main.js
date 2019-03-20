import mtjwxsdk from './utils/mtj-wx-sdk'
import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import '../static/iconfont/index.css'
import '../static/style/base.less'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
