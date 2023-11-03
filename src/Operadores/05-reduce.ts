import { interval, reduce, take, tap } from "rxjs";


const numbers = [1, 2, 3, 4, 5]

let totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0)

// console.log({total})


interval(1000).pipe(
    take(3),
    tap(val => console.log(val)),
    reduce(totalReducer, 2)
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('Complete')
    })