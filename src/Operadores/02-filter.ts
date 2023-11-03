import { filter, from, fromEvent, map, range, tap } from "rxjs";

interface Personaje {
    tipo: string;
    nombre: string;
}

const observer = {
    next: x => console.log("Value: ", x),
    error: err => console.error("Error: ", err)
}

const numb$ = range(30,40);

// numb$.pipe(
//     filter(num => num % 2 === 1),
    
// ).subscribe(console.log)

// numb$.pipe(
//     filter((num, index) => {
//         console.log({index: index})
//         return num % 2 === 1
//     }),
    
// ).subscribe(console.log)

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Superman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];


// const pers$ = from(personajes)

// pers$.pipe(
//     filter( per => per.tipo === "heroe"),
//     map( per => per.nombre)
// ).subscribe( console.log  )

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code),
    filter( key => key === 'Enter')
);

keyup$.subscribe( console.log)