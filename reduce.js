// bring one single array from a array of arrays

let arrayOfArrays = [[0, 1], [2, 3], [4, 5]]

let returnedArray = arrayOfArrays.reduce((a,b) =>{
    return a.concat(b);
},[])

// console.log(returnedArray);


// Counting instances of values in an object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countedNames = names.reduce(function(allNames, name){
    if(name in allNames) {
        allNames[name]++
    } else{

        allNames[name] = 1 
    }
    return allNames
},{})

// console.log(countedNames);


// Grouping objects by a property

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  function groupBy(objectArray, property){
      return objectArray.reduce(function(acc, obj){
          let key = obj[property]
          if(!acc[key]){
              acc[key] = [];
          }
          acc[key].push(obj);
          return acc
      },{})
  }

  let groupedPeople = groupBy(people, 'age');

  console.log(groupedPeople)


