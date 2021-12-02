
var count1 =0;
var count2=0;
while(count1<=10 && count2<=10){
    var random =Math.floor(Math.random()*2)+1;

    if (random==1){
        console.log("Heads");
        count1++;
    }
    else{
        console.log("Tails");
        count2++;
    }
}

console.log("No of Heads : "+count1);
console.log("No of Tails : "+count2);