const moment = require('moment');
const _ = require('lodash');
const plus = require('miaoting_plus');
const sub = require('miaoting_sub');

console.log('t', moment());
console.log('_', _.max([1, 9]));
console.log('plus', plus(2, 3));
console.log('sub', sub(2, 3));
