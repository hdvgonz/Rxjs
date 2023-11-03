import { from, fromEvent, map, takeWhile, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(

    map( ({x, y}) =>({
        x, y
    }) ),
    takeWhile( ({y}) => y <= 150)

).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completed')
});


// const numbers$ = from([1,2,3,4,  5,6,7,8,9,10]);

// numbers$.pipe(
//     // tap( (v)=> console.log('tap: ', v) ),
//     takeWhile( v => v < 4, true)
// ).subscribe({
//     next: (v)=> console.log('next: ', v),
//     complete: ()=> console.log("Completed")
// })