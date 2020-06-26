import Vue from 'vue';
import './plugins/vuetify';
import App from '@/components/app/app.vue';
import router from '@/router';
import priceTable from "@/extra/price-table/price-table.vue";
import contactUs from "@/extra/contact-us/contact-us";

Vue.config.productionTip = false;
Vue.component('pricetable', priceTable)
Vue.component('contact-us', contactUs)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
