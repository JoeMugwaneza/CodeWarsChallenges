// Ability to turn a string into numbers and numbers into strings vice versa 

let lookUp = {
    a:0, b:1, c:2,d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11, m:12, n:13, o:14,p:15, r:16, s:17, t:18, u:19,v:20, w:21, y:22, z:23, x:24, y:25, z:26
}

const stringsOrNumbersConverter = function(input){
    if (typeof input === "string"){
            let result = [];
            input.split("")
            .forEach(i => {
                result.push(lookUp[i])
            });
        
            return result.map( int =>{
                return String(int)
            })
            .join("")
    }

    if(typeof input === "number"){
        let result = [];
        String(input)
        .split("")
        .forEach(n =>{
            result.push(Number(n))
        });

        let letters = [];

        result.forEach(num =>{
            
            for(const [key, value] of Object.entries(lookUp)){  
                if(num === value){
                    letters.push(key)
                }
            }
        })
        return letters.join("");
    }
}



console.log(stringsOrNumbersConverter("joseph"));


// I did not achieve my target 100% because if a string is JOSEPH, you get 914174157 but it is not possible to put the same number and get back JOSEPH. This is mainly because letter like O is 14 which will be corresponding to [1: "b", 4: "e"]