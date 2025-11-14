const prompt = require("prompt-sync")();

let array=[]

for(let i=1;i<=10;i++){
    let nbr=parseFloat(prompt("entrer le nombre :"));
    array.push(nbr);
    
    
    
}
const newarray=array.reduce((acc,cur)=>acc+cur,0)

console.log("tableau =",array)
console.log("la somme =",newarray)
console.log("la moyanne =",newarray/array.length)
