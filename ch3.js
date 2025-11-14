const prompt = require("prompt-sync")();

let ar=[]

for(let i=1;i<=8;i++){
    let x=Number(prompt("entrer le nombre :"));
    ar.push(x);
}
 let nbrCh=Number(prompt("entrer le mot qui vas chercher :"));
 console.log("tableau de nombre",ar)
  const cherN = ar.filter((ele) => ele===nbrCh);
  if(cherN ){
     const pos=ar.indexOf(nbrCh)

    console.log(`le nombre  ${nbrCh} est existe dans la position ${pos}`)

  }
  else{
    console.log("n'exte pase cette n^mbre")
  }


