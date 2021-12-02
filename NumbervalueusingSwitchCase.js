const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number : ");

switch(number){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundread");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("One Lakh")
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    case 10000000:
        console.log("One Crore");
        break;
    case 100000000:
        console.log("Ten Crore");
        break;

}