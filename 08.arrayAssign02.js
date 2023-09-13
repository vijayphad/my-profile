var array = [20,31,40,25,23,11,29,9,60,2,11];
let lenghthOfArray = array.length;
console.log(array);
console.log(typeof array);
console.log(lenghthOfArray);

let element0 = array[0];
let elementatLast = array[array.length-1];
console.log(element0);
console.log(elementatLast);

//log the 3rd last elememt using the length property
let thirdlastelement = array[array.length-3];
console.log(thirdlastelement);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index%2==0) {
        console.log(`all the numbers from the even index values are ${element}`);
        
    }
    
}

//even numbers from the array
function arrayEven() {
    

console.log(`all the even numbers from the array are`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (element%2==0) {
       
        console.log(element);
        
    }
    
}
}
arrayEven();

console.log(`========================q5`);
function oddNumbers() {
    console.log(`all the odd numbers from the array are`);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element%2!==0) {
            console.log(element);
            
        }
    }
    
}
oddNumbers();

console.log(`================Q7===============`);
for (let index = 1; index < array.length; index=index+2) {
    const element = array[index];
    console.log(element);
    
}

console.log(`Q8=====even positioned numbers from the array `);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index%2==0) {
        console.log(element);
        
    }
    
}

console.log(`============Q9==============`);
function sumOfArray() {
    

var totalSum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
  var totalSum = totalSum + element;
 
    
}
console.log(`total sum of all elements from the array is ${totalSum}`);
}
sumOfArray();

console.log(`==============Q9============`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%5==0) 
    {
        console.log(element);
        
    }
}

console.log(`==============Q10===========`);
let is115Available = array.includes(115);
console.log(is115Available);

console.log(`=============Q11============`);
let is23Available = array.includes(23);
console.log(is23Available);



console.log(`=============Q12============`);
console.log(array);
array.splice(3,0,55,66);
console.log(array);

let deletedElements = array.splice(4,3);
console.log(deletedElements);