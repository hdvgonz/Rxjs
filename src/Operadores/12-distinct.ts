/**distinct() es un operador en la biblioteca RxJS que se utiliza para eliminar los elementos duplicados en un flujo de datos. Cuando se aplica distinct() a un flujo de datos, solo se emite el primer valor que se encuentra para cada valor único en el flujo. Los valores duplicados posteriores son ignorados. */

import { distinct, of } from "rxjs";


const number$ = of<Array<number>>(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7);

number$.pipe(
    distinct()
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});

// const obj$ = of(
//     {name: "Daniel", age: 20, surName:"Gonzalez"},
//     {name: "Juan", age: 20, surName:"Gonzalez"},
//     {name: "Carlos", age: 20, surName:"Amaris"},
//     {name: "Maria", age: 20, surName:"Ortega"},
//     {name: "Carlos", age: 20, surName:"Ortíz"},
// )

// obj$.pipe(
//     distinct(({surName})=> surName)
// ).subscribe(
//     console.log
// )