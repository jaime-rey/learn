/**
 * Created by jaime on 11/01/2016.
 */
"use strict"

// es6 feature: block-scoped "let" declaration
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
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

let car1 = new Car();
let car2 = new Car();

console.log( car1 instanceof Car );

let arr = [5, 7, 2, 4];
let sum = arr.reduce((a, x) => a *= x);
console.log(sum);

let words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
let alphabetical = words.reduce((a, x) => {
    if(!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a; }, {});
console.log(alphabetical);