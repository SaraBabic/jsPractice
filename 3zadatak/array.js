let niz = [2, 65, 432];

let newArr = niz.map(function(item, index, arr) {
    return item+2;
});

let newArr2 = [];

niz.forEach(function(item, index, arr) {
    newArr2.push(item+2);
});

// console.log(newArr2);

let newArr3 = [];

for(let i = 0; i< niz.length; i++) {
    newArr3.push(niz[i]+2);
}

// console.log(newArr3);

//every, vraca boolean, true je samo ako je tacan condition za sve elemente

let sarineCipele = [
    {
        godinaProizvodnje: 1999,
    },
    {
        godinaProizvodnje: 2022,
    }
];

let saraCeObuciCipele = sarineCipele.every(function(item, index, arr) {
    return item.godinaProizvodnje > 2020;
});

// console.log(saraCeObuciCipele);

//some, vraca boolean, true je ako je barem jedan condition tacan

let saraCeObuciCipele2 = sarineCipele.some(function(item, index, arr) {
    return item.godinaProizvodnje > 2020;
});

// console.log(saraCeObuciCipele2);


//filter, vraca novi niz, ima ili isto ili manje clanova niza

let sarineFiltriraneCipele = sarineCipele.filter(function(item, index, arr) {
    return item.godinaProizvodnje < 2000;
});

// console.log(sarineFiltriraneCipele);

console.log([1,2].includes(2));