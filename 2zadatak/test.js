
//primitive types:
//number
//string
//null
//undefined
//boolean

//referenced types:
//object
//array


// typeof x
// Array.isArray(x)

let x = [];

// if(Array.isArray(x)) {
//     console.log(typeof x);
//     //typeof nam vraca uvek string!!! a ne vrednost 
// }

function createPerson(personData) {
    //ova funkcija treba da vrati objekat koji ima 3 propertija 
    //podatci ce biti izvuceni iz prosledjenog argumenta koji ce biti niz
   let person = {};
   if(personData[0] && personData[1]) {
    person[personData[0]] = personData[1];
   }
//    if(personData[1]) {
//     person.age = personData[1];
//    }
//    if(personData[2]) {
//     person.job = personData[2];
//    }
    return person;
}

let p1 = createPerson(['fistName', 'Buca']);
console.log(p1);

let p2 = {name: 'Sara'};
console.log(p2);

let p3 = {};
p3.name = 'sara';

console.log(p3);

let p4 = {};
let propName = 'name';
let propValue = 'sara';
p4[propName] = propValue;
console.log(p4);
console.log(p4.name);
console.log(p4[propName]);


let arrayWithTwoArrays = [
    [2,3,4],
    ['s','b']
];

let arrayWithObjects = [
    {name: 'sara', age: 21},
    {name: 'Buco', job: 'musician'}
];


//forEach prima moju funkciju koju ja napisem i iterira kroz niz

//map isto prima funkciju i vraca novi niz koji ce imati identican broj elemenata kao primeljen niz
// daje nam sansu da promenimo svaki element
let newArray = arrayWithObjects.map(function(item, index, niz) {
    item.name = 'cica';
    return item;
});

console.log(newArray);
