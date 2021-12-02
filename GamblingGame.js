var temp1=0;
var temp2=0;
var count2=100;
while(count2>=0 && count2<=199){
    var random =Math.floor(Math.random()*2)+1;

    if (random==1){
        console.log("Player Won the Game");
        count2++;
        temp1++;
    }
    else{
        console.log("Player Loss The Game");
        count2--;
        temp2++;
    }
}
console.log("The no of Times Player Won the Game : "+temp1);
console.log("The no of Times Player Loss the Game : "+temp2);
console.log("Final amount with Player : "+count2);