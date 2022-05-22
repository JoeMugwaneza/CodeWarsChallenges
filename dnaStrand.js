// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    // let result = []

    // return result = dna.split("")
    // .map(char =>{
    //     if(char === "A"){
    //         return "T"
    //     } else if(char === "T"){
    //         return "A"
    //     } else if( char === "C"){
    //         return "G"
    //     } else if (char === "G"){
    //         return "C"
    //     } else{
    //         return char
    //     }
    // }).join("")


    // ANOTHER WAY TO GO ALONG THIS CHALLENGE

    let lookUp = {A: 'T', T: 'A', C: 'G', G: 'C'};

   return dna.split("")
   .map(char =>{ return lookUp[char]})
   .join("")
  }

  console.log(DNAStrand("ATTGC"))
  