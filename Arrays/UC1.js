
/**
 * @author Goutham
 * Write a program in the following steps
 * a. Generates 10 Random 3 Digit number.
 * b. Store this random numbers into a array.
 * c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
 * 
 */
var arr = [];
for(let number = 0;number < 10;number ++)
{
    let num = Math.floor((Math.random() * 1000) + 1);
    arr.push(num);
}
 console.log(arr);

 let sortarray = arr.sort();

 console.log(sortarray);

let max = Number.MIN_VALUE;
let second_largest = Number.MIN_VALUE;
console.log(max);

for (let index = 0; index <arr.length; index++) {

    if (max < arr[index]) {
        second_largest = max;
        max = arr[index];
    } else if (arr[index] > second_largest && arr[index] <max ) {
        second_largest = arr[index];   
    }
}
// min
let min = Number.MAX_VALUE, second_smallest = Number.MAX_VALUE;
for (let index = 0; index < arr.length; index++) {

    if (min > arr[index]) {
        second_smallest = min;
        min = arr[index];
    } else if (arr[index] < second_smallest && arr[index] > min ) {
        second_smallest = arr[index];   
    }
}
console.log(second_largest+" "+second_smallest);
