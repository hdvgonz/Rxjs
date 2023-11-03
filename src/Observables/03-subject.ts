import { Observable, Observer, Subject } from 'rxjs';

/**
 * Los subscribers solo dejan de emitir una vez se completan o se llama al metodo unsubscribe
 */

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed')
};


const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
        ()=> subs.next(Math.floor(Math.random() *10)), 1000
    );

    return ()=>{
        clearInterval( intervalID );
        console.log("Intervalo Limpiado")
    }
});

// const sub1 = intervalo$.subscribe( rnd => console.log('sub1: ', rnd));
// const sub2 = intervalo$.subscribe( rnd => console.log('sub2: ', rnd));


/**
 * 1. Multicast (Casteo multiple)
 * 2. Un subject es también un Observer
 * 3. Tiene next, error y complete.
 * 4. Al subscribirse a él no invoca una nueva ejecución para entregar valores, si no que tiene una lista de observers y los va añadiendo a esta.
 */
const subject$ = new Subject()
const intervalSubjectSubscription =  intervalo$.subscribe( subject$ );

const sub1 = subject$.subscribe( observer);
const sub2 = subject$.subscribe( observer );

/*Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observable". Pero si la data es producida Fuera del observable es considerado un "Hot Observable" */

/**Los subject permiten insertar informacion al flujo de datos que el observable está emitiendo */

setTimeout(() => {
    
    subject$.next(10);
    
    subject$.complete();

    intervalSubjectSubscription.unsubscribe();

}, 3500);