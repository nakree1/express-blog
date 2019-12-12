const morgan = require('morgan');

const { ExtraError } = require('./utils/errors');

console.log('ttt');
console.log('ttt');

// const obj = { test: 'foo' };
//
// function test(par) {
//   const t = par + 2;
//
//   debugger;
//   return t;
// }
//
// console.log('ttt');
// debugger;
//
// test(1);

module.exports = morgan('dev');
