/**Emite un valor, y si dentro del tiempo del delay se emiten valores, los ignora pero si llega uno después del segundo, los emite */

import {  asyncScheduler, distinctUntilChanged, fromEvent, map, throttleTime} from "rxjs";

const click$ = fromEvent(document, "click");

// click$.pipe(
//     throttleTime(3000)
// ).subscribe( console.log);

const input = document.createElement("input");
input.placeholder = "Type something";
document.querySelector('body').appendChild(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

/**uso asyncScheduler para que el delay sea en milisegundos y leading: true para que emita el primer valor y trailing: true para que emita el ultimo */
input$.pipe(
    throttleTime(2000, asyncScheduler,{
        leading:false,
        trailing:true
    }),
    map((ev) => ev.target['value']),
    distinctUntilChanged(),
).subscribe(console.log);

