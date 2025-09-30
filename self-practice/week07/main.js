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

// get all child nodes under <div id = 'intro'></div>
const divElement = document.getElementById('intro')
const divChildNodes = divElement.childNodes // get all node types children (Node List)
divChildNodes.forEach((child) => console.log(child))

console.log(divChildNodes.length);

const divChildren = divElement.children
console.log(divChildren.length)
// for (let i=0; i < divChildren.length;i++) {
//     console.log(divChildren[i])
// }
Array.from(divChildren).forEach((child) => console.log(child))


const divEle = document.getElementById('intro');
// 1. get all attributes on <div id = 'intro'>
const divAttrs = divEle.attributes
console.log(divAttrs.length) //code returns : 2

for (let i = 0; i < divAttrs.length; i++) {
    const attrName = divAttrs[i].name //get attribute name
    const attrVal = divAttrs[i].value //get attribute value
    console.log(`attribute name : ${attrName}, attribute value : ${attrVal}`)
    console.log(divAttrs[i].ownerElement);
}

console.log(divEle.getAttribute("id")); //find attribute value (id)
console.log(divEle.getAttribute("style")); //find attribute value (style)

//1. Questions : What is the node type of first child of root node?
console.log(document.firstChild.nodeType);

//2. Questions : if node type is an HTML node, display "Hello, HTML node", otherwise, display "Hello, any node"
if (document.firstElementChild.nodeType === Node.ELEMENT_node) {
    console.log("Hello, HTML node")
}
else {
    console.log("Hello, any node")
}

//1. create <p></p>
const pElement = document.createElement("p") //<p></p>
//2. create id="p5"
//sol#1
// const idAttr = document.createAttribute("id")
// idAttr.value = "p5"
//Sol#2
pElement.setAttribute("id", "p5")
//3. binding id="p5" to <p>
// pElement.setAttributeNode(idAttr) //<p id="p5"></p5>
//4. create text value '#5'
//sol#1
// const pText = document.createTextNode("#5")
//sol#2
pElement.textContent = "#5"
//5. binding '#5' to <p>
// pElement.appendChild(pText) //<p id="p5">#5</p5>
//6. binding <p id="p5">#5</p5> to <body>
const body = document.body
body.appendChild(pElement) //<body>...<p id="p5">#5</p5></body
 
