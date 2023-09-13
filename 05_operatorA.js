function squareOfWordLength(value) {
    var str = value;
    console.log(value);
    var length = str.length;
    console.log(length);

    var lrngthSquare = length*length;
    console.log(lrngthSquare);

    console.log(`==========================================`);
    
}
squareOfWordLength("I HAVE LEARNT A JAVASCRIPT");
squareOfWordLength(`JavaScript`);
squareOfWordLength(`Google Chrome`);
squareOfWordLength(`Developer Smart`);

console.log(`=============================`);


var operations = function () {
var str = "I am a Angular Developer"
var strLength = str.length;
console.log( strLength);

var totalWords = str.split(` `);
var wordCount = totalWords.length;
console.log(totalWords);

var result = strLength / wordCount



console.log(result);
 console.log(`==========================================`);

 console.log(`string lenght is ${strLength} and tota words are ${wordCount}`);

 var multiplication = strLength*wordCount;
 console.log(`multiplication of strntgh length and word count is ${multiplication}`);

 console.log();
    
}
operations();


