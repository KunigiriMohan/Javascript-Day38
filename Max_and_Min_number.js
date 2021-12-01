
const array=[];
for (i=0;i<=4;i++)
{
    array[i]=Math.floor(Math.random()*899)+100;
}
for (i=0;i<=4;i++)
{
    console.log(array[i]);
}
let max=0;
let min=Infinity;
for (i=0;i<=4;i++)
{
    
    if(min>array[i])
    {
        min=array[i];
    }
    if(max<array[i])
    {
        max=array[i];
    }
}
console.log("Maximum number : "+max)
console.log("Minimum number : "+min);
