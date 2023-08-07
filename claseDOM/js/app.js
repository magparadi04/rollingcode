//Ejercicio 1 ------------------------------------------------

let botonUno = document.querySelector("#Botonuno");
let parrafoDos = document.querySelector("#parrafo2");

const cambiarColorFondo = ()=>{
    parrafoDos.style.backgroundColor = obtenerColor();
};

const obtenerColor = () => {
    const colores = [ "red", "green", "yellow", "orange", "pink"];
    const index = Math.floor(Math.random() * colores.length);
    return colores[index];
}

//Ejercicio 2---------------------------------------

let contador=0;
let parrafoContador=document.querySelector("#parrafoContador");

const contadorDeClicks = () => {
    contador++;
    parrafoContador.innerText=`Total de Clicks ${contador}`;
}

//Ejercicio 3 ---------------------------------------
let parrafoUno=document.querySelector("#parrafo1");

const cambiarColorP1 = () => {

    parrafoUno.style.backgroundColor="red";
    parrafoUno.style.color="white";
}

//Ejercicio 4------------------------------------------

let intervalo=null;
let reloj = document.querySelector("#reloj");

const fechaActual= ()=> {
    let fecha = "";
    intervalo = setInterval(() => {
        fecha= new Date ();
        reloj.innerText=fecha;
    }, 1000);
}

//Ejercicio 5-----------------------------------------
let listaTareas=document.querySelector("#listaDeTareas");
let imputTarea=document.querySelector("#input1");

const agregarTarea = (event) =>{
    event.preventDefault();
    const tarea=imputTarea.value;
    let tareaItem=document.createElement("li");
    tareaItem.innerText=tarea;
    listaTareas.appendChild(tareaItem);
}

//Ejercicio 6 --------------------------------------------
let parrafo4=document.querySelector("#parrafo4");

const aumentarTamano =()=>{
parrafo4.style.fontSize="30px";
}

const disminuirTamano =()=>{
    parrafo4.style.fontSize="8px";  
}