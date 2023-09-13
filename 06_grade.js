function gradeCalculation(marks) {
    if (marks<=0 || marks>100 || marks ==NaN) {
        console.log(`PLEASE PROVIDE THE VALID MARKS`);

        
    } else {
        if (marks>=90) {
            console.log(`Excellent Marks:${marks}= Grade:A+`);
            
        }else{
            if (marks>=75 && marks<90) {
                console.log(`Excellent Marks:${marks}= Grade:A`);
                
            } else {
                if (marks>=50 && marks<75) {
                    console.log(`Good Marks:${marks}= Grade:B`);
                    
                } else {
                    if (marks>=35 && marks<50) {
                        console.log(` Marks:${marks}= Grade:C and you need Improvement`);
                        
                    } else {
                        console.log(`your marks are ${marks} and you have failed myy friend try again next year`);
                        
                    }
                    
                }
                
            }
        }
        
    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("eighty");
gradeCalculation("91");
gradeCalculation(undefined);
gradeCalculation(null);
