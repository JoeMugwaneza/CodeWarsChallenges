// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let splitedChars = str.split('')
    if(splitedChars.length%2 !=0){
        splitedChars.push("_");
    }
    
    function splitByTwo(splitedChars, chunkSize) {
        const finalArray = [];
        for (let i = 0; i <splitedChars.length; i += chunkSize) {
            const chunk = splitedChars.slice(i, i + chunkSize);
            finalArray.push(chunk);
        }
        return finalArray;
    }
    
    return splitByTwo(splitedChars.join(""),2)

}

console.log(solution("abc"));