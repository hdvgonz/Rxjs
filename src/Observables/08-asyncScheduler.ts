import { asyncScheduler } from "rxjs"

//Async Scheduler no crea un observable, crea una subscripción

//asyncScheduler es como si hicieramos un setTimeout o un setInterval y le pasaramos una tarea para hacer. De hecho puede realizar ambas instrucciones pero más controladas:

// setTimeout(() => {},3000);
// setInterval(() => {},3000);

const saludar = () => console.log("Hola a todos");

const saludar2 = (nombre: string) => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 2000)

// asyncScheduler.schedule(saludar2, 3000, "Daniel"); // realmente aqui no puedo mandar el argumento, lo que estoy mandando es el estado, por lo cual al pasar los tres segundos, se ejecuta la tarea.

//la funcion que se va a ejecutar no puede ser una funcion flecha.
const sub = asyncScheduler.schedule( function(state){

    console.log("state", state);

    //Para converirlo realmente a un intervalo, debemos volver a llamar el schedule cambiando el valor del estado que quiero que sea pasado a la siguiente llamada y llamar esta funcion es la razón por la cual no puede ser una función de flecha.
    this.schedule( state + 1, 2000);

}, 3000, 0); //Paso la funcion, luego el delay y luego el valor inicial del state

// setTimeout(() => {
//     sub.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> sub.unsubscribe(), 6000);