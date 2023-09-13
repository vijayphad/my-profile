var array = ["banana","Orange","Apple","Mango","water Melon"]
console.log(array);

console.log(`==================Q1===============`);
console.log(array[0]);
let lastElement = array[array.length-1];
console.log(lastElement);

console.log(`==================Q2==========`);
array.unshift("Papaya");
console.log(array);

console.log(`==========Q3==========`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
array.splice(3,1);
console.log(array);

console.log(`===============Q4=============`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
array.push("PInapple")
console.log(array);

console.log(`==============Q5=================`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
array.splice(4,0,"Dragon Fruit");
console.log(array);

console.log(`=============Q6=============`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
array.splice(1,1,"kivi");
console.log(array);

console.log(`===============Q7================`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
let sliceof = array.slice(1,4);
console.log(sliceof);

console.log(`===================Q8====================`);
var array = ["banana","Orange","Apple","Mango","water Melon"]
let last3elements = array.slice(array.length-3);
console.log(last3elements);