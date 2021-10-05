// Import array from another js file
const { profile, company } = require('./data-array')
console.log(profile);
console.log(company);

//array copy
const clone = [...profile]

// concatenation
var arr_concat = profile.concat(company);
console.log('concatenation :' + arr_concat);

//fill
var fill_array = clone.fill('filler');
console.log('fill :' + fill_array);

//index
var arr_index = profile.indexOf('f_name');
console.log('index :' + arr_index);

// array or not
console.log('array or not :' + Array.isArray(company));

// array join
console.log('array join :' + company.join());

// length
console.log('length :' + company.length);

//pop
console.log('pop :' + company.pop());

// push
var arr_push = profile.push('personal info');
console.log('push :' + arr_push);

// reverse
console.log("reverse :" + profile.reverse());

//shift
console.log("shift :" + profile.shift());

//slice
var arr_slice = profile.slice(0, 2);
console.log("slice :" + arr_slice);

//sort
console.log(company.sort());

//splice
// At position 2, add 2 elements, remove 1: 
console.log(profile.splice(2, 1, "personal", "information"));