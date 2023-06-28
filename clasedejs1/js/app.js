//String
let nombre = "José";
let apellido = "FERNANDEZ";
let frase = "              Bienvenidos a la clase           ";

//concatenación
console.log(nombre + " " + apellido);
console.log(nombre, apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos propiedades
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log("El apellido tiene " + apellido.length + " Caracteres");

//eliminar los espacios delante y detrás de un string
let fraseSinEspacio = frase.trim();

//si quiero quitar los espacios en blanco del medio
let sinEspacio = fraseSinEspacio.split(" ");
console.log(sinEspacio.join(""));

//obtener una o varias letras
console.log(apellido.at(0));
console.log(apellido.at(-1));

console.log(apellido.substring(2, 6));

// Tarea 1
// ------------
// 1 - ingreso el apellido
let apellidotarea = "PARADI";
console.log(apellidotarea);
// 2 - calcular cantidad de caracteres
console.log(apellidotarea.length);
// 3 - obtener la última letra del apellido
console.log(apellidotarea.at(-1));
// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
let palabratarea = "marmota";
// 1 - Pasarla a mayuscula
console.log(palabratarea.toUpperCase());
// 2 - Capitalizar la palabra (Marmota)
console.log(palabratarea.at(0).toUpperCase()+palabratarea.substring(1).toLowerCase());





