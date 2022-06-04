// bring one single array from a array of arrays

let arrayOfArrays = [[0, 1], [2, 3], [4, 5]].reduce((a,b) =>{
    return a.concat(b);
},[])

console.log(arrayOfArrays);
