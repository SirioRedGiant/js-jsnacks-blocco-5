const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];



//^ Primo
people.forEach(function(person) {
  console.log(person.name);
});
console.log("");

console.log(`Altro modo di svolgerlo:`);
//! Secondo
people.forEach((person) => console.log(person.name));
console.log("");
console.log(`Altro modo di svolgerlo:`);


//note Terzo

const onlyNames = people.map(function (person) {
  return person.name;
});
console.log(onlyNames.join(", "));
console.log("");
console.log(`Altro modo di svolgerlo:`);




//* Quarto

const namesOnly = people.map(person => {
  return person.name;
})
console.log(namesOnly.join(", "));
console.log("");
console.log(`Altro modo di svolgerlo:`);




//? Quinto

const nomeDiOgniPersona = people.map(person => person.name);
console.log(nomeDiOgniPersona.join(", "));

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
