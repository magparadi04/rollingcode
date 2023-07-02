// Math
let decimal = 34.789033333333;

//Redondear Números
console.log(Math.floor(decimal)); //redondea para abajo, sin tener en cuenta el valor despues de la coma
console.log(Math.ceil(decimal)); //redondea para arriba, sin tener en cuenta el valor despues de la coma
console.log(Math.round(decimal)); //redondea el numero dependiendo del valor despues de la coma.
console.log(Math.max(56, 251.52, -52, 456)); // tira el valor maximo
console.log(Math.min(56, 251.52, -52, 456)); // tira el valor minimo
let numeroString = "67.235897113";
let numeroEntero = parseInt(numeroString); // convertir a numero entero
let numeroFlotante = parseFloat(numeroString); // convertir a decimales
console.log(Math.round(numeroFlotante * 100) / 100);
console.log(parseFloat(numeroFlotante.toFixed(2)));

let numeroBase = numeroEntero;
let exponente = 3;

console.log(Math.pow(numeroBase, exponente)); // potencia

console.log(Math.sqrt(numeroFlotante)); // Raiz cuadrada

console.log(Math.ceil(Math.random() * 10)); // tirar numeros random

// programa que reciba dos numeros y los multiplique entre si

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

let numerosMultiplicados = num1 * num2;

console.log(
  `El valor de multiplicar ${num1} con ${num2} es ${numerosMultiplicados}`
);
document.write("Hola Mundo!!"); //para escribir en el navegador

//Ejercicio

let cajaChica = 5000;

if (cajaChica > 0) {
  console.log(`Hay $${cajaChica} en la caja chica para iniciar el dia`);
} else {
  console.log(`No hay una moneda`);
}
