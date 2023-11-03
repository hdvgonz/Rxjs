// import { interval, map, mergeMap, of, take } from "rxjs";

import { Observable, debounceTime, fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";

const letters$ = of('a', 'b', 'c');


letters$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i=> letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log("next: ", val),
//     complete: () => console.log('complete')
// });

//Stream
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map<KeyboardEvent, string>(({ target }) => target['value']),
    mergeMap<string, Observable<GithubUsersResponse>>(event =>  ajax.getJSON(`https://api.github.com/search/users?q=${event}`)),
    map<GithubUsersResponse, GithubUser[]>( ({items}) => items),

)

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(console.log);


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map<KeyboardEvent, string>(({ target }) => target['value']),
    mergeMap( texto => ajax.getJSON(`${url}${texto}`)),
).subscribe(console.log);














// const letters = of('a', 'b', 'c');

// const result = letters.pipe(
//     mergeMap( x => interval(2000).pipe(
//         map( i => x + i),
//         take(3)
//     ))
// );

// result.subscribe(console.log);