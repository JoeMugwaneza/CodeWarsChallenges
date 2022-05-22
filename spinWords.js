function spinWords(string){
  let longLettersReversed = [];

  longLettersReversed = string.split(" ")

  return longLettersReversed
  .map(word => {

    if(word.length >= 5){
      return word.split("").reverse().join("")
      // console.log(word.split("").reverse().join(""))
      // console.log(`${word} testing`)
    } else{
      return word
      // console.log(`${word} no testing`)
      // console.log(word)
    }
  }).join(" ")

}

console.log(spinWords("Welcome"));