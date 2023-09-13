console.log(`========Q1============`);

var square = function squareOf(num){
    var result = num * num
    console.log(`square of ${num} is ${result}`);
    
}
square(5);
console.log(typeof result);
square(6);
square(100);
square(67.89);
square(59);


console.log(`============Q2===========`);

console.log(`type of square is ${typeof square}`);

console.log(`====================Q3===========`);


var area = function areaOfRect(length,breadth) {
    var result = length * breadth
    // return result;
    
console.log(`total area of rectangle is ${result}`);

}
// console.log(area(499,917));
area(499,917);


console.log(`==========Q3==========`);

var swapValues = function (value1, value2) {
    console.log(`before swapping value1 is ${value1} and value2 is ${value2}`);
  var temp;
    value1 = temp;
    value1 = value2;
    value2 = temp;
    console.log(`after swapping value1 is ${value1} and value2 is ${value2}`);
    
}
swapValues("mahi", "raina");
swapValues(55,77);

console.log(`======================Q5===============`);

var stringOperations = function(str){
    console.log(str);
   
    console.log(`char at 6 is ${str.charAt(6)}`);
    console.log(`char at index 11 is ${str.charAt(11)}`);
    var lastChar = str.length -1;
    console.log(str.charAt(lastChar));
    console.log(str.charAt(0));
     var thirdLastChar = str.length - 3;
     console.log(str.charAt(thirdLastChar));
     var words = str.split(' ');
     var totalWords = words.length;
     console.log(`total words in ${str} is ${totalWords}`);

     var squareWords = totalWords * totalWords;
     console.log(squareWords);



}
stringOperations("JS is the most popular language of internet");
