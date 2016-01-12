/**
 * Created by jaime on 11/01/2016.
 */
// es6 feature: block-scoped "let" declaration
"use strict";

let sentences = [{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
    // es6 feature: template strings
    console.log(`${ subject } ${ verb } ${ object }`);
}
// es6 feature: for..of
for (let s of sentences) {
    say(s);
}

class Car {
    constructor() {
    }
}

let car1 = new Car();
let car2 = new Car();

console.log( car1 instanceof Car );