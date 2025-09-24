// problems 1 - 4 questions are generated from ChatGPT

//1. Counter with Step
// Write a function createCounter(step) that uses closure to create a counter which increases by the given step each time it’s called. Return a function to be used for incrementing.
function createCounter (step) {
    let x = 0;
    return function () {
        x += step;
        return x;
    }
}

const counterBy2 = createCounter(2);
console.log(counterBy2()); // 2
console.log(counterBy2()); // 4
console.log(counterBy2()); // 6

const counterBy5 = createCounter(5);
console.log(counterBy5()); // 5
console.log(counterBy5()); // 10

//	2.	Custom Multiplier
// Write a function makeMultiplier(factor) that returns a new function for multiplying numbers by the given factor.
function makeMultiplier (factor) {
    return function (num) {
        let res = num * factor;
        return res;
    }
}

const double = makeMultiplier(2);
console.log(double(7)); // 14

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

//3. Prefix Generator
// Write a function makePrefixer(prefix) that returns a new function to prepend a given prefix to a string.
function makePrefixer (prefix) {
    return function (string) {
        return prefix + string;
    }
}
const addMr = makePrefixer("Mr. ");
console.log(addMr("Smith")); // "Mr. Smith"

const addHashtag = makePrefixer("#");
console.log(addHashtag("Coding")); // "#Coding"

//4. Power Function Generator
// Write a function powerOf(n) that returns a new function which takes a number and raises it to the power of n.
function powerOf (n) {
    return function inner (x) {
        return x ** n;
    }
}
const square = powerOf(2);
console.log(square(5)); // 25

const cube = powerOf(3);
console.log(cube(2)); // 8

//proof the triple layer function accessing
//base
function addsquares (a,b) {
    function suq (x) {
        return x * x;
    }
    return suq(a) + suq(b)
}

//start proofing
function outer () {
    function middle () {
        function inner () {
            return "This is clearing my doubt";
        }
    }
}
let resultproof = outer();
console.log(resultproof); //undefined

//case return by layer
function outer2 () {
    function middle2 () {
        function inner2 () {
            return "This is clearing my doubt by return layer by layer"
        }
        return inner2;
    }
    return middle2();
}

let innerfunc = outer2();
console.log(innerfunc()); // code returns : This is clearing my doubt by return layer by layer