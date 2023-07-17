// Trabajo Practico 2
//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad)){
  console.log("La edad ingresada no es un numero valido");
} else if (edad > 18){
  console.log("Usted puede conducir");
} else {
  console.log("Usted no puede conducir");
}

// Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let calificacion = parseInt(prompt("Ingrese su calificación"));

if (isNaN(calificacion)){
  console.log ("Introduce un numero valido");
} 
else {
  switch (true) {
    case (calificacion <= 2): {
      console.log("Muy deficiente");
      break;
    } 
    case (calificacion == 3 || calificacion == 4): {
      console.log("Insuficiente");
      break;
    }
    case (calificacion == 5 || calificacion == 6): {
      console.log("Suficiente");
      break;
    }
    
    case (calificacion == 7): {
      console.log("Bien");
      break;
    }
    case (calificacion == 8 || calificacion == 9): {
      console.log("Notable");
      break;
    }
    case (calificacion == 10): {
      console.log("Sobresaliente");
      break;
    }
    default:{
      console.log ("Numero Erroneo");
    }

  }
}

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let lugar = prompt("Ingresa el nombre del lugar que eliges para vacacionar");
let vacacionar = "";

while (lugar) {
  if (vacacionar){
    vacacionar = vacacionar + " | " + lugar;
  }
  else{
    vacacionar = lugar;
  }
  lugar = prompt("Ingresa el nombre del lugar que eliges para vacacionar");
}

console.log(vacacionar);

//  4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let ingresenumero = parseInt(prompt("Ingresa el numero que deseas sumar"));
let sumatoria = 0;

while (ingresenumero) {
  if (isNaN(ingresenumero)){
    console.warn("Introduce un numero valido");
  } 
  else {
     sumatoria = sumatoria+ingresenumero;
  }
  ingresenumero = parseInt(prompt("Ingresa el numero que deseas sumar"));
}

console.log(sumatoria);
