import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import API from './lib/api';

Vue.config.productionTip = false;

Vue.prototype.$api = API('/api/');
Vue.prototype.$api.loadSession();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
