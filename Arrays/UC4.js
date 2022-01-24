/**
 * Write a Program to show Sum of three Integer adds to ZERO
 */

	arr = [0, -1, 2, -3, 1];
	
// Prints all triplets in arr[] with 0 sum	
	function findTriplets(arr) {
		let found = false;
    //             
		for (let i = 0; i < arr.length - 2; i++) {      // i=0   0<5-2=3  0 value increment
		for (let j = i + 1; j < arr.length - 1; j++) {  // j=0+1   0<5-1=4 j++
			for (let k = j + 1; k < arr.length; k++) {  // k=1+1   2<5  k++
				if (arr[i] + arr[j] + arr[k] === 0)     // a[0] + a[-1] + k[2]
				{
                    
					console.log(arr[i]);
					console.log(" ");
					console.log(arr[j]);
					console.log(" ");
					console.log(arr[k]);
					console.log("*******");
					found = true;
					
				}
			}
		}
		// If no triplet with 0 sum found in array
		if(found === false) {
			console.log(" not exist ");
		}
	}
}
	findTriplets(arr);

