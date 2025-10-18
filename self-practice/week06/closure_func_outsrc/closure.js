//Closure function (Outsource)
//Purpose : สร้าง private variable ได้ใน JavaScript

//What's Closures?
function outer() {
    const name = 'Pongsatorn';
    return function inner() {
        console.log('Outer name :', name)
    }
}
const res = outer();
res();
//code returns -> Outer name : Pongsatorn

//Core concepts of closure function : มี function จำนวน 2 ตัว อยู่ภายนอก และ ภายใน โดยภายใน
// จะเรียกใช้สิ่งที่ประกาศต่างๆ จากใน function ภายนอก

//Data Privacy (Benefits ของ Closures)
// function times() {
//     let counter = 0;
//     counter += 1;
//     console.log('counter round', counter)
// }
// times(); //counter round 1 -> เพราะมีการ set counter เป็น 0 ทุกครั้งที่เรียก function
// times(); //counter round 1

//unexpected result เพราะเราคาดหวังว่า การเรียก times() แต่ละครั้ง ค่าจะต้องเพิ่มขึ้น

//solution
let counter = 0; //จุดที่ต่างกันเพราะประกาศ​ variable ไว้ที่ภายนอก
function times() {
    counter += 1;
    console.log('Counter:', counter);
}
// times(); //Counter: 1
// times(); //Counter: 2
//but not best practices, เพราะคนอื่นสามารถ edit value ของ variable ที่อยู่นอก function ได้

//ดังนั้น เราจึงใช้ closure มา เพื่อ improve security มากขึ้น โดยการ declare function เพิ่ม
function createTimes() {
    let counteredit = 0;
    return function timesedit() {
    counteredit += 1;
    console.log('Counteredit:', counteredit)
    }
}

let res2 = createTimes();
res2(); //Counteredit: 1
res2(); //Counteredit: 2


//Stateful functions
// function addFive(a) {
//     return a + 5;
// }

// function addten(a) {
//     return a + 10;
// }

function createAdd(a) {
    return function(b) {
        return a + b;
    }
}

const addFive = createAdd(5);
const addten = createAdd(10);

console.log('Add five:', addFive(10)) //Add five: 15
console.log('Add five:', addten(10)) //Add five: 20