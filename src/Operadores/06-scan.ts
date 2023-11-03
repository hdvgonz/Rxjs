import { from, interval, map, reduce, scan, startWith, tap } from "rxjs";

const firstW = [0, 3];

// An endless stream of Fibonacci numbers.
const fibonacci$ = interval(1000)
    .pipe(
        //Scan to get the fibonnaci numbers(after 0,1)
        scan(([a, b]) => [b, a + b], firstW),
        //Get second number in tuple, it's the one you calculated

        map(([, n]) => n),
        tap(console.log),
        //Start with our first two digit
        startWith(...firstW),
        tap(console.log),
    );

// fibonacci$.subscribe(console.log);


const numbers = [1,2,3,4,5];

const totalAcumulador = (acc: number, cur: number) => acc + cur;

//Reduce

// from( numbers ).pipe(
//     reduce( totalAcumulador, 0)
// )

// .subscribe(console.log)

//Scan
from( numbers ).pipe(
    scan( totalAcumulador, 0)
)

.subscribe(console.log)

//Redux

interface User{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number
}
const user: User[] = [
    {id:'dan', autenticado:false, token: null, edad:34},
    {id:'dan', autenticado:true, token: 'ABC', edad:34},
    {id:'dan', autenticado:true, token: 'Abc123', edad:34}
];

const state$ = from( user ).pipe(
    scan<User, User>( (acc, cur) => {
        return {...acc, ...cur}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map( state => state)
)

id$.subscribe( console.log )