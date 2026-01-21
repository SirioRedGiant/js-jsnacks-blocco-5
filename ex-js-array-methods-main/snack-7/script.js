const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

//^ forEach
let datiStudente;
students.forEach(function(student) {
  if (student.id === 2) {
    datiStudente = student;
  }
});
console.log(datiStudente);

console.log("");
console.log("===== forEach Arrow function =====");

//note Arrow function forEach
let dataStudent;
students.forEach(student => student.id === 2 && (dataStudent = student));
console.log(dataStudent);

console.log("");
console.log("==== FIND ====");

//fixed Find

const studentData = students.find(function(student) {
  return student.id === 2;
})
console.log(studentData);

console.log("");
console.log("==== FIND Arrow function ====");

//* find arrow way

studentDati = students.find(student => student.id === 2);
console.log(studentDati);
















// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }