function numbers(params) {
    let num = 5;
    while (num<=15) {
        console.log(num);
        num++;
        
    }
}
    
numbers();

console.log(`===========Q2============`);

var numbers = function () {
    let num = 50;

    while (num>=40) {
        console.log(num);
        num--;
    }

    
}
numbers();

console.log(`=========Q3=========`);

function oddNumbers() {
    let num = 1;
    while (num<=30) {
        if (num%2!=0) {
            console.log(num);
            
        }
        num++;
        
    }
    
}
oddNumbers();

console.log(`=========Q3============`);
//first 10 even numbers

function evenNumbers() {
    
    let num = 0;
    while (num<=20) {
        if (num%2==0) {
            console.log(num);
            
            
        }
        num++;
        
    }
}
evenNumbers();


console.log(`==========Q5==========`);

function table5() {
    let num = 5;
    while (num<=50) {
       // console.log(num);
        //num+5;
        if (num%5==0) {
            console.log(num);
            
        }num++;
    }
    
}
table5();

console.log(`other method`);
 function tableOf5() {
    let num=5;
    while (num<=50) {
        console.log(num);
        num=num+5;
        
    }
    
 }
 tableOf5();
console.log(`Q6`);
//wap to print table of 10

function tableOf10() {
    let num = 10;
    while (num<=100) {
        console.log(num);
        num=num+10;

        
    }

    
}
tableOf10(); 

console.log(`=========================`);

function reverseTableOf10() {
    num = 100;

    while (num>=10) {
        console.log(num);

        num=num-10;
        
    }
    
}
reverseTableOf10();
