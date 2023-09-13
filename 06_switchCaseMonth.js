function month(num) {
    switch (num) {
        case 1:
            console.log(`1=january`);
            break;
        case 2:
            console.log(`2=Febuary`);
            break;

        case 3:
            console.log(`3=march`);

            break;

        case 4:
            console.log(`4=april`);
            break;


        case 5:
            console.log(`5=may`);
            break;

        case 6:
            console.log(`6=june`);
            break;

        case 7:
            console.log(`7= july`);
            break;

        case 8:
            console.log(`8=august`);
            break;

        case 9:
            console.log(`9=saptember`);
            break;


        case 10:
            console.log(`10=october`);
            break;

        case 11:
            console.log(`11=november`);
            break;


        case 12:
            console.log(`12=december`);
            break;




        default:
            console.log(`you have entered month no ${num} so it is Invalid Input`);
            break;
    }
}
month(2);
month(null);
month(45);
month(7);
month(3);
month(13);
month(6);


console.log(`=================================`)

var week = function daysOfWeek(day) {
    switch (day) {
        case 1:
            console.log(`todays is ${day} monday`);

            break;

        case 2:
            console.log(`today is ${day} tuesday`);
            break;

        case 3:
            console.log(`todays is ${day} wed`);

            break;
        case 4:
            console.log(`todays is ${day} thursday`);

            break;
        case 5:
            console.log(`todays is ${day} friday`);

            break;
        case 6:
            console.log(`todays is ${day} saturday`);

            break;
        case 7:
            console.log(`todays is ${day} sunday`);

            break;






        default:
            console.log(`you have entered ${day} invalid input`);
            break;
    }


}

week(2);
week(7);
week(8);
week(0);
week(1);
week(9);