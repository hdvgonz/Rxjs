/*exhaustMap: Cuando se emite un nuevo observable en el source y aún no se completa la suscripcion interna anterior, ignora totalmente el nuevo observable. */

import { exhaustMap, fromEvent, interval, take } from "rxjs";

const click$ = fromEvent(document, "click");

const interval$ = interval(1000).pipe( take(3) );


click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log);