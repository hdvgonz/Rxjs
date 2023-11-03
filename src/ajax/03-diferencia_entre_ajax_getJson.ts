import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'


const url = 'https://httpbinx.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'mi-token': 'ABC123'
// }).pipe(
//     catchError(manejaError)
// );

// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

// obs$
//     .subscribe(data => console.log('getJSON: ', data))

// obs2$
//     .subscribe(data => console.log('ajax: ', data));


const obs$ = ajax.getJSON(url)

obs$.pipe(catchError(manejaError))
    .subscribe({
        next: data => console.log('next: ', data),
        error: err => console.warn('error en subs: ', err),
        complete: () => console.log('complete')
    })

// const obs2$ = ajax(url)


