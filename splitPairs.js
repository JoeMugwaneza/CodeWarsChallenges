// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let splitChars = str.split('')
    if(splitChars.length%2 !=0){
        splitChars.push("_");
    }
    
    function splitByTwo(splitChars, chunkSize) {
        const finalArray = [];
        for (let i = 0; i < splitChars.length; i += chunkSize) {
            const chunk = splitChars.slice(i, i + chunkSize);
            // chunk = splitedChars.slice(1,2)
            finalArray.push(chunk);
        }
        return finalArray;
    }
    
    return splitByTwo(splitChars.join(""),2)

}

console.log(solution("abc"));