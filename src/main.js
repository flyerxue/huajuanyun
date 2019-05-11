import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import { router } from './router';
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '../src/assets/logo.png',
  loading: '../src/assets/logo.png',
  attempt: 1
});

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
