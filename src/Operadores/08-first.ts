import { first, fromEvent, map, take, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map( ({clientX, clientY})=>({
    clientX, clientY
    }) ),
    first( event => event.clientX >= 100)
    // map( event => ({
    //     clientY: event.clientY,
    //     clienteX: event.clientX
    // }) )
    // first<PointerEvent>( event => event.clientY >= 150),
)
    .subscribe({
        next: val => console.log('next: ', val),
        complete: () => console.log('Complete')
    });

