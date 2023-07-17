// Prácticas con arreglos y funciones
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
document.write("Lista de Meses");
document.write("<ul>");
document.write(`<li> ${meses[0]} </li>`);
document.write(`<li> ${meses[1]} </li>`);
document.write(`<li> ${meses[2]} </li>`);
document.write(`<li> ${meses[3]} </li>`);
document.write(`<li> ${meses[4]} </li>`);
document.write(`<li> ${meses[5]} </li>`);
document.write(`<li> ${meses[6]} </li>`);
document.write(`<li> ${meses[7]} </li>`);
document.write(`<li> ${meses[8]} </li>`);
document.write(`<li> ${meses[9]} </li>`);
document.write(`<li> ${meses[10]} </li>`);
document.write(`<li> ${meses[11]} </li>`);
document.write("</ul>");

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.

let ciudad = prompt("Ingrese una ciudad");
let ciudades = [];

while (ciudad){
    ciudades.push(ciudad);
    ciudad = prompt("Ingrese una ciudad");
}

console.log(`La cantidad de ciudades ingrsadas son ${ciudades.length}`);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write("<ul>");
document.write(`<li> ${ciudades[0]} </li>`);
document.write(`<li> ${ciudades[2]} </li>`);
document.write(`<li> ${ciudades.at(-1)} </li>`);
document.write("</ul>");
// Añade en última posición la ciudad de París.
ciudades.push("Paris");
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<p> ${ciudades[1]}</p>`);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1,1,"Barcelona");

// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let apariciones = [];

for (let index = 0; index < 50; index++) {
    let dado1 = Math.ceil(Math.random()*6);
    let dado2 = Math.ceil(Math.random()*6);
    let sumaDeDados = dado1+dado2;
    apariciones.push(sumaDeDados);
}
console.log(apariciones);

// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function paroImpar(numeroUsuario){

    let resto=numeroUsuario/2

    if(resto==0){
       return `El número ${numeroUsuario} es par`;
    }
    else{
       return `El número ${numeroUsuario} es impar`;
    }
}

let numeroUsuario=parseInt(prompt("Ingrese un numero entero"));
let resultado = paroImpar(numeroUsuario);
document.write(resultado);

// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let ladoA=parseInt(prompt("Ingrese la longitud del lado A"));
let ladoB=parseInt(prompt("Ingrese la longitud del lado B"));

function calcularPerimetro (alto, ancho){

    return (2*(alto+ancho));

}
let perimetro = calcularPerimetro(ladoA, ladoB);
document.write(`El perimetro es ${perimetro}`);