const numbers = [2, 8, 4, 7, 2, 87];

//^ First try

const newArrIncreasedByOne = [];
numbers.forEach(function(n) {
    newArrIncreasedByOne.push(n + 1)
});
console.log(newArrIncreasedByOne);

console.log("");
console.log("===== forEach con arrow-function  =====");

//note Second arrow-function
const newArrIncreasedByOneArrow = [];
numbers.forEach(n => newArrIncreasedByOneArrow.push(n + 1));
console.log(newArrIncreasedByOneArrow);

console.log("");
console.log("===== Metodo MAP =====");

//todo Third
const arrIncreasedByOneCreator = numbers.map(function(n) {
    return n + 1;
});
console.log(arrIncreasedByOneCreator);

console.log("");
console.log("===== Map arrow-function =====");

//?
const IncreasedByOnearr = numbers.map(n => n + 1);
console.log(IncreasedByOnearr);

console.log("");
console.log("------------------------------------------------");

console.log("Mission Completed...");



// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]