import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from "./store";
// import Vue from 'vue';/

createApp(App).use(router).use(store).mixin(mixins).mount('#app')

window.Kakao.init("c01d75ae7e06537510a32d13d232863e");