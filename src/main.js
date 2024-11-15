import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'; 
import Toast from 'primevue/toast'; 
import VueParticles from 'vue-particles';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css'; 
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons



import router from './router/router.js'
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService); 
app.component('Toast', Toast); 
app.use(router);
app.use(VueParticles);
app.mount('#app');

