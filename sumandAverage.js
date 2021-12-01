let total =0;
for (i =0;i<=4;i++){
let number = Math.floor(Math.random()*99)+10;
console.log(number);
total=total+number;
}
console.log("Sum of five random numbers : "+total);
console.log("Average of five numbers : "+(total/5))