// 1. get all child nodes under <ul id="appetizer">
const appetid = document.querySelector("#appetizer")
console.log(appetid)
//get childNodes, return Node List (array - like implement forEach function)
//return single element that matches with CSS selector

//New command for querying node
const docappet = document.getElementById("soup")
console.log(docappet)
// In case of not find id value in document, code returns null

//test
const meatElement = document.getElementById(".meat")
console.log(meatElement)
//code return null because getElementbyID return only firstElement
//solution
const meat2 = document.querySelector(".meat")
console.log(meat2) //code returns : Chicken Wings

//Overall elements
const allmeat = document.querySelectorAll(".meat") //CSS selector
console.log(allmeat); //return node list : array like
//length of this log = 4

//additional
allmeat.forEach((ele) => console.log(ele)) // code returns : list by list (all element in meat class)

//ใน case ที่เราไม่รู้ว่ามันอยู่ตรงไหนของเอกสาร
//2. find meat element that has a tesxt value equal soup
const meatsoup = Array.from(allmeat)
meatsoup.forEach((item) => {
    if (item.textContent.toLowerCase().includes("soup")) {
        console.log("Soup item : ", item.textContent)
    }
})

//sol 2 :
const res = []
meatsoup.forEach((item) => {
    if (item.textContent.toLowerCase().includes("soup")) {
        res.push(item)
    }
})
console.log(res); //return Nodelist array-like

//3. go to the first child element nodes under <ul id = "soup"> and display all siblings nodes
// examples result : 
const elesoup = document.querySelector("#soup")
console.log(elesoup)
const firstch = elesoup.firstChild;
console.log("FC", firstch)

let sibling = firstch.nextElementSibling;

while (sibling) {
    console.log(sibling);
    sibling = sibling.nextElementSibling;
}
//try to using loop implementations on this code also

//sol 2
const ulele = document.querySelector("#soup")
let curnode = ulele.children[0]

while (curnode !== null) {
    curnode = curnode.nextElementSibling;
    console.log(curnode)
}


