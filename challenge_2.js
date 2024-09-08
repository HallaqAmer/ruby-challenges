//First solution
//Time comlexity O(n), Space complexity O(n)

const findMissingNumber = (numbersArr) => {

    //find the max numbers in the array
    const maxNumber=Math.max(...numbersArr)

    // create a set of array numbers
    const numbersSet=new Set(numbersArr)
    let i=1;

    //iterate through the numbers to find the missing number in the set
    while(i<=maxNumber) {
        if(!numbersSet.has(i)) return i
        i++

    }

    // if there is no missing number return -1
    return -1
}

const numbersSeries=[2, 1, 5, 4, 6, 9, 7, 8, 10]
console.log(findMissingNumber(numbersSeries))

//Second solution
//Time comlexity O(n), Space complexity O(1)

const findMissingNumber2 = (numbersArr) => {

    //find sum of numbers
    let calculatedSum=0
    for(let i=0;i<numbersArr.length;i++) {
        calculatedSum+=numbersArr[i]
    }
    
    //find the supposedseries of numbers
    let seriesSize=numbersArr.length+1

    //find the expected sum of the total numbers
    let expectedSum=(seriesSize * (1+seriesSize)) / 2

    //the missing number is the difference between the calculated sum and expected sum
    return expectedSum-calculatedSum
    
}

const numbersSeries2=[2, 1, 5, 4, 6, 9, 7, 8, 10]
console.log(findMissingNumber2(numbersSeries2))