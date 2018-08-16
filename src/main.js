import Vue from 'vue'
import App from './App.vue'
import Form1ab from './components/form1ab'
import Form2a from './components/form2a'
import Form3a from './components/form3a'
import Form4a from './components/form4a'

Vue.component('form1ab', Form1ab)
Vue.component('form2a', Form2a)
Vue.component('form3a', Form3a)
Vue.component('form4a', Form4a)

new Vue({
  el: '#app',
  render: h => h(App)
 })


