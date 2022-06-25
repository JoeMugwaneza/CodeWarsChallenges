function duplicateCount(text){
    // SPLIT THE INPUT INTO AN ARRAY
   let splittedText = text.toLowerCase().split("");

   let count = {};
   let duplicated = []

   
   splittedText.forEach(element => {
    // COUNT DUPLICATE
       count[element] = (count[element] || 0 ) + 1
    //    ONLY PUSH THOSE THAT HAVE DUPLICATE
       if(count[element] !== 1){
        duplicated.push(element);
        }
    });
    // EXTRACT THE UNIQUE CHARACTERS
    let uniqueChars = [ ... new Set(duplicated)];

    return uniqueChars.length;

   
}
console.log(duplicateCount("ABBA"));