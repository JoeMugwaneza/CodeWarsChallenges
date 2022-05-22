function spinWords(string){
  let reversedLongChars = [];

  reversedLongChars = string.split(" ")

  return reversedLongChars
  .map(word => {

    if(word.length >= 5){
      return word.split("").reverse().join("")
    } else{
      return word
    }
  }).join(" ")

}

console.log(spinWords("Welcome"));