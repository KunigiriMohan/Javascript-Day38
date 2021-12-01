const ps = require("prompt-sync");
const prompt = ps();

let a = prompt("Enter first Number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter Third number : ");

const number =[];
number[0] = (a+b*c);
number[1] =(c+a/b);
number[2] = (a%b+c);
number[3] = (a*b+c);

let max =Math.max(...number);
let min =Math.min(...number);

if (max==number[0]){
    console.log("a+b*c is maximum")
}
else if (max==number[1]){
    console.log("c+a/b is maximum")
}
else if (max==number[2]){
    console.log("a%b+c is maximum")
}
else if (max==number[3]){
    console.log("a*b+c is maximum")
}


if (min==number[0]){
    console.log("a+b*c is minimum")
}
else if (min==number[1]){
    console.log("c+a/b is minimum")
}
else if (min==number[2]){
    console.log("a%b+c is minimum")
}
else if (min==number[3]){
    console.log("a*b+c is minimum")
}
