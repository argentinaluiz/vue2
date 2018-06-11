import Vue from 'vue'
import {Time} from './time';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("America MG", require('./assets/america_mg_60x60.png')),
      new Time("Atlético PR", require('./assets/atletico-pr_60x60.png')),
      new Time("Atlético MG", require('./assets/atletico_mg_60x60.png')),

    ],
    alfabeto: {
      a: 'A',
      b: 'B',
      c: 'C',
      d: 'D',
      e: 'E',
    }
  },
});
