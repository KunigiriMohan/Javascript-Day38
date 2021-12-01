const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter number to display number in word : ");

if(number==1){
    console.log("Unit");
}
else if(number ==10){
    console.log("Ten");
}
else if(number ==100){
    console.log("Hundread");
}
else if(number ==1000){
    console.log("Thousand");
}
else if(number ==10000){
    console.log("Ten Thousand");
}
else if(number ==100000){
    console.log("One Lakh");
}
else if(number ==1000000){
    console.log("Ten Lakhs");
}
else if(number ==10000000){
    console.log("One Crore");
}
else if(number ==100000000){
    console.log("Ten Crore");
}
else if(number ==1000000000){
    console.log("Hundread Crore");
}