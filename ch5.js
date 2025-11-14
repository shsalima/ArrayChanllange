const prompt = require("prompt-sync")();

let ARR=[]

for(let i=1;i<=7;i++){
    let nombr=prompt("entrer un nombre:");
    ARR.push(nombr)
}

console.log(" tableau = ",ARR)
console.log(" nouvelle tableau  ordrer plus grand à nombre petite = ",ARR.sort((a,b)=>b-a))