/**skip: ignora la cantidad de emisiones de un observable, ejemplo: skip(3), ignora las 3 primeras emisiones */
import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const boton = document.createElement('button');

boton.innerText = 'Detener Timer';

document.querySelector('body').appendChild(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes de skip')),
    skip(1),
    tap(() => console.log('tap despues de skip')),
)

counter$.pipe(

    takeUntil(clickBtn$)

).subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
});
