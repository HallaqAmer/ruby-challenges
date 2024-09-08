//First solution
//Time comlexity O(n), Space complexity O(n)

const findMissingNumber = (numbersArr) => {

    const maxNumber=Math.max(...numbersArr)
    const numbersSet=new Set(numbersArr)
    let i=1;
    while(i<=maxNumber) {
        if(!numbersSet.has(i)) return i
        i++

    }

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
    
    let seriesSize=numbersArr.length+1
    let expectedSum=(seriesSize * (1+seriesSize)) / 2

    return expectedSum-calculatedSum
    
}

const numbersSeries2=[2, 1, 5, 4, 6, 9, 7, 8, 10]
console.log(findMissingNumber2(numbersSeries2))