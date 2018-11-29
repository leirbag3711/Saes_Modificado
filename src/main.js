import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueFire)
var config = {
  apiKey: "AIzaSyCNzxd4z5SYAFWIMHj5yvaQfDwz_W4hxdQ",
  authDomain: "bdde2-93a0d.firebaseapp.com",
  databaseURL: "https://bdde2-93a0d.firebaseio.com",
  projectId: "bdde2-93a0d",
  storageBucket: "bdde2-93a0d.appspot.com",
  messagingSenderId: "387436732004"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firebase.firestore()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
