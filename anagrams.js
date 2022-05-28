function anagrams(word, words) {
    let outcome = [];
    // let equalChars = [];
    let referenceWord = word.split("").sort().join("");
    const anagramsIndexes = [];

    let newWords = [...words.map(word => word.split("").sort().join(""))]
    for(let i = 0; i < newWords.length; i++){
        if(referenceWord === newWords[i]){
            anagramsIndexes.push(i)

        }
    }
    for( let i = 0; i < words.length; i++){
        for(let j = 0; j < anagramsIndexes.length; j++){
            if(i === j){
                outcome.push(words[anagramsIndexes[j]])
            }
        }
    }
    return outcome;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));