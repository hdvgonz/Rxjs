import { distinctUntilKeyChanged, from, of } from "rxjs";




const heroes = [
    { name: 'batman' },
    { name: 'Xmen' },
    { name: 'Xmen' },
    { name: 'superman' },
    { name: 'spiderman' },
    { name: 'batman' },
    { name: 'batman' },
    { name: 'spiderman' },
];

from(heroes).pipe(
   distinctUntilKeyChanged('name')
).subscribe(console.log)

const obj$ = of(
    { age: 4, name: 'Foo1' },
    { age: 7, name: 'Bar' },
    { age: 5, name: 'Foo2' },
    { age: 6, name: 'Foo3' }
)

// obj$.pipe(
//     distinctUntilKeyChanged('name', (x, y) => x.substring(0,3) === y.substring(0,3))
// ).subscribe(console.log)