function anagrams(word, words) {
    let outcome = [];
    let equalChars = [];
    let referenceWord = word.split("");


     words.map(word => {
         let endWord = word.split("");
        if(referenceWord.length === endWord.length){
            let i = 0;
            while(i < referenceWord.length){
                if(referenceWord[i] === endWord[i]){
                    outcome.push(endWord.join(""));
                };
                i++;
            };
            
        }
        
    })
    
    // return equalChars;
    
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));