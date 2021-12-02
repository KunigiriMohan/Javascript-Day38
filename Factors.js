const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number to print factors of number : ");

var temp =1;
for(i=1;i<=number;i++){
    temp=temp*i;
    console.log(temp);
}
console.log("Factorial of "+number+" is "+temp);