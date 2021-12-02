const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number to print Prime factors of number : ");

while(number%2==0){
    console.log(2+"  ");
    number/=2;
}
for(i=3;i<=Math.sqrt(number);i+=2){
    while(number%i==0){
        console.log(i+" ");
        number=number/i;
    }
}
if(number>2){
    console.log(number);
}