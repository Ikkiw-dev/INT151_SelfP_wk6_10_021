function calculate (nums, compute) {
    return compute(nums)
}
function sum (elements) {
    return elements.reduce((total, current) => total + current)
}
function max(elements) {
    return Math.max(...elements)
}
function min(elements) {
    return Math.min(...elements)
}
function sort(elements) {
    return elements.sort((a, b) => a - b)
}

console.log(calculate([1,3,5,7], sum))
console.log(calculate([100,3,5,7], max))
console.log(calculate([10,2,0,7], min))
console.log(calculate([10,2,0,7], sort))


function idGenerator () {
    let id = 0;
    return function () {
        id += 1;
        return id;
    }
}

const idGen = idGenerator();

console.log(idGen());
console.log(idGen());
console.log(idGen());

function dynamicplus (a) {
    function innerfunc (b) {
        return a + b;
    }
    return innerfunc
}

const addeleven = dynamicplus(11);
console.log(addeleven(3));
