import Vue from 'vue'
import App from './App.vue'
import Form1ab from './components/form1ab'
import Form2a from './components/form2a'
import Form2b from './components/form2b'
import Form3a from './components/form3a'
import Form3b from './components/form3b'
import Form4a from './components/form4a'
import Form4b from './components/form4b'
import Form5ab from './components/form5ab'

Vue.component('form1ab', Form1ab)
Vue.component('form2a', Form2a)
Vue.component('form2b', Form2b)
Vue.component('form3a', Form3a)
Vue.component('form3b', Form3b)
Vue.component('form4a', Form4a)
Vue.component('form4b', Form4b)
Vue.component('form5ab', Form5ab)

new Vue({
  el: '#app',
  render: h => h(App)
 })


