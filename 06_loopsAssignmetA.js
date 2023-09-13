function vowels(str) {
    let count = 0;
    for (index = 0; index < str.length; index++) {
       let char = str.charAt(index);
       if (char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u" ||
       char == "A" ||char == "E" ||char == "I" ||char == "O" ||char == "U") {
        
        console.log(char);
        count=count+1;
       }
        
    }
    console.log(count);

    
}
vowels("I am very good IT developer");

console.log(`=================practice============`);

function vowelsCount(str) {
   let count = 0;

   let index=0;
   while (index<=str.length) {
      let char = str.charAt(index);
      if (char == "a"||char == "e"||char == "i"||char == "o"||char == "u"||
      char == "A"||char == "E"||char == "I"||char == "O"||char == "U") {
         console.log(char);
         count = count + 1;
         
         
      }
      
      index++;
      
      
   }
   console.log(count);



   
}
vowelsCount("My name is vijay and i am going to be very good software developer");

console.log(`==========Q2=============`);

function cubes() {
   let totalSum=0;
   for (let index = 1; index <=5; index++) {
      let cube= index*index*index;
      totalSum = totalSum + cube;
      
      console.log(`cube of ${index} = ${cube}`);
    
    
   }
   
   console.log(`total sum of cubes is ${totalSum}`);
    console.log(`===============sum of cubes using while loop============`);

    function sumOfCubes() {
      let totalSum = 0;
      let num = 1;
      while (num<=10) {
         let cubes = num*num*num;
         console.log(`cube of ${num} = ${num}`);
         totalSum = totalSum + cubes;
         num++;
         
      }
      console.log(`sum of cubes from number 1 to 10 is ${totalSum}`);

      
    }
    sumOfCubes();
   }
cubes();

console.log(`==================Q3===========`);
function oddPositionedChar(str) {

   for (let index = 0; index <= str.length; index++) {
      let char = str.charAt(index);
      if (index%2!=0 && index != " ") {
         console.log(char);

         
      }
      
   }

   
}
oddPositionedChar("Hard work always pays back");
console.log(`second string`);
oddPositionedChar("Soon i will be Angular It champion");


