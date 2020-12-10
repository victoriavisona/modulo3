import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD7RxN4aF39-sWHj5atW42g23m6K5xUToI",
  authDomain: "tarea-2-appweb.firebaseapp.com",
  databaseURL: "https://tarea-2-appweb.firebaseio.com",
  projectId: "tarea-2-appweb",
  storageBucket: "tarea-2-appweb.appspot.com",
  messagingSenderId: "710422226196",
  appId: "1:710422226196:web:3e70dd6f75558352cd8e01",
  measurementId: "G-YNSGSS3WCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

