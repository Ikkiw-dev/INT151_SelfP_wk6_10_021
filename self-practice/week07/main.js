// reference to root node
console.log(window.document)
console.log(document)

//query 1 :
console.log(document.getElementById('intro'))

const htmlElement = document.documentElement
console.log(htmlElement)

// 2
console.log(document.firstChild) //definition : ลูกคนแรก
console.log(document.firstElementChild) //definition : ลูกที่เป็น element child คนแรก

console.log(document.lastChild);
console.log(document.lastElementChild);

//3
console.log(htmlElement)
console.log(htmlElement.parentElement)
console.log(htmlElement.parentNode)


if (htmlElement.parentNode === document) {
    console.log("parent html is a root node")
} //code return true

console.log(document.firstChild.nextSibling)

