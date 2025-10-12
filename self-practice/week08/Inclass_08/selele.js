//selecting Elements part 
const fnameEle = document.getElementsByName("fname")
console.log(fnameEle.length) //1
fnameEle.forEach((ele) => console.log(ele))


//Manipualting Nodes
//step 1 : getParent
const soupElement = document.getElementById("soup")
//1.2 get reference node - Beef soup
let refnode = null
Array.from(soupElement.children).forEach((element) => {
    if (element.textContent.trim().includes("Beef Soup"))
        refnode = element
})
//1.3 create node <li class = "veagn">Cabbage Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class","vegan")
//1.4 insert Node before (newNode, refNode)
soupElement.insertBefore(newNode, refnode);

//2. remove Vegetable soup
//2.1 get its parent
const soupel = document.getElementById("soup")
//2.2 get reference node -Beef soup
let refNoderm = null;
Array.from(soupel.children).forEach((ele) => {
    if (ele.textContent.trim() === "Vegetable Soup")
        refNoderm = ele;
})
//2.3 remove
soupel.removeChild(refNoderm);

//3. replace Beef soup with pork soup
const pb = document.getElementById("soup")
//3.2 get referencr node -Beef soup
let refNodepb = null;
Array.from(pb.children).forEach((pbele) => {
    if (pb.textContent.trim() === "Vegetable Soup")
        refNodepb = pbele;
})
//3.3 Create new node
const newNodepb = document.createElement('li')
newNodepb.textContent = "Pork Soup"
newNodepb.setAttribute = ("class","meat")