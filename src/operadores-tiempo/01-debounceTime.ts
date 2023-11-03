/**debounceTime: si se emite un valor en el observable externo, cancela cualquier observable interno en curso y comienza uno nuevo. Mantiene el orden original de las emisiones. es decir, si hay una emisión en el observable externo y una emision en el observable interno, el observable interno se cancela y el observable externo se emite. Ejemplo
 * 
 * debounceTime(1000) llega b, pero antes de que transcurra 1000 ms se emite c. b se cancela y se emite c, siempre hace seguimiento de la ultima emisión.
 */

import { debounceTime, distinctUntilChanged, fromEvent, interval, map, take } from "rxjs";

// const clicks = fromEvent(document, "click");

// const result = clicks.pipe(
//     debounceTime(1000)
// ).subscribe({
//     next: v => console.log(v),
//     complete: () => console.log("complete")
// });

/**EJEMPLO 2 */

const input = document.createElement("input");
input.placeholder = "Type something";
document.querySelector('body').appendChild(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$.pipe(
    
    map((ev) => ev.target['value']),
    debounceTime(1000),
    distinctUntilChanged(),
).subscribe(console.log);