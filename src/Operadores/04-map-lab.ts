import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus blandit sem a ornare. Aliquam gravida enim congue leo cursus, non placerat massa accumsan. Nulla at ipsum eget massa aliquet faucibus. Mauris ut diam vulputate, suscipit eros nec, placerat enim. Maecenas dapibus enim et dolor convallis, vel viverra purus gravida. Sed rutrum felis vitae justo porttitor ultricies. Fusce blandit congue arcu nec molestie. Quisque egestas, nunc sit amet scelerisque ultrices, purus est vulputate arcu, hendrerit auctor quam augue et erat. Maecenas mollis pulvinar arcu, vitae vehicula sapien molestie at. Morbi posuere laoreet dui, et hendrerit odio facilisis cursus. Cras tempus elementum nisl, a pharetra felis.
<br/><br/>
Morbi eleifend enim vitae sapien commodo, at egestas nisl tristique. Pellentesque nibh diam, tempor bibendum elit eu, tincidunt mollis augue. Sed at justo lobortis, vulputate nunc ut, venenatis tortor. Nulla facilisi. Morbi dictum dolor sed tortor ullamcorper, ac porta urna ullamcorper. Aenean sodales massa eu dolor suscipit, quis sodales nisl dignissim. Proin venenatis ipsum eget ex tempor, a pharetra odio dapibus. Aliquam ut ultricies mi. Vestibulum blandit eleifend ultrices. Donec nec aliquam felis, ut rhoncus nunc. Aliquam egestas condimentum mattis. Nulla fermentum hendrerit rutrum.
<br/><br/>
Nunc semper viverra ex et interdum. Aliquam erat volutpat. Fusce facilisis, nunc eget tempus mollis, nibh est tincidunt arcu, eu consequat ipsum risus ac nibh. Ut lobortis consectetur nisl, at fringilla libero sodales eu. Proin sit amet lacus ac ex posuere fermentum. Pellentesque eget placerat leo. In at ligula nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ultricies interdum lorem, ac suscipit urna congue in. Donec viverra porttitor nisl ac vulputate. Duis commodo viverra augue, sit amet pharetra enim finibus quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dictum pellentesque placerat. Aliquam et gravida odio.
<br/><br/>
Morbi molestie mauris at justo porttitor dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ultrices ac nibh efficitur molestie. Nam dictum erat ligula, sit amet placerat arcu elementum a. Aenean rutrum lectus sapien, vehicula ornare ex sagittis non. Cras facilisis aliquet auctor. Phasellus gravida tempor tortor, sed posuere quam congue at. Nunc tincidunt tortor purus, sit amet imperdiet mauris elementum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed egestas velit at urna lobortis, eget tempus erat ultrices. Aliquam at arcu auctor, pellentesque tortor sit amet, varius felis. Phasellus sodales sed urna vel dapibus. Pellentesque quis ex mollis, mattis tellus sit amet, convallis ligula. Cras volutpat enim lorem, nec lobortis lectus cursus non. Praesent sit amet varius arcu, sit amet tempus erat.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
<br/><br/>
Praesent eu nibh mauris. Sed non tellus quis urna fringilla suscipit. Donec lacus diam, bibendum ac mauris molestie, condimentum fringilla lacus. Nunc semper congue aliquam. Sed non gravida ligula. Maecenas id tincidunt lorem, eu dignissim ipsum. Nunc nec diam nunc. Pellentesque at orci quis sem tristique pharetra. Nullam in nisl bibendum, tincidunt velit vitae, aliquet mauris.
`

const body = document.querySelector('body');

body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//ToDo: funcion que haga el calculo

const calculateScrollPercentage = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({
    //     scrollTop,
    //     scrollHeight,
    //     clientHeight
    // })

    const result = (scrollTop / (scrollHeight - clientHeight)) * 100;

    return result;
}

//Streams

const scroll$ = fromEvent(document, 'scroll')

const progress$ = scroll$.pipe(
    // map(event => calculateScrollPercentage(event))
    map(calculateScrollPercentage),
    tap( console.log)

)

progress$.subscribe(percetage => {
    progressBar.style.width = `${percetage}%`
})