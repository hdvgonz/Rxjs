import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


//Helper
const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map(({ response }) => response['token']),
    catchError(err => of('Not valid token'))
    );
//Creando un formulario
const form = document.createElement('form');
let inputEmail = document.createElement('input');
let inputPass = document.createElement('input');
let submitBtn = document.createElement('button');

//Configuraciones

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

//Streams

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value,
    })),
    exhaustMap(peticionHttpLogin),
    //switchMap(peticionHttpLogin)
    //mergeMap(peticionHttpLogin)

);


submitForm$.subscribe(token => console.log(token));