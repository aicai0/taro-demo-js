import Vue from 'vue'
import './app.scss'



const App = {
  onShow (options) {
  },
  onError(err) {
    console.log('执行了err', err)
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  },
}
console.log("App:", App)
// Vue.config.errorHandler = function (err, vm, info) {
//   console.log("------vue err handler start-------")
//   console.log("vueErr err:", err)
//   console.log("vueErr vm:", vm)
//   console.log("vueErr vm.tid:", vm.tid)
//   console.log("vueErr info:", info)
//   console.log("------vue err handler end-------")
// }
export default App
