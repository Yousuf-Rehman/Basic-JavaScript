'use strict'

let getMaxSubSum = arr => {
    let maxSum = arr[0]
    let tempSum;
    let FixedIndex;
    //work for the contiguous subarray
    for(let i = 0; i < arr.length; i++){//start from one element, till the whole array
        FixedIndex = i + 1
        tempSum = 0
        for(let j = i; j < FixedIndex; j++){
            tempSum = tempSum + arr[j]
            if(maxSum < tempSum)
                maxSum = tempSum;

            
            if(j+1 >= FixedIndex && FixedIndex < arr.length && FixedIndex++){//moving FixedIndex to next until it becom arrr.length
                tempSum = 0
                j = i - 1
            }
        }
    }
    return maxSum
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100