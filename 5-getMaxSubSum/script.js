'use strict'

let getMaxSubSum = arr => {
    let maxSum = 0
    let tempSum = 0;
    //work for the contiguous subarray
    for(let e of arr){//start from one element, till the whole array
        tempSum += e
        maxSum = Math.max(maxSum, tempSum)//if tempSum always negativr then maxSum = , if one time pos that will store in maxSUm
        if(tempSum < 0) tempSum = 0
    }
    return maxSum
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100