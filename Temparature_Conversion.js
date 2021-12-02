const ps = require("prompt-sync");
const prompt = ps();


console.log("Enter 1 to convert Farenheit to Celsius");
console.log("Enter 2 to convert Celsius to Farenheit");


let number = prompt("Enter a number: ");

switch (number ){
    case 1:
        let temparature = prompt("Enter Temparature in Farenheit");
        if (temparature <=212 && temparature>=100){
            farenheit(temparature);
        }
        break;
    case 2:
        let temparature = prompt("Enter Temparature in Celsius");
        if (temparature <=32 && temparature>=0){
            celsius(temparature);
        }
        break;
}

function farenheit(temparatur)
{
    return((temparatur*(9/5))+32)
}
function celsius(temparatur){
    return((temparatur-32)*(5/9))
}