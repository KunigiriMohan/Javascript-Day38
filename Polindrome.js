const ps = require("prompt-sync");
const prompt = ps();

let firstnumber = prompt("Enter first number : ");
let secondnumber = prompt("Enter second number : ");

if(palindrome(firstnumber))
{
    console.log("First Number is Polindrome");
}
else{
    console.log("Firsst number is not polindrome");
}

if(palindrome(secondnumber))
{
    console.log("Second Number is Polindrome");
}
else{
    console.log("Second number is not polindrome");
}

function palindrome(firstnumber){
    var rem =0;
    var final=0;
    temp = firstnumber;
		while(firstnumber>0)
		{
			rem = firstnumber%10;
			firstnumber = parseInt(firstnumber/10);
			final = final*10+rem;
		}

    if(final==temp)
    {
        return true;
    }
    else{
        return false;
    }
}
