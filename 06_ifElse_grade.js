var voteEligible = function (age) {
    if (age<=0  || age>130 ||age == undefined) {
        console.log(`your age is ${age} and your data is invalid`);
        return;
        
    }
    if (age>=18) {
        console.log(`person's age is ${age} and he is eligible for voating`);
        
    } else {
        console.log(`persons age is ${age} and he is not eligible for voating`);
        
    }
    
}

var result = voteEligible(12);
var result = voteEligible(42);
var result = voteEligible(18);
var result = voteEligible(19.6);
var result = voteEligible(-10);
var result = voteEligible(200);
var result = voteEligible(0);
var result = voteEligible(undefined);
var result = voteEligible(null);
// console.log(result);