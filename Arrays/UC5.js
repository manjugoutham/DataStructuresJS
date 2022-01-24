/**
 * Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
 * etc and store them in an array
 * @param {*} arr 
 * @param {*} size = 100 
 */
function printRepeating(arr , size)
{
    var i, j;
    console.log("Repeated Elements are :");
    for (i = 0; i < size-1; i++)
    {
        for (j = i + 1; j < size; j++)
        {
            if (arr[i] == arr[j])    
            console.log(arr[i] + " ");
        }
    }
}

var arr = [2, 3, 4, 5, 6, 7, 8,8,99, 9, 10, 11, 12, 13, 14,12, 15, 16, 17, 18, 19,21, 22, 20,23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 25,40, 41, 42, 43, 44, 45, 46,60, 47, 48, 49, 50, 51, 52, 53, 54, 55,58, 56, 57, 58, 59,60, 60, 61, 62, 63, 64, 50,65, 66, 67, 68, 69, 70,65, 71, 72, 73, 74, 75, 76,75, 77, 78, 79, 80, 81, 20,82, 83, 84, 85,85, 86, 87, 88, 78,89, 90, 91, 92,93, 93, 94, 95, 96, 97, 98, 99];
var arr_size = arr.length;
printRepeating(arr, arr_size);


// printRepeating(arr, arr_size);
