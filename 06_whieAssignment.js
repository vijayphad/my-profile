var i = 0;
while (i<=10) {
    console.log(i);
    i++
    
}



var num = 10;
while (num<=30) {
    console.log(num);
    ++num
    if (num == 20) {
        break;
        // continue;
        
    }
    
}

console.log(`=================Q1=================`);
var i = 5;
while (i<=15) {
    console.log(i);
    i++
}


console.log(`=================Q2=================`);

let a = 50;
while (a>=40) {
    console.log(a);

    a--
}

console.log(`=================Q3=================`);
// Function to find the first 15 odd numbers using a while loop
function findFirst15OddNumbers() {
    let count = 0; // Variable to keep track of how many odd numbers we have found
    let number = 1; // Start checking from 1
  
    console.log("First 15 odd numbers:");
  
    while (count < 15) {
      if (number % 2 !== 0) {
        console.log(number);
        count++; // Increment count when we find an odd number
      }
      number++; // Move on to the next number for the next iteration
    }
  }
  
  // Call the function to find and print the first 15 odd numbers
  findFirst15OddNumbers();

  console.log(`==========Q4================`);
var c = 5;
while (c<=50) {
    
    console.log(c);
    c == c + 5;
}