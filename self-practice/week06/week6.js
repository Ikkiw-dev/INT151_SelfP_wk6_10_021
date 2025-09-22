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



