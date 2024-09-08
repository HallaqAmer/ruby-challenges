// Input is the Fib sequence, Output is the next number

const nextFibNumber= (fibSeq) => {
    const fibSeqSize=fibSeq.length
    if(fibSeqSize<2) return null

    const nextNumber=fibSeq[fibSeqSize-1]+fibSeq[fibSeqSize-2]
    return nextNumber
}

// Input is the Fib value, Output is its Fib sequence

const findFibSequence= (n) => {
    const fibSeq = [0, 1];
    let i = 0
    let j = 2
    while (j < n) {
        fibSeq[j] = fibSeq[i] + fibSeq[i + 1]
        i++
        j++
    }
    return fibSeq;
}

const fibSeq=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(nextFibNumber(fibSeq))
console.log(findFibSequence(10))
