import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completed [obs]')
}



const obs$ = new Observable<string>(subscriber => {
    subscriber.next('despues');
    subscriber.next('te comento');

    //Forzar error
    // const a = undefined;
    // a.nombre = 'Fernando'

    subscriber.complete();
});

//** formas de suscribirse **/
/* #1
obs$.subscribe(observer);

**#2**
obs$.subscribe(console.log)

obs$.subscribe({
        next: valor => console.log('next: ', valor),
        error: error => console.warn('error: ', error),
        complete:() => console.info('complete')
           
});
*/








