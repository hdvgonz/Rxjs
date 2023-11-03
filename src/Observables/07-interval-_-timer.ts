import { interval, take, timer } from "rxjs";

// const numbers = interval(1000);

// const takeFiveNumbers  = numbers.pipe(take(5));


// takeFiveNumbers.subscribe( x => console.log({x}));

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log("Completed")
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5);


const interval$ = interval(1000);
// const timer$ = timer(2000);
//const timer$ = timer(2000, 1000);// Inicie mi secuencia cada segundo, después de dos segundos
const timer$ = timer( hoyEn5 );


console.log("Inicio");

timer$.subscribe(observer)
// interval$.subscribe(observer);

console.log("Fin");

//Al colocar el timer el observer se completa después de los segundos que se fijen en él, pero aun así el interval se sigue ejecutando