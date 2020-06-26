import Vue from 'vue';
import './plugins/vuetify';
import App from '@/components/app/app.vue';
import router from '@/router';
import priceTable from "@/extra/pricetable/pricetable.vue";

Vue.config.productionTip = false;
Vue.component('pricetable', priceTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
