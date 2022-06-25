// function validBraces(braces){
//     let tracker = [];
    
//     // LOOP THROUGH THE BRACES INPUT
//     for (let i = 0; i < braces.length; i++){
//         if( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
//             tracker.push(braces[i])
//         } else {
//             // RETURN FALSE IF NO INPUT WAS GIVEN
//             if(tracker.length === 0) return false;

//             let lastValue = tracker[tracker.length-1]

//             if((braces[i] ==="]" && lastValue ==="[") || (braces[i] === "}" && lastValue ==="{") || (braces[i] ===")" && lastValue === "(")){
//                 tracker.pop();
//             } else{
//                 break;
//             }
//         }
//     }
//     console.log(tracker.length === 0);
//     // return tracker.length === 0

//   }

  
// validBraces("[()}")

// 2ND WAY OF VALIDATING BRACES

function validBraces(braces){
    let tracker = []

    for (let i = 0; i < braces.length; i++){
        switch (braces[i]) {
            case "(": case "[": case "{": tracker.push(braces[i]); break;
            case ")" : if(tracker.pop() != "(") return false; break;
            case ']' : if(tracker.pop() != "[") return false; break;
            case "}" : if(tracker.pop() != "{") return false; break;

        }
    }
    
  
    return tracker.length === 0
}

console.log(validBraces("[{}]"))


