//Sigue emitiendo los valores del primer obvservable, hasta que el segundo observable emita su primer valor

import { fromEvent, interval} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');

boton.innerText = 'Detener Timer';

document.querySelector('body').appendChild(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(

    takeUntil(clickBtn$)

).subscribe({
        next: v => console.log('Next: ', v),
        complete: () => console.log('Complete')
    });
