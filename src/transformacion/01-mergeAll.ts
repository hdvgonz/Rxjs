// import { fromEvent, interval, map, mergeAll, pipe, take } from "rxjs";

import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);


//Helpers
const mostrarUsuarios = (usuarios: GithubUser[])=> {
    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver Pagina';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ');
        li.append( anchor );

        orderList.append(li);

    }
}


//Stream
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map<KeyboardEvent, string>(({ target }) => target['value']),
    map<string, Observable<GithubUsersResponse>>(event =>  ajax.getJSON(`https://api.github.com/search/users?q=${event}`)),
    mergeAll(),
    map<GithubUsersResponse, GithubUser[]>( ({items}) => items),

).subscribe(mostrarUsuarios);





















// const click$ = fromEvent(document, 'click');
// const higherorder = click$.pipe(
//     map( () => interval(1000)),
// )
// const firstOrder = higherorder.pipe(mergeAll());

// firstOrder.subscribe(x => console.log("x: ", x));

// const click$ = fromEvent(document, 'click');
// const higherorder = click$.pipe(
//     map( () => interval(1000).pipe(take(10))),
// )
// const firstOrder = higherorder.pipe(mergeAll(2));

// firstOrder.subscribe(x => console.log("x: ", x));