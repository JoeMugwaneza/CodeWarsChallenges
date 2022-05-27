function anagrams(word, words) {
    let result = [];
    for (let n of words){
        if (n.includes(word.split(""))){
            return result.push(n);
        } else{
            return result;
        }
    }
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));