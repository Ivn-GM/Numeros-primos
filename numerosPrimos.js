// TE DICE SI EL NÚMERO ES PRIMO O NO
/*
let numero = prompt("Escribe un número");
let numeroReal = parseInt(numero);
let primo = 1; 

for (let i = 2; i < numeroReal; i++) {
  if (numeroReal % i == 0) { 
    primo = 0;
    console.log("No es primo");       
    break;
  } 
}


if (primo == 1) {
  console.log("Es primo");
}
*/


// TE MUESTRA TODOS LOS NÚMEROS PRIMOS PREVIOS AL ESCRITO

let numero = prompt("Escribe un número");
let numeroReal = parseInt(numero);
let primo = 0; 

for (let i = 2; i < numeroReal; i++) {
  primo = 1;  
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      primo = 0;
      break;
    }
  }
  if (i > 1 && primo == 1) {
  console.log(i);
  }
}













