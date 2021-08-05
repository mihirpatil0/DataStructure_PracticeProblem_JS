//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

const primeFactArr = [];

// take input from the user
let userNumber = parseInt(prompt('Enter the number to find prime factor : '));

//this for loop iterate till the number which is entered by the user.
for(let i = 2; i <= userNumber; i++)
{
    //check for the remender if it is equal to 0 if yes printing the i th value which is coming from for loop and then user number will get divide by the same i th value.
    while(userNumber % i == 0)
    {
        console.log(i);
        userNumber = userNumber / i;
        primeFactArr.push(i);
    }
}

console.log(`Prime factors of an given number ${userNumber} is : ` + primeFactArr);