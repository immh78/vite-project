import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router';



// Vuetify 관련 import
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'; // MDI 아이콘 스타일 추가

// Vuetify 인스턴스 생성
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(router).mount('#app');

