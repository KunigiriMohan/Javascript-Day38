const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a power number of 2 : ");

let total = 1;
for (i=1;i<=number;i++)
{
    total = total*2;
    console.log(" 2 power of "+i+" is "+total);
}