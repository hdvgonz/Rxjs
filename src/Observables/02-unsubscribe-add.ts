import { Observable, Observer, Subscription } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed')
};


const interval$ = new Observable<number>(subscriber => {

    let contador: number = 0;

    const intervalo = setInterval(() => {
        contador++;
        subscriber.next(contador);
        console.log(contador);
        
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(intervalo);
        console.log("Intervalo terminado");
    }

});

const sub1 = interval$.subscribe( observer )
const sub2 = interval$.subscribe( observer )
const sub3 = interval$.subscribe( observer )

//Encadenando subscripciones

// sub1.add(sub2.add(sub3)); //Forma 1

const allSubs = new Subscription()
allSubs.add(sub1);
allSubs.add(sub2);
allSubs.add(sub3)

setTimeout(() => {
    // sub1.unsubscribe()
    // sub2.unsubscribe()
    // sub3.unsubscribe()

    allSubs.unsubscribe()
    
    console.log("Completado timeout")

}, 6000);




/**
 * Es necesario hacer el return ()=>{} con la destrucción del intervalo, ya que aunque se realice el unsubscribe del observable, el setInterval sigue emitiendo valores lo cual podría llevar a una fuga de memoria.
 */