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
  