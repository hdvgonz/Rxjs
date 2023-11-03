import { auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, "click");


click$.pipe(
    tap( val => console.log("tap: ", val)),
    auditTime(2000),
    map(({x, y}) => ({x, y})),
)
.subscribe( console.log );