const prompt = require("prompt-sync")();

let table=[];



for(let i=1;i<=4;i++){
    let nbr=Number(prompt("donnez nombre pour ajouter dans le tableau:"));
    table.push(nbr)
    
    
    
}
const car=table.map((ele) => ele *ele)
console.log(" le table de nombre = " ,table)
console.log(" le table de nombre carré = " ,car)

