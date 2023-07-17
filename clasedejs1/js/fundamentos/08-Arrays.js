let ciudad = prompt ("Ingrese una cuidad");
let ciudades = [];

while (ciudad){
    ciudades.push (ciudad);
    ciudad = prompt ("Ingrese una ciudad");
}
console.log(`La cantidad de ciudades agregadas es ${ciudades.length}`);

document.write(ciudades[0]);
document.write(ciudades[2]);
document.write(ciudades.at(-1));
ciudades.push("Paris");
document.write(ciudades[1]);
ciudades.splice(1,1,"Barcelona");