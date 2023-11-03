import { fromEvent, range } from 'rxjs'
import {map} from 'rxjs/operators'

/**
 * Mapping every click to the clientX position of that click:
 

const clicks = fromEvent<PointerEvent>(document, 'click');

clicks.pipe(
    map( (ev) => console.log(ev.clientX) )
).subscribe( x => console.log) 
*/


/*
range(1,6).pipe(
    map<number,number> (x => x *10)
).subscribe(console.log)
*/

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');


// keyup$.subscribe( val => console.log("map: ", val.key))

/** 
keyup$.pipe(
    map( ({key}) => key)
).subscribe( data => console.log("tecla: ", data))
*/


keyup$.pipe(
    map( ({code}) => code)
).subscribe( data => console.log("keyCode: ", data))