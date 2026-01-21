const nums = [2, 8, 4, 7, 12, 87];


//^ forEach
const evenNumbers = [];
nums.forEach(function(num) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
});
console.log(evenNumbers);

console.log("");
console.log("==== Arrow Function forEach ====");

//note Arrow function forEach
const evenNumbs = [];
nums.forEach(num => {
    if (num % 2 === 0) {
        evenNumbs.push(num);
    }
});
console.log(evenNumbs);

console.log("");
console.log("==== FILTER ====");

//fixed Filter
const evenNums = nums.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNums);

console.log("");
console.log("==== Arrow Function FILTER ====");

//* Filter arrow 
const evenNumeri = nums.filter(num => num % 2 === 0);
console.log(evenNumeri);




// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]