'use strict'

let getMaxSubSum = arr => {
    let maxSum = arr[0]
    let tempSum;
    //work for the contiguous subarray
    for(let i = 0; i < arr.length; i++){//start from one element, till the whole array
        tempSum = 0
        for(let j = i; j < arr.length; j++){
            tempSum = tempSum + arr[j]
            if(maxSum < tempSum)
                maxSum = tempSum;
        }
    }
    return maxSum
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100