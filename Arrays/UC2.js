/**
 * Extend the above program to sort the array and then find the 2nd largest 
 * and the 2nd smallest element.
 */
var arr = [];
for(let number =0;number < 10;number ++)
{
    let num = Math.floor((Math.random() * 1000) + 1);
    arr.push(num);
}
 console.log("Before sorting array values : "+arr);

 let sortarray = arr.sort();

 console.log("After sorting array values : "+sortarray);

let max = Number.MIN_VALUE;
let second_largest = Number.MIN_VALUE;
console.log(max);

for (let index = 0; index <sortarray.length; index++) {

    if (max < sortarray[index]) {
        second_largest = max;
        max = sortarray[index];
    } else if (sortarray[index] > second_largest && sortarray[index] <max ) {
        second_largest = sortarray[index];   
    }
}
// min
let min = Number.MAX_VALUE, second_smallest = Number.MAX_VALUE;
for (let index = 0; index < sortarray.length; index++) {

    if (min > sortarray[index]) {
        second_smallest = min;
        min = sortarray[index];
    } else if (sortarray[index] < second_smallest && sortarray[index] > min ) {
        second_smallest = sortarray[index];   
    }
}
console.log(second_largest+" "+second_smallest);
