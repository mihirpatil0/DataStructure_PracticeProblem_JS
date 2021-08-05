console.log("Program to find no.of people have Birthdays in same month");
function month(number)
{
    switch (number)
    {
        case 1: return 'january'; break;
        case 2: return 'february'; break;
        case 3: return 'march'; break;
        case 4: return 'april'; break;
        case 5: return 'may'; break;
        case 6: return 'june'; break;
        case 7: return 'july'; break;
        case 8: return 'august'; break;
        case 9: return 'september'; break;
        case 10: return 'october'; break;
        case 11: return 'november'; break;
        case 12: return 'december';
    }
}

let year92 = new Map();
let year93 = new Map();

for (i=1; i<=12; i++)
{
    year92.set(month(i),0);
    year93.set(month(i),0);
}

for (i=1; i<=100; i++)
{
    let nmb = Math.floor(Math.random() * 100) % 24 + 1;
    if(nmb<=12)
    {
        count = year92.get(month(nmb));
        year92.set(month(nmb), ++count);
    }
    else
    {
        count = year93.get(month(nmb));
        year93.set(month(nmb), ++count);
    }
}

for(i=1; i<=12; i++)
{
    total = year92.get(month(i))+year92.get(month(i));
    console.log(total+" members have birthdays in month "+month(i));
}