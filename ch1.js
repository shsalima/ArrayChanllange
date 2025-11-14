const prompt = require("prompt-sync")();
let array=[]

for(let i=1;i<=5;i++){
    let nbr=prompt("entrer l'entier :")
    array.push(nbr);



  

}

console.log("le tableau =",array);
console.log("le tableau est invercer =",array.reverse())