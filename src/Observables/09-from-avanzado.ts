import {of, from}  from 'rxjs';


/**
 * of = tomar argumentos y genera una secuencia de valores
 * from = crea un observable en base a un array, objetos, promesas, iterables 
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.info('completed')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of([1,2,3,4,5]);
// const source$ = from('Daniel');

const source$ = from(  fetch('https://api.github.com/users/klerith'));

//Haciendolo con Fetch
// source$.subscribe( async (resp) =>{

//     console.log(resp);

//     const dataResp =  await resp.json();

//     console.log( dataResp)
// });

const miGenerador = function*() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (const id of MiIterable) {
//     console.log(id)
// }

from( miIterable ).subscribe( observer )