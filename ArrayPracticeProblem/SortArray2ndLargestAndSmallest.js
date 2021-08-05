let randomArray = [];

//generate 10 random 3 digit numbers.
for(let i = 0; i < 10; i++)
{
    let random = Math.floor(Math.random() * 899) + 100;
    //storing random numbers in an array.
    randomArray[i] = random;
}

//display array elements.
console.log("Before sorting array elements : " + randomArray);

//after sorting array elements.
randomArray.sort();
console.log("After sorting array elements : " + randomArray);

//displaying second smallest and largest element of an array.
console.log("Second smallest element is : " + randomArray[1] + " And Second largest element is : " + randomArray[8]);
