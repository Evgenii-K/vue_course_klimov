'use strict';

const arrName = ['NAME', 'NAFH', 'NFGH', 'GHJR'];

const ticker = 'na';

let filterArr = arrName.filter(item => item.slice(0, ticker.length) == ticker.toUpperCase());

console.log(filterArr);

