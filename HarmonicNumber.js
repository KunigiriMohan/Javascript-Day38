const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a n'th harmonic Number : ");

let temp =1;

for(i=2;i<=number;i++){
    temp=temp+(1/i);
console.log(temp);
}