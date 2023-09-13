function details(){
    var name = "vijay";
    console.log(name);

    var schoolName = "Deshikendra High school";
    console.log(schoolName);
}


var greet;  // FUNCTIO WILL NOT BE EXECUTE UNTIL AND UNLESS IT IS BEING CALLED
greet = "good morning";  
console.log(greet);// FIRST LINE OF EXECUTION

details(); //FUNCTION CALLED AND CONTROL IS TRANSFERED TO THE FUNCTION NOW FUNCTION BLOCK WILL EXECUTE LINE BY LINE



function personalDetails(firstName,middleName , lastName) {

    console.log(firstName,middleName,lastName);
    
}
personalDetails("vijay","dinkar", "phad");




function swapValues(){    // function without arguments
    console.log("before swapping",    "name1 is ",name1,  "name2 is ",name2);
    var temp = name1;
    name1 = name2;
    name2 = temp
     console.log("after swapping", "name1 is ", name1,  "name2 is",   name2);


}
var name1 = "VIRAT";
var name2 = "ANUSHKA";
console.log(name1, name2);
 
swapValues();
console.log("==================================================");




function swapValues2(value1,value2) {
    console.log("before swapping value1 is",value1, "value2 is",value2);

    let temp = value1;
    value1 = value2;
    value2 = temp;

 console.log("after swapping value1 is",value1,  "value2 is ",value2);}





     
    swapValues2("anushka" ,"virat");
console.log("==================================================");
swapValues2(1000,2000);




function addThreeValues(a,b,c) {
    var result = a+b+c;
    console.log(result);
    
    
}
addThreeValues(10.23,600,40);
addThreeValues("hello_","good_","morning");


console.log(`===========Q=============`);

function multiplication(a,b) {
    result = a * b;
    return
    
}



var result2 = multiplication(4,3);
console.log(result);




