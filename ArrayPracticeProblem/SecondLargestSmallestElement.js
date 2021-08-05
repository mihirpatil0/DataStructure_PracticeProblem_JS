let randomArray = [];

//generate 10 random 3 digit numbers.
for(let i = 0; i < 10; i++)
{
    let random = Math.floor(Math.random() * 899) + 100;
    //storing random numbers in an array.
    randomArray[i] = random;
}

//display array elements.
console.log(randomArray);

let smallOne = randomArray[0];
for( let i = 0; i < randomArray.length; i++)
{
    if( randomArray[i] < smallOne)
    {
        smallOne = randomArray[i];
    }
}

let smallTwo = randomArray[0];
for( let i = 0; i < randomArray.length; i++)
{
    if( (randomArray[i] < smallTwo) && (randomArray[i] != smallOne))
    {
        smallTwo = randomArray[i];
    }
}

console.log("Second smallest element from the array is : " + smallTwo);

//checking for secong largest number from an array.
let bigOne = randomArray[0];
for( let i = 0; i < randomArray.length; i++)
{
    if( randomArray[i] > bigOne)
    {
        bigOne = randomArray[i];
    }
}

bigTwo = randomArray[0];
for( let i = 0; i < randomArray.length; i++)
{
    if( (randomArray[i] > bigTwo) && (randomArray[i] != bigOne) )
    {
        bigTwo = randomArray[i];
    }
}

//displaying second largest number from an array.
console.log("Secong largest number from an array is : " + bigTwo);