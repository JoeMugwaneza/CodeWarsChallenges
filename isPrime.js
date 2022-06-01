function isPrime(num){
  let numSq =Math.sqrt(num);
  for (let i = 2; i <= numSq; i++){
    if( num % i === 0) return false;
  }
  return num > 1;

}

  
  console.log(isPrime(29));