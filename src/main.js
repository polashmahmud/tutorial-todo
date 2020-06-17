import Vue from 'vue'
import App from './App.vue'
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
