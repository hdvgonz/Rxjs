import {Observable, of} from 'rxjs';

// const obs$: Observable<number> = of(1, 2, 3, 4, 5, 6);

const obs$ = of<Array<number>>(...[1,2, 3, 4, 5],2,3);

// const obs$ = of({a:1, b:2}, [3, 4], function(){}, true, Promise.resolve(true))

console.log("---Inicio Observable (OF)---")
obs$.subscribe({
    next:(value)=>console.log("next: ", value),
    error:(error)=> console.error("error: ",error),
    complete: ()=> console.info("COMPLETED")
})

console.log("---Fin Observable (OF)---")

