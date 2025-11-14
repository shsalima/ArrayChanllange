
const prompt = require("prompt-sync")();


let tblch=["a", "e", "i", "o", "u", "y"]
let chaine=prompt("Entrer une chaîne ");

    

let tb=chaine.split("")
console.log("Nombre de voyelles",tb)


let count = 0; 

for (let i = 0; i < tb.length; i++) {
    if (tblch.includes(tb[i].toLowerCase())) {
        count++;
    }
}

console.log("Nombre de voyelles =", count);













//     if(chaine===
//     )
//     tb.map((ele)=>ele===)
// }



