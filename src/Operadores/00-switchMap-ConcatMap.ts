import { fromEvent, interval } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';

const source = fromEvent(document, 'click');

// source.pipe(
//   concatMap(() => interval(1000).pipe(take(3)))
// ).subscribe(val => {
//   console.log(val);
// });

source.pipe(
  switchMap(() => interval(1000).pipe(take(3)))
).subscribe(val => {
  console.log(val);
});

/**
 * concatMap: Procesa observables internos en orden secuencial y espera a que cada uno de ellos termine antes de pasar al siguiente. Mantiene el orden original de las emisiones.
 * 
 * switchMap:Tan pronto como se emite un nuevo valor en el observable externo, cancela cualquier observable interno en curso y comienza uno nuevo.
 */