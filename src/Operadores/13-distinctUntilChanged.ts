/**El operador distinctUntilChanged es un operador de RxJS que se utiliza para filtrar los valores emitidos por un observable, asegurándose de que solo se emitan los valores que sean diferentes al último valor emitido.
 * 
Podemos usar el operador distinctUntilChanged para filtrar los valores emitidos por un observable, asegurándose de que solo se emitan los valores que sean diferentes al último valor emitido. */

import { from, of } from "rxjs";
import { distinctUntilChanged, tap } from "rxjs/operators";

// const number$ = of(1, 1, 2 ,2, 3, 4, 5, 4, 3, 3, 2, 1);

// number$.pipe(
//     distinctUntilChanged()
// ).subscribe(console.log);

const heroes = [
    { name: 'batman' },
    { name: 'Xmen' },
    { name: 'Xmen' },
    { name: 'superman' },
    { name: 'spiderman' },
    { name: 'batman' },
    { name: 'batman' },
    { name: 'spiderman' },
];

from(heroes).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.name === actual.name )
).subscribe(console.log)

//Podemos proveer un comparador personalizado para chequear que los cambios emitidos son solo en una dirección, ejemplo, si quiero obtener el proximo record de temperatura. Cada vez que se evalua como true, la filtra y no la deja pasar

const temp$ = of(30, 31, 20, 34, 33, 29, 40, 55, 5);

const recordHigh$ = temp$.pipe(

    distinctUntilChanged( (tempAnterior, temp) => {
        return temp <= tempAnterior;
    }),
    tap( (temp)=> console.log({temp}) )
    
);

recordHigh$.subscribe(console.log);