function getSum(a,b){
    // 1) get the input in the array to be able to manipulate them

    let numbers = [a, b]

    // 2) sort the input for easy manipulation
    numbers.sort((a, b) => a - b)

    let newNumbers = [];

    // 3) creating a new array to include numbers between them
    for( let i = numbers[0]; i <= numbers[1]; i++){
        newNumbers.push(i)
    }

    // 4) use REDUCE to arrive to the sum of the two numbers plus numbers between them
    return newNumbers.reduce((previousNum, currentNum) => previousNum + currentNum, 0)
}

console.log(getSum(-1, 2));
// -1+0+1+2 = 2