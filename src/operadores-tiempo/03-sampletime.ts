import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent< PointerEvent >(document, "click");

//Coloco el sampleTime primero y luego el map para hacer un "ahorro de procesamiento" porque primero pongo el delay y luego el mapeo la información, de lo contrario, el mapeo se ejecuta antes del delay y empieza a hacer procesamientos para luego solo emitir el último.
click$.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y})),
).subscribe( console.log );