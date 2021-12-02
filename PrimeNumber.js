const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number to check Prime or not : ");

for(i=1;i<=number;i++){
    if(number%i==0){
         var k=k+1;
    }
}
if (k==2){
    console.log("The Number is a Prime Number");
}
else{
    console.log("The Number is Not a Prime Number")
}