import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import '@/assets/theme/index.css';
// import '@/assets/theme/fonts/element-icons.ttf';
// import '@/assets/theme/fonts/element-icons.woff'
import router from './router';

// import './plugins/element.js'
// import './assets/style/element-variables.scss'
// import '@/assets/style/scss2css/customcss/element-custom.css'
import '@assets/theme/dark-red/index.css'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import store from './store'
Vue.use(FormMaking)
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
