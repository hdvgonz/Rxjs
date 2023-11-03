import { map, range, tap } from "rxjs";


const number$ = range(1, 5);

number$.pipe(
    tap<number>(x => console.log('Antes ', x)),
    map(x => x * 9),
    tap({
        next: valor => console.log('Después: ', valor),
        complete: ()=> console.log('Completado')
    })
)
.subscribe(val => console.log('subs: ', val));

