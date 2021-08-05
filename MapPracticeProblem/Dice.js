console.log("Program to find max & min of repeated values of Dice");

let diceMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);

let flag=true;
while(flag)
{
    let dice = Math.floor(Math.random() * 10) % 6 + 1;
    count = diceMap.get(dice);
    diceMap.set(dice, ++count);
    if (count==10) flag=false;
}

console.log("Count values of Dice Numbers: ");
console.log(diceMap);

console.log("Maximum count of dice Number and its count: "
            +[...diceMap].reduce((max, initial) => initial[1] > max[1] ? initial : max));
console.log("Minimum count of dice Number and its count: "
            +[...diceMap].reduce((min, initial) => initial[1] < min[1] ? initial : min));