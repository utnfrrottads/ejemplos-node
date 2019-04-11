var lista=['a', 'blanco',15,true,{nombre:"juan",apellido:"perez"}];

function log(texto){
  console.log("log: ");
  console.log(texto);
}

function log2(texto){
  console.log("log2: "+texto);
}

function log3(texto){
  log2(JSON.stringify(texto));
}


function hacerAlgo(callback, item){
  console.log("Hacer algo");
  //item.forEach(function(elem,i,err){
  //  callback(elem);
  //})
  item.forEach(callback);
}

hacerAlgo(log,lista);
console.log("\n\n");
hacerAlgo(log2,lista);
console.log("\n\n");
hacerAlgo(log3,lista);
