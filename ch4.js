const prompt = require("prompt-sync")();

let array=[]

for(let i=1;i<=3;i++){
    let mot=prompt("entrer le chaine de caractére :");
    array.push(mot);
}
 let nomCh=prompt("entrer le mot qui vas chercher :");
 console.log("tableau des mots :",array)
  const cherN = array.includes(nomCh);
  if(cherN ){
     const pos=array.indexOf(nomCh)

    console.log(`le mot ${nomCh} est existe dans la position ${pos}`)

  }
  else{
    console.log("le mot n'exste pas")
  }


