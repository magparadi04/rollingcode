Trabajo Practico 1
// ejercicio 1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// console.warn ("un mensaje");

// document.write ("un mensaje");

alert ("un mensaje");


 //ejercicio 2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

 document.write ("Hello World");

 // ejercicio 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.


 document.write (`El resultado es ${3+5}`);

 // ejercicio 4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

 let nombreUsuario = prompt (`ingrese su nombre`)
 console.log (`Hola ${nombreUsuario}!`);

 // ejercicio 5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números

 let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

console.log(
  `El valor de sumar ${num1} con ${num2} es ${num1+num2}`
);

// ejercicio 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


let num3 = parseInt(prompt("Ingrese el tercer número"));
let num4 = parseInt(prompt("Ingrese el cuarto número"));
let num5 = Math.max (num3, num4);

console.log(
    `El ${num5} es el número más grande`
  );

  // ejercicio 7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

  let num6 = parseInt(prompt("Ingrese el sexto número"));
  let num7 = parseInt(prompt("Ingrese el septimo número"));
  let num8 = parseInt(prompt("Ingrese el octavo número"));
  let num9 = Math.max (num6, num7, num8);
  
  console.log(
      `El ${num9} es el número más grande`
    );

    // ejercicio 8 Escribe un programa que pida un número y diga si es divisible por 2

    let numeroUsuario = parseInt (prompt("Ingrese un número para dividir en 2"));
    let resto = numeroUsuario % 2
    
    if (resto==0){
console.log (`El numero ${numeroUsuario} es divisible por 2`)
    }else{
        console.log (`El numero ${numeroUsuario}  No es divisible por 2`)
    }
