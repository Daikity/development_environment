import $ from 'jquery';
$('body').prepend('<div id="production"></div>');

import Vue from 'vue'
import App from './index.vue'
import 'bulma/css/bulma.min.css'

new Vue({
  el: '#production',
  render: h => h(App)
});