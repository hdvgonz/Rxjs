import {range, of,asyncScheduler} from 'rxjs'

// const number = range(1,9);

// number.subscribe({
//     next: (valor) => console.log({valor}),
//     complete:() => console.log("Completed")
    
// });

// const src$ = of<Array<number>>(1,2,3,4,5);
const src$ = range(1,10, asyncScheduler); //Empieza en la primera posicion y emite los 10 valores siguientes

console.log("Inicio");

src$.subscribe(console.log);

console.log("Fin");
