const ps = require("prompt-sync");
const prompt = ps();
console.log("Enter 1 to convert Feet to inch");
console.log("Enter 2 to convert Feet to meter");
console.log("Enter 3 to convert inch to Feet");
console.log("Enter 4 to conver Meter to Feet");


let number = prompt("Enter a number : ");

switch (number){
    case 1:
        var length = prompt("Enter length in feet : ");
        var feet =length/12;
        console.log("Length in inches is : "+feet);
    case 2:
        var length = prompt("Enter length in feet : ");
        var feet =length*0.3048;
        console.log("Length in meters is : "+feet);
    case 3:
        var length = prompt("Enter length in inch : ");
        var feet =length*0.083333;
        console.log("Length in feet is : "+feet);
    case 4 :
        var length = prompt("Enter length in meter : ");
        var feet =length*3.28084;
        console.log("Length in feet is : "+feet);
}
