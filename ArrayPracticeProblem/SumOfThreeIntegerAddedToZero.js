//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let arrayOFInt = new Array();

let arrayLength = parseInt(prompt("Enter length of an array : "));

for( let i = 0; i < arrayLength; i++)
{
    let insertNumber = parseInt(prompt("Enter Number in array : "));
    arrayOFInt.push(insertNumber);
}

console.log("Array contains following numbers : " + arrayOFInt);

let sum = 0;

for( let i = 0; i < ( arrayLength - 2 ); i++)
{
    for( let j = 1; j < ( arrayLength - 1 ); j++)
    {
        for( let k = 2; k < arrayLength; k++)
        {
            if( arrayOFInt[i] + arrayOFInt[j] + arrayOFInt[k] == sum )
            {
                console.log("Addition is : " + arrayOFInt[i] +" " + arrayOFInt[j] + " " + arrayOFInt[k] + " = 0");
                break;
            }
        }
    }
}