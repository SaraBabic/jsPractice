function bucinaFunkcija(funkcija, parametar) {
    funkcija(parametar);
};

function mojaFunkcija(x) {
    // console.log(x + 'debeli');
};

bucinaFunkcija(mojaFunkcija,2);

let testArray = [4,2,3,4,2,4,4,6];

//pop, izbacuje poslednji element u nizu

const removedElement = testArray.pop();
// console.log(testArray);
// console.log(removedElement);

//push, ubacuje element na kraj

const newLenght = testArray.push(2);
// console.log(testArray);
// console.log(newLenght);

//shift i unshift



//splice, uklanja elemente, od indexa koji smo prosledili i ukupno elemenata koji smo mi definisali od tog indeksa
const indexOfInput = testArray.indexOf(4);
const removedItemsArray = testArray.splice(indexOfInput,1);
// console.log(testArray);
// console.log(removedItemsArray);


let cetvorke = [];

testArray.forEach(function(number, index) {
    if(number === 4) {
        cetvorke.push(index);
    }
});

for(let i = cetvorke.length-1; i > -1; i--) {
    testArray.splice(cetvorke[i], 1);
}

console.log(testArray);

console.log('indeksi:', cetvorke);

let testArray2 = [2,3,5,0,32,0,2,2,3,5,0,0,3,0];

let nizBezNule = testArray2.filter(function(broj) {
    return broj !== 0;
});

console.log(nizBezNule);


