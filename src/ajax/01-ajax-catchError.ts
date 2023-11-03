/**
 * catchError: se utiliza para manejar y controlar errores en observables, permitiendo ejecutar una lógica alternativa cuando se produce un error en lugar de finalizar el observable.
 */
import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax'

const url = 'https://api.github.com/users?per_page=5';


const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
        console.warn('Error en: ', err.message);
        return of([])
    }


const fetchPromesa = fetch(url);

// fetchPromesa.then( resp => resp.json() )
//             .then(data => console.log('data: ', data))
//             .catch( err => console.warn( 'error en usuarios: ', err) )

/**Esto evita que siga ejecutandose las peticiones, ya que al encontrar un error, se dispara un catch */
// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuarios: ', err));

ajax( url ).pipe(
    map( resp => resp.response),
    catchError(atrapaError),
)
.subscribe( users => console.log('users: ', users) );
