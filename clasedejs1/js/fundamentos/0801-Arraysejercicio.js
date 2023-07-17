//  Escribe un programa que pida una frase, devuelva la cantidad de vocales que tiene la frase y muestre en consola cuales son.

let frase = prompt ("Ingrese una frase");
let vocales = "";
for (let index = 0; index < frase.length; index++) {
 const elemento = frase[index].toLowerCase();
 if (elemento == "a" || elemento == "e" || elemento == "i" || elemento == "o" || elemento == "u"){
  console.log (frase[index]);
  vocales = vocales + frase[index]; 
 }
}
console.log (vocales);
console.log (vocales.length);


// Otra forma de hacerlo 


 let frase = prompt ("Ingrese una frase");
 let contador = 0;
 for (let index = 0; index < frase.length; index++) {

 if (frase[index] == "a" || frase[index] == "e" || frase[index] == "i" || frase[index] == "o" || frase[index] == "u"||frase[index] == "A" || frase[index] == "E" || frase[index] == "I" || frase[index] == "O" || frase[index] == "U"
 )}
console.log (frase[index]);
contador = contador +1;
console.log (contador);

// Otra forma de hacerlo - profesor en clase
//Función

const encontrarVocales = function (frase = prompt("Ingrese una frase")) {
    let vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
    let vocalesEncontradas = [];
  
    if (frase == null) {
      return `El usuario canceló la ejecución`;
    }
  
    if (frase == "") {
      return `No ingresó ninguna frase`;
    }
  
    let arrayLetras = frase.toLowerCase().split("");
  
    for (let i = 0; i < arrayLetras.length; i++) {
      if (vocales.includes(arrayLetras[i])) {
        vocalesEncontradas.push(arrayLetras[i]);
      }
    }
  
    if (vocalesEncontradas.length > 0) {
      return `Se encontraron ${vocalesEncontradas.length} vocales, las mismas son ${vocalesEncontradas}`;
    } else {
      return `No Se encontraron vocales`;
    }
  };