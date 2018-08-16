import Vue from 'vue'
import App from './App.vue'
import Form1ab from './components/form1ab'
import Form2a from './components/form2a'

Vue.component('form1ab', Form1ab)
Vue.component('form2a', Form2a)

new Vue({
  el: '#app',
  render: h => h(App)
 })


