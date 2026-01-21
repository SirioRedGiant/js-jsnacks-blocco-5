const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

//^ forEach
const zucchineLunghe = [];
const zucchineCorte = [];
zucchine.forEach(function(zucchina) {
  if (zucchina.length >= 15) {
    zucchineLunghe.push(zucchina);
  } else {
    zucchineCorte.push(zucchina);
  }
});
console.log(zucchineLunghe);
console.log(zucchineCorte);

console.log("");
console.log("==== Arrow FUnction ====");

//note arrow function di forEach
const longZucchinis = [];
const shortZucchinis = [];
zucchine.forEach(zucchina => (zucchina.length >= 15 ? longZucchinis.push(zucchina) : shortZucchinis.push(zucchina)));
console.log(longZucchinis);
console.log(shortZucchinis);



console.log("");
console.log("==== FILTER ====");

//fixed Filter
const overSized = zucchine.filter(function(zucchina) {
  return zucchina.length >= 15;
});

const fittedSized = zucchine.filter(function(zucchina) {
  return zucchina.length < 15;
})
console.log(overSized);
console.log(fittedSized);

console.log("");
console.log("==== Filter Arrow Function ====");

//* Filter Arrow function
const bigZucchini = zucchine.filter(zucchina => zucchina.length >= 15);
const smallZucchini = zucchine.filter(zucchina => zucchina.length < 15);
console.log(bigZucchini);
console.log(smallZucchini);









// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.