import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible';

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
