var num = 0;
var num2 = 0;
var result = 0/0;

console.log(result); // not a number (nan)
var num3 = "100";

console.log(`type of num3 is ${typeof num3}`);
num3 = +num3;
console.log(`type of num3 is ${typeof num3}`);

var num4 = "vijay";
num4 = +num4;
console.log(`type of num4 is ${num4}`);

console.log(`=================================================`);

var num5 = "vijay";
var resultNum6 = +num5;
console.log(num5);
 console.log(typeof num5);
 console.log(resultNum6);
 console.log(`type of resultNum6 is ${typeof resultNum6}`)

 console.log(`=============================================================`);
 num = `30`;
 console.log(typeof num);
//  var num = +num;
// console.log(typeof num);
console.log(num);
console.log(typeof num);
var num = Number(num);
console.log(num);

console.log(`===============implicit conversion (atomatically happened by js )==============`);


var num1 = `3` + 2;
console.log(num1); // string 3 is converted to number 


var res = '3' + true;  // concatonation is done by js
console.log(res);

var res = '3' + undefined; // concatination
console.log(res);

var res = '3' + null; // concatination
console.log(res);


var res;
 res = '4' - true; // (boolean)true converted into the (number)1
 console.log(res);

 res = 4 + true; // (boolean)true converted into the (number)1
 console.log(res);

res = 4 + false; // (boolean)false converted into the (number)0

console.log(res);


console.log(`implicit string conversion to the number`);
 var res;

 res = `4` - 2; // string(4) is converted into number(4)
 console.log(res);

 res = '4' * 2; // string(4) is converted into number(4)
 console.log(res);

 res = '4' / 2;  //string(4) is converted into number(4)
 console.log(res);
 console.log(`================`);

 res = '4' - '2'; // both strings '4' and '2' are converted into number implicitly by the js
 console.log(res);





 console.log(`===============ASSIGNMENT 0C=======================`);
 var res;
 console.log(0=='0');  //  
 console.log(0=='0');
 console.log(0==false);
 console.log(null==undefined);
 console.log(1==[1]);
 console.log(1==true);
 console.log(1=='1');