// var a =6;
// var b = a;
// console.log(b);
function operator(a,b) {
    // +=
    var add = a+=b; // a=a+b
    
    
    console.log(`addition ${add}`);

    var sub = a-=b //a=a-b
    console.log(`subtraction ${sub}`);

    var multiplication = a*=b // a=a*b
console.log(`multiplication ${multiplication}`);

var division = a/=b // a=a/b
console.log(`division ${division}`);

var mod = a%=b /// a=a%b
console.log(`modulus ${mod}`);

var c = "hello";
var d = "student";
var add = c+=d;
console.log(add);
    
}
operator(9,6);
