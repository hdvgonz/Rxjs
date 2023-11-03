import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

//referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Loading...';
const body = document.querySelector('body');

//Stream

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe( resp => {
    if(resp === true){
        body.append( loadingDiv );
    }else{
        document.querySelector('.loading').remove();
    }
        console.log(resp);
    })
