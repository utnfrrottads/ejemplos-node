var lista=['a', 'blanco',15,true,{nombre:"juan",apellido:"perez"}]

console.log("tradicional")
lista.forEach(function(element, i){
  console.log(i+": "+JSON.stringify(element));
});

console.log("\n\nlambda single param");
lista.forEach( element => console.log(JSON.stringify(element)))

console.log("\n\nlambda multiple params");
lista.forEach( (element,i) => console.log(i+": "+JSON.stringify(element)))

console.log("\n\nlambda multi line");
lista.forEach( (element,i) => {
  let s=JSON.stringify(element);
  console.log(i+": "+s)
})
