let array = [10,20,50,60,10,100,80,30]
console.log(array);

let element2=array[2];
console.log(element2);
let updatedValueof2=array[2]=100;

console.log(updatedValueof2);

let isAvailabe = array.includes(80);
console.log(`is 80 availabe in array ${isAvailabe}`);//this method will return boolean value
// indexOf();
 let indexOf80 = array.indexOf(80);
 console.log(`index of 80 is ${indexOf80}`);

 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`element of index ${index} is${element}` );
 }

 console.log(`=========printing array in reverse order===============`);
  for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(`element of index ${index} is${element}` );
  }

  console.log(`===========traversing array using while loop============`);
  let index=0;
  while (index<=array.length-1) {
    let element = array[index];
    console.log(element);
    index++
    
  }