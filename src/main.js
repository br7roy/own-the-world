import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import '@/assets/theme/index.css';
// import '@/assets/theme/fonts/element-icons.ttf';
// import '@/assets/theme/fonts/element-icons.woff'
import router from './router';
// import 'element-ui/lib/theme-chalk/index.css';
// import './plugins/element.js'
// import './assets/style/element-variables.scss'
// import '@/assets/style/scss2css/customcss/element-custom.css'
import '../theme/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
