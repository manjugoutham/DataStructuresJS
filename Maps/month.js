let count = 1;
var birthmap = new Map();

function generateBirthMonth(){
    return Math.floor(Math.random()* 12) +1;
}

while(count != 50)
{
    let month = generateBirthMonth();
    console.log("Person : "+count +"\tBirth Month is : "+month);
    let array = new Array();

    if(birthmap .has(month))
        array = birthmap .get(month);
    
    array.push(count);
    birthmap .set(month,array);
    count++;
}

console.log("\n same birthday month");
for(let [key,value] of birthmap .entries()){
    console.log("Month : " + key + "\tPeople : [" + value+ "]");
}