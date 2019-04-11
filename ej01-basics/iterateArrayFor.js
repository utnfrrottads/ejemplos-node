var lista=['a', 'blanco',15,true,{nombre:"juan",apellido:"perez"}]

for (let i=0; i<lista.length;i++){
  console.log(i+": "+JSON.stringify(lista[i]));
}
