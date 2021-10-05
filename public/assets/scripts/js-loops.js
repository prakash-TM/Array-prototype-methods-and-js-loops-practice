const { arr, obj } = require('./data-array');
// console.log(arr, obj);

var loop_for = "";
for (let i = 0; i < arr.length; i++) {
    let len = (arr[i]).length;
    loop_for += 'length of ' + arr[i] + ' is ' + len + "\n";
}
console.log('1. for loop')
console.log(loop_for);

var loop_forin = "";
for (let j in arr) {
    let len = (arr[j]).length;
    loop_forin += 'length of ' + arr[j] + ' is ' + len + "\n";
}
console.log('2. for in loop')
console.log(loop_forin)

var loop_forof = ""
for (let k in arr) {
    let len = (arr[k]).length;
    loop_forof += 'length of ' + arr[k] + ' is ' + len + "\n";
}
console.log('3. for of loop')
console.log(loop_forof)



var loop_while = "";
var l = 0;
while (l < arr.length) {
    let len = (arr[l]).length;
    loop_while += 'length of ' + arr[l] + ' is ' + len + "\n";
    l++;
}
console.log('4. while loop')
console.log(loop_while)


var loop_dowhile = "";
var m = 0;
do {
    let len = (arr[m]).length;
    loop_dowhile += 'length of ' + arr[m] + ' is ' + len + "\n";
    m++;
} while (m < arr.length);
console.log('5. do while loop')
console.log(loop_dowhile)