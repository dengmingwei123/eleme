import Vue from 'vue'
import App from './App'
import Cube from 'cube-ui'
// 引入样式文件
import '../src/assets/stylus/index.styl'
// 引入axios
import Axios from 'axios'
// 引入animate
import Animate from 'animate.css'

// 使用animate
Vue.use(Animate)

// 在Vue的原型中添加axios方法
Vue.prototype.axios = Axios

Vue.use(Cube)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
